import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import type { Category } from '../../data/categories';
import { GlassCard } from '../ui/GlassCard';

const ImageWrapper = styled.div`
  width: 100%;
  aspect-ratio: 4/5;
  border-radius: 12px;
  overflow: hidden;
  margin-bottom: 1rem;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
  }
`;

const StyledCategoryCard = styled(GlassCard)`
  text-align: center;
  &:hover img {
    transform: scale(1.05);
  }
`;

export const CategoryCard = ({ category }: { category: Category }) => {
  const navigate = useNavigate();

  return (
    <StyledCategoryCard
      onClick={() => navigate(`/shop/${category.slug}`)}
      className="cursor-pointer h-full transition-transform hover:-translate-y-1"
      opacity={0.1}
    >
      <ImageWrapper>
        <img src={category.image} alt={category.name} loading="lazy" />
      </ImageWrapper>
      <h3 className="text-2xl font-serif text-charcoal mb-2">{category.name}</h3>
      <p className="text-sm text-gray-500 opacity-80 max-w-[80%] mx-auto leading-relaxed">
        {category.description}
      </p>
    </StyledCategoryCard>
  );
};
