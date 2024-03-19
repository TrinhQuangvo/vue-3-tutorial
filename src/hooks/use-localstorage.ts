import { TodoDTO } from '@/types/todo.types'

import { computed, onMounted, ref, watch } from 'vue'

export const useTodoStorage = () => {
    const todos = ref<TodoDTO[]>([])
    const query = ref<string>("")
    const STORAGE_KEY = 'TODOS'

    const getTodos = () => {
        const storedTodos = localStorage.getItem(STORAGE_KEY);
        if (storedTodos)
            todos.value = JSON.parse(storedTodos);
    }
    const searchableTodos = computed(() =>
        todos.value.filter(item => item.title.toLowerCase().includes(query.value.toLowerCase()))
    );

    onMounted(() => {
        getTodos()
    })

    watch(todos, (newVal) => {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(newVal))
    }, {
        deep: true
    })

    const finishedTodo = (id: string) => {
        const todoIndex = todos.value.findIndex(item => item.id === id);
        if (todoIndex !== -1)
            todos.value[todoIndex].isFinished = !todos.value[todoIndex].isFinished;
    }

    const addTodo = (todo: TodoDTO) => {
        todos.value = [...todos.value, todo]
    }

    const removeTodo = (id: string) => {
        todos.value = todos.value.filter((item) => item.id !== id)
    }

    const updateTodo = (id: string, data: Partial<TodoDTO>) => {
        const todoIndex = todos.value.findIndex(item => item.id === id);

        if (todoIndex === -1) {
            console.error(`Todo item with id ${id} not found.`);
            return;
        }

        const updatedTodo = { ...todos.value[todoIndex], ...data };
        todos.value.splice(todoIndex, 1, updatedTodo);
    }

    return {
        query,
        addTodo,
        removeTodo,
        updateTodo,
        finishedTodo,
        searchableTodos
    }
}