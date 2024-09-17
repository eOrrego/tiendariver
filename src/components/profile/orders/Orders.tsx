// src/components/profile/Orders.tsx
'use client';

import React, { useEffect, useState } from 'react';
import { fetchUserOrders } from '@/services/orderService';
import { useAuthStore } from '@/store/authStore';
import { OrderData } from '@/types/Order';

export const Orders = () => {
    const { user } = useAuthStore();
    const [orders, setOrders] = useState<OrderData[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const getOrders = async () => {
            if (!user) {
                setError('Debes estar logueado para ver tus órdenes.');
                setLoading(false);
                return;
            }

            try {
                setLoading(true);
                const userOrders = await fetchUserOrders(user.email);
                setOrders(userOrders);
                setLoading(false);
            } catch (error) {
                setError('Error al cargar las órdenes.');
                setLoading(false);
            }
        };

        getOrders();
    }, [user]);

    if (loading) {
        return <p className="text-center">Cargando órdenes...</p>;
    }

    if (error) {
        return <p className="text-center text-red-500">{error}</p>;
    }

    if (orders.length === 0) {
        return <p className="text-center">No tienes órdenes registradas.</p>;
    }

    return (
        <div className="grid gap-4">
            {orders.map((order) => (
                <div key={order.id} className="bg-white p-4 rounded-lg shadow-md">
                    <h3 className="text-lg font-bold mb-2">Orden #{order.id}</h3>
                    <p className="text-gray-700">Fecha: {order.createdAt.toDateString()}</p>
                    <p className="text-gray-700">Total de productos: {order.cartProducts.length}</p>
                    <p className="text-gray-700">Método de entrega: {order.deliveryData.deliveryMethod}</p>
                    <p className="text-gray-700 font-bold">Total: ${order.cartProducts.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2)}</p>
                </div>
            ))
            }
        </div >
    );
};
