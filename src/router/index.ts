import { createRouter, createWebHashHistory } from 'vue-router';
import layout from '@/components/layout/index.vue';

const routes= [
    {
        path: '/:catchAll(.*)',
        component: () => import('@/components/404/index.vue'),
    },
    {
        path: '/',
        component: layout,
        redirect: '/home',
        children: [
            {
                path: "home",
                component: () => import("@/views/home/index.vue"),
            }
        ],
    },

];
// @ts-ignore
export default createRouter({
    history: createWebHashHistory(),
    routes
});
