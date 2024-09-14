'use client';

import { useRouter, usePathname } from 'next/navigation';
import { useAuthStore } from '@/store/authStore';
import { logoutUser } from '@/services/authService';

interface MenuItem {
    label: string;
    href?: string;
    action?: () => void;
}

export const Sidebar = ({ role }: { role: 'guest' | 'user' | 'admin' }) => {
    const router = useRouter();
    const pathname = usePathname();
    const { logout } = useAuthStore();

    const handleLogout = async () => {
        try {
            await logoutUser();
            logout();
            router.push('/');
        } catch (error) {
            console.error('Error al cerrar sesión:', error);
        }
    };

    const menuItems: MenuItem[] = [
        { label: 'Perfil', href: '/profile' },
        { label: 'Pedidos', href: '/orders' },
        ...(role === 'admin' ? [{ label: 'Administración', href: '/admin' }] : []),
        { label: 'Salir', action: () => { handleLogout(); } },
    ];

    return (
        <aside className="h-screen sticky top-0 w-60 bg-white p-4 shadow-md">
            <ul className="space-y-4">
                {menuItems.map((item) => (
                    <li key={item.label}>
                        {item.href ? (
                            <button
                                className={`text-left w-full px-4 py-2 hover:bg-gray-100 ${pathname === item.href ? 'bg-gray-100 font-semibold border-l-4 border-blue-500' : 'text-black'
                                    }`}
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
        </aside>
    );
};
