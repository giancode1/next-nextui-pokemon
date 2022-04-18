import type { NextPage, GetStaticProps } from 'next';

import { Button, Text, theme, CssBaseline } from '@nextui-org/react';

import { Layout } from '../components/layouts';
import pokeApi from '../api/pokeApi';
import { PokemonListResponse, SmallPokemon } from '../interfaces/pokemon-list';

interface Props{
  pokemons: SmallPokemon[];
}

const HomePage: NextPage<Props> = ({pokemons}) => {
  //console.log(props); //si se muestra en la consola de la pagina
  //console.log(pokemons[0].name); 
  console.log(pokemons);

  return (
    <Layout title={'Listado de Pokémons'}>
      <h1>Hola</h1>
      <Button color="gradient" >
        Hola mundo
      </Button>

      <ul>
        {
          pokemons.map(({id,name}) => 
            <li key={id}>#{id}-{name}</li>
          )
        }
      </ul>

      



    </Layout>
  )
}

// snipet:
//nextgetStaticProps

// You should use getStaticProps when:
//- The data required to render the page is available at build time ahead of a user’s request.
//- The data comes from a headless CMS.
//- The data can be publicly cached (not user-specific).
//- The page must be pre-rendered (for SEO) and be very fast — getStaticProps generates HTML and JSON files, both of which can be cached by a CDN for performance.

//se ejecuta solo de lado del servidor,solo se ejecuta en build-time, no llega al cliente a excepcion de los props
//GetStaticProps solo usar en pages, por ejemplo no en componentes
//en desarrollo se ejecuta cada vez que se renderiza la pagina, en build se ejecuta solo una vez
export const getStaticProps: GetStaticProps = async (ctx) => { //solo se ejecuta en build-time
  const {data} = await pokeApi.get<PokemonListResponse>('/pokemon?limit=151');
  //console.log(data);         //en la consola
  //console.log("Hola mundo")  //en la consola
  const pokemons: SmallPokemon[] = data.results.map((pokemon, index) => ({
      ...pokemon,
      id: index + 1,
      img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${index+1}.svg`
    })
  );

  return {
    props: {
      // pokemons: data.results
      pokemons: pokemons
    }
  }
}

export default HomePage;
