'use client';

import { AuthBaseForm } from './AuthBaseForm';
import { z } from 'zod';
import { SubmitHandler } from 'react-hook-form';
import { loginUser } from '@/services/authService';
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';
import { useAuthStore } from '@/store/authStore';

// Esquema de validación para inicio de sesión
const loginSchema = z.object({
    email: z.string().email('Correo electrónico no válido'),
    password: z.string().min(6, 'La contraseña debe tener al menos 6 caracteres'),
});

type LoginInputs = z.infer<typeof loginSchema>;

export const LoginForm = () => {
    const router = useRouter();
    const { setAuthenticated, setUser, setRole } = useAuthStore();

    const handleLogin: SubmitHandler<LoginInputs> = async (data) => {
        try {
            const user = await loginUser(data.email, data.password);
            setAuthenticated(true);
            setUser(user);
            setRole((user as any).role); // Ahora obtenemos el rol desde Firestore
            toast.success('Inicio de sesión exitoso');
            router.push('/');
        } catch (error) {
            toast.error('Error al iniciar sesión: ' + (error as Error).message);
        }
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