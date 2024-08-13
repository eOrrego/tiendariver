'use client';

import React, { useState } from 'react';
import { FaCreditCard, FaTruck, FaBoxOpen, FaSyncAlt } from 'react-icons/fa';

interface CheckoutPageProps {
    // Define the props if necessary
}

const CheckoutPage: React.FC<CheckoutPageProps> = () => {
    const [step, setStep] = useState(1);

    const nextStep = () => {
        setStep(prev => prev + 1);
    };

    const prevStep = () => {
        setStep(prev => (prev > 1 ? prev - 1 : 1));
    };

    return (
        <div className="flex flex-col lg:flex-row justify-between p-6">
            <div className="lg:w-2/3">
                {step === 1 && <PersonalDataForm onNext={nextStep} />}
                {step === 2 && <DeliveryForm onNext={nextStep} onBack={prevStep} />}
                {step === 3 && <PaymentForm onBack={prevStep} />}
            </div>
            <div className="lg:w-1/3 lg:ml-6">
                <CheckoutSummary />
            </div>
        </div>
    );
};

export default CheckoutPage;

interface PersonalDataFormProps {
    onNext: () => void;
}

const PersonalDataForm: React.FC<PersonalDataFormProps> = ({ onNext }) => {
    return (
        <div className="bg-white p-4 shadow rounded-md mb-4">
            <h2 className="text-lg font-bold mb-4">1 - Datos Personales</h2>
            <form className="space-y-4">
                <div className="flex flex-col md:flex-row md:space-x-4">
                    <input
                        type="email"
                        placeholder="Email*"
                        className="input input-bordered flex-1"
                        required
                    />
                    <input
                        type="text"
                        placeholder="Nombre*"
                        className="input input-bordered flex-1"
                        required
                    />
                </div>
                <div className="flex flex-col md:flex-row md:space-x-4">
                    <input
                        type="text"
                        placeholder="Apellido*"
                        className="input input-bordered flex-1"
                        required
                    />
                    <input
                        type="text"
                        placeholder="DNI*"
                        className="input input-bordered flex-1"
                        required
                    />
                </div>
                <div className="flex flex-col md:flex-row md:space-x-4">
                    <input
                        type="tel"
                        placeholder="Teléfono*"
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
                <button type="button" className="btn btn-primary w-full" onClick={onNext}>
                    Continuar
                </button>
            </form>
        </div>
    );
};

interface DeliveryFormProps {
    onNext: () => void;
    onBack: () => void;
}

const DeliveryForm: React.FC<DeliveryFormProps> = ({ onNext, onBack }) => {
    return (
        <div className="bg-white p-4 shadow rounded-md mb-4">
            <h2 className="text-lg font-bold mb-4">2 - Entrega / Retiro</h2>
            <form className="space-y-4">
                <div className="flex space-x-4">
                    <button type="button" className="btn flex-1" onClick={onNext}>
                        Enviar (en domicilio)
                    </button>
                    <button type="button" className="btn flex-1" onClick={onNext}>
                        Retirar (por un punto)
                    </button>
                </div>
                <input
                    type="text"
                    placeholder="Código postal"
                    className="input input-bordered w-full"
                    required
                />
                <p className="text-sm text-gray-500">¿No sabes tu código postal?</p>
                <div className="space-y-2">
                    <h3 className="text-md font-semibold">Método de entrega</h3>
                    <div className="flex items-center">
                        <input
                            type="radio"
                            name="delivery"
                            className="radio radio-primary"
                            required
                        />
                        <span className="ml-2">En hasta 5 días hábiles - Gratis</span>
                    </div>
                </div>
                <div className="form-control">
                    <label className="label">
                        Dirección de entrega:
                        <input
                            type="text"
                            placeholder="Dirección"
                            className="input input-bordered w-full"
                            required
                        />
                    </label>
                </div>
                <div className="flex justify-between">
                    <button type="button" className="btn btn-secondary" onClick={onBack}>
                        Volver
                    </button>
                    <button type="button" className="btn btn-primary" onClick={onNext}>
                        Continuar
                    </button>
                </div>
            </form>
        </div>
    );
};

interface PaymentFormProps {
    onBack: () => void;
}

const PaymentForm: React.FC<PaymentFormProps> = ({ onBack }) => {
    return (
        <div className="bg-white p-4 shadow rounded-md mb-4">
            <h2 className="text-lg font-bold mb-4">3 - Pago</h2>
            <form className="space-y-4">
                <div className="tabs">
                    <a className="tab tab-lifted tab-active">Tarjeta de Crédito</a>
                    <a className="tab tab-lifted">Tarjeta de Débito</a>
                    <a className="tab tab-lifted">Mercado Pago</a>
                </div>
                <input
                    type="text"
                    placeholder="Número de Tarjeta"
                    className="input input-bordered w-full"
                    required
                />
                <div className="grid grid-cols-2 gap-4">
                    <input
                        type="text"
                        placeholder="Nombre y Apellido como figura en la tarjeta"
                        className="input input-bordered"
                        required
                    />
                    <input
                        type="text"
                        placeholder="Fecha de Vencimiento (MM/AA)"
                        className="input input-bordered"
                        required
                    />
                </div>
                <input
                    type="text"
                    placeholder="Código de Seguridad"
                    className="input input-bordered w-full"
                    required
                />
                <button type="button" className="btn btn-secondary w-full" onClick={onBack}>
                    Volver
                </button>
                <button type="submit" className="btn btn-primary w-full">
                    Iniciar Pago
                </button>
            </form>
        </div>
    );
};

const CheckoutSummary = () => {
    return (
        <div className="bg-white p-4 shadow rounded-md mb-4 sticky top-0">
            <h2 className="text-lg font-bold mb-4">Resumen de compra</h2>
            {/* Aquí agregarás el contenido del resumen del carrito, similar al componente `CartList` */}
            <div className="space-y-4">
                <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span>$216,497.00</span>
                </div>
                <div className="flex justify-between">
                    <span>Gastos de envío</span>
                    <span>Gratis</span>
                </div>
                <div className="flex justify-between font-bold text-lg">
                    <span>Total</span>
                    <span>$216,497.00</span>
                </div>
                <button type="button" className="btn btn-primary w-full">
                    Iniciar Pago
                </button>
            </div>
        </div>
    );
};
