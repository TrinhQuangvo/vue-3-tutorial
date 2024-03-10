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

const name = ref<string>("Quang")
const age = ref<number>(29)
const isMarried = ref<boolean>(false)

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


</script>

<template>
  <p class="text-3xl text-green-600 font-semibold">
    Hello VueJS + Typescript i'm {{ name }}
  </p>
  <p>Age : {{ age }}</p>
  <p>{{ isMarried ? "đã cưới vợ" : "ế sấp mặt" }}</p>

  <div class="mt-4">
    <p>{{ myProfile.name }}</p>
    <p>{{ myProfile.age }}</p>
    <p>{{ myProfile.isMarried ? "đã cưới vợ" : "ế sấp mặt" }}</p>

  </div>

  <div class="mt-4">
    {{ loginFormData.email }}
    {{ loginFormData.password }}
    {{ loginFormData.rememberMe ? "Đã nhớ lần đăng nhập" : "chưa check ô nhớ" }}
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
