import axios from "axios";
import pokemonApi from "../api/PokemonApi";
import type { Pokemon, Pokedex, PokemonResponse } from "../interfaces"

export const getpokemons = async():Promise<Pokemon[]> => {


const { data } = await pokemonApi.get< Pokedex>('pokemon?limit=100')

const pokemonPromises: Promise<Pokemon>[] = []

for (const { url } of data.results) {
    const pokemonPromise = axios.get<PokemonResponse>(url).then(({data})=> {
        return {
            id: data.id,
            name: data.name,
            frontSprite:data.sprites.front_default,
        }
    })
    pokemonPromises.push( pokemonPromise );
}

    const pokemons = await Promise.all(pokemonPromises );

    return pokemons;
}