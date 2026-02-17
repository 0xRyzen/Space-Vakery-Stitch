import styled from 'styled-components';
import { GlassCard } from '../ui/GlassCard';
import type { Product } from '../../data/products';
import { useNavigate } from 'react-router-dom';

const ImageContainer = styled.div`
  position: absolute;
  inset: 0;
  z-index: 0;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.6s ease-out;
  }
`;

const ContentOverlay = styled.div`
  position: absolute;
  inset: 0;
  z-index: 10;
  background: linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.2) 50%, rgba(0,0,0,0.1) 100%);
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 1.5rem;
  color: white;
  transition: all 0.3s ease;
`;

const CardWrapper = styled(GlassCard)`
  position: relative;
  height: 400px;
  padding: 0;
  border: none;
  overflow: hidden;
  cursor: pointer;

  &:hover ${ImageContainer} img {
    transform: scale(1.05);
  }
`;

export const ProductOverlayCard = ({ product }: { product: Product }) => {
    const navigate = useNavigate();
    
    // Fallback image if product image fails or is missing (using the mascot as requested for generic placeholders, 
    // but product.image usually points to something. If it defaults to mascot, that's fine)
    
    return (
        <CardWrapper 
            className="group"
            onClick={() => navigate(`/product/${product.slug}`)}
            variant="base"
            opacity={0} // rely on image mostly, glass on top maybe? No, glass wrapper styles border/radius
        >
            <ImageContainer>
                <img src={product.image} alt={product.name} loading="lazy" />
            </ImageContainer>
            
            <ContentOverlay>
                <div className="transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    <span className="text-xs font-bold uppercase tracking-widest text-pistachio mb-1 block">
                        {product.category}
                    </span>
                    <h3 className="font-display text-2xl mb-1">{product.name}</h3>
                    <div className="flex justify-between items-end mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                         <span className="text-lg">${product.price.toFixed(2)}</span>
                         <span className="text-xs uppercase border-b border-white pb-0.5">View Details</span>
                    </div>
                </div>
            </ContentOverlay>
        </CardWrapper>
    );
};
