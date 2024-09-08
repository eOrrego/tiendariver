import React from 'react';

interface ProfileDetailsProps {
    user: {
        firstName: string;
        lastName: string;
        email: string;
        birthDate: string;
        // Otros datos de usuario necesarios
    };
}

export const ProfileDetails: React.FC<ProfileDetailsProps> = ({ user }) => {
    return (
        <div className="bg-white p-6 rounded-md shadow-md mb-4">
            <h3 className="text-lg font-bold mb-4">Perfil</h3>
            <div className="grid grid-cols-2 gap-4">
                <div>
                    <p><strong>Nombre:</strong> {user.firstName}</p>
                    <p><strong>Apellido:</strong> {user.lastName}</p>
                    <p><strong>Email:</strong> {user.email}</p>
                    <p><strong>Fecha de Nacimiento:</strong> {user.birthDate}</p>
                </div>
                <div>
                    <button className="text-blue-600 hover:underline">EDITAR</button>
                </div>
            </div>
        </div>
    );
};