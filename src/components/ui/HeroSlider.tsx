import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { GlassButton } from '../ui/GlassButton';
import { useNavigate } from 'react-router-dom';
import bannerImg from '../../assets/Banner.jpeg';

const slides = [
  {
    id: 1,
    headline: "Crafted Edibles from a Softer Cosmos.",
    subhead: "Artisanal treats designed to elevate your orbit.",
    cta: "Shop Treats",
    link: "/shop/treats",
    image: bannerImg,
    secondaryCta: {
      label: "Explore the Vakery",
      link: "/about"
    }
  },
  {
    id: 2,
    headline: "New Seasonal Batch: Dusty Plum",
    subhead: "Limited edition infused fruit chews.",
    cta: "Shop Treats",
    link: "/shop/treats",
    image: "https://images.unsplash.com/photo-1534938665420-4193effeacc4?q=80&w=1600&auto=format&fit=crop",
    color: "#F3E8FF",
    secondaryCta: {
      label: "Explore the Vakery",
      link: "/about"
    }
  },
  {
    id: 3,
    headline: "Pure Potency: Oils & Resins",
    subhead: "Clean extracts for the experienced voyager.",
    cta: "Shop Treats",
    link: "/shop/treats",
    image: "https://images.unsplash.com/photo-1629199298410-b97c02c61fa3?q=80&w=1600&auto=format&fit=crop",
    secondaryCta: {
      label: "Explore the Vakery",
      link: "/about"
    }
  }
];

const HeroContainer = styled.div`
  position: relative;
  height: 80vh;
  width: 100%;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

const Slide = styled.div<{ active: boolean; bgImage: string }>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(${props => props.bgImage});
  background-size: cover;
  background-position: center;
  opacity: ${props => props.active ? 1 : 0};
  transition: opacity 1s ease-in-out;
  z-index: -1;
  
  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(to bottom, rgba(28,31,42,0.3), rgba(28,31,42,0.1));
    backdrop-filter: blur(2px);
  }
`;

const Content = styled.div`
  position: relative;
  z-index: 10;
  max-width: 900px;
  padding: 0 2rem;
  display: flex;
  flex-direction: column;
  items-center: center;
  
  /* Subtle float animation for the content */
  animation: float 6s ease-in-out infinite;
  @keyframes float {
    0% { transform: translateY(0px); }
    50% { transform: translateY(-10px); }
    100% { transform: translateY(0px); }
  }
`;

const Title = styled.h1`
  font-size: 3.5rem;
  font-family: 'Cormorant Garamond', serif;
  font-weight: 700;
  margin-bottom: 1.5rem;
  color: ${props => props.theme.colors.cream};
  text-shadow: 0 4px 12px rgba(0,0,0,0.3);
  
  @media (min-width: 768px) {
    font-size: 5rem;
  }
`;

const Sub = styled.p`
  font-size: 1.25rem;
  color: ${props => props.theme.colors.oat};
  margin-bottom: 2.5rem;
  opacity: 0.9;
  letter-spacing: 0.02em;
  text-shadow: 0 2px 4px rgba(0,0,0,0.3);
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 1.5rem;
  justify-content: center;
  flex-wrap: wrap;
`;

export const HeroSlider = () => {
  const [current, setCurrent] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent(c => (c + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <HeroContainer>
      {slides.map((slide, index) => (
        <Slide key={slide.id} active={index === current} bgImage={slide.image} />
      ))}

      <Content>
        {slides.map((slide, index) => (
          <div key={slide.id} style={{ display: index === current ? 'block' : 'none' }}>
            <Title>{slide.headline}</Title>
            <Sub>{slide.subhead}</Sub>

            <ButtonGroup>
              {slide.cta && (
                <GlassButton size="lg" variant="primary" onClick={() => navigate(slide.link)}>
                  {slide.cta}
                </GlassButton>
              )}

              {slide.secondaryCta && (
                <GlassButton size="lg" variant="secondary" onClick={() => navigate(slide.secondaryCta!.link)}>
                  {slide.secondaryCta.label}
                </GlassButton>
              )}
            </ButtonGroup>
          </div>
        ))}
      </Content>

      <div className="absolute bottom-8 flex gap-3 z-20">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`w-3 h-3 rounded-full transition-colors ${idx === current ? 'bg-pistachio' : 'bg-white/30 hover:bg-white/50'}`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </HeroContainer>
  );
};
