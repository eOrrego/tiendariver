// src/app/(tiendariver)/profile/layout.tsx
'use client';

import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuthStore } from '@/store/authStore';
import { Sidebar } from '@/components'; // Asegúrate de importar el Sidebar correctamente

const ProfileLayout = ({ children }: { children: React.ReactNode }) => {
    const { isAuthenticated, role } = useAuthStore();
    const router = useRouter();

    // Verifica si el usuario está autenticado y redirige si no lo está
    useEffect(() => {
        if (!isAuthenticated) {
            router.push('/login'); // Redirige a la página de inicio de sesión si no está autenticado
        }
    }, [isAuthenticated, router]);

    // Evita renderizar cualquier contenido si no está autenticado
    if (!isAuthenticated) return null;

    return (
        <div className="min-h-screen flex bg-gray-100">
            <Sidebar role={role} />
            <div className="flex-1 p-6">
                <header className="bg-white p-4 shadow-md">
                    <h1 className="text-2xl font-bold text-center">Mi cuenta</h1>
                </header>
                <main className="container mx-auto flex flex-col lg:flex-row p-6 gap-6">
                    {children}
                </main>
            </div>
        </div>
    );
};

export default ProfileLayout;
