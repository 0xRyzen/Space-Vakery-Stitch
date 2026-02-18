import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { GlassButton } from './GlassButton';

// Since we lack actual image assets for all slides, use placeholders
import bannerImage from '/src/assets/images/spacevakery-banner.jpeg';

// Simple types
interface Slide {
  id: number;
  image?: string;
  color?: string; // fallback if no image
  title: string;
  subtitle?: string;
  ctaPrimary?: { label: string; action: () => void };
  ctaSecondary?: { label: string; action: () => void };
}

const SliderContainer = styled.div`
  position: relative;
  width: 100%;
  height: 500px;
  overflow: hidden;
  
  @media (min-width: 768px) {
    height: 600px;
  }
  
  @media (max-width: 640px) {
    height: 400px;
  }
`;

const SlideWrapper = styled.div<{ active: boolean }>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: ${({ active }) => (active ? 1 : 0)};
  transition: opacity 1s ease-in-out;
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: ${({ active }) => (active ? 10 : 0)};
`;

const Overlay = styled.div`
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.3);
  z-index: 1;
`;

const Content = styled.div`
  position: relative;
  z-index: 2;
  text-align: center;
  color: #fff;
  max-width: 800px;
  padding: 0 1.5rem;
  
  @media (max-width: 640px) {
    padding: 0 1rem;
  }
`;

const DotsContainer = styled.div`
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 10px;
  z-index: 20;
`;

const Dot = styled.button<{ active: boolean }>`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: ${({ active }) => (active ? '#fff' : 'rgba(255, 255, 255, 0.5)')};
  border: none;
  cursor: pointer;
  transition: background 0.3s;

  &:hover {
    background: #fff;
  }
`;

export const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides: Slide[] = [
    {
      id: 1,
      image: bannerImage, 
      title: "Crafted Edibles from a Softer Cosmos.",
      ctaPrimary: { label: "Shop Treats", action: () => console.log('Shop Treats') },
      ctaSecondary: { label: "Explore the Vakery", action: () => console.log('Explore') }
    },
    {
      id: 2,
      color: '#8D7B8C', // Dusty Plum approx
      title: "Seasonal Batch Promo",
      subtitle: "Discover our limited-edition flavors that transcend the ordinary.",
      ctaPrimary: { label: "View Collection", action: () => console.log('Collection') }
    },
    {
      id: 3,
      color: '#4B5563', // Dark Gray for Oils/Resin
      title: "Oils, Resin & Batter",
      subtitle: "Pure potency extracted from the finest stardust.",
      ctaPrimary: { label: "Read Editorial", action: () => console.log('Editorial') }
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <SliderContainer>
      {slides.map((slide, index) => (
        <SlideWrapper
          key={slide.id}
          active={index === currentSlide}
          style={{ 
            backgroundImage: slide.image ? `url(${slide.image})` : undefined,
            backgroundColor: slide.color 
          }}
        >
          <Overlay />
          <Content>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-4 md:mb-6 shadow-sm">{slide.title}</h2>
            {slide.subtitle && <p className="text-lg sm:text-xl md:text-2xl mb-6 md:mb-8 font-light opacity-90">{slide.subtitle}</p>}
            <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 mt-6 md:mt-8">
              {slide.ctaPrimary && (
                <GlassButton variant="primary" onClick={slide.ctaPrimary.action}>
                  {slide.ctaPrimary.label}
                </GlassButton>
              )}
              {slide.ctaSecondary && (
                <GlassButton variant="secondary" onClick={slide.ctaSecondary.action}>
                  {slide.ctaSecondary.label}
                </GlassButton>
              )}
            </div>
          </Content>
        </SlideWrapper>
      ))}

      <DotsContainer>
        {slides.map((_, index) => (
          <Dot
            key={index}
            active={index === currentSlide}
            onClick={() => setCurrentSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </DotsContainer>
    </SliderContainer>
  );
};

export default HeroSlider;
