'use client'
import { useLanguage } from "../context/LanguajeContext";

export default function Page() {
    const { dict } = useLanguage();

    return (
        <div className="container text-center my-5">
            <div className="d-flex justify-content-center">
                <div style={{ width: '200px' }}>
                    <h1>{dict.message}</h1>
                </div>
            </div>
        </div>
    );
}