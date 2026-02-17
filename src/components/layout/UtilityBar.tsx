import styled from 'styled-components';

const Bar = styled.div`
  background: ${props => props.theme.colors?.charcoal || '#1C1F2A'};
  color: ${props => props.theme.colors?.cream || '#FAF6F0'};
  text-align: center;
  padding: 0.5rem;
  font-size: 0.75rem;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  font-weight: 500;
  margin: 0; /* Ensure no gap above or below the UtilityBar */
`;

export const UtilityBar = () => {
    return (
        <Bar>
            Free shipping over $75 · Vegan · Plastic-free packaging
        </Bar>
    );
};
