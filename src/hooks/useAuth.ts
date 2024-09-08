import { useEffect } from 'react';
import { useAuthStore } from '@/store/authStore';
import { getCurrentUser } from '@/services/authService';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '@/config/firebaseConfig';

export const useAuth = () => {
    const { setAuthenticated, setUser, setRole } = useAuthStore();

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const user = await getCurrentUser();

                if (user) {
                    // Obtener datos adicionales del usuario desde Firestore
                    const userDoc = await getDoc(doc(db, 'users', user.uid));
                    if (userDoc.exists()) {
                        const userData = userDoc.data();
                        setAuthenticated(true);
                        setUser({ ...user, ...userData }); // Combina los datos de autenticación y Firestore
                        setRole(userData.role || 'user'); // Configura el rol basado en la información obtenida
                    } else {
                        // Si no se encuentran los datos adicionales, maneja el error según sea necesario
                        setAuthenticated(false);
                        setUser(null);
                        setRole('guest');
                    }
                } else {
                    setAuthenticated(false);
                    setUser(null);
                    setRole('guest');
                }
            } catch (error) {
                console.error('Error fetching user:', error);
                setAuthenticated(false);
                setUser(null);
                setRole('guest');
            }
        };

        fetchUser();
    }, [setAuthenticated, setUser, setRole]);
};