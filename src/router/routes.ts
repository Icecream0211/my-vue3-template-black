export const constantRoute = [
    {
        path: "/login",
        component: () => import("@/views/login/index.vue"),
        name: "Login",
    },
    {
        path: "/",
        redirect: "/home",
        name:"layout"
    },
    {
        path: "/home",
        component: () => import("@/views/home/index.vue"),
        name: "Home",
    },
    {
        path: "/404",
        component: () => import("@/views/404/index.vue"),
        name: "404",
    },
    {
        path: "/:pathMatch(.*)*",
        redirect: "/404",
        name: "Any",
    },
];