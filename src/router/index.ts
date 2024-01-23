import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            // Where the little workers will create the magic
            path: '/',
            name: 'admin',
            // route level code-splitting
            // this generates a separate chunk (About.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import('../views/AdminView.vue'),
        },
        {
            // Everything that should be on the huge public display
            path: '/screen',
            name: 'screen',
            // route level code-splitting
            // this generates a separate chunk (About.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import('../views/ScreenView.vue'),
        },
    ],
});

export default router;
