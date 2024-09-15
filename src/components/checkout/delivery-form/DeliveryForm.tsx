'use client';

import React, { useState } from 'react';
import { useCheckoutStore } from '@/store/CheckoutStore';

interface DeliveryFormProps {
    onNext: () => void;
    onBack: () => void;
}

export const DeliveryForm: React.FC<DeliveryFormProps> = ({ onNext, onBack }) => {
    const { deliveryData, setDeliveryData } = useCheckoutStore();
    const [formData, setFormData] = useState(deliveryData);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = () => {
        setDeliveryData(formData);
        onNext();
    };

    return (
        <div className="bg-white p-4 shadow rounded-md mb-4">
            <h2 className="text-lg font-bold mb-4">2 - Entrega / Retiro</h2>
            <form className="space-y-4">
                <div className="flex space-x-4">
                    <button type="button" className="btn flex-1" onClick={() => setFormData({ ...formData, deliveryMethod: 'home' })}>
                        Enviar (en domicilio)
                    </button>
                    <button type="button" className="btn flex-1" onClick={() => setFormData({ ...formData, deliveryMethod: 'store' })}>
                        Retirar (por un punto)
                    </button>
                </div>
                <input
                    type="text"
                    name="postalCode"
                    placeholder="Código postal"
                    value={formData.postalCode}
                    onChange={handleChange}
                    className="input input-bordered w-full"
                    required
                />
                <div className="form-control">
                    <label className="label">
                        Dirección de entrega:
                        <input
                            type="text"
                            name="address"
                            placeholder="Dirección"
                            value={formData.address}
                            onChange={handleChange}
                            className="input input-bordered w-full"
                            required
                        />
                    </label>
                </div>
                <div className="flex justify-between">
                    <button type="button" className="btn btn-secondary" onClick={onBack}>
                        Volver
                    </button>
                    <button type="button" className="btn btn-primary" onClick={handleSubmit}>
                        Continuar
                    </button>
                </div>
            </form>
        </div>
    );
};
