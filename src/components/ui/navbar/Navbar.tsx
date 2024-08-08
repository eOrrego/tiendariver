'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const menuItems = [
    { name: 'Novedades', categories: [], image: null },
    {
        name: 'Fútbol',
        categories: ['Ediciones Vigentes', 'Ediciones Anteriores', 'Calzados y Medias'],
        image: { src: 'https://tiendariver.vteximg.com.br/arquivos/futbol_1.jpg', title: 'Indumentaria Oficial de Fútbol', link: '/products' },
    },
    {
        name: 'Entrenamiento',
        categories: ['Camisetas y Musculosas', 'Shorts y Pantalones', 'Abrigos'],
        image: { src: 'https://tiendariver.vteximg.com.br/arquivos/Entrenamiento.jpg', title: 'Indumentaria Oficial de Entrenamiento', link: '/products' },
    },
    {
        name: 'Tiempo Libre',
        categories: ['Remeras y Chombas', 'Abrigos', 'Shorts y Pantalones'],
        image: { src: 'https://tiendariver.vteximg.com.br/arquivos/tiempolibre.jpg', title: 'Tiempo Libre', link: '/products' },
    },
    {
        name: 'Productos Oficiales',
        categories: ['Gorras', 'Infantiles', 'Regalos', 'Bazar', 'Librería'],
        image: { src: 'https://tiendariver.vteximg.com.br/arquivos/productos.jpg', title: 'Producto Oficial', link: '/products' },
    },
    {
        name: 'Oportunidades',
        categories: ['Fútbol', 'Indumentaria', 'Bazar-Accesorios'],
        image: { src: '/path/to/image5.jpg', title: 'Oportunidades Especiales', link: '/products' },
    },
];

export const Navbar = () => {
    const [hoveredMenu, setHoveredMenu] = useState<string | null>(null);

    const handleMouseEnter = (menu: string) => {
        if (menu !== 'Novedades') {
            setHoveredMenu(menu);
        }
        if (menu === 'Novedades') {
            setHoveredMenu(null);
        }
    };

    const handleMouseLeave = () => {
        setHoveredMenu(null);
    };

    return (
        <nav className="bg-white shadow-md relative" onMouseLeave={handleMouseLeave}>
            <ul className="flex justify-around p-4">
                {menuItems.map((item) => (
                    <li
                        key={item.name}
                        className={`relative hover:text-red-500  ${hoveredMenu === item.name ? 'text-red-500' : ''}`}
                        onMouseEnter={() => handleMouseEnter(item.name)}
                    >
                        <Link href="/products" className="text-lg">
                            {item.name}
                        </Link>
                    </li>
                ))}
            </ul>
            {hoveredMenu && (
                <div className="absolute left-0 top-full w-full bg-gray-100 shadow-lg p-4 flex justify-center transition-all duration-300 ease-in-out transform scale-y-100 origin-top z-40">
                    <div className="flex max-w-6xl w-full justify-between h-64">
                        <div className="flex-1 flex flex-col items-center justify-center">
                            <ul>
                                {menuItems.find((item) => item.name === hoveredMenu)?.categories.map((category) => (
                                    <li key={category} className="py-3">
                                        <Link href="/products" className="text-gray-700">
                                            {category}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        {menuItems.find((item) => item.name === hoveredMenu)?.image && (
                            hoveredMenu !== 'Oportunidades' && (
                                <div className="flex bg-white p-3" style={{ width: '576px', height: '249px' }}>
                                    <div className="">
                                        <Image
                                            src={menuItems.find((item) => item.name === hoveredMenu)!.image!.src}
                                            alt={menuItems.find((item) => item.name === hoveredMenu)!.image!.title}
                                            width={240}
                                            height={219}
                                        />
                                    </div>
                                    <div className="flex flex-col justify-center ml-4">
                                        <h3 className="text-gray-700 h-14 w-48">  {menuItems.find((item) => item.name === hoveredMenu)!.image!.title}
                                        </h3>
                                        <Link
                                            href={menuItems.find((item) => item.name === hoveredMenu)!.image!.link}
                                            className="bg-black text-white mt-2 border border-black inline-block"
                                            style={{ width: '100px', height: '30px', lineHeight: '30px', textAlign: 'center' }}
                                        >
                                            VER MÁS
                                        </Link>
                                    </div>
                                </div>
                            )
                        )}
                    </div>
                </div>
            )}
        </nav>
    );
};
