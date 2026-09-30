<script setup lang="ts">
import { defineComponent, ref } from 'vue'

// export default defineComponent({
//   setup() {
//     const counter = ref(5)

//     const increase = () => {
//       counter.value++
//     }

//     const decrease = () => {
//       counter.value++
//     }
//     return {
//       counter,
//       increase,
//       decrease,
//     }
//   },
// })

const counter = ref(5)

const increase = () => {
  counter.value++
}

const decrease = () => {
  counter.value--
}
</script>

<template>
  <h1>counter view: {{ counter }}</h1>
  <button @click="increase">+1</button>
  <button @click="decrease">-1</button>
</template>
