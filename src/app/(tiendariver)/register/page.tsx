import { RegisterForm } from '@/components/ui/form/RegisterForm';

const RegisterPage = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="w-full max-w-lg bg-white p-8 rounded shadow-md">
                <h2 className="text-2xl font-bold mb-4 text-center">Registrarse</h2>
                <RegisterForm />
                <p className="mt-4 text-center">
                    ¿Ya tienes una cuenta?{' '}
                    <a href="/login" className="text-blue-600 hover:underline">
                        Iniciar sesión
                    </a>
                </p>
            </div>
        </div>
    );
};

export default RegisterPage;
