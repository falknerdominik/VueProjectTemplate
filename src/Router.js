import Vue from 'vue'
import VueRouter from 'vue-router'
import Store from './stores/Store'

import Home from './views/Home'
import Login from "./views/Login";
import About from "./views/About";

import PlainLayout from "./layouts/PlainLayout";
import MenuLayout from "./layouts/MenuLayout";

Vue.use(VueRouter);

const Router = new VueRouter({
    routes: [
        {
            path: '/',
            name: 'login',
            component: Login,
            meta: {
                requiresAuth: false,
                layout: PlainLayout.name,
            }

        },
        {
            path: '/home',
            name: 'home',
            component: Home,
            meta: {
                requiresAuth: true,
                layout: MenuLayout.name,
            }
        },
        {
            path: '/about',
            name: 'about',
            component: About,
            meta: {
                requiresAuth: true,
                layout: MenuLayout.name,
            }
        }
    ],
});

Router.beforeEach((to, from, next) => {
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

export default Router;
