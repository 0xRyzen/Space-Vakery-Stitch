import styled from 'styled-components';
import { GlassCard } from '../components/ui/GlassCard';

const PageHero = styled.div`
  background: ${props => props.theme.colors.cream};
  padding: 4rem 0;
  text-align: center;
  
  @media (min-width: 768px) {
    padding: 6rem 0;
  }
  
  @media (min-width: 1024px) {
    padding: 8rem 0;
  }
`;

const ContentSection = styled.section`
  padding: 3rem 0;
  
  @media (min-width: 768px) {
    padding: 4rem 0;
  }
  
  @media (min-width: 1024px) {
    padding: 6rem 0;
  }
`;

const Quote = styled.blockquote`
  font-family: 'Cormorant Garamond', serif;
  font-size: 1.75rem;
  line-height: 1.3;
  text-align: center;
  max-width: 800px;
  margin: 0 auto 2rem;
  padding: 0 1rem;
  color: ${props => props.theme.colors.charcoal};
  
  @media (min-width: 768px) {
    font-size: 2.5rem;
    line-height: 1.2;
    margin-bottom: 4rem;
    padding: 0;
  }
`;

export const About = () => {
    return (
        <div>
            <PageHero>
                <div className="container mx-auto px-4">
                    <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl mb-4 sm:mb-6">Our Softer Cosmos</h1>
                    <p className="text-base sm:text-lg md:text-xl opacity-60 max-w-2xl mx-auto px-4">Founded in the quiet hours between starlight and dawn, Space Vakery is a tribute to the art of the infusion.</p>
                </div>
            </PageHero>

            <ContentSection className="bg-white/50">
                <div className="container mx-auto px-4">
                    <Quote>"We believe edibles should be more than a delivery system. They should be a ritual."</Quote>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
                        <GlassCard className="p-6 sm:p-8 md:p-10 lg:p-12 order-2 md:order-1">
                            <h2 className="font-serif text-2xl sm:text-3xl mb-4 sm:mb-6">The Philosophy</h2>
                            <p className="leading-relaxed opacity-80 mb-6">
                                Every batch in our kitchen begins with 48 hours of slow-tempering. We don't rush the science, because you can't rush the soul of a treat. By using full-spectrum oils instead of isolates, we preserve the complex terpene profiles of the plant, resulting in a cleaner, more editorial high.
                            </p>
                            <p className="leading-relaxed opacity-80">
                                Our aesthetic is inspired by the "softer" side of space—the nebulas, the dust, the quiet orbit. We design for the voyager who seeks elegance and potency in equal measure.
                            </p>
                        </GlassCard>
                        <div className="rounded-2xl overflow-hidden aspect-[4/5] bg-cream order-1 md:order-2">
                            <img src="https://images.unsplash.com/photo-1556910103-1c02745a30bf?q=80&w=800&auto=format&fit=crop" className="w-full h-full object-cover" alt="Philosophy illustration" />
                        </div>
                    </div>
                </div>
            </ContentSection>
        </div>
    );
};
