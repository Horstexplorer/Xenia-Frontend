import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/Home";

import Dashboard from "@/views/Dashboard";

import Auth from "@/views/Auth";
import Login from "@/views/auth/Login";
import Logout from "@/views/auth/Logout";
import Returning from "@/views/auth/Returning";

Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        component: Home,
        meta: {
            title: "Home",
        },
    },
    {
        path: "/dashboard",
        component: Dashboard,
        meta: {
            title: "Dashboard",
        },
    },
    {
        path: "/auth",
        component: Auth,
        meta: {
            title: "Auth",
        },
        children: [
            {
                path: "returning",
                component: Returning,
                meta: {
                    title: "Login...",
                },
            },
            {
                path: "login",
                component: Login,
                meta: {
                    title: "Login",
                },
            },
            {
                path: "logout",
                component: Logout,
                meta: {
                    title: "Logout",
                },
            },
        ]
    },
    ]

const router = new VueRouter({
    history: true,
    mode: "history",
    base: process.env.BASE_URL,
    routes,
});

router.afterEach((to) => {
    Vue.nextTick(() => {
        document.title = `Xenia - ${to.meta.title}`;
    });
});

export default router;
