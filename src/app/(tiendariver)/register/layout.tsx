// src/app/(tiendariver)/register/layout.tsx
'use client';

import { ReactNode, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuthStore } from '@/store/authStore';
import Loading from './loading';

interface AuthLayoutProps {
    children: ReactNode;
}

const RegisterLayout: React.FC<AuthLayoutProps> = ({ children }) => {
    const { isAuthenticated, isLoading, checkUserSession } = useAuthStore((state) => ({
        isAuthenticated: state.isAuthenticated,
        isLoading: state.isLoading,
        checkUserSession: state.checkUserSession,
    }));
    const router = useRouter();

    useEffect(() => {
        checkUserSession();
    }, [checkUserSession]);

    useEffect(() => {
        if (!isLoading && isAuthenticated) {
            router.push('/profile'); // Redirige al perfil si el usuario está autenticado
        }
    }, [isAuthenticated, isLoading, router]);

    // Muestra un loading state si está verificando la sesión
    if (isLoading) return <Loading />;

    // No renderiza los hijos si el usuario está autenticado
    if (isAuthenticated) return null;

    return <>{children}</>;
};

export default RegisterLayout;
