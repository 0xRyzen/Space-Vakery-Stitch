import styled from 'styled-components';

const StyledBadge = styled.span<{ $variant: 'new' | 'sale' | 'neutral' }>`
  padding: 0.25rem 0.75rem;
  border-radius: 99px;
  font-size: 0.7rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  backdrop-filter: blur(4px);

  ${props => {
        switch (props.$variant) {
            case 'new':
                return `
          background: rgba(168, 195, 160, 0.3); // Pistachio tint
          color: #1C1F2A;
          border: 1px solid rgba(168, 195, 160, 0.4);
        `;
            case 'sale':
                return `
          background: rgba(231, 183, 178, 0.3); // Blush tint
          color: #1C1F2A;
          border: 1px solid rgba(231, 183, 178, 0.4);
        `;
            default:
                return `
          background: rgba(255, 255, 255, 0.4);
          color: #222638;
          border: 1px solid rgba(255, 255, 255, 0.5);
        `;
        }
    }}
`;

export const Badge = ({ label, variant = 'neutral' }: { label: string, variant?: 'new' | 'sale' | 'neutral' }) => {
    return <StyledBadge $variant={variant}>{label}</StyledBadge>;
};
