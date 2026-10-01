
<script setup lang="ts">
import { ref } from 'vue';
import pokemonApi from '../api/PokemonApi';
import { getpokemons } from '../helpers/get-pokemons';
import type { Pokemon } from '../interfaces';
import type { Pokedex } from '../interfaces/pokemons-list.response';

const data = await getpokemons();

const pokemons = ref<Pokemon[]>(data)

// getpokemons().then((data) => pokemons.value = data)


</script>

<template>
    <div>
        <h1>
            Pokemon List
        </h1>
        <ul>
            <li v-for="pokemon in pokemons" :key="pokemon.id">

                {{ pokemon.name }}
            </li>
        </ul>
    </div>
</template>

