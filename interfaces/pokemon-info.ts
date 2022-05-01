import { Pokemon } from "./pokemon-full";

export interface PokemonInfo extends Pick<Pokemon, 'id' | 'name' | 'types' | 'sprites'| 'height' | 'weight'> {
    abilities: any[],
}

//del tipo Pokemon sin tal o con tal