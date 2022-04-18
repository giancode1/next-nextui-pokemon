import { FC } from "react"

import Head from "next/head"
import { Navbar } from '../ui';

interface Props{
  children: JSX.Element | JSX.Element[];
  title?: string;
}

export const Layout: FC<Props> = ({ children, title }) => {
  return (
    <>
    <Head>
        <title>{title || 'Pokemon App'}</title>
        <meta name="author" content="Giancarlo Culcay" />\
        <meta name="description" content="Información sobre el pokémon" />
        <meta name="keywords" content="pokemon, pokemones, pokémon, pokedex" />
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
