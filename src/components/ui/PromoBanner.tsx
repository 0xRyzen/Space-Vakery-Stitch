import styled from 'styled-components';

interface PromoBannerProps {
    message: string;
    variant?: 'default' | 'accent' | 'muted';
    className?: string;
}

const Banner = styled.div<{ $variant: string }>`
    width: 100%;
    text-align: center;
    font-size: 0.75rem;
    font-weight: 700;
    letter-spacing: 0.15em;
    padding: 0.75rem 1rem;
    border-bottom: 1px solid rgba(255, 255, 255, 0.05);
    backdrop-filter: blur(12px);
    position: relative;
    
    ${props => {
        switch (props.$variant) {
            case 'accent':
                return `
                    background: rgba(168, 195, 160, 0.25); // Pistachio tint
                    color: #1C1F2A;
                    opacity: 0.85;
                `;
            case 'muted':
                return `
                    background: rgba(255, 255, 255, 0.15);
                    color: inherit;
                    opacity: 0.6;
                `;
            default: // default
                return `
                    background: rgba(139, 175, 140, 0.2); // Primary with transparency
                    opacity: 0.7;
                `;
        }
    }}
    
    transition: opacity 0.3s ease;
    
    &:hover {
        opacity: 1;
    }
    
    @media (max-width: 768px) {
        font-size: 0.65rem;
        padding: 0.5rem 0.75rem;
        letter-spacing: 0.1em;
    }
`;

export const PromoBanner = ({ message, variant = 'default', className }: PromoBannerProps) => {
    return (
        <Banner $variant={variant} className={className}>
            {message}
        </Banner>
    );
};
