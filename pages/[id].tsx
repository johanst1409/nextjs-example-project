import { GetServerSideProps, NextPage } from 'next';
import Link from 'next/link';
import PokemonHeader from '../components/pokedex/PokemonHeader';
import PokemonTypes from '../components/pokedex/PokemonTypes';
import { PokemonInterface } from '../types/pokemon';

interface PokemonProps {
    pokemon: PokemonInterface;
}

const Pokemon: NextPage<PokemonProps> = ({ pokemon }) => {
    return (
        <>
            <div>
                <Link href="/">Back</Link>
            </div>
            <PokemonHeader name={pokemon.name} image={pokemon.image} />
            <PokemonTypes types={pokemon.types} />
        </>
    );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
    const pokemonId = context.query.id instanceof Array ? context.query.id.join('') : context.query.id;
    const pokemon = await fetch(`${process.env.API_HOST}/pokemon/${pokemonId}`).then((response) => response.json());

    return {
        props: {
            pokemon: {
                ...pokemon,
                image: pokemon.sprites.other['official-artwork'].front_default,
            },
        },
    };
};

export default Pokemon;
