import React, { useEffect } from 'react';
import { useState } from 'react';
import Link from 'next/link';
import { PokemonListItemInterface } from '../../types/pokemon';

interface PokemonTileProps {
    pokemon: PokemonListItemInterface;
}

const PokemonTile: React.FC<PokemonTileProps> = ({ pokemon }) => {
    const [id, setId] = useState<string>('');

    useEffect(() => {
        const array = pokemon.url.split('/');
        setId(array[array.length - 2]);
    }, [pokemon.url]);

    return (
        <li>
            <Link href={`/${id}`}>{pokemon.name}</Link>
        </li>
    );
};

export default PokemonTile;
