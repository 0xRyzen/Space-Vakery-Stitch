import styled from 'styled-components';
import { GlassCard } from '../components/ui/GlassCard';

const PageHeader = styled.div`
  padding: 6rem 0;
  text-align: center;
`;

export const Journal = () => {
    const posts = [
        {
            id: 1,
            title: "How to dose responsibly",
            tag: "Recipe",
            image: "https://images.unsplash.com/photo-1556910103-1c02745a30bf?q=80&w=800&auto=format&fit=crop"
        },
        {
            id: 2,
            title: "The art of slow baking",
            tag: "Culture",
            image: "https://images.unsplash.com/photo-1517433670267-08bbd4be890f?q=80&w=800&auto=format&fit=crop"
        },
        {
            id: 3,
            title: "Terpenes 101",
            tag: "Guide",
            image: "https://images.unsplash.com/photo-1615485499978-508c5c7ce1a5?q=80&w=800&auto=format&fit=crop"
        }
    ];

    return (
        <div className="container mx-auto px-4 pb-20">
            <PageHeader>
                <h1 className="font-serif text-5xl mb-4">The Cosmic Journal</h1>
                <p className="opacity-60">Notes from the kitchen and beyond.</p>
            </PageHeader>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {posts.map(post => (
                    <GlassCard key={post.id} className="group cursor-pointer overflow-hidden p-0 h-[500px] relative">
                        <img
                            src={post.image}
                            alt={post.title}
                            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors" />
                        <div className="absolute bottom-0 left-0 w-full p-8 text-white relative z-10">
                            <span className="text-xs uppercase tracking-widest mb-2 block text-pistachio">{post.tag}</span>
                            <h3 className="font-serif text-2xl mb-2">{post.title}</h3>
                            <button className="text-xs font-bold uppercase tracking-widest border-b border-white pb-1 mt-4 opacity-0 group-hover:opacity-100 transition-opacity">Read Story</button>
                        </div>
                    </GlassCard>
                ))}
            </div>
        </div>
    );
};
