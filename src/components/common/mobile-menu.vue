<template>
    <nav :class="classes" @click="closeModalOutside">
        <div class="bg-white min-h-screen w-1/2 p-4 flex flex-col gap-4">
            <div class="flex justify-between items-center text-3xl font-bold">
                <span class="text-green-400">Logo</span>
                <span @click="props.onToggleModal">&times;</span>
            </div>
            <div class="flex flex-col gap-2 text-ls text-gray-600">
                <router-link :to="item.path" v-for="item in items" :key="item.label">
                    {{ item.label }}
                </router-link>
            </div>
        </div>
    </nav>
</template>

<script setup lang="ts">
import { NAV_ITEMS } from '@/constants/nav.constant';
import { computed, ref } from 'vue';

interface IMobileMenuProps {
    isOpenModal: boolean
    onToggleModal: () => void
}

const props = defineProps<IMobileMenuProps>()
const items = ref(NAV_ITEMS)

const classes = computed(() => ([
    "w-full min-h-screen overscroll-auto fixed bg-black bg-opacity-30 transition-all duration-200 ease-in",
    { "-translate-x-full opacity-0": !props.isOpenModal },
    { "opacity-100": props.isOpenModal },
]))
const closeModalOutside = (event: MouseEvent) => {
    if (!(event.target as HTMLElement).closest('.bg-white')) {
        props.onToggleModal();
    }
}

</script>

<style scoped></style>