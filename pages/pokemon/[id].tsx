//rafce  exportacion por defecto
import { GetStaticProps, NextPage, GetStaticPaths } from "next";
import { useRouter } from "next/router";
import { Layout } from "../../components/layouts";

interface Props {
  //pokemon: any
  id: string;
  name: string;
}

const PokemonPage: NextPage<Props> = ({ id, name }) => {
  const router = useRouter();
  console.log(router.query);
  return (
    <Layout title="algun pokemon">
      <h1>{router.query.id}</h1>
      <h2>{id}-{name}</h2>
    </Layout>
  );
};

//snipet nextstaticpaths
// You should use getStaticPaths if you’re statically pre-rendering pages that use dynamic routes
//si no tuviera el path de forma dinamica: [id] , no deberia hacer esto
//se ejecuta del lado del servidor, y solo en build time
export const getStaticPaths: GetStaticPaths = async (ctx) => {
  return {
      //la cantidad sera la cantidad de paginas que se van a generar
    paths: [
      {
        params: { id: "1" }, //estrictamente debe ser un string
      },
      {
        params: { id: "2" },
      },
      {
        params: { id: "3" },
      },
    ],
    // fallback: "blocking", // deja pasar
    fallback: false,  //no deja pasar, sino existe el id definido arriba
  };
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  //const {data} = await pokeApi.get<PokemonListResponse>('/pokemon?limit=151');

  return {
    props: {
      id: 1,
      name: "pikachu",
    },
  };
};

export default PokemonPage;
