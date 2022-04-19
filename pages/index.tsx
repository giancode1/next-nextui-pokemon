import type { NextPage, GetStaticProps } from 'next';

import { Grid } from '@nextui-org/react';

import { Layout } from '../components/layouts';
import {pokeApi} from '../api';
import { PokemonListResponse, SmallPokemon } from '../interfaces/pokemon-list';
import { PokemonCard } from '../components/pokemon';

interface Props{
  pokemons: SmallPokemon[];
}

const HomePage: NextPage<Props> = ({pokemons}) => {
  //console.log(pokemons);

  return (
    <Layout title={'Listado de Pokémons'}>

      <Grid.Container gap={2} justify="center">
        {
          pokemons.map( (pokemon) => (
            <PokemonCard key={pokemon.id} pokemon={pokemon} />
          ))
        }
      </Grid.Container>

    </Layout>
  )
}

// snipet:
//nextgetStaticProps

//se ejecuta solo de lado del servidor,solo se ejecuta en build-time, no llega al cliente a excepcion de los props
//GetStaticProps solo usar en pages, por ejemplo no en componentes
//en desarrollo se ejecuta cada vez que se renderiza la pagina, en build se ejecuta solo una vez
export const getStaticProps: GetStaticProps = async (ctx) => { //solo se ejecuta en build-time
  const {data} = await pokeApi.get<PokemonListResponse>('/pokemon?limit=151');
  //console.log(data);         //en la consola
  const pokemons: SmallPokemon[] = data.results.map((pokemon, index) => ({
      ...pokemon,
      id: index + 1,
      img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${index+1}.svg`
    })
  );

  return {
    props: {
      pokemons: pokemons
    }
  }
}

export default HomePage;
