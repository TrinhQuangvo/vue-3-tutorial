import { RouteRecordRaw, createRouter, createWebHistory } from 'vue-router'
import home from '@/views/home.vue';
import todos from '@/views/todos.vue';
import CreateTodo from '@/views/create-todo.vue'
import UpdateTodo from '@/views/update-todo.vue'
import NotFound from '@/views/not-found.vue'
import ListTodo from '@/views/list-todo.vue';

const routes: RouteRecordRaw[] = [
    {
        path: '/todos',
        name: 'Todo Pages',
        component: todos,
        children: [
            {
                path: '/todos',
                component: ListTodo
            },
            {
                path: 'create',
                name: "CreateTodo",
                component: CreateTodo
            },
            {
                path: '/:id/update',
                name: "UpdateTodo",
                component: UpdateTodo
            }
        ]
    },
    {
        path: '/',
        name: 'Home',
        component: home,
    },
    {
        path: '/:catchAll(.*)',
        name: 'NotFound',
        component: NotFound,
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router
