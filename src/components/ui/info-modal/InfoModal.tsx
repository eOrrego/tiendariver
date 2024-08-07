
import { FaTimes } from 'react-icons/fa';

export interface InfoModalProps {
    isOpen: boolean;
    closeModal: () => void;
    title: string;
    content: string;
}

export const InfoModal = ({ isOpen, closeModal, title, content }: InfoModalProps) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white rounded-lg p-6 max-w-md w-full relative">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-bold">{title}</h2>
                    <button onClick={closeModal} className="text-red-600 text-2xl">
                        <FaTimes />
                    </button>
                </div>
                <p className="mt-4">{content}</p>
            </div>
        </div>
    );
};