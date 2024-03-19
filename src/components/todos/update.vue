<template>
    <div class="flex  gap-2 text-2xl py-4 font-semibold text-gray-500">
        <RouterLink to="/todos">
            <h1>Back</h1>
        </RouterLink>
    </div>
    <div class="flex flex-col gap-1 mb-4">
        <label class="text-xs font-semibold text-gray-500" for="title">Title</label>
        <input required placeholder="title" v-model="data.title" type="text"
            class="w-full outline-none border rounded-lg py-2 px-4" />
        <p class="text-xs text-red-400 font-bold" v-if="error">{{ error }}</p>
    </div>
    <div class="flex flex-col gap-1 mb-4">
        <label class="text-xs font-semibold text-gray-500" for="">Priority</label>
        <div class="flex gap-4">
            <div class="w-full text-center border rounded-lg transition-all duration-200"
                :class="handleActivePriority(p.value)" v-for="p in PRIORITY" :key="p.label">
                <label class="block h-full py-2" :for="p.label">
                    {{ p.value }}
                </label>
                <input class="hidden" type="radio" :id="p.label" :value="p.value" v-model="data.priority" />
            </div>
        </div>
    </div>
    <div class="flex flex-col gap-1 mb-4">
        <label class="text-xs font-semibold text-gray-500" for="detail">Detail</label>
        <textarea class="w-full outline-none border rounded-lg py-2 px-4 resize-none" id="detail" v-model="data.detail"
            cols="20" rows="5"></textarea>
    </div>
    <button @click="handleSubmit" class="w-full py-4 bg-green-500 text-white font-semibold rounded-lg">Update</button>
</template>

<script setup lang="ts">
import { PRIORITY } from '@/constants/form.constant';
import { TodoDTO } from '@/types/todo.types';
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useTodoStorage } from '@/hooks/use-localstorage';
import { useRoute } from 'vue-router'
const route = useRoute()

const id = route.params.id as string
 
const { updateTodo } = useTodoStorage()
const { push } = useRouter()

const error = ref<string>("")
const data = ref<Partial<TodoDTO>>({
    title: "",
    detail: "",
    priority: "LOW",
})

const handleActivePriority = (selectedPriority: string) => {
    if (selectedPriority === data.value.priority)
        return 'bg-green-400 text-white font-semibold border-green-400'
}

const handleSubmit = () => {
    if (!data.value.title) {
        error.value = "Title is required!"
        return
    }

    updateTodo(id, data.value)
    error.value = ""
    push('/todos')
}

</script>

<style scoped></style>