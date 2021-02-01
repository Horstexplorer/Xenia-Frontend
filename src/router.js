import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/Home";

import Dashboard from "@/views/Dashboard";

import Auth from "@/views/Auth";
import Login from "@/views/auth/Login";
import Logout from "@/views/auth/Logout";
import Returning from "@/views/auth/Returning";
import DataProcessing from "@/views/misc/DataProcessing";
import Contact from "@/views/misc/Contact";
import Report from "@/views/misc/Report";
import GuildDashboard from "@/views/dashboard/GuildDashboard";

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
        children: [
            {
                path: "guilds/:guildId",
                component: GuildDashboard,
                meta: {
                    title: "Dashboard",
                },
            },
        ]
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
    {
        path: "/processing",
        component: DataProcessing,
        meta: {
            title: "Data Processing",
        },
    },
    {
        path: "/report",
        component: Report,
        meta: {
            title: "Report",
        },
    },
    {
        path: "/contact",
        component: Contact,
        meta: {
            title: "Contact",
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
