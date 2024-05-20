import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        path: "/",
        component: ()=>import("@/pages/home/HomeView.vue")
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;