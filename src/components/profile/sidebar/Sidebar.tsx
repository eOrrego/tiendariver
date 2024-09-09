'use client';

import { useRouter, usePathname } from 'next/navigation';
import { useAuthStore } from '@/store/authStore';
import { logoutUser } from '@/services/authService';

// Tipo para los ítems del menú
interface MenuItem {
    label: string;
    href?: string; // href opcional para redirección
    action?: () => void; // acción opcional para logout o funcionalidades adicionales
}

export const Sidebar = ({ role }: { role: 'guest' | 'user' | 'admin' }) => {
    const router = useRouter();
    const pathname = usePathname();
    const { logout } = useAuthStore();

    // Función para manejar el cierre de sesión
    const handleLogout = async () => {
        try {
            await logoutUser(); // Cierra la sesión en Firebase
            logout(); // Actualiza el estado de la sesión en el store
            router.push('/'); // Redirige a la página de inicio
        } catch (error) {
            console.error('Error al cerrar sesión:', error);
        }
    };

    // Definición de los ítems del menú según el rol
    const menuItems: MenuItem[] = [
        { label: 'Perfil', href: '/profile' },
        { label: 'Pedidos', href: '/orders' },
        ...(role === 'admin' ? [{ label: 'Administración', href: '/admin' }] : []),
        { label: 'Salir', action: handleLogout },
    ];

    return (
        <div className="w-1/4 bg-white p-4 shadow-md">
            <ul className="space-y-4">
                {menuItems.map((item, index) => (
                    <li key={index}>
                        {item.href ? (
                            <button
                                className={`text-left w-full px-4 py-2 hover:bg-gray-100 ${pathname === item.href ? 'bg-gray-100 font-semibold border-l-4 border-blue-500' : 'text-black'}`}
                                onClick={() => router.push(item.href ?? '')}
                            >
                                {item.label}
                            </button>
                        ) : (
                            <button
                                className="text-left w-full px-4 py-2 text-red-600 hover:bg-red-200"
                                onClick={item.action}
                            >
                                {item.label}
                            </button>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
};