// src/app/(tiendariver)/profile/orders/page.tsx
'use client';

import { Orders } from '@/components';

const OrdersPage = () => {
    return (
        <div className="container mx-auto p-6">
            <h1 className="text-2xl font-bold text-center mb-6">Mis Órdenes</h1>
            <Orders />
        </div>
    );
};

export default OrdersPage;
