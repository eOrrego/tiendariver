'use client';

import { AuthBaseForm } from './AuthBaseForm';
import { z } from 'zod';
import { SubmitHandler } from 'react-hook-form';

// Esquema de validación para registro
const registerSchema = z
    .object({
        firstName: z.string().min(1, 'El nombre es requerido'),
        lastName: z.string().min(1, 'El apellido es requerido'),
        birthDate: z.string().refine((date) => !isNaN(Date.parse(date)), {
            message: 'Fecha de nacimiento inválida',
        }),
        email: z.string().email('Correo electrónico no válido'),
        confirmEmail: z.string().email('Correo electrónico no válido'),
        password: z.string().min(6, 'La contraseña debe tener al menos 6 caracteres'),
        confirmPassword: z.string().min(6, 'La contraseña debe tener al menos 6 caracteres'),
    })
    .refine((data) => data.email === data.confirmEmail, {
        message: 'Los correos electrónicos no coinciden',
        path: ['confirmEmail'],
    })
    .refine((data) => data.password === data.confirmPassword, {
        message: 'Las contraseñas no coinciden',
        path: ['confirmPassword'],
    });

type RegisterInputs = z.infer<typeof registerSchema>;

export const RegisterForm = () => {
    const handleRegister: SubmitHandler<RegisterInputs> = (data: RegisterInputs) => {
        console.log('Registrando usuario:', data);
        // Lógica para registrar al usuario con Firebase u otro servicio
    };

    return (
        <AuthBaseForm
            schema={registerSchema}
            onSubmit={handleRegister}
            fields={[
                { label: 'Nombre', type: 'text', name: 'firstName' },
                { label: 'Apellido', type: 'text', name: 'lastName' },
                { label: 'Fecha de Nacimiento', type: 'date', name: 'birthDate' },
                { label: 'Email', type: 'email', name: 'email' },
                { label: 'Confirmar Email', type: 'email', name: 'confirmEmail' },
                { label: 'Contraseña', type: 'password', name: 'password' },
                { label: 'Confirmar Contraseña', type: 'password', name: 'confirmPassword' },
            ]}
            buttonLabel="Registrarse"
        />
    );
};