'use client';
import PokemonCard from "../componentes/PokemonCard";
import { useLanguage } from "../context/LanguajeContext";

export default function Page() {
    const { dict } = useLanguage();

    return (
        <div className="container text-center my-5">
            <h1 className="display-4 fw-bold text-danger mb-3">{dict.title}</h1>
            <p className="lead text-muted mb-5">{dict.description}</p>
            
            <div className="d-flex justify-content-center">
                <div style={{ width: '250px' }}>
                    <PokemonCard />
                </div>
            </div>
        </div>
    );
}