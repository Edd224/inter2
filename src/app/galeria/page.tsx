'use client';

import { useState } from 'react';
import Image from 'next/image';
import Modal from '../../components/Modal';

const images = [
  '/gallery/72.jpg',
  '/gallery/711.jpg',
  '/gallery/73.jpg',
  '/gallery/68.jpg',
  '/gallery/64.jpg',
  '/gallery/45.jpg',
  '/gallery/70.jpg',
  '/gallery/67.jpg',
  '/gallery/50.jpg',
  '/gallery/49.jpg',
  '/gallery/63.jpg',
  '/gallery/42.jpg',
  '/gallery/65.jpg',
  '/gallery/40.jpg',
  '/gallery/60.jpg',
  '/gallery/59.jpg',
  '/gallery/58.jpg',
  '/gallery/57.jpg',
  '/gallery/56.jpg',
  '/gallery/55.jpg',
  '/gallery/54.jpg',
  '/gallery/53.jpg',
  '/gallery/52.jpg',
  '/gallery/51.jpg',
  '/gallery/48.jpg',
  '/gallery/47.jpg',
  '/gallery/46.jpg',
  '/gallery/44.jpg',
  '/gallery/43.jpg',
  '/gallery/42.jpg',
  '/gallery/41.jpg',
  '/gallery/62.jpg',
  '/gallery/39.jpg',
  '/gallery/38.jpg',
  '/gallery/37.jpg',
  '/gallery/36.jpg',
  '/gallery/35.jpg',
  '/gallery/34.jpg',
  '/gallery/33.jpg',
  '/gallery/32.jpg',
  '/gallery/31.jpg',
  '/gallery/30.jpg',
  '/gallery/Image7.jpg',
  '/gallery/Image1.jpg',
  '/gallery/5.jpg',
  '/gallery/2.jpg',
  '/gallery/7.jpg',
  // '/gallery/3.jpg',
  // '/gallery/4.jpg',
  '/gallery/6.jpg',
  '/gallery/23.jpg',
  '/gallery/1.jpg',
  '/gallery/Image3.jpg',
  '/gallery/8.jpg',
  '/gallery/10.jpg',
  '/gallery/11-min.jpg',
  '/gallery/12.jpg',
  '/gallery/13.jpg',
  '/gallery/14.jpg',
  '/gallery/15.jpg',
  '/gallery/16.jpg',
  '/gallery/17.jpg',
  '/gallery/18.jpg',
  '/gallery/19.jpg',
  '/gallery/20.jpg',
  '/gallery/21.jpg',
  '/gallery/22.jpg',
  '/gallery/24.jpg',
];

export default function GaleriaPage() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const handleClose = () => setSelectedIndex(null);
  const goNext = () =>
    setSelectedIndex((prev) => (prev !== null ? (prev + 1) % images.length : null));
  const goPrev = () =>
    setSelectedIndex((prev) =>
      prev !== null ? (prev - 1 + images.length) % images.length : null
    );

  return (
    <div className="p-4">
      <h1 className="text-4xl mb-10 font-bold text-center">Galéria</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {images.map((src, index) => (
          <div
            key={index}
            className="relative cursor-pointer overflow-hidden rounded shadow group"
            onClick={() => setSelectedIndex(index)}
          >
            <Image
              src={src}
              alt={`Obrázok ${index + 1}`}
              width={400}
              height={300}
              quality={85}
              className="w-full h-auto object-cover transition-transform duration-400 group-hover:scale-110"
            />

            {/* Dve logá zobrazované pri hover */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-black/70">
              <div className="flex gap-6 bg-white/60 p-4 rounded-l-full">
                <Image
                  src="/sketchup.png"
                  alt="SketchUp Logo"
                  width={80}
                  height={80}
                  className="object-contain"
                />
                <Image
                  src="/twinmotion.png"
                  alt="Twinmotion Logo"
                  width={80}
                  height={80}
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedIndex !== null && (
        <Modal onClose={handleClose} onNext={goNext} onPrev={goPrev}>
          <Image
            src={images[selectedIndex]}
            alt={`Obrázok ${selectedIndex + 1}`}
            width={1600}
            height={900}
            quality={90}
            className="max-w-full max-h-[90vh] object-contain rounded"
          />
        </Modal>
      )}
    </div>
  );
}
