import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/Home";
import Dashboard from "@/views/Dashboard";
import OAuth from "@/views/OAuth";

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
        path: "/oauth",
        component: OAuth,
        meta: {
            title: "OAuth",
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
