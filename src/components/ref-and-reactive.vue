<script setup lang="ts">
import { ref, reactive } from 'vue';

interface IMyProfile {
    name: string
    age: number
    isMarried: boolean
}

interface ILoginForm {
    email: string
    password: string
    rememberMe: boolean
}

interface IPost {
    id: number
    title: string
    body: string
}

const name = ref<string>("Quang")
const age = ref<number>(29)
const isMarried = ref<boolean>(false)

const posts = ref<IPost[]>([])
const isLoading = ref<boolean>(false)
const error = ref<string>("")

const myProfile = ref<IMyProfile>({
    name: "Kwang",
    age: 29,
    isMarried: false
})

const loginFormData = reactive<ILoginForm>({
    email: "voquang1406@gmail.com",
    password: "vannhucu",
    rememberMe: false
})

// ví dụ 1 
const onChangePasswordHandler = (newPassword: string) => {
    loginFormData.password = newPassword
}

// vi du 2 
const onChangeMarriedStatus = () => {
    isMarried.value = !isMarried.value
}

// vi du 3 
const getPosts = async () => {
    isLoading.value = true
    try {
        const response = await fetch('http://jsonplaceholder.com/typicode/posts')
        const data: IPost[] = await response.json()
        posts.value = data
    } catch (err) {
        error.value = "something went wrong here!"
    } finally {
        isLoading.value = false
    }
}

</script>

<template>
    <p class="text-3xl text-green-600 font-semibold">
        Hello VueJS + Typescript i'm {{ name }}
    </p>
    <p>Age : {{ age }}</p>
    <button class="my-4" @click="getPosts">Get All Posts</button>
    <div class="text-2xl text-white font-semibold">
        <p v-for="post in posts" :key="post.id">
            {{ post.title }}
        </p>
    </div>
    
</template>

<style scoped>
.logo {
    height: 6em;
    padding: 1.5em;
    will-change: filter;
    transition: filter 300ms;
}

.logo:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
    filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
