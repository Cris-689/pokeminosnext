'use client';
import { useLanguage } from "../context/LanguajeContext";

export default function Footer() {
    const { dict } = useLanguage();

    return (
        <footer className="container-fluid bg-light py-4 border-top mt-5">
            <div className="container text-center">
                <p className="text-muted mb-0">
                    © 2026 - {dict.message}
                </p>
            </div>
        </footer>
    );
}