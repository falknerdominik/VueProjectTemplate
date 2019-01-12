import Vue from 'vue'
import VueRouter from 'vue-router'

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
        // TODO: check if logged in
        let isLoggedIn = false;
        if (!isLoggedIn) {
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
