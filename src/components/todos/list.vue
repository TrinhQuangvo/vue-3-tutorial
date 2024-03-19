<template>
    <div class="flex  gap-2 text-2xl py-4 font-semibold text-gray-500">
        <RouterLink to="/todos/create">
            <h1>Create New </h1>
        </RouterLink>
    </div>
    <SearchForm @inputChange="handleInputChange" :query />
    <p class="text-center text-lg text-red-400 font-semibold" v-if="!searchableTodos.length">
        No Items Found !
    </p>
    <div class="flex flex-col gap-4">
        <Item v-for="(todo) in searchableTodos" :key="todo.id" :todo :removeTodo :finishedTodo />
    </div>
</template>

<script setup lang="ts">
import Item from '@/components/todos/item.vue';
import { useTodoStorage } from '@/hooks/use-localstorage';
import SearchForm from './search.vue';

const { query, removeTodo, finishedTodo, searchableTodos } = useTodoStorage()

const handleInputChange = (newValue: string) => {
    query.value = newValue;
};
</script>

<style scoped></style>