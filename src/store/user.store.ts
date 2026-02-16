import { create } from 'zustand';

interface UserState {
    user: { name: string; email: string } | null;
    login: (user: { name: string; email: string }) => void;
    logout: () => void;
}

export const useUserStore = create<UserState>((set) => ({
    user: null,
    login: (user) => set({ user }),
    logout: () => set({ user: null }),
}));
