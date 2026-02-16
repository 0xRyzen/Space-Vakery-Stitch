export interface Product {
    id: string;
    slug: string;
    name: string;
    description: string;
    price: number;
    category: string;
    image: string;
    isNew?: boolean;
    potency: string; // e.g. "10mg THC" or "24% THC"
    rating: number;
    type: 'edible' | 'flower' | 'concentrate';
    effects?: string[];
    flavors?: string[];
    terpenes?: string[];
    potencyLevel?: number; // 0-100
    feelLevel?: number; // 0-100 (Calming to Energizing)
}

export const products: Product[] = [
    {
        id: '1',
        slug: 'cosmic-brownies',
        name: 'Cosmic Brownies',
        description: 'Rich, slow-crafted chocolate squares dusted with stardust.',
        price: 24.00,
        category: 'edibles',
        image: 'https://images.unsplash.com/photo-1610452330455-2ff114002e3b?q=80&w=600&auto=format&fit=crop', // placeholder
        isNew: true,
        potency: '10mg THC',
        rating: 4.9,
        type: 'edible'
    },
    {
        id: '2',
        slug: 'matcha-marshmallows',
        name: 'Matcha Marshmallows',
        description: 'Light, chewy, and infused with premium matcha tea.',
        price: 18.00,
        category: 'edibles',
        image: 'https://images.unsplash.com/photo-1542441991-38167f25902b?q=80&w=600&auto=format&fit=crop',
        potency: '5mg THC',
        rating: 4.8,
        type: 'edible'
    },
    {
        id: '3',
        slug: 'infused-biscoff-butter',
        name: 'Infused Biscoff Butter',
        description: 'Whipped and crafted for easy indulgence.',
        price: 32.00,
        category: 'edibles',
        image: 'https://images.unsplash.com/photo-1589781829631-4e78553229b1?q=80&w=600&auto=format&fit=crop',
        potency: '100mg THC',
        rating: 5.0,
        type: 'edible'
    },
    {
        id: '4',
        slug: 'moon-rocks-flower',
        name: 'Moon Rocks',
        description: 'Premium flower dipped in distillate and rolled in kief.',
        price: 45.00,
        category: 'flower',
        image: 'https://images.unsplash.com/photo-1603909223429-69bb71a1f420?q=80&w=600&auto=format&fit=crop',
        isNew: true,
        potency: '35% THC',
        rating: 4.7,
        type: 'flower',
        effects: ['Happy', 'Relaxed', 'Sleepy'],
        flavors: ['Earthly', 'Sweet', 'Pungent'],
        terpenes: ['Myrcene', 'Caryophyllene', 'Limonene'],
        potencyLevel: 90,
        feelLevel: 20 // Mostly calming
    },
    {
        id: '5',
        slug: 'stardust-live-resin',
        name: 'Stardust Live Resin',
        description: 'Full-spectrum extract with preserved terpenes.',
        price: 55.00,
        category: 'concentrates',
        image: 'https://images.unsplash.com/photo-1550989460-0adf9ea622e2?q=80&w=600&auto=format&fit=crop',
        potency: '78% THC',
        rating: 4.9,
        type: 'concentrate',
        effects: ['Energetic', 'Creative', 'Focused'],
        flavors: ['Citrus', 'Pine'],
        terpenes: ['Pinene', 'Terpinolene'],
        potencyLevel: 85,
        feelLevel: 80 // Mostly energizing
    },
    {
        id: '6',
        slug: 'lavender-sleep-drops',
        name: 'Lavender Sleep Drops',
        description: 'Calming tincture for your nightly ritual.',
        price: 38.00,
        category: 'oils',
        image: 'https://images.unsplash.com/photo-1515694346937-94d85e41e6f0?q=80&w=600&auto=format&fit=crop',
        potency: '500mg CBD : 50mg THC',
        rating: 4.8,
        type: 'concentrate',
        effects: ['Deep Sleep', 'Calm'],
        flavors: ['Lavender', 'Herbal'],
        terpenes: ['Linalool'],
        potencyLevel: 10,
        feelLevel: 0 // pure calm
    }
];
