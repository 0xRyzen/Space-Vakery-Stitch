import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface CartItem {
    id: string; // unique line item id
    productId: string;
    skuId: string;
    name: string;
    price: number;
    qty: number;
    image: string;
    variantName?: string;
}

interface CartState {
    items: CartItem[];
    isOpen: boolean;
    addItem: (item: CartItem) => void;
    removeItem: (skuId: string) => void;
    updateQty: (skuId: string, qty: number) => void;
    toggleCart: () => void;
    subtotal: () => number;
    clearCart: () => void;
}

export const useCartStore = create<CartState>()(
    persist(
        (set, get) => ({
            items: [],
            isOpen: false,
            addItem: (item) => {
                const items = get().items;
                const existingItem = items.find((i) => i.productId === item.productId && i.skuId === item.skuId);
                if (existingItem) {
                    set({
                        items: items.map((i) =>
                            i.id === existingItem.id ? { ...i, qty: i.qty + item.qty } : i
                        ),
                        isOpen: true,
                    });
                } else {
                    set({
                        items: [...items, { ...item, id: Math.random().toString(36).substr(2, 9) }],
                        isOpen: true,
                    });
                }
            },
            removeItem: (id) => set({ items: get().items.filter((i) => i.id !== id) }),
            updateQty: (id, qty) => {
                if (qty <= 0) {
                    get().removeItem(id);
                } else {
                    set({ items: get().items.map((i) => (i.id === id ? { ...i, qty } : i)) });
                }
            },
            toggleCart: () => set({ isOpen: !get().isOpen }),
            subtotal: () => {
                const state = get();
                return state.items.reduce((acc, item) => acc + item.price * item.qty, 0);
            },
            clearCart: () => set({ items: [] }),
        }),
        {
            name: 'space-vakery-cart',
        }
    )
);
