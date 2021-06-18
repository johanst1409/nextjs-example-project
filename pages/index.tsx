import { GetServerSideProps, NextPage } from 'next'
import { useState } from 'react'
import PokemonList from '../components/pokemon/PokemonList'
import { PokemonListItemInterface } from '../types/pokemon'

interface HomeProps {
  initialPage: number;
  pokemon: PokemonListItemInterface[];
  totalCount: number;
}

const Home: NextPage<HomeProps> = ({ pokemon, initialPage, totalCount }) => {
  const [pokemonList, setPokemonList] = useState<PokemonListItemInterface[]>(pokemon);
  const [currentPage, setCurrentPage] = useState<number>(initialPage);

  const loadMore = () => {
    const nextPage = currentPage + 1;
    const pokemon = fetch(
      `${process.env.NEXT_PUBLIC_VERCEL_URL}/api/pokemon/page/${nextPage}`
    ).then(response => response.json()).then(data => {

      setPokemonList([
        ...pokemonList,
        ...data.results
      ]);
      setCurrentPage(nextPage);
    });
  }

  return (
      <>
        <PokemonList pokemon={pokemonList} />
        { (pokemonList.length < totalCount) && 
          <button type="button" onClick={loadMore}>Load more</button>
        }
      </>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const currentPage = 1;
  const pokemon = await fetch(`${process.env.NEXT_PUBLIC_VERCEL_URL}/api/pokemon/page/${currentPage}`).then(response => response.json());
  return {
    props: {
      initialPage: currentPage,
      pokemon: pokemon.results,
      totalCount: pokemon.count
    }
  }
}

export default Home;