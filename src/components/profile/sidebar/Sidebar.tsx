import React from 'react';
import Link from 'next/link';

interface SidebarProps {
    role: string;
}

export const Sidebar: React.FC<SidebarProps> = ({ role }) => {
    const menuItems = [
        { label: 'Perfil', href: '/profile' },
        { label: 'Pedidos', href: '/orders' },
        ...(role === 'admin' ? [{ label: 'Administración', href: '/admin' }] : []),
        { label: 'Salir', href: '/logout' },
    ];

    return (
        <nav className="w-1/4 p-4 bg-white shadow-md rounded-md">
            <ul className="space-y-2">
                {menuItems.map((item) => (
                    <li key={item.label}>
                        <Link href={item.href} className="block py-2 px-4 hover:bg-gray-100">
                            {item.label}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
};