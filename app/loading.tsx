'use client';
import { useLanguage } from './context/LanguajeContext';

export default function Loading() {
    const { dict } = useLanguage();

    return (
        <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '50vh' }}>
            <div className="text-center">
                <div className="spinner-border text-danger" role="status" style={{ width: '3rem', height: '3rem' }}>
                    <span className="visually-hidden">{dict.loading}</span>
                </div>
                <p className="mt-3 fw-bold text-danger text-uppercase">{dict.loading}</p>
            </div>
        </div>
    );
}