import styled from 'styled-components';
import type { Product } from '../../data/products';
import { GlassCard } from '../ui/GlassCard';
import { GlassButton } from '../ui/GlassButton';
import { Badge } from '../ui/Badge';
import { useCartStore } from '../../store/cart.store';
import { useNavigate } from 'react-router-dom';

const CardImage = styled.div`
  aspect-ratio: 1;
  width: 100%;
  border-radius: 12px;
  overflow: hidden;
  margin-bottom: 1rem;
  position: relative;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.4s ease;
  }

  &:hover img {
    transform: scale(1.05);
  }
`;

const QuickAddOverlay = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 1rem;
  background: linear-gradient(to top, rgba(0,0,0,0.6), transparent);
  opacity: 0;
  transform: translateY(10px);
  transition: all 0.2s ease;
  display: flex;
  justify-content: center;

  ${CardImage}:hover & {
    opacity: 1;
    transform: translateY(0);
  }
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
        <GlassCard
            onClick={() => navigate(`/product/${product.slug}`)}
            className="cursor-pointer group flex flex-col h-full"
        >
            <CardImage>
                <img src={product.image} alt={product.name} loading="lazy" />
                {product.isNew && (
                    <div className="absolute top-2 left-2">
                        <Badge label="New" variant="new" />
                    </div>
                )}
                <QuickAddOverlay>
                    <GlassButton size="sm" onClick={handleQuickAdd} variant="secondary">
                        Quick Add
                    </GlassButton>
                </QuickAddOverlay>
            </CardImage>

            <div className="flex-1 flex flex-col">
                <h3 className="text-xl font-serif text-charcoal mb-1">{product.name}</h3>
                <p className="text-sm text-gray-500 mb-2 truncate">{product.description}</p>

                <div className="mt-auto flex items-center justify-between">
                    <span className="font-semibold text-charcoal">${product.price.toFixed(2)}</span>
                    <span className="text-xs font-medium text-pistachio bg-pistachio/10 px-2 py-1 rounded-full">
                        {product.potency}
                    </span>
                </div>
            </div>
        </GlassCard>
    );
};
