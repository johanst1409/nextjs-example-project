import React from 'react';
import { PokemonListItemInterface } from '../../types/pokemon';
import { PokemonTile } from './';

interface PokemonListProps {
    pokemon: PokemonListItemInterface[];
}

const PokemonList: React.FC<PokemonListProps> = ({ pokemon }) => {
    return (
        <ul>
            {pokemon.map((creature, index) => {
                return <PokemonTile pokemon={creature} key={index} />;
            })}
        </ul>
    );
};

export default PokemonList;
