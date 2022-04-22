import { useEffect, useState } from "react";

import { Layout } from "../../components/layouts";
import { NoFavorites } from "../../components/ui";
import { localFavorites } from "../../utils";

import FavoritePokemons from "../../components/pokemon/FavoritePokemons"

const FavoritesPage = () => {
 //favoritePokemons esta en localStorage
  const [favoritePokemons, setFavoritePokemons] = useState([]);
  
  useEffect(() => {
    setFavoritePokemons( localFavorites.pokemons() );
  }, []);
  
  
  return (
    <Layout title="Pokémons - favoritos">
      {
        favoritePokemons.length === 0 
          ? <NoFavorites />
          : <FavoritePokemons pokemons={favoritePokemons}/>
      }
    </Layout>
  )
}

export default FavoritesPage;