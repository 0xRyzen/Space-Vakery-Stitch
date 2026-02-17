import styled from 'styled-components';
import { GlassCard } from '../ui/GlassCard';

const Section = styled.div`
  margin-bottom: 1.5rem;
  
  h4 {
    font-family: 'Inter', sans-serif;
    font-weight: 600;
    margin-bottom: 0.75rem;
    font-size: 0.875rem;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    color: ${props => props.theme.colors.charcoal};
  }
  
  @media (max-width: 1024px) {
    margin-bottom: 1.25rem;
  }
`;

const FilterOption = styled.label`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 0.75rem;
  cursor: pointer;
  font-size: 0.95rem;
  color: ${props => props.theme.colors.midnight};
  opacity: 0.8;
  transition: opacity 0.2s;

  &:hover {
    opacity: 1;
  }

  input[type="checkbox"] {
    accent-color: ${props => props.theme.colors.pistachio};
    width: 1.25rem;
    height: 1.25rem;
  }
`;

export const FilterPanel = () => {
    return (
        <GlassCard className="lg:sticky lg:top-24">
            <Section>
                <h4>Price Range</h4>
                <div className="flex flex-col gap-2">
                    <FilterOption>
                        <input type="checkbox" /> Under $25
                    </FilterOption>
                    <FilterOption>
                        <input type="checkbox" /> $25 - $50
                    </FilterOption>
                    <FilterOption>
                        <input type="checkbox" /> $50 - $100
                    </FilterOption>
                    <FilterOption>
                        <input type="checkbox" /> $100+
                    </FilterOption>
                </div>
            </Section>

            <Section>
                <h4>Potency</h4>
                <div className="flex flex-col gap-2">
                    <FilterOption>
                        <input type="checkbox" /> Low (2-5mg)
                    </FilterOption>
                    <FilterOption>
                        <input type="checkbox" /> Medium (5-10mg)
                    </FilterOption>
                    <FilterOption>
                        <input type="checkbox" /> High (10mg+)
                    </FilterOption>
                </div>
            </Section>

            <Section>
                <h4>Dietary</h4>
                <div className="flex flex-col gap-2">
                    <FilterOption>
                        <input type="checkbox" /> Vegan
                    </FilterOption>
                    <FilterOption>
                        <input type="checkbox" /> Gluten-Free
                    </FilterOption>
                    <FilterOption>
                        <input type="checkbox" /> Sugar-Free
                    </FilterOption>
                </div>
            </Section>
        </GlassCard>
    );
};
