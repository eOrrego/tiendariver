'use client';

import { CartList, CartSummary } from '@/components';
import React, { useState } from 'react';


const mockItems = [
    {
        id: 1,
        title: 'CAMPERA DEPORTIVA TEJIDA RIVER PLATE TALLE: S',
        size: 'S',
        price: 159999,
        quantity: 1,
        image: 'https://tiendariver.vteximg.com.br/arquivos/ids/171699-100-100/IP9653-Campera_Deportiva_Tejida_River_Plate_Negro-F.png',
    },
    {
        id: 2,
        title: 'REMERA RIVER PLATE TALLE: 2XL',
        size: '2XL',
        price: 55999,
        quantity: 1,
        image: 'https://tiendariver.vteximg.com.br/arquivos/ids/171697-100-100/HY0427-Remera-River-Plate-F.png',
    },
    {
        id: 3,
        title: 'BOLSA TIENDA RIVER TALLE: UNICO',
        size: 'UNICO',
        price: 499,
        quantity: 1,
        image: 'https://tiendariver.vteximg.com.br/arquivos/ids/171739-100-100/bolsa_gift-2.jpg',
    },
];

const CartPage = () => {
    const [items, setItems] = useState(mockItems);

    const handleIncrement = (id: number) => {
        setItems((prevItems) =>
            prevItems.map((item) =>
                item.id === id
                    ? { ...item, quantity: item.quantity + 1 }
                    : item
            )
        );
    };

    const handleDecrement = (id: number) => {
        setItems((prevItems) =>
            prevItems.map((item) =>
                item.id === id && item.quantity > 1
                    ? { ...item, quantity: item.quantity - 1 }
                    : item
            )
        );
    };

    const handleRemove = (id: number) => {
        setItems((prevItems) => prevItems.filter((item) => item.id !== id));
    };

    const handleClearCart = () => {
        setItems([]);
    };

    const handleApplyCoupon = () => {
        // Implement coupon logic
    };

    const handleSelectShipping = (option: 'home' | 'store') => {
        // Implement shipping selection logic
    };

    const subtotal = items.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
    );

    const shipping = 0; // Mock shipping cost
    const total = subtotal + shipping;

    return (
        <div className="container mx-auto p-6 flex flex-col md:flex-row justify-between">
            <div className="w-full md:w-2/3">
                <CartList
                    items={items}
                    onIncrement={handleIncrement}
                    onDecrement={handleDecrement}
                    onRemove={handleRemove}
                    onClearCart={handleClearCart}
                />
            </div>
            <div className="w-full md:w-1/3 mt-6 md:mt-0">
                <CartSummary
                    subtotal={subtotal}
                    shipping={shipping}
                    total={total}
                    onApplyCoupon={handleApplyCoupon}
                    onSelectShipping={handleSelectShipping}
                />
            </div>
        </div>
    );
};

export default CartPage;