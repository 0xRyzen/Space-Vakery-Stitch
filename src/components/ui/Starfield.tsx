import { useMemo } from 'react';
import styled, { keyframes } from 'styled-components';

const twinkle = keyframes`
  0%, 100% {
    opacity: 0.1;
    transform: scale(0.8);
  }
  50% {
    opacity: 0.4;
    transform: scale(1.2);
  }
`;

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 1;
  pointer-events: none;
  overflow: hidden;
  opacity: 0.6;
`;

const Sparkle = styled.div<{ 
  $x: number; 
  $y: number; 
  $size: number; 
  $delay: number; 
  $duration: number;
  $color: string;
}>`
  position: absolute;
  left: ${p => p.$x}%;
  top: ${p => p.$y}%;
  width: ${p => p.$size}px;
  height: ${p => p.$size}px;
  animation: ${twinkle} ${p => p.$duration}s ease-in-out infinite;
  animation-delay: ${p => p.$delay}s;
  
  /* Diamond/star shape */
  transform: rotate(45deg); /* Ensures diamond shape */
  background: ${p => p.$color};
  clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);
  
  /* Glow effect */
  box-shadow: 0 0 ${p => p.$size * 0.3}px ${p => p.$color};
`;

// Colors that contrast well on cream background  
const colors = [
  'rgba(94, 75, 110, 0.4)',   // Dusty Plum
  'rgba(139, 175, 140, 0.4)', // Soft Matcha
  'rgba(168, 195, 160, 0.4)', // Muted Pistachio
  'rgba(180, 140, 100, 0.4)', // Warm brown
  'rgba(120, 100, 140, 0.4)', // Soft purple
];

interface SparkleData {
  id: number;
  x: number;
  y: number;
  size: number;
  delay: number;
  duration: number;
  color: string;
}

export const Starfield = () => {
  const sparkles = useMemo<SparkleData[]>(() => {
    const items: SparkleData[] = [];
    for (let i = 0; i < 80; i++) {
      items.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 10 + 6, // Adjusted size range: 6-16px
        delay: Math.random() * 5,
        duration: Math.random() * 3 + 2,
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    }
    return items;
  }, []);

  return (
    <Container>
      {sparkles.map(s => (
        <Sparkle
          key={s.id}
          $x={s.x}
          $y={s.y}
          $size={s.size}
          $delay={s.delay}
          $duration={s.duration}
          $color={s.color}
        />
      ))}
    </Container>
  );
};
