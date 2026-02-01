'use client';
import { useParams, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { ProgressBar, Button } from 'react-bootstrap';
import { useLanguage } from '../../context/LanguajeContext';

export default function PokemonDetailPage() {
    const { id } = useParams();
    const router = useRouter();
    const { dict } = useLanguage();
    const [pokemon, setPokemon] = useState<any>(null);

    useEffect(() => {
        if (id) {
            fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
                .then(res => res.json())
                .then(data => setPokemon(data))
                .catch(err => console.error(err));
        }
    }, [id]);

    if (!pokemon) return (
        <div className="text-center mt-5">
            <div className="spinner-border text-danger"></div>
            <p className="mt-2 text-muted">{dict.loading}</p> 
        </div>
    );

    return (
        <div className="container d-flex justify-content-center py-5">
            <div className="card shadow-lg p-4 text-center" style={{ maxWidth: '500px', width: '100%' }}>
                <h2 className="text-capitalize fw-bold">{pokemon.name}</h2>

                <img
                    src={pokemon.sprites.other['official-artwork'].front_default || pokemon.sprites.front_default}
                    alt={pokemon.name}
                    className="img-fluid my-3 mx-auto"
                    style={{ width: '250px' }}
                />
                {/*Esto muestra la parte de las estadisticas con una barra de progreso*/}
                <div className="text-start mt-3">
                    <h5 className="border-bottom pb-2">{dict.stats}</h5>
                    {pokemon.stats.map((s: any) => (
                        <div key={s.stat.name} className="mb-3">
                            <div className="d-flex justify-content-between small text-capitalize">
                                <span>{s.stat.name}</span>
                                <span className="fw-bold">{s.base_stat}</span>
                            </div>
                            <ProgressBar
                                variant="danger"
                                now={s.base_stat}
                                max={255}
                                style={{ height: '10px' }}
                            />
                        </div>
                    ))}
                </div>

                <div className="mt-4">
                    <Button variant="danger" className="px-5" onClick={() => router.back()}>
                        {dict.close}
                    </Button>
                </div>
            </div>
        </div>
    );
}