<template>
  <div class="flex gap-2 justify-between mb-4">
    <input type="text" v-model="queryModel" @input="updateParent" class="px-4 py-2 border outline-none w-full rounded-lg text-xs"
      placeholder="Search" />
  </div>
</template>

<script setup lang="ts">
import { ref, watch, defineProps } from 'vue';

const props = defineProps<{ query: string }>();
const emits = defineEmits(['inputChange']);
const queryModel = ref<string>(props.query);

watch(() => props.query, (newValue) => {
  queryModel.value = newValue;
});


const updateParent = (event: Event) => {
  const newValue = (event.target as HTMLInputElement).value;
  emits('inputChange', newValue);
};
</script>