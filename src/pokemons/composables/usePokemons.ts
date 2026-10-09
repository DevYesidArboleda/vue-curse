import { computed, onMounted, ref } from "vue";
import { getpokemons } from "../helpers/get-pokemons";
import type { Pokemon } from "../interfaces";

const isLoading = ref(true)
const pokemons = ref<Pokemon[]>([])

export const usePokemons = () => {


    onMounted(async() => {
        const data = await getpokemons();
        pokemons.value = data; 
        isLoading.value = false; 
});

    return {
        pokemons,
        isLoading,

        count : computed( () => pokemons.value.length)
    }
}

