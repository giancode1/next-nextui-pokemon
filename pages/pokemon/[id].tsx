//rafce  exportacion por defecto
import { GetStaticProps, NextPage, GetStaticPaths } from "next";
import { Layout } from "../../components/layouts";
import pokeApi from '../../api/pokeApi';
import { Pokemon } from "../../interfaces";

interface Props {
  pokemon: Pokemon
}

const PokemonPage: NextPage<Props> = ({ pokemon }) => {
//console.log(pokemon); 
  return (
    <Layout title="algun pokemon">
      <h1>{pokemon.name}</h1>

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
    fallback: false, //no deja pasar, sino existe el id definido arriba
  };
};

//primero se ejecuta getStaticPaths y despues getStaticProps
// export const getStaticProps: GetStaticProps = async (ctx) => {
  //console.log("ctx.params:", ctx.params); //el parametro de la url
export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { id } = params as { id: string };
  const { data } = await pokeApi.get<Pokemon>(`/pokemon/${id}`);
  return {
    props: {
      pokemon: data
    },
  };
};

export default PokemonPage;

//generar los 151 pokemons
//yarn build
//yarn start