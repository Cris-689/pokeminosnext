'use client'; // Añadimos esto para usar el context
import Image from 'next/image';
import { useLanguage } from "../context/LanguajeContext";

export function CustomHeader() {
  const { dict } = useLanguage();

  return (
    <header className="container-fluid bg-light py-1 border-bottom shadow-sm">
      <div className="d-flex justify-content-center align-items-center" style={{ height: '200px', position: 'relative' }}>
        <div className="w-50 h-75 position-relative">
          <Image
            src="/fondo.png"
            alt={dict.bannerAlt}
            fill
            priority
            className="object-contain"
          />
        </div>
      </div>
    </header>
  );
};