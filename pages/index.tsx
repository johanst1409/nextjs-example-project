import { GetServerSideProps, NextPage } from 'next'
import PokemonList from '../components/pokemon/PokemonList'
import { PokemonListItemInterface } from '../types/pokemon'

interface HomeProps {
  pokemon: PokemonListItemInterface[];
}

const Home: NextPage<HomeProps> = ({ pokemon }) => {
  return (
      <PokemonList pokemon={pokemon} />
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const pokemon = await fetch(`${process.env.API_HOST}/pokemon?limit=20&offset=0`).then(response => response.json());
  return {
    props: {
      pokemon: pokemon?.results
    }
  }
}

export default Home;