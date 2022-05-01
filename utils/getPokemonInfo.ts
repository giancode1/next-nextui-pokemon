import { pokeApi } from "../api";
import { Pokemon, PokemonInfo } from "../interfaces";

export const getPokemonInfo = async ( nameOrId: string ):Promise<PokemonInfo | null>  => {
    try {
        const { data } = await pokeApi.get<Pokemon>(`/pokemon/${nameOrId}`);

        //solo manda estos datos, para optimizar
        return {
            id: data.id,
            name: data.name,
            sprites: data.sprites,
            abilities: data.abilities,
            types: data.types,
            weight: data.weight,
            height: data.height,
        }

    } catch (error) {
        console.log("ERROR:::",error);
        return null;
    }
}