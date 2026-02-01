'use client';
import Link from 'next/link';
import { useLanguage } from './context/LanguajeContext';

export default function NotFound() {
    const { dict } = useLanguage();

    return (
        <div className="container text-center my-5 py-5">
            <h1 className="display-1 fw-bold text-danger">404</h1>
            <h2 className="mb-4">{dict.notFoundTitle}</h2>
            <Link href="/inicio" className="btn btn-outline-danger btn-lg">
                {dict.backToHome}
            </Link>
        </div>
    );
}