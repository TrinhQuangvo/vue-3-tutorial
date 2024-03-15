<template>
    <button :class="classes" :disabled="disabled" @click="count++">
        <slot></slot> {{ count }}
    </button>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';

interface IButtonProps {
    type: "danger" | "primary" | "warning"
    disabled: boolean
}

const props = defineProps<IButtonProps>()
const type = ref(props.type || "primary")
const disabled = ref(props.disabled || false)
const count = ref(0)

const classes = computed(() => {
    console.log('aaaa')
    return [
        "border-none px-4 py-2 rounded-lg text-white font-semibold text-xs",
        { "bg-blue-400": type.value === 'primary' },
        { "bg-red-400": type.value === 'danger' },
        { "bg-yellow-400": type.value === 'warning' },
        { "disabled:bg-gray-400 select-none": disabled }
    ]
})

</script>

<style scoped></style>