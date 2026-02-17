import styled from 'styled-components';
import type { HTMLAttributes } from 'react';

interface GlassCardProps extends HTMLAttributes<HTMLDivElement> {
    opacity?: number;
    blur?: number;
    variant?: 'base' | 'tinted-oat' | 'tinted-pistachio' | 'tinted-blush' | 'tinted-apricot' | 'tinted-plum';
}

const StyledCard = styled.div<{ $opacity: number; $blur: number; $variant: string }>`
  ${props => props.theme.glass.surface(props.$opacity, props.$blur)}
  border-radius: 20px;
  padding: 1.5rem;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  
  ${props => {
        switch (props.$variant) {
            case 'tinted-oat':
                return `background: rgba(242, 233, 220, 0.4); border-color: rgba(242, 233, 220, 0.3);`;
            case 'tinted-pistachio':
                return `background: rgba(168, 195, 160, 0.25); border-color: rgba(168, 195, 160, 0.3);`;
            case 'tinted-blush':
                return `background: rgba(231, 183, 178, 0.25); border-color: rgba(231, 183, 178, 0.3);`;
            case 'tinted-apricot':
                return `background: rgba(230, 165, 126, 0.2); border-color: rgba(230, 165, 126, 0.25);`;
            case 'tinted-plum':
                return `background: rgba(94, 75, 110, 0.15); border-color: rgba(94, 75, 110, 0.2);`;
            default: // base
                return ``;
        }
    }}

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 40px rgba(0, 0, 0, 0.08); // softer lift
  }
  
  /* Mobile responsiveness */
  @media (max-width: 768px) {
    border-radius: 16px;
    padding: 1.25rem;
    
    &:hover {
      transform: translateY(-2px);
    }
  }
`;

export const GlassCard = ({
    children,
    opacity = 0.15,
    blur = 12,
    variant = 'base',
    ...props
}: GlassCardProps) => {
    return (
        <StyledCard $opacity={opacity} $blur={blur} $variant={variant} {...props}>
            {children}
        </StyledCard>
    );
};
