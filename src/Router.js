import Vue from 'vue'
import VueRouter from 'vue-router'
import Store from './stores/Store'

import Home from './views/Home'
import Login from "./views/Login";
import About from "./views/About";

Vue.use(VueRouter);

const router = new VueRouter({
    routes: [
        {
            path: '/',
            name: 'login',
            component: Login
        },
        {
            path: '/home',
            name: 'home',
            component: Home,
            meta: {
                requiresAuth: true
            }
        },
        {
            path: '/about',
            name: 'about',
            component: About,
            meta: {
                requiresAuth: true
            }
        }
    ],
});

router.beforeEach((to, from, next) => {
    // check if routes requires auth
    if (to.matched.some(record => record.meta.requiresAuth)) {
        // check if is logged in
        if (!Store.getters.isLoggedIn) {
            // redirect to login
            next({ name: 'login' });
        } else {
            next();
        }
    } else {
        // no auth required continue
        next();
    }
});

export default router;
