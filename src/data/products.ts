// src/data/products.ts
// Matching the HTML mockup data

export interface Product {
    id: string;
    slug: string;
    name: string;
    description: string;
    price: number;
    category: string;
    image: string;
    potency?: string;
    type?: string;
    rating?: number;
    isNew?: boolean;
    // ... other fields if needed
}

import ProductImg from '../assets/images/spacevakery-mascot.png';

export const products: Product[] = [
    {
        id: '1',
        slug: 'cosmic-cupcake',
        name: 'Cosmic Cupcake',
        description: 'Hybrid • 10mg THC',
        potency: 'Hybrid • 10mg THC',
        price: 12.00,
        category: 'edibles',
        image: ProductImg,
        isNew: true,
        type: 'edible'
    },
    {
        id: '2',
        slug: 'matcha-clouds',
        name: 'Matcha Clouds',
        description: 'Sativa • 5mg THC',
        potency: 'Sativa • 5mg THC',
        price: 24.00,
        category: 'edibles',
        image: ProductImg,
        isNew: true,
        type: 'edible'
    },
    {
        id: '3',
        slug: 'biscoff-butter',
        name: 'Biscoff Butter',
        description: 'Indica • 100mg THC',
        potency: 'Indica • 100mg THC',
        price: 45.00,
        category: 'edibles',
        image: ProductImg,
        isNew: false,
        type: 'edible'
    },
    {
        id: '4',
        slug: 'midnight-brownie',
        name: 'Midnight Brownie',
        description: 'Indica • 50mg THC',
        potency: 'Indica • 50mg THC',
        price: 18.00,
        category: 'edibles',
        image: ProductImg,
        isNew: true,
        type: 'edible'
    },
    {
        id: '5',
        slug: 'lavender-sleep-drops',
        name: 'Lavender Sleep Drops',
        description: 'Calming tincture for your nightly ritual.',
        potency: '500mg CBD : 50mg THC',
        price: 38.00,
        category: 'oils',
        image: ProductImg,
        isNew: false,
        type: 'concentrate'
    }
];

export const getProducts = () => products;
export const getProductBySlug = (slug: string) => products.find(p => p.slug === slug);
