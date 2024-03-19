<template>
    <MobileMenu :isOpenModal="isOpenModal" :onToggleModal="onToggleModal"/>
    <nav class="flex items-center justify-between bg-green-500 text-white p-4">
        <span>Logo</span>
        <div class="flex justify-center items-center gap-4">
            <router-link :to="item.path" v-for="item in items" :key="item.label">
                {{ item.label }}
            </router-link>
        </div>
        <div class="lg:hidden" @click="onToggleModal">
            <img :src="hamburger" alt="" width="20" height="20" />
        </div>
    </nav>
</template>

<script setup lang="ts">
import hamburger from '@/assets/hamburger.webp';
import { NAV_ITEMS } from '@/constants/nav.constant';
import { ref } from 'vue';
import MobileMenu from './mobile-menu.vue';
const items = ref(NAV_ITEMS)
const isOpenModal = ref<boolean>(false)

const onToggleModal = () => {
    isOpenModal.value = !isOpenModal.value
}

</script>

<style scoped></style>