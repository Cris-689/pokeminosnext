'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useLanguage } from "../context/LanguajeContext";

export default function PokemonCard({ id }: { id?: number }) {
    const { dict } = useLanguage();
    const [pokemon, setPokemon] = useState<any>(null);
    const [error, setError] = useState(false)

    useEffect(() => {
        setError(false);
        const pokemonId = id || Math.floor(Math.random() * 1025) + 1;
        fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`)
            .then(res => {
                if (!res.ok) throw new Error('Fail');
                return res.json();
            })
            .then(data => setPokemon(data))
            .catch(() => setError(true));
    }, [id]);

    if (error) return <div className="alert alert-danger p-2 small text-center">Error al cargar</div>;
    if (!pokemon) return (
        <div className="d-flex flex-column align-items-center m-5">
            <div className="spinner-border text-danger"></div>
            <span className="small mt-2">{dict.loading}</span>
        </div>
    ); return (
        <div className="card shadow-sm h-100">
            <img
                src={pokemon.sprites.other['official-artwork'].front_default || pokemon.sprites.front_default}
                className="card-img-top p-2"
                alt={pokemon.name}
            />
            <div className="card-body text-center p-2">
                <h6 className="card-title text-capitalize mb-1">{pokemon.name}</h6>
                <p className="small text-muted mb-2">#{pokemon.id}</p>
                <Link href={`/pokemon/${pokemon.id}`} className="btn btn-sm btn-outline-danger w-100">
                    {dict.viewDetail}
                </Link>
            </div>
        </div>
    );
}