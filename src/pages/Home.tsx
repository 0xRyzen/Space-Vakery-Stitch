import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import bannerImg from '/src/assets/images/spacevakery-banner.jpeg'; // Use the requested asset
import { ProductCard } from '../components/commerce/ProductCard';
import { PromoBanner } from '../components/ui/PromoBanner';
import { products } from '../data/products';
import { categories } from '../data/categories';
import type { Category } from '../data/categories';

// Helper for image placeholders if not provided
const PLACEHOLDER_IMG = '/src/assets/images/spacevakery-mascot.png';

const Home = () => {
    const navigate = useNavigate();
    const [currentSlide, setCurrentSlide] = useState(0);

    const slides = [
        {
            type: 'hero',
            title: "Crafted Edibles from a Softer Cosmos.",
            content: (
                <div className="relative z-20 text-center max-w-4xl mx-auto space-y-6 animate-fade-in-up -mt-8">
                    <h1 className="font-display text-5xl md:text-7xl lg:text-8xl text-text-dark dark:text-text-light leading-[0.9] text-center">
                        Crafted Edibles from a Softer Cosmos.
                    </h1>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mt-8">
                        <button onClick={() => navigate('/shop')} className="w-full sm:w-auto px-8 py-3 bg-primary/80 backdrop-blur-sm text-white font-sans text-lg rounded-pill hover:bg-primary transition-all shadow-lg shadow-primary/20">
                            Shop Treats
                        </button>
                        <button onClick={() => navigate('/about')} className="w-full sm:w-auto px-8 py-3 bg-white/40 backdrop-blur-sm border border-white/60 text-text-dark font-sans text-lg rounded-pill hover:bg-white/60 transition-all shadow-lg flex items-center justify-center gap-2">
                            Explore the Vakery <span className="material-symbols-outlined text-sm">arrow_forward</span>
                        </button>
                    </div>
                </div>
            )
        },
        {
            type: 'promo',
            bgClass: 'bg-secondary/20',
            content: (
                <div className="text-center">
                    <h2 className="text-3xl font-bold">Limited Batch</h2>
                    <p className="text-lg">Seasonal Drops Available Now</p>
                </div>
            )
        },
        {
            type: 'promo',
            bgClass: 'bg-primary/10',
            content: (
                <div className="text-center">
                    <h2 className="text-3xl font-bold">Oils & Extracts</h2>
                    <p className="text-lg">Premium Quality for Your Rituals</p>
                </div>
            )
        }
    ];

    useEffect(() => {
        // Auto-slide every 6 seconds
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 6000);
        return () => clearInterval(interval);
    }, [slides.length]);

    // Filter products marked as new arrivals
    const newArrivals = products.filter(p => p.isNew).slice(0, 8); 

    return (
        <div className="bg-background-light dark:bg-background-dark text-text-dark dark:text-text-light transition-colors duration-300 font-sans antialiased overflow-x-hidden relative min-h-screen w-full max-w-full">
            
            {/* Ambient Background Stars (from HTML design) */}
            <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden opacity-50 dark:opacity-80">
                <div className="star top-10 left-1/4 animate-pulse"></div>
                <div className="star top-20 right-1/3 animate-pulse delay-75"></div>
                <div className="star bottom-32 left-10 animate-pulse delay-150"></div>
                <div className="absolute top-40 right-10 text-primary opacity-30 text-2xl">✦</div>
                <div className="absolute top-1/3 left-20 text-secondary opacity-40 text-xl">✧</div>
                <div className="absolute bottom-1/4 right-32 text-primary opacity-20 text-3xl">✦</div>
                <div className="star top-[15%] left-[10%] animate-pulse delay-300"></div>
                <div className="star top-[60%] right-[15%] animate-pulse delay-500"></div>
                <div className="absolute top-[80%] left-[40%] text-primary opacity-20 text-lg">✦</div>
            </div>

            {/* Hero Slider */}
            <header className="relative h-[calc(100vh-150px)] sm:h-[calc(100vh-170px)] min-h-[400px] sm:min-h-[500px] md:min-h-[600px] w-full overflow-hidden">
                <div 
                    className="absolute inset-0 flex transition-transform duration-700 ease-in-out" 
                    style={{ width: `${slides.length * 100}%`, transform: `translateX(-${currentSlide * (100 / slides.length)}%)` }}
                >
                    {/* Slide 1 - Hero Image */}
                    <div className="w-1/3 h-full flex flex-col justify-center items-center px-4 sm:px-6 bg-cosmic-light dark:bg-cosmic-dark relative bg-no-repeat bg-cover">
                        <div className="relative w-full max-w-2xl mx-auto mb-4 md:mb-8 z-10">
                            <div className="relative w-full h-48 sm:h-64 md:h-80 lg:h-96 flex items-center justify-center float-animation">
                                <img 
                                    alt="Space Vakery Banner" 
                                    className="object-cover h-full w-full drop-shadow-2xl" 
                                    src={bannerImg} 
                                />
                                <div className="absolute bottom-0 w-full h-32 bg-gradient-to-t from-background-light dark:from-background-dark via-background-light/40 dark:via-background-dark/40 to-transparent blur-xl"></div>
                            </div>
                        </div>
                        {slides[0].content}
                    </div>

                    {/* Slide 2 - Limited Batch */}
                    <div className="w-1/3 h-full flex flex-col justify-center items-center bg-secondary/20 relative">
                        {slides[1].content}
                    </div>

                    {/* Slide 3 - Oils */}
                    <div className="w-1/3 h-full flex flex-col justify-center items-center bg-primary/10 relative">
                        {slides[2].content}
                    </div>
                </div>

                {/* Dots Navigation */}
                <div className="absolute bottom-8 left-0 right-0 flex justify-center space-x-3 z-30">
                    {slides.map((_, idx) => (
                        <button
                            key={idx}
                            onClick={() => setCurrentSlide(idx)}
                            className={`w-3 h-3 rounded-full transition-all ${currentSlide === idx ? 'bg-text-dark opacity-100' : 'bg-text-dark opacity-30 hover:opacity-60'}`}
                        />
                    ))}
                </div>
            </header>

            {/* Top Banner */}
            <PromoBanner 
                message="Free shipping over $75 · Vegan · Plastic-free packaging"
                variant="default"
                className="relative z-30"
            />

            {/* Promo Cards Row */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 mt-6 sm:mt-8 relative z-20">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
                    <div onClick={() => navigate('/shop/limited')} className="glass-card rounded-2xl p-6 flex items-center justify-between group cursor-pointer hover:bg-white/50 transition-colors">
                        <div>
                            <h3 className="font-display text-2xl">Limited Batch</h3>
                            <span className="text-xs uppercase tracking-wider opacity-60">Seasonal Drops</span>
                        </div>
                        <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
                    </div>
                    <div onClick={() => navigate('/shop/new')} className="glass-card rounded-2xl p-6 flex items-center justify-between group cursor-pointer hover:bg-white/50 transition-colors">
                        <div>
                            <h3 className="font-display text-2xl">New Arrivals</h3>
                            <span className="text-xs uppercase tracking-wider opacity-60">Fresh from the oven</span>
                        </div>
                        <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
                    </div>
                    <div onClick={() => navigate('/shop/gifting')} className="glass-card rounded-2xl p-6 flex items-center justify-between group cursor-pointer hover:bg-white/50 transition-colors">
                        <div>
                            <h3 className="font-display text-2xl">Gifting</h3>
                            <span className="text-xs uppercase tracking-wider opacity-60">Curated Bundles</span>
                        </div>
                        <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">redeem</span>
                    </div>
                </div>
            </section>

            {/* Shop by Category */}
            <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-12 max-w-[1400px] mx-auto z-10 relative">
                <div className="text-center mb-8 sm:mb-12 md:mb-16">
                    <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-text-dark dark:text-text-light mb-2">Shop by Category</h2>
                    <p className="text-sm uppercase tracking-widest opacity-60 font-sans">Find your frequency</p>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                    {categories.map((cat: Category, idx: number) => (
                        <div key={idx} onClick={() => navigate(`/shop/${cat.name.toLowerCase().replace(/ /g, '-')}`)} className="group glass-card rounded-xl p-4 flex flex-col items-center hover:-translate-y-1 transition-transform duration-300 cursor-pointer">
                            <div className={`w-full aspect-square mb-4 rounded-full overflow-hidden flex items-center justify-center ${cat.icon ? (cat.name === 'Flower' ? 'bg-primary/10' : 'bg-secondary/10') : 'bg-white/20'}`}>
                                {cat.image ? (
                                    <img
                                        alt={cat.name}
                                        className="w-full h-full object-cover opacity-90 group-hover:scale-110 transition-transform duration-500"
                                        src={cat.image || PLACEHOLDER_IMG} /* Use placeholder if image is undefined */
                                    />
                                ) : (
                                    <span
                                        className={`material-symbols-outlined text-4xl opacity-60 ${cat.name === 'Flower' ? 'text-primary' : 'text-primary'}`}
                                    >
                                        {cat.icon}
                                    </span>
                                )}
                            </div>
                            <h3 className="font-display text-xl text-center">{cat.name}</h3>
                            <p className="text-[10px] uppercase tracking-wider opacity-60 text-center mt-1">{cat.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* New Arrivals Grid (Using ProductCard Component) */}
            <section className="py-10 sm:py-12 md:py-16 bg-white/30 backdrop-blur-sm border-y border-white/20">
                <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-12">
                    <div className="text-center mb-8 sm:mb-10 md:mb-12"> 
                        <h2 className="font-display text-2xl sm:text-3xl md:text-4xl">New Arrivals</h2>
                        <p className="text-sm opacity-60 mt-2">Fresh batches from the lab.</p>
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-x-6 gap-y-10">
                        {newArrivals.map(product => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>
                    
                    <div className="mt-8 text-center md:hidden">
                        <button className="inline-block px-8 py-3 border border-text-dark rounded-pill text-xs font-bold uppercase tracking-widest">View All</button>
                    </div>
                </div>
            </section>

            {/* Featured Treats Large Cards */}
            <section className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 md:px-12 max-w-7xl mx-auto z-10 relative">
                <div className="text-center mb-10 sm:mb-12 md:mb-16">
                    <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-text-dark dark:text-text-light mb-2">Featured Treats</h2>
                    <div className="w-16 h-1 bg-primary mx-auto mt-6 rounded-full opacity-50"></div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="glass-card rounded-3xl p-0 flex flex-col items-center text-center overflow-hidden group">
                        <div className="w-full aspect-[4/3] bg-transparent pt-8 px-8 flex items-end justify-center relative">
                            <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            <img alt="Cosmic cupcake" className="object-cover w-3/4 h-auto drop-shadow-xl transform group-hover:scale-105 transition-transform duration-500" src={PLACEHOLDER_IMG} />
                        </div>
                        <div className="p-8 w-full bg-white/40 backdrop-blur-md border-t border-white/40 flex-1 flex flex-col">
                            <h3 className="font-display text-2xl md:text-3xl text-text-dark dark:text-text-light mb-2">Cosmic Brownies</h3>
                            <p className="text-sm font-sans text-text-dark/60 dark:text-text-light/60 mb-6 max-w-xs mx-auto flex-1">
                                Rich chocolate ganache infused with stardust.
                            </p>
                            <button className="inline-block px-8 py-3 bg-text-dark text-white text-xs font-bold tracking-widest rounded-pill hover:bg-opacity-80 transition-all uppercase">
                                Shop All &gt;
                            </button>
                        </div>
                    </div>
                     <div className="glass-card rounded-3xl p-0 flex flex-col items-center text-center overflow-hidden group">
                        <div className="w-full aspect-[4/3] bg-transparent pt-8 px-8 flex items-end justify-center relative">
                            <div className="absolute inset-0 bg-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            <img alt="Matcha marshmallows" className="object-cover w-3/4 h-auto drop-shadow-xl rounded-xl transform group-hover:scale-105 transition-transform duration-500" src={PLACEHOLDER_IMG} />
                        </div>
                        <div className="p-8 w-full bg-white/40 backdrop-blur-md border-t border-white/40 flex-1 flex flex-col">
                            <h3 className="font-display text-2xl md:text-3xl text-text-dark dark:text-text-light mb-2">Matcha Marshmallows</h3>
                            <p className="text-sm font-sans text-text-dark/60 dark:text-text-light/60 mb-6 max-w-xs mx-auto flex-1">
                                Ethereal matcha dust on soft clouds.
                            </p>
                            <button className="inline-block px-8 py-3 bg-text-dark text-white text-xs font-bold tracking-widest rounded-pill hover:bg-opacity-80 transition-all uppercase">
                                Shop All &gt;
                            </button>
                        </div>
                    </div>
                     <div className="glass-card rounded-3xl p-0 flex flex-col items-center text-center overflow-hidden group">
                        <div className="w-full aspect-[4/3] bg-transparent pt-8 px-8 flex items-end justify-center relative">
                            <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            <img alt="Biscoff butter jar" className="object-cover w-3/4 h-auto drop-shadow-xl rounded-xl transform group-hover:scale-105 transition-transform duration-500" src={PLACEHOLDER_IMG} />
                        </div>
                        <div className="p-8 w-full bg-white/40 backdrop-blur-md border-t border-white/40 flex-1 flex flex-col">
                            <h3 className="font-display text-2xl md:text-3xl text-text-dark dark:text-text-light mb-2">From Batter to Batch</h3>
                            <p className="text-sm font-sans text-text-dark/60 dark:text-text-light/60 mb-6 max-w-xs mx-auto flex-1">
                                Learn how our cannabis flower is processed.
                            </p>
                            <button className="inline-block px-8 py-3 bg-transparent border border-text-dark text-text-dark text-xs font-bold tracking-widest rounded-pill hover:bg-text-dark hover:text-white transition-all uppercase">
                                Read Article
                            </button>
                        </div>
                    </div>
                </div>
            </section>

             {/* Journal Section */}
            <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-cosmic-light/30">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-8 sm:mb-10 md:mb-12 px-2 gap-4">
                        <h2 className="font-display text-3xl sm:text-4xl">The Vakery Journal</h2>
                        <a href="/journal" className="hidden md:block text-sm underline decoration-1 underline-offset-4 hover:text-primary">Read all stories</a>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <article className="group cursor-pointer" onClick={() => navigate('/journal/1')}>
                            <div className="overflow-hidden rounded-2xl mb-4 h-64 relative">
                                <img alt="Abstract space" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuASeC-CvbQRLqno9muOKMMMEVufwjyDuiKPZfDajjlCm6h9EQGx6Zoty7yC7k-n0O_OFjzdwRXykN0wnHMqDV8jOlEt1OUTjtJOOJf5IFePD4Ra7SnsCTd9JcHRTV99-REVLmLhlBw8C8MfzqOuW8qoC403zi6x8riI-LU4ZVjhopRJUvM3sOitauXpCYs_mQeRndhQuxaDy44RFbG3Bu87ycXuSHBMrXhWyEwxPprSmdIPd7Qke46OTOU2Da1gHztnszEH_f9y6hzY"/>
                                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors"></div>
                            </div>
                            <span className="text-[10px] uppercase tracking-widest font-bold text-primary">Education</span>
                            <h3 className="font-display text-2xl mt-2 mb-2 group-hover:text-primary transition-colors">Understanding Terpenes</h3>
                            <p className="text-sm opacity-60 line-clamp-2">A guide to the aromatic compounds that determine the scent and effect of your edibles.</p>
                        </article>
                         <article className="group cursor-pointer" onClick={() => navigate('/journal/2')}>
                            <div className="overflow-hidden rounded-2xl mb-4 h-64 relative">
                                <img alt="Baking process" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCmZQoJAdU7oewpKLr4QKGWs37zPGuqGk2SyevbvzoYH_eA-PjjGiQgdYRRxmex9UoY7PWrEV6HlZsyRZPHwtnFn3TslRlBySAWJ15x4eDSL4BVFJYhy-e526GAFlXrvzEtTai7rIup2UjZ_1VMjQFzmKRfpc1zXO1PkYG-s2B-tN9tfFoBcp6eiDebMCG0NfhMcsJXZDQrb6LhofPaVbGxe5cn8IvfMphhDSB73HZMkLaelPVOS17Wc7VOF2dtnrA0VAZvlE3LunJJ"/>
                                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors"></div>
                            </div>
                            <span className="text-[10px] uppercase tracking-widest font-bold text-primary">Recipes</span>
                            <h3 className="font-display text-2xl mt-2 mb-2 group-hover:text-primary transition-colors">Spring Infusions</h3>
                            <p className="text-sm opacity-60 line-clamp-2">Three light and airy recipes to welcome the changing seasons with a gentle buzz.</p>
                        </article>
                         <article className="group cursor-pointer" onClick={() => navigate('/journal/3')}>
                            <div className="overflow-hidden rounded-2xl mb-4 h-64 relative">
                                <img alt="Cosmic art" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDeU6ZdpG1Q_8Pg0-IhLEAiOWmUm8Xe4tiJLOkpJ56MZeI3pkdFgK8Nz9JCoOZl68O5gPobjXqMrdcWDcngD4unMxc8THeMM7eCOjUOaomjTQoTByONh1rOlXBNxOxeR4Q3P1odNU7s9HH1eOnJcs-Ci6fnKPCwM7qDEGKJLojZlFq1DJD3GDQrignKRYfl4bstnmAGB5shxQK1lQZPsnGVaigIoEHpoVfeytb8r-RgW1uPSqUkctRFWAp7Yt7a2fsFCPtJ13d4ocVC"/>
                                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors"></div>
                            </div>
                            <span className="text-[10px] uppercase tracking-widest font-bold text-primary">Community</span>
                            <h3 className="font-display text-2xl mt-2 mb-2 group-hover:text-primary transition-colors">Star Gazing & Grazing</h3>
                            <p className="text-sm opacity-60 line-clamp-2">Join us for our monthly community event under the stars.</p>
                        </article>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
