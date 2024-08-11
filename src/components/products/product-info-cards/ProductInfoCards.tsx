'use client';

import { InfoModal } from '@/components';
import React, { useState } from 'react';
import { FaCreditCard, FaSyncAlt, FaTruck, FaBoxOpen } from 'react-icons/fa';

const cardData = [
    {
        icon: <FaCreditCard className="text-4xl" />,
        title: 'Cuotas y Formas de Pago',
        modalContent: 'Promo 25% OFF Tarjeta BBVA River...'
    },
    {
        icon: <FaSyncAlt className="text-4xl" />,
        title: 'Cambios y Devoluciones',
        modalContent: 'Se aplican condiciones para el primer cambio gratis...'
    },
    {
        icon: <FaTruck className="text-4xl" />,
        title: 'Tiempos y Costos de Envío',
        modalContent: 'Realizamos envíos a todo el país bajo ciertas condiciones...'
    },
    {
        icon: <FaBoxOpen className="text-4xl" />,
        title: 'Cambios Puerta a Puerta',
        modalContent: 'Puedes realizar cambios puerta a puerta bajo ciertas condiciones...'
    },
];

export const ProductInfoCards = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const [modalContent, setModalContent] = useState({ title: '', content: '' });

    const openModal = (title: string, content: string) => {
        setModalContent({ title, content });
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
    };

    return (
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 p-4 mt-4 border-t border-gray-300">
            {cardData.map((card, index) => (
                <div
                    key={index}
                    className="flex flex-col items-center cursor-pointer text-center hover:text-red-500 transition-colors duration-300 ease-in-out"
                    onClick={() => openModal(card.title, card.modalContent)}
                >
                    <div>{card.icon}</div>
                    <h3 className="text-sm mt-2">{card.title}</h3>
                </div>
            ))}
            <InfoModal
                isOpen={modalOpen}
                closeModal={closeModal}
                title={modalContent.title}
                content={modalContent.content}
            />
        </div>
    );
};
