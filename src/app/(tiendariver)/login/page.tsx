import { LoginForm } from '@/components/ui/form/LoginForm';

const LoginPage = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="w-full max-w-md bg-white p-8 rounded shadow-md">
                <h2 className="text-2xl font-bold mb-4 text-center">Iniciar sesión</h2>
                <LoginForm />
                <p className="mt-4 text-center">
                    ¿No tienes una cuenta?{' '}
                    <a href="/register" className="text-blue-600 hover:underline">
                        Regístrate
                    </a>
                </p>
            </div>
        </div>
    );
};

export default LoginPage;
