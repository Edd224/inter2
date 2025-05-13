'use client';

import { useState } from 'react';
import Image from 'next/image';
import Modal from '../../components/Modal';

const images = [
  '/gallery/1.jpg',
  '/gallery/2.jpg',
  '/gallery/3.jpg',
  '/gallery/4.jpg',
  '/gallery/5.jpg',
  '/gallery/6.jpg',
  '/gallery/7.jpg',
  '/gallery/8.jpg',
  '/gallery/9.jpg',
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
  '/gallery/23.jpg',
  '/gallery/24.jpg',



];

export default function GaleriaPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="p-4">
      <div className="flex flex-col items-center justify-center gap-6 mb-10">
        <h1 className="text-4xl font-bold text-center">Galéria</h1>

        <div className="flex flex-col sm:flex-row items-center gap-6">
          <div className="flex flex-col items-center">
            <Image
              src="/sketchup.png"
              alt="SketchUp logo"
              className="bg-white p-3 rounded shadow w-[180px] h-[60px] object-contain"
              width={180}
              height={60}
              unoptimized
            />
            <span className="mt-2 text-sm text-white">SketchUp</span>
          </div>

          <div className="flex flex-col items-center">
            <Image
              src="/twinmotion.png"
              alt="Twinmotion logo"
              className="bg-white p-3 rounded shadow w-[180px] h-[60px] object-contain"
              width={180}
              height={60}
              unoptimized
            />
            <span className="mt-2 text-sm text-white">Twinmotion</span>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {images.map((src, index) => (
          <div
            key={index}
            className="cursor-pointer overflow-hidden rounded shadow"
            onClick={() => setSelectedImage(src)}
          >
            <Image
              src={src}
              alt={`Obrázok ${index + 1}`}
              width={400}
              height={300}
              className="w-full h-auto object-cover hover:scale-105 transition-transform duration-200"
            />
          </div>
        ))}
      </div>

      {selectedImage && (
        <Modal onClose={() => setSelectedImage(null)}>
          <Image
            src={selectedImage}
            alt="Zväčšený obrázok"
            width={1200}
            height={800}
            className="w-full h-auto max-h-[90vh] object-contain rounded"
          />
        </Modal>
      )}
    </div>
  );
}
