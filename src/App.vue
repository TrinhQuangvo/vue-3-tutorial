<script setup lang="ts">
import { ref } from 'vue';

const name = ref("Quang")
</script>

<template>
  <p class="text-3xl text-green-600 font-semibold">Hello VueJS + Typescript i'm {{ name }} </p>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
