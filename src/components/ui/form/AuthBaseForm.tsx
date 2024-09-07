'use client';

import React from 'react';
import { useForm, SubmitHandler, FieldValues } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { FormInput } from './FormInput';

// Tipos comunes del formulario
interface AuthBaseFormProps<T extends FieldValues> {
    schema: z.ZodType<T>;
    onSubmit: SubmitHandler<T>;
    fields: Array<{
        label: string;
        type: string;
        name: keyof T;
    }>;
    buttonLabel: string;
}

export function AuthBaseForm<T extends FieldValues>({
    schema,
    onSubmit,
    fields,
    buttonLabel,
}: Readonly<AuthBaseFormProps<T>>) {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<T>({
        resolver: zodResolver(schema),
    });

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            {fields.map((field) => (
                <FormInput
                    key={String(field.name)}
                    label={field.label}
                    type={field.type}
                    name={String(field.name)}
                    register={register}
                    error={errors[field.name] as any}
                />
            ))}
            <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
                {buttonLabel}
            </button>
        </form>
    );
}