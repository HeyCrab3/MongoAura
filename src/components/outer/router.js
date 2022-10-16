import login from '../user/login.vue'
import { createRouter, createWebHashHistory  } from "vue-router";

const routes = [
    {
        path: "/login",
        name: "login",
        component: login
    }
]
const router = createRouter({
    history: createWebHashHistory(),
    routes: routes
})

export default router;