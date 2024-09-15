'use client';

import React, { useEffect, useState } from 'react';
import { useAuthStore } from '@/store/authStore';
import { useCheckoutStore } from '@/store/CheckoutStore';

interface PersonalDataFormProps {
    onNext: () => void;
}

export const PersonalDataForm: React.FC<PersonalDataFormProps> = ({ onNext }) => {
    const { user } = useAuthStore();
    const { personalData, setPersonalData } = useCheckoutStore();
    const [formData, setFormData] = useState(personalData);

    useEffect(() => {
        setFormData({
            ...formData,
            email: user?.email || '',
            firstName: user?.firstName || '',
            lastName: user?.lastName || '',
        });
    }, [user]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = () => {
        setPersonalData(formData);
        onNext();
    };

    return (
        <div className="bg-white p-4 shadow rounded-md mb-4">
            <h2 className="text-lg font-bold mb-4">1 - Datos Personales</h2>
            <form className="space-y-4">
                <div className="flex flex-col md:flex-row md:space-x-4">
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        readOnly
                        className="input input-bordered flex-1 bg-gray-100 cursor-not-allowed"
                    />
                    <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        readOnly
                        className="input input-bordered flex-1 bg-gray-100 cursor-not-allowed"
                    />
                </div>
                <div className="flex flex-col md:flex-row md:space-x-4">
                    <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        readOnly
                        className="input input-bordered flex-1 bg-gray-100 cursor-not-allowed"
                    />
                    <input
                        type="text"
                        name="dni"
                        placeholder="DNI*"
                        value={formData.dni}
                        onChange={handleChange}
                        className="input input-bordered flex-1"
                        required
                    />
                </div>
                <div className="flex flex-col md:flex-row md:space-x-4">
                    <input
                        type="tel"
                        name="phone"
                        placeholder="Teléfono*"
                        value={formData.phone}
                        onChange={handleChange}
                        className="input input-bordered flex-1"
                        required
                    />
                </div>
                <div className="form-control">
                    <label className="label cursor-pointer">
                        <span className="label-text">Entérate de todas nuestras ofertas y novedades por e-mail.</span>
                        <input type="checkbox" className="checkbox checkbox-primary" />
                    </label>
                </div>
                <button type="button" className="btn btn-primary w-full" onClick={handleSubmit}>
                    Continuar
                </button>
            </form>
        </div>
    );
};
