'use client';

import { AuthBaseForm } from './AuthBaseForm';
import { z } from 'zod';
import { SubmitHandler } from 'react-hook-form'; // Import the SubmitHandler type

// Esquema de validación para inicio de sesión
const loginSchema = z.object({
    email: z.string().email('Correo electrónico no válido'),
    password: z.string().min(6, 'La contraseña debe tener al menos 6 caracteres'),
});

type LoginInputs = z.infer<typeof loginSchema>;

export const LoginForm = () => {
    const handleLogin: SubmitHandler<LoginInputs> = (data) => {
        console.log('Iniciando sesión:', data);
        // Lógica para iniciar sesión con Firebase u otro servicio
    };

    return (
        <AuthBaseForm
            schema={loginSchema}
            onSubmit={handleLogin}
            fields={[
                { label: 'Email', type: 'email', name: 'email' },
                { label: 'Contraseña', type: 'password', name: 'password' },
            ]}
            buttonLabel="Iniciar sesión"
        />
    );
};