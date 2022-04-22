import { pokeApi } from "../api";
import { Pokemon } from "../interfaces";

export const getPokemonInfo = async( nameOrId: string ) => {
    const { data } = await pokeApi.get<Pokemon>(`/pokemon/${nameOrId}`);
    //solo manda estos datos, para optimizar
    return {
        id: data.id,
        name: data.name,
        sprites: data.sprites,
    }
}