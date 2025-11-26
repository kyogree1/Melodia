import {createWebHistory, createRouter} from "vue-router";
import HomePage from "../views/home.vue";
import Contactpage from "../views/Contactpage.vue";
import Catalogpage from "../views/catalog.vue";
import Aboutpage from "../views/about.vue";
import LoginPage from "../views/login.vue";
import RegisterPage from "../views/register.vue";
import OrderPage from "../views/order.vue";

const routes = [
    {path: "/", redirect: "/login" },
    {path: '/home', name: "Home", component: HomePage},
    {path: '/contact', name: "Contact", component: Contactpage},
    {path: '/catalog', name: "Catalog", component: Catalogpage},
    {path: '/order', name: "Order", component: OrderPage},
    {path: '/about', name: "About", component: Aboutpage},
    { path: "/login", name: "Login", component: LoginPage },
    { path: "/register", name: "Register", component: RegisterPage }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;