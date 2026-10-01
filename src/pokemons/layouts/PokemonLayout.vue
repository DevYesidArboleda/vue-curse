<script setup lang="ts">
import NavBar from '@/shared/components/NavBar.vue';
import type { RouterLink } from '@/router/list-router';
import { pokemonRouter } from '../router';


const routerLinks: RouterLink[]=pokemonRouter.children!.map( ({name, props, path }) =>{
    return {
        name: name?.toString() ?? "",
        path: path,
        title: (props as { title:string}).title,
    }
}) || [];


 
</script>

<template>
    <div>
        <h1>
            Pokemon Layout
        </h1>

        <NavBar :links="routerLinks" secondary/>
    </div>
    <Suspense>
        <RouterView />
    </Suspense>
</template>

<style lang="scss" scoped>

</style>