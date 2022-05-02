//rafce  exportacion por defecto
import { useState } from "react";

import { GetStaticProps, NextPage, GetStaticPaths } from "next";
import { Button, Card, Container, Grid, Image, Text } from "@nextui-org/react";

import { Layout } from "../../components/layouts";
import { PokemonInfo } from "../../interfaces";
import { localFavorites } from "../../utils";

import confetti from "canvas-confetti";
import { getPokemonInfo } from '../../utils/getPokemonInfo';


interface Props {
  pokemon: PokemonInfo;
}


const PokemonPage: NextPage<Props> = ({ pokemon }) => {
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

//snipet nextstaticpaths
// You should use getStaticPaths if you’re statically pre-rendering pages that use dynamic routes
//si no tuviera el path de forma dinamica: [id] , no deberia hacer esto
//se ejecuta del lado del servidor, y solo en build time
//tambn se ejecuta en desarrollo cuando se recarga la pag
export const getStaticPaths: GetStaticPaths = async (ctx) => {
  const pokemons151 = [...Array(151)].map((value, index) => `${index + 1}`);
  //console.log("pokemons151:", pokemons151);
  return {
    paths: pokemons151.map((id) => ({ params: { id } })), // paths: [{ params: { id: '1' } }, { params: { id: '2' } }, ...]
    //fallback: false, //no deja pasar, sino existe el id definido arriba
    fallback: 'blocking', 	
  };
};

//primero se ejecuta getStaticPaths y despues getStaticProps
// export const getStaticProps: GetStaticProps = async (ctx) => {
//console.log("ctx.params:", ctx.params); //el parametro de la url
export const getStaticProps: GetStaticProps = async ({ params }) => {
  
  const { id } = params as { id: string };
  
  const pokemon = await getPokemonInfo( id );

  if( !pokemon ){
    return{
      redirect: {
        destination: '/',
        permanent: false,
      }
    }
  }


  return {
    props: {
      pokemon   //ECMAScript 6
    },
    //revalidate: 86400, //segundos  //60 * 60 * 24 //cada 24 horas se vuelve a ejecutar
  };
};

export default PokemonPage;

//generar los 151 pokemons
//yarn build
//yarn start