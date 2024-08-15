'use client';

import { FaTrashAlt } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

interface Product {
    id: number;
    title: string;
    price: number;
    image: string;
    quantity: number;
}

interface PopoverCartProps {
    onClose: () => void;
}

const mockCartProducts: Product[] = [
    {
        id: 1,
        title: "Campera Deportiva Tejida River Plate",
        price: 159999,
        image: "https://tiendariver.vteximg.com.br/arquivos/ids/171699-100-100/IP9653-Campera_Deportiva_Tejida_River_Plate_Negro-F.png",
        quantity: 1,
    },
    {
        id: 2,
        title: "Remera River Plate Talle: 2XL",
        price: 55999,
        image: "https://tiendariver.vteximg.com.br/arquivos/ids/171697-100-100/HY0427-Remera-River-Plate-F.png",
        quantity: 2,
    },
];

export function PopoverCart({ onClose }: Readonly<PopoverCartProps>) {
    return (
        <div className="absolute right-0 top-16 mt-2 w-96 bg-white shadow-lg rounded-lg z-50">
            <div className="p-4">
                <div className="flex justify-between">
                    <h3 className="text-lg font-semibold">Carrito</h3>
                    <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
                        Cerrar
                    </button>
                </div>
                <div className="divide-y divide-gray-200">
                    {mockCartProducts.map((product) => (
                        <div key={product.id} className="py-4 flex justify-between items-center">
                            <div className="flex items-center">
                                <Image src={product.image} alt={product.title} width={50} height={50} />
                                <div className="ml-4">
                                    <p className="font-semibold">{product.title}</p>
                                    <p className="text-gray-500">Cantidad: {product.quantity}</p>
                                </div>
                            </div>
                            <div className="flex flex-col items-end">
                                <p className="font-semibold">${product.price.toLocaleString()}</p>
                                <button className="text-red-600 hover:text-red-800 mt-2">
                                    <FaTrashAlt />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="mt-4">
                    <p className="font-semibold text-right">
                        Subtotal: $
                        {mockCartProducts.reduce((total, product) => total + product.price * product.quantity, 0).toLocaleString()}
                    </p>
                    <Link href="/cart" className="w-full bg-black text-white py-2 mt-2 rounded block text-center">
                        Ir al Carrito
                    </Link>
                    <button className="w-full bg-red-600 text-white py-2 mt-2 rounded" onClick={onClose}>
                        Vaciar Carrito
                    </button>
                </div>
            </div>
        </div>
    );
}
