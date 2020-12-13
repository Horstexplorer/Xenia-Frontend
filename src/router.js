import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/Home";
import Dashboard from "@/views/Dashboard";

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
        path: "/auth/returning",
        component: Returning,
        meta: {
            title: "Login...",
        },
    },
    {
        path: "/auth/login",
        component: Login,
        meta: {
            title: "Login",
        },
    },
    {
        path: "/auth/logout",
        component: Logout,
        meta: {
            title: "Logout",
        },
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
