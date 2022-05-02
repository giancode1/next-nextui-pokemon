//rafce  exportacion por defecto
import { useState } from "react";

import { GetStaticProps, NextPage, GetStaticPaths } from "next";
import { Button, Card, Container, Grid, Image, Text } from "@nextui-org/react";

import { pokeApi } from '../../api';
import { Layout } from "../../components/layouts";
import { PokemonListResponse, PokemonInfo } from "../../interfaces";
import { getPokemonInfo, localFavorites } from "../../utils";

import confetti from "canvas-confetti";


interface Props {
  pokemon: PokemonInfo;
}

const PokemonByNamePage: NextPage<Props> = ({ pokemon }) => {
  const [isInFavorites, setisInFavorites] = useState(localFavorites.existInFavorites(pokemon.id));

  // console.log("pokemon:", pokemon);

  const onToggleFavorite = () => {
    // console.log("id:" + pokemon.id);
    localFavorites.toggleFavorite(pokemon.id);
    setisInFavorites(!isInFavorites);
    if (!isInFavorites) {
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
      <Grid.Container css={{ marginTop: '5px' }} gap={2}>

        <Grid xs={12} sm={4} >
          <Card hoverable css={{ padding: '15px' }}>
            <Text
              h1
              transform="capitalize"
              css={{
                textAlign: "center",
              }}
            >
              {pokemon.name}
            </Text>
            <Card.Body css={{ p: 1, display: 'flex', justifyContent: 'space-between' }}>
              
              
              <Card.Image
                src={pokemon.sprites.other?.dream_world?.front_default || '/no-image.png'}
                alt={pokemon.name}
                width="100%"
                height={200}
              />

              <Grid.Container gap={0.2} justify="center" css={{marginTop:"10px"}}>
                <Grid >
                  <Card bordered shadow={false}>
                     weight : {pokemon.weight}
                  </Card>
                </Grid>

                <Grid >
                  <Card bordered shadow={false}>
                    height : {pokemon.height}
                  </Card>
                </Grid>
 
                <Grid>
                  <Card bordered shadow={false}>
                    type : {pokemon.types.map((element, index) => element.type.name).join(', ')}
                  </Card>
                </Grid>
              </Grid.Container>
             
            </Card.Body>
          </Card>
        </Grid>

        <Grid xs={12} sm={8}>
          <Card>
            <Card.Header>
              <Container display='flex' justify="center">
                <Button
                  color="gradient"
                  ghost={!isInFavorites}
                  onClick={onToggleFavorite}
                >
                  {isInFavorites ? 'Remove from favorites' : 'Add to favorites'}
                </Button>
                
              </Container>
              
            </Card.Header>

            <Card.Body>
            <Text size={28}>Abilities:</Text>
            <Container direction='row' display='flex' gap={0} justify='center'>
                  {
                    pokemon.abilities.map((ability, index) => (
                      <Grid key={index}>
                        <Card hoverable bordered shadow={false} >
                          {ability.ability.name}
                        </Card>
                      </Grid>
                    ))
                  }
              </Container>
              <Text size={28}>Sprites:</Text>

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
    fallback: 'blocking',
  };
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { name } = params as { name: string };
  const pokemon = await getPokemonInfo(name);
  console.log("pokemon::::", pokemon);
  if (!pokemon) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      }
    }
  }

  return {
    props: {
      pokemon,
    },
    // revalidate: 86400,
  }
};

export default PokemonByNamePage;
//generar los 151 pokemons
//yarn build
//yarn start