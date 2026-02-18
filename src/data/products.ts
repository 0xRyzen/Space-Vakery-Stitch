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
    effects?: string[]; // Top effects for flower/concentrates
    terpenes?: string[]; // Terpenes list for flower/concentrates
    potencyLevel?: number; // Numeric potency level (0-100)
    feelLevel?: number; // Numeric feel level (0-100)
    additionalImages?: string[]; // Additional images for the gallery
}

import ProductImg from '/src/assets/images/spacevakery-mascot.png';

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
        type: 'edible',
        effects: ['Euphoric', 'Calm', 'Creative'],
        terpenes: ['Myrcene', 'Linalool', 'Caryophyllene'],
        potencyLevel: 8,
        feelLevel: 7,
        additionalImages: ['image1.jpg', 'image2.jpg']
    },
    {
        id: '2',
        slug: 'matcha-clouds',
        name: 'Matcha Clouds',
        description: 'Sativa • 5mg THC',
        potency: 'Sativa • 5mg THC',
        price: 24.00,
        image: ProductImg,
        category: 'edibles',
        isNew: true,
        type: 'edible',
        effects: ['Energetic', 'Focus', 'Uplifting'],
        terpenes: ['Limonene', 'Pinene', 'Terpinolene'],
        potencyLevel: 5,
        feelLevel: 6
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
        type: 'edible',
        effects: ['Relaxing', 'Sedative', 'Focus'],
        terpenes: ['Terpinolene', 'Caryophyllene', 'Linalool'],
        potencyLevel: 9,
        feelLevel: 8,
        additionalImages: ['image3.jpg', 'image4.jpg']
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
        type: 'edible',
        effects: ['Sedative', 'Calm', 'Focus'],
        terpenes: ['Myrcene', 'Linalool', 'Caryophyllene'],
        potencyLevel: 7,
        feelLevel: 6,
        additionalImages: ['image5.jpg', 'image6.jpg']
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
    },
    {
        id: '6',
        slug: 'stardust-cookies',
        name: 'Stardust Cookies',
        description: 'Hybrid • 15mg THC',
        potency: 'Hybrid • 15mg THC',
        price: 16.00,
        category: 'edibles',
        image: ProductImg,
        isNew: true,
        type: 'edible',
        effects: ['Uplifting', 'Creative', 'Social'],
        terpenes: ['Limonene', 'Pinene', 'Caryophyllene'],
        potencyLevel: 6,
        feelLevel: 5
    },
    {
        id: '7',
        slug: 'nebula-gummies',
        name: 'Nebula Gummies',
        description: 'Sativa • 10mg THC per piece',
        potency: 'Sativa • 10mg THC',
        price: 28.00,
        category: 'edibles',
        image: ProductImg,
        isNew: true,
        type: 'edible',
        effects: ['Energetic', 'Focus', 'Euphoric'],
        terpenes: ['Terpinolene', 'Limonene', 'Pinene'],
        potencyLevel: 7,
        feelLevel: 8
    },
    {
        id: '8',
        slug: 'galaxy-caramels',
        name: 'Galaxy Caramels',
        description: 'Hybrid • 25mg THC',
        potency: 'Hybrid • 25mg THC',
        price: 22.00,
        category: 'edibles',
        image: ProductImg,
        isNew: true,
        type: 'edible',
        effects: ['Balanced', 'Relaxed', 'Creative'],
        terpenes: ['Myrcene', 'Caryophyllene', 'Humulene'],
        potencyLevel: 8,
        feelLevel: 7
    },
    {
        id: '9',
        slug: 'moonlight-macarons',
        name: 'Moonlight Macarons',
        description: 'Indica • 20mg THC',
        potency: 'Indica • 20mg THC',
        price: 32.00,
        category: 'edibles',
        image: ProductImg,
        isNew: true,
        type: 'edible',
        effects: ['Calm', 'Sleepy', 'Relaxed'],
        terpenes: ['Linalool', 'Myrcene', 'Caryophyllene'],
        potencyLevel: 7,
        feelLevel: 6
    },
    {
        id: '10',
        slug: 'astral-truffles',
        name: 'Astral Truffles',
        description: 'Hybrid • 30mg THC',
        potency: 'Hybrid • 30mg THC',
        price: 42.00,
        category: 'edibles',
        image: ProductImg,
        isNew: true,
        type: 'edible',
        effects: ['Euphoric', 'Creative', 'Relaxed'],
        terpenes: ['Caryophyllene', 'Limonene', 'Myrcene'],
        potencyLevel: 9,
        feelLevel: 8
    }
];

export const getProducts = () => products;
export const getProductBySlug = (slug: string) => products.find(p => p.slug === slug);
