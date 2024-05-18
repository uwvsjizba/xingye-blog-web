import { createRouter, createMemoryHistory } from "vue-router";

const routes = [
    {
        path: "/",
        component: ()=>import("@/pages/home/HomeView.vue")
    }
];

const router = createRouter({
    history: createMemoryHistory(),
    routes
});

export default router;