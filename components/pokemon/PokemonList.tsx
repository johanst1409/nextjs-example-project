import React from "react";
import { PokemonListItemInterface } from "../../types/pokemon";
import PokemonTile from "./PokemonTile";

interface PokemonListProps {
    pokemon: PokemonListItemInterface[];
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