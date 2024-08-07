'use client';

import { useState } from 'react';

export const NewsletterSection = () => {
    const [email, setEmail] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Aquí iría la lógica para enviar el email al backend o servicio de suscripción
        console.log('Email submitted:', email);
    };

    return (
        <section className="bg-black text-white py-8">
            <div className="container mx-auto text-center">
                <h2 className="text-2xl font-bold mb-4">RECIBÍ NOVEDADES EN TU MAIL</h2>
                <form onSubmit={handleSubmit} className="flex justify-center items-center w-full max-w-lg mx-auto">
                    <label htmlFor="email" className="sr-only">Correo Electrónico</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="INGRESÁ TU CORREO ELECTRÓNICO"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="p-3 w-full text-black"
                        required
                    />
                    <button
                        type="submit"
                        className="bg-red-600 text-white py-3 px-6"
                    >
                        OK
                    </button>
                </form>
            </div>
        </section>
    );
};
