'use client';
import { useParams, notFound } from 'next/navigation';
import { useEffect, useState } from 'react';
import PokemonCard from '../componentes/PokemonCard';
import { useLanguage } from '../context/LanguajeContext';

const RANGE: Record<string, { start: number; end: number }> = {
    gen1: { start: 1, end: 151 },
    gen2: { start: 152, end: 251 },

    gen4: { start: 387, end: 493 },
    gen5: { start: 494, end: 649 },
    gen6: { start: 650, end: 721 },
    gen7: { start: 722, end: 809 },
    gen8: { start: 810, end: 905 },
    gen9: { start: 906, end: 1025 },
};

export default function GeneracionDinamica() {
    const { gen } = useParams();
    const { dict } = useLanguage();
    const [ids, setIds] = useState<number[]>([]);

    useEffect(() => {
        const range = RANGE[gen as string];

        if (range) {
            const newIds: number[] = [];
            const count = range.end - range.start + 1;

            while (newIds.length < 10) {
                const randomId = Math.floor(Math.random() * count) + range.start;
                if (!newIds.includes(randomId)) {
                    newIds.push(randomId);
                }
            }
            setIds(newIds);
        }
    }, [gen]);

    if (!RANGE[gen as string]) {
        notFound();
    }

    return (
        <div className="container py-4">
            <h2 className="text-center text-danger mb-4 text-uppercase fw-bold">
                {dict[gen as string] || gen}
            </h2>

            <div className="row row-cols-2 row-cols-md-5 g-3">
                {ids.map((id) => (
                    <div className="col" key={id}>
                        <PokemonCard id={id} />
                    </div>
                ))}
            </div>
        </div>
    );
}