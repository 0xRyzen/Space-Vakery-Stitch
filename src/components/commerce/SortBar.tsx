import styled from 'styled-components';
import { GlassCard } from '../ui/GlassCard';

const Bar = styled(GlassCard)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 1.5rem;
  margin-bottom: 2rem;
`;

const Select = styled.select`
  background: transparent;
  border: none;
  font-family: 'Inter', sans-serif;
  color: ${props => props.theme.colors.charcoal};
  font-weight: 500;
  cursor: pointer;
  outline: none;
`;

export const SortBar = ({
    count,
    sortBy,
    onSortChange
}: {
    count: number,
    sortBy: string,
    onSortChange: (val: string) => void
}) => {
    return (
        <Bar opacity={0.1} blur={8} className="rounded-xl">
            <span className="text-sm font-medium opacity-60">{count} Products</span>

            <div className="flex items-center gap-3">
                <label className="text-sm opacity-60">Sort by:</label>
                <Select value={sortBy} onChange={(e) => onSortChange(e.target.value)}>
                    <option value="featured">Featured</option>
                    <option value="rating">Top Rated</option>
                    <option value="price-low">Price: Low to High</option>
                    <option value="price-high">Price: High to Low</option>
                </Select>
            </div>
        </Bar>
    );
};
