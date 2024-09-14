'use client';

import React from 'react';

const ProfileLoading = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="text-center">
                <output className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full"></output>
                <span className="visually-hidden">Cargando...</span>
            </div>
            <p className="mt-4 text-gray-500">Cargando perfil...</p>
        </div>
    );
};

export default ProfileLoading;
