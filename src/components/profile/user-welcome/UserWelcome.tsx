import React from 'react';

interface UserWelcomeProps {
    name: string;
    role: string;
}

export const UserWelcome: React.FC<UserWelcomeProps> = ({ name, role }) => {
    return (
        <div className="flex items-center mb-4">
            <h2 className="text-lg font-semibold">Hola, {name}!</h2>
            <span className={`ml-2 px-2 py-1 rounded-full text-white ${role === 'admin' ? 'bg-blue-600' : 'bg-red-600'}`}>
                {role === 'admin' ? 'Administrador' : 'Hincha'}
            </span>
        </div>
    );
};