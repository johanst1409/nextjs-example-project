import { GetServerSideProps, NextPage } from "next";
import PokemonHeader from "../components/pokedex/PokemonHeader";
import PokemonTypes from "../components/pokedex/PokemonTypes";

interface PokemonProps {
    pokemon: {
        name: string;
        sprites: {
            other: {
                'official-artwork': {
                    front_default: string;
                }
            }
        };
        types: {
            type: {
                name: string;
            }
        }[]
    }
}

const Pokemon: NextPage<PokemonProps> = ({ pokemon }) => {
    return (
        <>
            <PokemonHeader
                name={pokemon.name}
                image={pokemon.sprites.other['official-artwork'].front_default}
            />
            <PokemonTypes
                types={pokemon.types}
            />
        </>  
    )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
    const pokemonId = context.query.id instanceof Array ? context.query.id.join("") : context.query.id;
    const pokemon = await fetch(`${process.env.API_HOST}/pokemon/${pokemonId}`).then(response => response.json());

    return {
        props: {
            pokemon: pokemon
        }
    };
}

export default Pokemon;