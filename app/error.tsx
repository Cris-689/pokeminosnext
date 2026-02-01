'use client';
import { useEffect } from 'react';
import { useLanguage } from './context/LanguajeContext';

export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
    const { dict } = useLanguage();

    useEffect(() => {
        console.error(error);
    }, [error]);

    return (
        <div className="container text-center my-5 py-5">
            <h2 className="text-danger mb-4">{dict.errorTitle || 'Error'}</h2>
            <button className="btn btn-danger px-4" onClick={() => reset()}>
                {dict.errorButton || 'Retry'}
            </button>
        </div>
    );
}