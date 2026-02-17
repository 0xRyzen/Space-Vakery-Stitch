import { GlassCard } from '../components/ui/GlassCard';

export const Locations = () => {
    return (
        <div className="container mx-auto px-4 py-12 sm:py-16 md:py-20">
            <div className="text-center mb-10 sm:mb-12 md:mb-16">
                <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl mb-4">Our Showrooms</h1>
                <p className="opacity-60 text-sm sm:text-base">Visit us in the physical realm.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 md:gap-12 max-w-4xl mx-auto">
                <GlassCard className="p-6 sm:p-8">
                    <h2 className="font-serif text-2xl mb-4">Nebula Heights</h2>
                    <p className="text-sm opacity-60 mb-6">456 Celestial Way, Los Angeles, CA 90210</p>
                    <div className="aspect-video bg-cream rounded-xl mb-6 overflow-hidden">
                        <img src="https://images.unsplash.com/photo-1541604193435-22287d32c2c2?q=80&w=800&auto=format&fit=crop" className="w-full h-full object-cover" />
                    </div>
                    <div className="text-xs uppercase font-bold tracking-widest opacity-40 mb-2">Hours</div>
                    <p className="text-sm">Daily: 10:00 AM — 10:00 PM</p>
                </GlassCard>

                <GlassCard className="p-6 sm:p-8">
                    <h2 className="font-serif text-xl sm:text-2xl mb-4">The Stardust Studio</h2>
                    <p className="text-sm opacity-60 mb-6">789 Aurora Blvd, San Francisco, CA 94103</p>
                    <div className="aspect-video bg-cream rounded-xl mb-6 overflow-hidden">
                        <img src="https://images.unsplash.com/photo-1521017432531-fbd92d768814?q=80&w=800&auto=format&fit=crop" className="w-full h-full object-cover" />
                    </div>
                    <div className="text-xs uppercase font-bold tracking-widest opacity-40 mb-2">Hours</div>
                    <p className="text-sm">Mon-Sat: 11:00 AM — 11:00 PM</p>
                </GlassCard>
            </div>
        </div>
    );
};
