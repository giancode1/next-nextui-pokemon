import { FC } from "react"

import Head from "next/head"
import { Navbar } from '../ui';

interface Props {
  children: JSX.Element | JSX.Element[];
  title?: string;
}

const origin = (typeof window === 'undefined') ? '' : window.location.origin;

export const Layout: FC<Props> = ({ children, title }) => {
  //console.log(origin);// en frontend: origin: 'http://localhost:3000', en backend: origin: ''
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

      <footer style={{ textAlign: "center", marginTop: 4, marginBottom: 4 }}>
        {/* <p>
                Made by &nbsp;
                 <a href="https://github.com/giancode1" target="_blank" rel="noopener noreferrer">giancode1</a>
                 &nbsp;
                | &nbsp;<a href="https://twitter.com/GiancCool" target="_blank" rel="noopener noreferrer">twitter</a> 
            </p> */}
        <div >&copy; {new Date().getFullYear()} Giancarlo Culcay</div>
        <div >
          <a href="https://www.linkedin.com/in/giancarlo-culcay/" target="_blank" className="font-bold" rel="noreferrer">
            Made with ❤️ by Giancarlo Culcay 🚀
          </a>
        </div>
      </footer>

    </>
  )
}
