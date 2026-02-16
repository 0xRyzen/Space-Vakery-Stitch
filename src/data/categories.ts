export interface Category {
    id: string;
    name: string;
    slug: string;
    description: string;
    image: string;
}

export const categories: Category[] = [
    {
        id: '1',
        name: 'Brownies',
        slug: 'brownies',
        description: 'Rich, slow-crafted cosmic squares.',
        image: 'https://images.unsplash.com/photo-1620364964645-0d65b7999863?q=80&w=600&auto=format&fit=crop'
    },
    {
        id: '2',
        name: 'Marshmallows',
        slug: 'marshmallows',
        description: 'Light, chewy, and infused.',
        image: 'https://images.unsplash.com/photo-1542441991-38167f25902b?q=80&w=600&auto=format&fit=crop'
    },
    {
        id: '3',
        name: 'Butters',
        slug: 'butters',
        description: 'Whipped and crafted for indulgence.',
        image: 'https://images.unsplash.com/photo-1589781829631-4e78553229b1?q=80&w=600&auto=format&fit=crop'
    },
    {
        id: '4',
        name: 'Oils',
        slug: 'oils',
        description: 'Premium oils designed for rituals.',
        image: 'https://images.unsplash.com/photo-1515694346937-94d85e41e6f0?q=80&w=600&auto=format&fit=crop'
    },
    {
        id: '5',
        name: 'Resin & Batter',
        slug: 'concentrates',
        description: 'Potent, pure extracts.',
        image: 'https://images.unsplash.com/photo-1550989460-0adf9ea622e2?q=80&w=600&auto=format&fit=crop'
    },
    {
        id: '6',
        name: 'Flower',
        slug: 'flower',
        description: 'Curated artisanal buds.',
        image: 'https://images.unsplash.com/photo-1603909223429-69bb71a1f420?q=80&w=600&auto=format&fit=crop'
    }
];
