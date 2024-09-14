// store/authStore.ts
import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { User } from '@/types/User'; // Importa el tipo User
import { getCurrentUser } from '@/services/authService'; // Asumiendo que este servicio obtiene la sesión actual

interface AuthState {
    isAuthenticated: boolean;
    user: User | null; // Cambia el tipo de any a User
    role: 'user' | 'admin' | 'guest';
    isLoading: boolean;
    setAuthenticated: (value: boolean) => void;
    setUser: (user: User | null) => void; // Actualiza para aceptar un User o null
    setRole: (role: 'user' | 'admin' | 'guest') => void;
    checkUserSession: () => void;
    logout: () => void;
}

export const useAuthStore = create<AuthState>()(
    persist(
        (set) => ({
            isAuthenticated: false,
            user: null,
            role: 'guest',
            isLoading: true,
            setAuthenticated: (value) => set({ isAuthenticated: value }),
            setUser: (user) => set({ user }), // Asegúrate de que 'user' sea de tipo User o null
            setRole: (role) => set({ role }),
            checkUserSession: async () => {
                try {
                    set({ isLoading: true });
                    const user = await getCurrentUser(); // Suponiendo que devuelve un User o null
                    if (user && user.email) { // Ahora TypeScript reconoce 'email' en 'user'
                        const role = user.role ?? 'user';
                        set({ isAuthenticated: true, user, role, isLoading: false });
                    } else {
                        set({ isAuthenticated: false, user: null, role: 'guest', isLoading: false });
                    }
                } catch {
                    set({ isAuthenticated: false, user: null, role: 'guest', isLoading: false });
                }
            },
            logout: () => set({ isAuthenticated: false, user: null, role: 'guest', isLoading: false }),
        }),
        {
            name: 'auth-storage', // Nombre del key de localStorage
        }
    )
);
