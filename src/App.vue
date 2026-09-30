<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import NavBar from './shared/components/NavBar.vue';
import { routerLinks } from './router/list-router.js';
</script>

<template>
  <header>
    <NavBar title="PokemonApp" :links="routerLinks"/>
  </header>

  <RouterView />
</template>

<style scoped>

</style>
