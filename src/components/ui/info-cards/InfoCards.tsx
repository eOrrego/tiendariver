'use client';

import React, { useState } from 'react';
import { InfoModal } from '../info-modal/InfoModal';
import { FaCreditCard, FaTruck, FaBoxOpen, FaSyncAlt } from 'react-icons/fa';


const cardData = [
    {
        icon: <FaCreditCard className="text-3xl mr-4 text-red-600" />,
        title: 'Pagá en cuotas',
        content: 'Medios de pago',
        modalContent: 'Promo 25% OFF Tarjeta BBVA River...'
    },
    {
        icon: <FaSyncAlt className="text-3xl mr-4 text-red-600" />,
        title: 'Primer cambio gratis',
        content: 'Ver condiciones',
        modalContent: 'Se aplican condiciones para el primer cambio gratis...'
    },
    {
        icon: <FaTruck className="text-3xl mr-4 text-red-600" />,
        title: 'Envíos a todo el país',
        content: 'Ver condiciones',
        modalContent: 'Realizamos envíos a todo el país bajo ciertas condiciones...'
    },
    {
        icon: <FaBoxOpen className="text-3xl mr-4 text-red-600" />,
        title: 'Cambios Puerta a Puerta',
        content: 'Ver condiciones',
        modalContent: 'Puedes realizar cambios puerta a puerta bajo ciertas condiciones...'
    },
];

export const InfoCards = () => {
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
            {cardData.map((card, index) => (
                <button
                    key={index}
                    className="flex items-center p-4 bg-white shadow-lg rounded-lg"
                    onClick={() => openModal(card.title, card.modalContent)}
                >
                    <div className="text-3xl mr-4">{card.icon}</div>
                    <div>
                        <h3 className="text-lg font-semibold">{card.title}</h3>
                        <p className="text-gray-500">{card.content}</p>
                    </div>
                </button>
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
