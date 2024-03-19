<template> 
    <main class="overflow-hidden">
        <Header />
        <div class="min-h-screen px-4">
            <slot></slot>
        </div>
        <Footer />
    </main>
</template>

<script setup lang="ts">
import Footer from '@/components/common/footer.vue';
import Header from '@/components/common/header.vue';

</script>

<style scoped></style>