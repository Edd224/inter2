'use client';

import { ReactNode, useEffect } from 'react';

interface ModalProps {
    onClose: () => void;
    children: ReactNode;
}

export default function Modal({ onClose, children }: ModalProps) {
    useEffect(() => {
        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose();
        };
        document.addEventListener('keydown', handleEsc);
        return () => document.removeEventListener('keydown', handleEsc);
    }, [onClose]);

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80"
            onClick={onClose}
        >
            <button
                className="absolute top-[10%] right-[10%] text-white text-2xl font-bold hover:text-gray-300"
                onClick={onClose}
            >
                ✕
            </button>

            <div
                className="relative max-w-7xl w-full mx-4"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="p-4">{children}</div>
            </div>
        </div>
    );
}
