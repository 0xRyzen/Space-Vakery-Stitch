import React, { useState, useEffect } from 'react';
import styled, { keyframes, css } from 'styled-components';

/**
 * High-fidelity 'Twinkle' animation
 * Combines opacity, scale, and rotation for a breathing effect
 */
const twinkle = keyframes`
  0% {
    opacity: 0.3;
    transform: scale(0.7) rotate(0deg);
  }
  50% {
    opacity: 0.8;
    transform: scale(1) rotate(5deg);
  }
  100% {
    opacity: 1;
    transform: scale(1.1) rotate(0deg);
  }
`;

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 10;
  background: transparent;
  pointer-events: none;
`;

// Helper to determine gradient and shadow based on variant
const getVariantStyles = (variant: 'gold' | 'silver' | 'copper') => {
  switch (variant) {
    case 'silver':
      return css`
        background: radial-gradient(circle at center, rgba(255,255,255,0.9) 0%, #C0C0C0 60%, #A9A9A9 100%);
        filter: drop-shadow(0 0 5px rgba(192, 192, 192, 0.7));
      `;
    case 'copper':
      return css`
        background: radial-gradient(circle at center, rgba(255,245,235,0.9) 0%, #e6a57e 60%, #cd7f54 100%);
        filter: drop-shadow(0 0 5px rgba(205, 127, 84, 0.5));
      `;
    case 'gold':
    default:
      return css`
        background: radial-gradient(circle at center, rgba(255,255,255,0.9) 0%, #D4AF37 60%, #b08d26 100%);
        filter: drop-shadow(0 0 4px rgba(212, 175, 55, 0.6));
      `;
  }
};

const Star = styled.div<{ 
  $x: number; 
  $y: number; 
  $size: number; 
  $delay: number; 
  $duration: number;
  $variant: 'gold' | 'silver' | 'copper';
}>`
  position: absolute;
  left: ${p => p.$x}%;
  top: ${p => p.$y}%;
  width: ${p => p.$size}px;
  height: ${p => p.$size}px;
  
  /* 
   * Enhanced 4-Point Star Geometry 
   * Slightly fuller body than previous sharp version
   */
  clip-path: polygon(50% 0%, 65% 35%, 100% 50%, 65% 65%, 50% 100%, 35% 65%, 0% 50%, 35% 35%);
  
  /* Apply variant specific gradients and glows */
  ${p => getVariantStyles(p.$variant)}

  /* Ensure animation runs even before load */
  animation: ${twinkle} ${p => p.$duration}s ease-in-out infinite alternate;
  animation-delay: ${p => p.$delay}s;
  /* Fill mode forwards/backwards to ensure state is correct before/after */
  animation-fill-mode: both;
  
  /* Initial opacity is handled by keyframes, but fill-mode ensures delay works */
`;

interface StarProps {
  id: number;
  x: number;
  y: number;
  size: number;
  delay: number;
  duration: number;
  variant: 'gold' | 'silver' | 'copper';
}

const generateStars = (count: number): StarProps[] => {
  return Array.from({ length: count }).map((_, i) => {
    // 1. Determine variant
    const variantRand = Math.random();
    let variant: 'gold' | 'silver' | 'copper' = 'gold';
    if (variantRand > 0.9) variant = 'copper';
    else if (variantRand > 0.7) variant = 'silver';

    // 2. Determine size category
    const sizeBase = Math.random();
    let size = 10;
    if (sizeBase > 0.9) size = 28;      // Large hero stars
    else if (sizeBase > 0.6) size = 18; // Medium stars
    
    // Add randomness to size
    size = size + (Math.random() * 4 - 2);

    return {
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size,
      delay: Math.random() * 5,
      duration: Math.random() * 3 + 2, // 2s - 5s
      variant,
    };
  });
};

export const Starfield: React.FC = () => {
  const [stars, setStars] = useState<StarProps[]>([]);

  useEffect(() => {
    // Defer star generation to next tick to avoid hydration mismatch
    const timer = setTimeout(() => {
        setStars(generateStars(60)); // Matching count from reference
    }, 0);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Container aria-hidden="true">
      {stars.map(star => (
        <Star
          key={star.id} 
          $x={star.x} 
          $y={star.y} 
          $size={star.size} 
          $delay={star.delay} 
          $duration={star.duration} 
          $variant={star.variant}
        />
      ))}
    </Container>
  );
};

export default Starfield;
