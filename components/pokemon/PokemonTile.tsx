import { useEffect } from "react";
import { useState } from "react";
import { PokemonListItemInterface } from "../../types/pokemon";

interface PokemonTileProps {
    pokemon: PokemonListItemInterface;
}

const PokemonTile: React.FC<PokemonTileProps> = ({ pokemon }) => {
    const [id, setId] = useState<string>("");

    useEffect(() => {
        const array = pokemon.url.split("/");
        console.log(array);
        setId(array[array.length - 2]);
    }, []);

    return (
        <a href={`/${id}`}>
            <h2>{pokemon.name}</h2>
        </a>
    )
}

export default PokemonTile;