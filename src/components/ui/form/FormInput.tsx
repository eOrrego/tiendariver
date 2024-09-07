'use client';

import React from 'react';
import { UseFormRegister, FieldError } from 'react-hook-form';

interface FormInputProps {
    label: string;
    type: string;
    name: string;
    register: UseFormRegister<any>;
    error?: FieldError;
    placeholder?: string;
    required?: boolean;
}

export const FormInput: React.FC<FormInputProps> = ({
    label,
    type,
    name,
    register,
    error,
    placeholder = '',
    required = false,
}) => {
    return (
        <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor={name}>
                {label}
            </label>
            <input
                type={type}
                id={name}
                {...register(name)}
                placeholder={placeholder}
                required={required}
                className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${error ? 'border-red-500' : ''
                    }`}
            />
            {error && <p className="text-red-500 text-xs mt-1">{error.message}</p>}
        </div>
    );
};
