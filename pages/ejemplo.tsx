import type { NextPage, GetStaticProps } from 'next';

import { Button, Text, theme, CssBaseline } from '@nextui-org/react';

import { Layout } from '../components/layouts';

const HomePage: NextPage = (props) => {
  console.log(props); //si se muestra en la consola de la pagina
  return (
    <Layout title={'Listado de Pokémons'}>
      <h1>Hola</h1>
      <Button color="gradient" >
        Hola mundo
      </Button>

      <ul>
        <li>Pokemon</li>
        <li>Pokemon</li>
        <li>Pokemon</li>
        <li>Pokemon</li>
      </ul>

      <Text
        h2
        color="primary"
      >
        Using tokens
      </Text>

      <Text color="success">
        Almost before we knew it, we had left the ground.
      </Text>

      <Text
        h1
        size={60}
        css={{
          textGradient: "45deg, $purple500 -20%, $pink500 100%",
        }}
        weight="bold"
      >
        Make the Web
      </Text>



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
  // const { data } = await  // your fetch function here 
  console.log("Hola mundo")  //en la consola
  return {
    props: {
      name: 'Giancarlo',
    }
  }
}

export default HomePage;
