import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface AuthState {
    isAuthenticated: boolean;
    user: any | null;
    role: 'user' | 'admin' | 'guest';
    setAuthenticated: (value: boolean) => void;
    setUser: (user: any) => void;
    setRole: (role: 'user' | 'admin' | 'guest') => void;
    logout: () => void;
}

// Creación del store de autenticación con persistencia en localStorage
export const useAuthStore = create<AuthState>()(
    persist(
        (set) => ({
            isAuthenticated: false,
            user: null,
            role: 'guest',
            setAuthenticated: (value) => set({ isAuthenticated: value }),
            setUser: (user) => set({ user }),
            setRole: (role) => set({ role }),
            logout: () => set({ isAuthenticated: false, user: null, role: 'guest' }),
        }),
        {
            name: 'auth-storage', // Nombre del key de localStorage
        }
    )
);