import type { NextPage, GetStaticProps } from 'next';

import { Button, Text, theme, CssBaseline } from '@nextui-org/react';

import { Layout } from '../components/layouts';

const HomePage: NextPage = (props) => {
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


//de lado del servidor, no llega alc lietne a excepcion de los props
export const getStaticProps: GetStaticProps = async (ctx) => { //solo se ejecuta en build-time
  // const { data } = await  // your fetch function here 
  console.log("Hola mundo")
  return {
    props: {
      name: 'Giancarlo',
    }
  }
}

export default HomePage;
