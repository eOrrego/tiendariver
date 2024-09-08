import { useEffect } from 'react';
import { useAuthStore } from '@/store/authStore';
import { getCurrentUser } from '@/services/authService';

export const useAuth = () => {
    const { setAuthenticated, setUser, setRole } = useAuthStore();

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const user: any = await getCurrentUser();
                setAuthenticated(true);
                setUser(user);
                // Aquí implementar la lógica para determinar el rol del usuario
                const isAdmin = user.email === 'admin@mail.com';
                setRole(isAdmin ? 'admin' : 'user');
            } catch {
                setAuthenticated(false);
                setUser(null);
                setRole('guest');
            }
        };

        fetchUser();
    }, [setAuthenticated, setUser, setRole]);
};