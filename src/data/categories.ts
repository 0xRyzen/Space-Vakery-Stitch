export interface Category {
    id: string;
    name: string;
    slug: string;
    description: string;
    image: string;
    icon?: string; // Optional icon property
    img?: string; // Optional img property
    desc?: string; // Optional desc property
}

export const categories: Category[] = [
    {
        id: '1',
        name: 'Brownies',
        slug: 'brownies',
        description: 'Rich, slow-crafted cosmic squares.',
        image: '/src/assets/images/spacevakery-mascot.png' 
    },
    {
        id: '2',
        name: 'Marshmallows',
        slug: 'marshmallows',
        description: 'Light, chewy, and infused.',
        image: '/src/assets/images/spacevakery-mascot.png' 
    },
    {
        id: '3',
        name: 'Butters',
        slug: 'butters',
        description: 'Whipped and crafted for indulgence.',
        image: '/src/assets/images/spacevakery-mascot.png' 
    },
    {
        id: '4',
        name: 'Oils',
        slug: 'oils',
        description: 'Premium oils designed for rituals.',
        image: '/src/assets/images/spacevakery-mascot.png' 
    },
    {
        id: '5',
        name: 'Resin & Batter',
        slug: 'concentrates',
        description: 'Potent, pure extracts.',
        image: '/src/assets/images/spacevakery-mascot.png' 
    },
    {
        id: '6',
        name: 'Flower',
        slug: 'flower',
        description: 'Curated artisanal buds.',
        image: '/src/assets/images/spacevakery-mascot.png' 
    }
];
