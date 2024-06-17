import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
    {
        path: "/",
        name: "home",
        component: ()=>import("@/pages/home/HomeView.vue"),
        children: [
            {
                path: "login",
                name: "login",
                component: ()=>import("@/pages/login/loginView.vue")
            },
            // ......
        ]
    }
];

const router = createRouter({
    history: createWebHashHistory(),
    routes
});

export default router;