import styled from 'styled-components';

const Bar = styled.div`
  background: ${props => props.theme.colors.charcoal};
  color: ${props => props.theme.colors.cream};
  text-align: center;
  padding: 0.5rem;
  font-size: 0.75rem;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  font-weight: 500;
`;

export const UtilityBar = () => {
    return (
        <Bar>
            Free shipping over $75 · Vegan · Plastic-free packaging
        </Bar>
    );
};
