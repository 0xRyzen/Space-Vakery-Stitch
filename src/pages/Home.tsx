import styled from 'styled-components';
import { HeroSlider } from '../components/ui/HeroSlider';
import { CategoryCard } from '../components/commerce/CategoryCard';
import { ProductCard } from '../components/commerce/ProductCard';
import { GlassCard } from '../components/ui/GlassCard';
import { categories } from '../data/categories';
import { products } from '../data/products';
import { GlassButton } from '../components/ui/GlassButton';
import { useNavigate } from 'react-router-dom';

const Section = styled.section`
  padding: 6rem 0;
  position: relative;
`;

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 4rem;
  
  h2 {
    font-family: 'Cormorant Garamond', serif;
    font-size: 3rem;
    color: ${props => props.theme.colors.charcoal};
    margin-bottom: 1rem;
  }
  
  p {
    color: ${props => props.theme.colors.midnight};
    opacity: 0.6;
    max-width: 600px;
    margin: 0 auto;
  }
`;

const PromoGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  padding: 0 1rem;
  
  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const Home = () => {
    const navigate = useNavigate();

    return (
        <>
            <HeroSlider />

            {/* Promotions Row */}
            <div className="container mx-auto px-4 -mt-20 relative z-20">
                <PromoGrid>
                    <GlassCard variant="tinted-oat" className="flex flex-col items-center text-center p-8 cursor-pointer hover:shadow-lg transition">
                        <h3 className="font-serif text-2xl mb-2">Limited Batch</h3>
                        <p className="text-sm opacity-70 mb-4">Seasonal flavors that vanish.</p>
                        <GlassButton size="sm" variant="ghost" onClick={() => navigate('/shop/limited')}>Shop Limited</GlassButton>
                    </GlassCard>
                    <GlassCard variant="tinted-pistachio" className="flex flex-col items-center text-center p-8 cursor-pointer hover:shadow-lg transition">
                        <h3 className="font-serif text-2xl mb-2">New Arrivals</h3>
                        <p className="text-sm opacity-70 mb-4">Fresh from the Vakery.</p>
                        <GlassButton size="sm" variant="ghost" onClick={() => navigate('/shop/new')}>Shop New</GlassButton>
                    </GlassCard>
                    <GlassCard variant="tinted-blush" className="flex flex-col items-center text-center p-8 cursor-pointer hover:shadow-lg transition">
                        <h3 className="font-serif text-2xl mb-2">Gifting</h3>
                        <p className="text-sm opacity-70 mb-4">Treat someone special.</p>
                        <GlassButton size="sm" variant="ghost" onClick={() => navigate('/shop/gifting')}>Shop Gifts</GlassButton>
                    </GlassCard>
                </PromoGrid>
            </div>

            {/* Shop by Category */}
            <Section>
                <div className="container mx-auto px-4">
                    <SectionHeader>
                        <h2>Shop by Category</h2>
                        <p>Explore our cosmic collection of infused delights.</p>
                    </SectionHeader>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {categories.map(cat => (
                            <CategoryCard key={cat.id} category={cat} />
                        ))}
                    </div>
                </div>
            </Section>

            {/* New Arrivals */}
            <Section className="bg-white/30 backdrop-blur-sm">
                <div className="container mx-auto px-4">
                    <SectionHeader>
                        <h2>New Arrivals</h2>
                        <p>Freshly baked from the nebula.</p>
                    </SectionHeader>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {/* Duplicating products to simulate 6-8 items for now since we only have 6 */}
                        {[...products, ...products.slice(0, 2)].map((product, idx) => (
                            <div key={`${product.id}-${idx}`} className="relative group">
                                <span className="absolute top-2 left-2 z-10 bg-pistachio text-charcoal text-[10px] uppercase font-bold px-2 py-1 rounded-full tracking-wider">
                                    New
                                </span>
                                <ProductCard product={product} />
                            </div>
                        ))}
                    </div>
                </div>
            </Section>

            {/* Featured Treats */}
            <Section>
                <div className="container mx-auto px-4">
                    <SectionHeader>
                        <h2>Featured Treats</h2>
                        <p>Our most beloved creations, crafted for potency and pleasure.</p>
                    </SectionHeader>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {products.slice(0, 3).map(product => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>

                    <div className="text-center mt-12">
                        <GlassButton size="lg" variant="secondary" onClick={() => navigate('/shop/all')}>
                            View All Products
                        </GlassButton>
                    </div>
                </div>
            </Section>

            {/* Journal Preview */}
            <Section className="bg-oat/20">
                <div className="container mx-auto px-4">
                    <SectionHeader>
                        <h2>The Cosmic Journal</h2>
                        <p>Notes from the kitchen and beyond.</p>
                    </SectionHeader>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <GlassCard className="group cursor-pointer overflow-hidden p-0 h-[400px] relative">
                            <img
                                src="https://images.unsplash.com/photo-1556910103-1c02745a30bf?q=80&w=800&auto=format&fit=crop"
                                alt="Dosing"
                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors" />
                            <div className="absolute bottom-0 left-0 w-full p-8 text-white relative z-10">
                                <span className="text-xs uppercase tracking-widest mb-2 block text-pistachio">Recipe</span>
                                <h3 className="font-serif text-2xl mb-2">How to dose responsibly</h3>
                                <p className="text-sm opacity-80 line-clamp-2">A guide to finding your perfect orbit without losing gravity.</p>
                            </div>
                        </GlassCard>

                        <GlassCard className="group cursor-pointer overflow-hidden p-0 h-[400px] relative">
                            <img
                                src="https://images.unsplash.com/photo-1517433670267-08bbd4be890f?q=80&w=800&auto=format&fit=crop"
                                alt="Baking"
                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors" />
                            <div className="absolute bottom-0 left-0 w-full p-8 text-white relative z-10">
                                <span className="text-xs uppercase tracking-widest mb-2 block text-pistachio">Culture</span>
                                <h3 className="font-serif text-2xl mb-2">The art of slow baking</h3>
                                <p className="text-sm opacity-80 line-clamp-2">Why we take 48 hours to infuse our signature caramel.</p>
                            </div>
                        </GlassCard>

                        <GlassCard className="group cursor-pointer overflow-hidden p-0 h-[400px] relative">
                            <img
                                src="https://images.unsplash.com/photo-1615485499978-508c5c7ce1a5?q=80&w=800&auto=format&fit=crop"
                                alt="Terpenes"
                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors" />
                            <div className="absolute bottom-0 left-0 w-full p-8 text-white relative z-10">
                                <span className="text-xs uppercase tracking-widest mb-2 block text-pistachio">Guide</span>
                                <h3 className="font-serif text-2xl mb-2">Terpenes 101</h3>
                                <p className="text-sm opacity-80 line-clamp-2">Understanding the flavor profiles of our strains.</p>
                            </div>
                        </GlassCard>
                    </div>
                </div>
            </Section>
        </>
    );
};
