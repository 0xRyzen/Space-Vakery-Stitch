import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { products } from '../data/products';
import { GlassButton } from '../components/ui/GlassButton';
import { GlassCard } from '../components/ui/GlassCard';
import { Tabs } from '../components/ui/Tabs';
import { NutritionFacts } from '../components/commerce/NutritionFacts';
import { useCartStore } from '../store/cart.store';
import { useState } from 'react';
import { Minus, Plus, Star } from 'lucide-react';

const PageContainer = styled.div`
  padding: 2rem 0;
  
  @media (min-width: 768px) {
    padding: 4rem 0;
  }
`;

const ImageGallery = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  .main-image {
    border-radius: 16px;
    overflow: hidden;
    background: #f0f0f0;
    aspect-ratio: 1;
    position: relative;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .thumbnails {
    display: flex;
    gap: 0.5rem;

    img {
      width: 4rem;
      height: 4rem;
      object-fit: cover;
      border-radius: 8px;
      cursor: pointer;
      border: 2px solid transparent;

      &:hover,
      &.active {
        border-color: ${props => props.theme.colors.pistachio};
      }
    }
  }
`;

import { Meter } from '../components/ui/Meter';

const ProfileGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  margin-top: 2rem;
  
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const TagGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
`;

const Tag = styled.span`
  background: white;
  border: 1px solid rgba(0,0,0,0.1);
  padding: 0.4rem 0.8rem;
  border-radius: 50px;
  font-size: 0.75rem;
  font-weight: 500;
  color: ${props => props.theme.colors.charcoal};
`;

export const ProductDetail = () => {
    const { slug } = useParams();
    const product = products.find(p => p.slug === slug);
    const addItem = useCartStore(state => state.addItem);
    const toggleCart = useCartStore(state => state.toggleCart);
    const [qty, setQty] = useState(1);
    const [selectedImage, setSelectedImage] = useState(product?.image || '');

    if (!product) return <div className="p-20 text-center">Product not found</div>;

    const handleAddToCart = () => {
        const uniqueId = `${product.id}-${Date.now()}`; // Generate unique ID during the event
        addItem({
            id: uniqueId,
            productId: product.id,
            skuId: product.id,
            name: product.name,
            price: product.price,
            qty: qty,
            image: product.image
        });
        toggleCart(); // Open cart drawer
    };

    const tabs = [
        {
            label: 'Description',
            content: <p className="leading-relaxed opacity-80">{product.description} Crafted with small-batch artistry and infused with premium full-spectrum cannabis oil. Each batch is tested for potency and purity to ensure a consistent, cosmic experience.</p>
        },
        {
            label: 'Details',
            content: (
                <ul className="list-disc pl-5 opacity-80 space-y-2">
                    <li>Potency: {product.potency}</li>
                    <li>Type: {product.type}</li>
                    <li>Lab Tested</li>
                    <li>Organic Ingredients</li>
                </ul>
            )
        }
    ];

    if (product.type !== 'edible' && (product.effects || product.terpenes)) {
        tabs.push({
            label: 'Profile',
            content: (
                <ProfileGrid>
                    <div>
                        <h4 className="text-xs uppercase tracking-widest font-bold mb-4 opacity-40">Meters</h4>
                        <Meter label="Potency" lowLabel="Low" highLabel="High" value={product.potencyLevel || 50} />
                        <Meter label="Feel" lowLabel="Calming" highLabel="Energizing" value={product.feelLevel || 50} color="#E6A57E" />
                    </div>
                    <div>
                        <h4 className="text-xs uppercase tracking-widest font-bold mb-4 opacity-40">Characteristics</h4>
                        {product.effects && (
                            <>
                                <div className="text-[10px] uppercase font-bold mb-2 opacity-50">Top Effects</div>
                                <TagGrid>
                                    {product.effects.map(e => <Tag key={e}>{e}</Tag>)}
                                </TagGrid>
                            </>
                        )}
                        {product.terpenes && (
                            <>
                                <div className="text-[10px] uppercase font-bold mb-2 opacity-50">Terpenes</div>
                                <TagGrid>
                                    {product.terpenes.map(t => <Tag key={t}>{t}</Tag>)}
                                </TagGrid>
                            </>
                        )}
                    </div>
                </ProfileGrid>
            )
        });
    }

    if (product.type === 'edible') {
        tabs.push({
            label: 'Nutrition',
            content: <NutritionFacts />
        });
    }

    return (
        <PageContainer>
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 mb-12 md:mb-20">
                    {/* Left: Gallery */}
                    <div className="space-y-4">
                        <GlassCard opacity={0.1} className="p-3 md:p-4">
                            <ImageGallery>
                                <div className="main-image">
                                    <img src={selectedImage} alt={product.name} />
                                </div>
                                <div className="thumbnails">
                                    {[product.image, ...(product.additionalImages || [])].map((img, index) => (
                                        <img
                                            key={index}
                                            src={img}
                                            alt={`${product.name} thumbnail ${index + 1}`}
                                            className={selectedImage === img ? 'active' : ''}
                                            onClick={() => setSelectedImage(img)}
                                        />
                                    ))}
                                </div>
                            </ImageGallery>
                        </GlassCard>
                    </div>

                    {/* Right: Info */}
                    <GlassCard variant="tinted-oat" className="flex flex-col justify-center h-full">
                        <div className="flex items-center gap-2 mb-4">
                            <span className="text-xs font-bold tracking-widest uppercase text-pistachio bg-pistachio/10 px-2 py-1 rounded">
                                {product.type}
                            </span>
                            <div className="flex items-center gap-1 text-yellow-500 text-sm">
                                <Star size={14} fill="currentColor" />
                                <span className="text-charcoal">{product.rating}</span>
                            </div>
                        </div>

                        <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl text-charcoal mb-3 md:mb-4">{product.name}</h1>
                        <p className="text-lg sm:text-xl text-midnight font-serif italic mb-6 md:mb-8 opacity-70">{product.description}</p>

                        <p className="text-2xl sm:text-3xl font-medium text-charcoal mb-6 md:mb-8">${product.price.toFixed(2)}</p>

                        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-6 mb-6 md:mb-8">
                            <div className="flex items-center gap-4 bg-white/50 rounded-full px-4 py-3 border border-white/40 justify-center sm:justify-start">
                                <button onClick={() => setQty(Math.max(1, qty - 1))} className="opacity-50 hover:opacity-100">
                                    <Minus size={18} />
                                </button>
                                <span className="text-lg w-8 text-center font-medium">{qty}</span>
                                <button onClick={() => setQty(qty + 1)} className="opacity-50 hover:opacity-100">
                                    <Plus size={18} />
                                </button>
                            </div>
                            <GlassButton size="lg" onClick={handleAddToCart} className="flex-1 w-full sm:w-auto">
                                Add to Cart
                            </GlassButton>
                        </div>

                        <p className="text-xs opacity-50 text-center md:text-left">
                            Free shipping on orders over $75. Discrete packaging.
                        </p>
                    </GlassCard>
                </div>
                {/* Tabs Section */}
                <div className="max-w-4xl mx-auto">
                    <Tabs items={tabs} />
                </div>
            </div>
        </PageContainer>
    );
};
