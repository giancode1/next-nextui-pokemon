//rafce  exportacion por defecto
import { useState } from "react";

import { GetStaticProps, NextPage, GetStaticPaths } from "next";
import { Button, Card, Container, Grid, Image, Text } from "@nextui-org/react";

import {pokeApi} from '../../api';
import { Layout } from "../../components/layouts";
import { Pokemon, PokemonListResponse } from "../../interfaces";
import { localFavorites } from "../../utils";

import confetti from "canvas-confetti";

interface Props {
  pokemon: Pokemon;
}

const PokemonByNamePage: NextPage<Props> = ({ pokemon }) => {
    const [isInFavorites, setisInFavorites] = useState(localFavorites.existInFavorites(pokemon.id));

  const onToggleFavorite = () => {
    // console.log("id:" + pokemon.id);
    localFavorites.toggleFavorite(pokemon.id);
    setisInFavorites(!isInFavorites);
    if(!isInFavorites){
      confetti({
        zIndex: 999,
        particleCount: 100,
        spread: 360,
        angle: 60,
        origin: {
          x: 1,
          y: 0,
        },
      });
    }
  }
  return (
    <Layout title={pokemon.name}>
      <Grid.Container css={{marginTop: '5px'}} gap={2}>
        <Grid xs={12} sm={4} >
          <Card hoverable css={{padding: '30px'}}>
            <Card.Body css={{ p: 1 }}>
              <Card.Image 
                src={pokemon.sprites.other?.dream_world?.front_default || '/no-image.png'}
                alt={pokemon.name}
                width="100%"
                height={200}
              />
            </Card.Body>
            </Card>
          </Grid>

          <Grid xs={12} sm={8}>
            <Card>
              <Card.Header css={{display: "flex", justifyContent:'space-between' }}>
                <Text h1 transform="capitalize">{pokemon.name}</Text>
                
                <Button 
                  color="gradient" 
                  ghost={ !isInFavorites }
                  onClick={onToggleFavorite}
                >
                  { isInFavorites ? 'Remove from favorites' : 'Add to favorites' }
                </Button>
              </Card.Header>

              <Card.Body>
                <Text size={30}>Sprites:</Text>

                <Container direction='row' display='flex' gap={0}>
                  <Image 
                    src={pokemon.sprites.front_default}
                    alt={pokemon.name}
                    width={100}
                    height={100}
                  />
                  <Image 
                    src={pokemon.sprites.back_default}
                    alt={pokemon.name}
                    width={100}
                    height={100}
                  />
                  <Image 
                    src={pokemon.sprites.front_shiny}
                    alt={pokemon.name}
                    width={100}
                    height={100}
                  />
                  <Image 
                    src={pokemon.sprites.back_shiny}
                    alt={pokemon.name}
                    width={100}
                    height={100}
                  />

                  
                </Container>
              </Card.Body>
            </Card>


          </Grid>
      </Grid.Container>

    </Layout>
  );
};


export const getStaticPaths: GetStaticPaths = async (ctx) => {
    const { data } = await pokeApi.get<PokemonListResponse>('pokemon?limit=151');
    // const pokemons151Names = [...Array(151)].map((value, index) => `${data.results[index].name}`);
    const pokemons151Names: string[] = data.results.map(pokemon => pokemon.name);

  return {
    paths: pokemons151Names.map((name) => ({ params: { name } })), // { params: { name: 'bulbasaur' } }
    fallback: false, 
  };
}

export const getStaticProps: GetStaticProps = async ({params}) => {
    const { name } = params as { name: string };
    const { data } = await pokeApi.get<Pokemon>(`/pokemon/${name}`);
    
    //solo manda estos datos, para optimizar
    const pokemon ={
        id: data.id,
        name: data.name,
        sprites: data.sprites,
    }
    return {
      props: {
        // pokemon: data
        pokemon   //ES6
      },
    };
}

export default PokemonByNamePage;
//generar los 151 pokemons
//yarn build
//yarn start