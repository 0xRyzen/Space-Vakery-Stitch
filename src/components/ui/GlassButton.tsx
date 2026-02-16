import styled from 'styled-components';
import type { ButtonHTMLAttributes } from 'react';

interface GlassButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
}

const StyledButton = styled.button<{ $variant: string; $size: string }>`
  border: none;
  border-radius: 99px; // Pill shape
  cursor: pointer;
  font-family: 'Inter', sans-serif;
  font-weight: 500;
  transition: all 0.2s ease-in-out;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  backdrop-filter: blur(8px);

  /* Sizes */
  ${props => props.$size === 'sm' && `padding: 0.5rem 1rem; font-size: 0.875rem;`}
  ${props => props.$size === 'md' && `padding: 0.75rem 1.5rem; font-size: 1rem;`}
  ${props => props.$size === 'lg' && `padding: 1rem 2rem; font-size: 1.125rem;`}

  /* Variants */
  ${props => {
    switch (props.$variant) {
      case 'primary': // Charcoal/Midnight with glass feel
        return `
          background: rgba(34, 38, 56, 0.9);
          color: #FAF6F0;
          box-shadow: 0 4px 15px rgba(34, 38, 56, 0.2);
          &:hover {
            background: rgba(34, 38, 56, 1);
            transform: translateY(-2px);
            box-shadow: 0 6px 20px rgba(34, 38, 56, 0.3);
          }
        `;
      case 'secondary': // Creamy Glass
        return `
          background: rgba(255, 255, 255, 0.4);
          color: #222638;
          border: 1px solid rgba(255, 255, 255, 0.6);
          &:hover {
            background: rgba(255, 255, 255, 0.6);
            transform: translateY(-2px);
          }
        `;
      case 'ghost':
        return `
          background: transparent;
          color: #222638;
          &:hover {
            background: rgba(168, 195, 160, 0.1); // subtle pistachio hover
          }
        `;
      default: return ``;
    }
  }}

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none !important;
  }
`;

export const GlassButton = ({
  children,
  variant = 'primary',
  size = 'md',
  ...props
}: GlassButtonProps) => {
  return (
    <StyledButton $variant={variant} $size={size} {...props}>
      {children}
    </StyledButton>
  );
};
