<template>
  <CustomButton :disabled="false" type="warning">
    Click Me
  </CustomButton>
</template>

<script lang="ts" setup>
import CustomButton from './components/button.vue'
const onClick = () => {
  console.log('clicked')
}
</script>

<style scoped></style>