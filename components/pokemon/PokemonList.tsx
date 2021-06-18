import React from "react";
import PokemonTile from "./PokemonTile";

interface PokemonListProps {
    pokemon: any[];
}

const PokemonList: React.FC<PokemonListProps> = ({ pokemon }) => {
    return (
        <>
            {pokemon.map((creature, index) => {
                return <PokemonTile pokemon={creature} key={index} />
            })}
        </>
    )
}

export default PokemonList;