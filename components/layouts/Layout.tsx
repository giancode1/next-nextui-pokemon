import { FC } from "react"

import Head from "next/head"
import { Navbar } from '../ui';

interface Props {
  children: JSX.Element | JSX.Element[];
  title?: string;
}

const origin = (typeof window === 'undefined') ? '' : window.location.origin;

export const Layout: FC<Props> = ({ children, title }) => {
  console.log(origin);// en frontend: origin: 'http://localhost:3000', en backend: origin: ''
  return (
    <>
      <Head>
        <title>{title || 'Pokemon App'}</title>
        <meta name="author" content="Giancarlo Culcay" />\
        <meta name="description" content="Información sobre el pokémon" />
        <meta name="keywords" content="pokemon, pokemones, pokémon, pokedex" />
        
        <meta property="og:title" content={`Información sobre ${title}`} />
        <meta property="og:description" content="Pokemons Page" />
        <meta property="og:image" content={`${origin}/img/banner.png`} />
      </Head>

      <Navbar />

      <main style={{
        padding: '0px 20px',
      }}>
        {children}
      </main>

    </>
  )
}
