import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import type { Product } from '../../data/products';
import { useCartStore } from '../../store/cart.store';

const CardWrapper = styled.div`
    cursor: pointer;
    
    &:hover .product-image {
        transform: scale(1.05);
    }
    
    &:hover .quick-add {
        transform: translateY(0);
        opacity: 1;
    }
`;

const ImageContainer = styled.div`
    position: relative;
    overflow: hidden;
    border-radius: 20px;
    margin-bottom: 1rem;
    aspect-ratio: 4/5;
    ${props => props.theme.glass.surface(0.35, 8)}
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.03);
    
    @media (max-width: 640px) {
        border-radius: 16px;
    }
`;

const ProductImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    transition: transform 0.5s ease;
`;

const NewBadge = styled.span`
    position: absolute;
    top: 0.75rem;
    left: 0.75rem;
    background: ${props => props.theme.colors.pistachio};
    color: white;
    font-size: 0.625rem;
    font-weight: 700;
    padding: 0.25rem 0.5rem;
    border-radius: 4px;
    z-index: 10;
    text-transform: uppercase;
    letter-spacing: 0.05em;
`;

const QuickAddButton = styled.button`
    position: absolute;
    bottom: 1rem;
    right: 1rem;
    width: 2.5rem;
    height: 2.5rem;
    background: rgba(255, 255, 255, 0.9);
    backdrop-filter: blur(8px);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    transform: translateY(3.5rem);
    opacity: 0;
    transition: transform 0.3s ease, opacity 0.3s ease, background 0.2s ease;
    border: 1px solid rgba(255, 255, 255, 0.5);
    
    &:hover {
        background: ${props => props.theme.colors.pistachio};
        color: white;
    }
    
    @media (max-width: 768px) {
        transform: translateY(0);
        opacity: 1;
    }
`;

const ProductTitle = styled.h3`
    font-family: 'Cormorant Garamond', serif;
    font-size: 1.25rem;
    color: ${props => props.theme.colors.charcoal};
    margin-bottom: 0.25rem;
`;

const ProductMeta = styled.p`
    font-size: 0.75rem;
    opacity: 0.6;
    margin-bottom: 0.5rem;
    color: ${props => props.theme.colors.midnight};
`;

const ProductPrice = styled.p`
    font-weight: 600;
    font-size: 0.875rem;
    color: ${props => props.theme.colors.charcoal};
`;

export const ProductCard = ({ product }: { product: Product }) => {
    const addItem = useCartStore(state => state.addItem);
    const navigate = useNavigate();

    const handleQuickAdd = (e: React.MouseEvent) => {
        e.stopPropagation();
        addItem({
            id: `${product.id}-${Date.now()}`,
            productId: product.id,
            skuId: product.id,
            name: product.name,
            price: product.price,
            qty: 1,
            image: product.image
        });
    };

    return (
        <CardWrapper className="group" onClick={() => navigate(`/product/${product.slug}`)}>
            <ImageContainer>
                {product.isNew && <NewBadge>New</NewBadge>}
                
                <ProductImage 
                    className="product-image"
                    alt={product.name}
                    src={product.image}
                    loading="lazy"
                />
                
                <QuickAddButton 
                    className="quick-add"
                    onClick={handleQuickAdd}
                    aria-label={`Add ${product.name} to cart`}
                >
                    <span className="material-symbols-outlined text-sm">add</span>
                </QuickAddButton>
            </ImageContainer>
            
            <ProductTitle>{product.name}</ProductTitle>
            <ProductMeta>
                {product.potency ? product.potency : 'Delicious Edible'} 
            </ProductMeta>
            <ProductPrice>${product.price.toFixed(2)}</ProductPrice>
        </CardWrapper>
    );
};
