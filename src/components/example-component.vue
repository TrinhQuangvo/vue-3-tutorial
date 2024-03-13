<template>
    <HelloWorld msg="Hello " />
    {{ name }}
</template>

<script setup lang="ts">
import { ref } from 'vue';
import HelloWorld from './HelloWorld.vue';

const name = ref("Quang")
</script>

<style scoped></style>