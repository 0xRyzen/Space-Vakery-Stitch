import styled from 'styled-components';
import type { HTMLAttributes } from 'react';

interface GlassPanelProps extends HTMLAttributes<HTMLDivElement> {
    opacity?: number;
    blur?: number;
    variant?: 'light' | 'frosted' | 'tinted-oat' | 'tinted-cream';
    padding?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
}

const paddingSizes = {
    none: '0',
    sm: '1rem',
    md: '1.5rem',
    lg: '2rem',
    xl: '3rem',
};

const StyledPanel = styled.section<{ 
    $opacity: number; 
    $blur: number; 
    $variant: string;
    $padding: string;
}>`
  ${props => props.theme.glass.surface(props.$opacity, props.$blur)}
  border-radius: 24px;
  padding: ${props => props.$padding};
  transition: box-shadow 0.3s ease;
  
  ${props => {
    switch (props.$variant) {
        case 'frosted':
            return `
                background: rgba(255, 255, 255, 0.25);
                border-color: rgba(255, 255, 255, 0.35);
                box-shadow: 0 8px 32px rgba(0, 0, 0, 0.06);
            `;
        case 'tinted-oat':
            return `
                background: rgba(242, 233, 220, 0.45);
                border-color: rgba(242, 233, 220, 0.4);
            `;
        case 'tinted-cream':
            return `
                background: rgba(250, 246, 240, 0.5);
                border-color: rgba(250, 246, 240, 0.5);
            `;
        default: // light
            return `
                background: rgba(255, 255, 255, 0.2);
                border-color: rgba(255, 255, 255, 0.25);
            `;
    }
  }}

  /* Mobile responsiveness */
  @media (max-width: 768px) {
    border-radius: 16px;
    padding: ${props => {
        const size = props.$padding;
        // Reduce padding on mobile
        if (size === '3rem') return '2rem';
        if (size === '2rem') return '1.5rem';
        if (size === '1.5rem') return '1rem';
        return size;
    }};
  }
`;

export const GlassPanel = ({
    children,
    opacity = 0.2,
    blur = 14,
    variant = 'light',
    padding = 'md',
    ...props
}: GlassPanelProps) => {
    return (
        <StyledPanel 
            $opacity={opacity} 
            $blur={blur} 
            $variant={variant}
            $padding={paddingSizes[padding]}
            {...props}
        >
            {children}
        </StyledPanel>
    );
};
