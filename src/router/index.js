import {createWebHistory, createRouter} from "vue-router";
import HomePage from "../views/home.vue";
import Contactpage from "../views/Contactpage.vue";

const routes = [
    {path: '/', name: "Home", component: HomePage},
    {path: '/contact', name: "Contact", component: Contactpage}
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;