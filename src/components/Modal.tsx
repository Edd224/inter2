'use client';

import { ArrowCircleLeft, ArrowCircleRight } from '@phosphor-icons/react';
import { ReactNode, useEffect } from 'react';
import { useSwipeable } from 'react-swipeable';
import Image from 'next/image'

interface ModalProps {
  children: ReactNode;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}

export default function Modal({ children, onClose, onNext, onPrev }: ModalProps) {
  // Zatváranie ESC
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onNext();
      if (e.key === 'ArrowLeft') onPrev();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose, onNext, onPrev]);

  // Swipe
  const handlers = useSwipeable({
    onSwipedLeft: () => onNext(),
    onSwipedRight: () => onPrev(),
    trackMouse: true,
  });

  return (
    <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
      <div {...handlers} className="relative w-full h-full flex items-center justify-center p-4">
        {/* Tlačidlo zatvorenia */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white text-3xl font-bold"
        >
          &times;
        </button>

        {/* Tlačidlá šípky */}
        <button
          onClick={onPrev}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white text-3xl px-2"
        >
          <ArrowCircleLeft size={34} />
        </button>

        {children}

        <button
          onClick={onNext}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white text-3xl px-2"
        >
          <ArrowCircleRight size={34} />
        </button>

      </div>
    </div>
  );
}
