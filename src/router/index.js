import { createRouter, createWebHistory } from "vue-router";
import Login from "../views/Login.vue";
import Register from "../views/Register.vue";

const routes = [

  {
    path: "/",
    name: "Login",
    component: Login,
  },
  {
    path: '/Register',
    name: 'Register',
    component: Register,
  },
  {
    path: '/User',
    name: 'User',
    component: () => import('../views/Welcome.vue')
  },

  {
    path: '/register_success',
    name: 'register_success',
    component: () => import('../views/RegisterSuccess.vue')
  },

  {
    path: '/Userlist',
    name: 'Userlist',
    component: () => import('../views/AllUsers.vue')
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
