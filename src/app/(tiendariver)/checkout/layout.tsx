'use client';

import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuthStore } from '@/store/authStore';

const CheckoutLayout = ({ children }: { children: React.ReactNode }) => {
    const { isAuthenticated } = useAuthStore();
    const router = useRouter();

    useEffect(() => {
        if (!isAuthenticated) {
            router.push('/login'); // Redirige a login si no está autenticado
        }
    }, [isAuthenticated, router]);

    // No renderiza el contenido si el usuario no está autenticado
    if (!isAuthenticated) return null;

    return <>{children}</>;
};

export default CheckoutLayout;
