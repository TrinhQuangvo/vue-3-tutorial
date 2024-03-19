<template>
    <div :class="wrapperClasses">
        <div class="flex justify-between items-center text-[10px] font-bold">
            <span :class="periorityClasses">{{ todo.priority }}</span>
            <span class="">{{ todo.createdAt }}</span>
        </div>
        <div class="flex items-center justify-between">
            <div class="flex items-center gap-2 text-xl font-semibold">
                <input type="checkbox" @change="finishedTodo(todo.id)" :checked="todo.isFinished"
                    :value="todo.isFinished">
                <span :class="statusClasses">{{ todo.title }}</span>
            </div>
            <div class="flex flex-col gap-2 text-xs font-semibold text-center">
                <div class="flex gap-4">
                    <RouterLink :to="`/${todo.id}/update`">Edit</RouterLink>
                    <span @click="removeTodo(todo.id)">Delete</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { TodoDTO } from '@/types/todo.types';
import { computed } from 'vue';

interface ITodoItem {
    todo: TodoDTO
    removeTodo: (id: string) => void
    finishedTodo: (id: string) => void
}
const props = defineProps<ITodoItem>()

const { todo, removeTodo } = props

const wrapperClasses = computed(() => ([
    "p-4 w-full rounded-lg flex flex-col gap-2 transition-all duration-200 text-white",
    { "bg-red-200": todo.priority === 'HIGH' },
    { "bg-blue-200": todo.priority === 'LOW' },
    { "bg-orange-200": todo.priority === 'MEDIUM' },
]))

const periorityClasses = computed(() => ([
    "px-4 py-1 rounded-lg",
    { "bg-red-400": todo.priority === 'HIGH' },
    { "bg-blue-400": todo.priority === 'LOW' },
    { "bg-orange-400": todo.priority === 'MEDIUM' },
]))

const statusClasses = computed(() => todo.isFinished ? "line-through" : "")

</script>

<style scoped></style>