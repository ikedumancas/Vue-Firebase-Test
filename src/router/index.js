import Vue from 'vue';
import VueRouter from 'vue-router';

import Dashboard from '../views/Dashboard.vue';
import { auth } from '../firebase';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Dasboard',
    component: Dashboard,
    meta: {
      loginRequired: true,
    },
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "login" */ '../views/Login.vue'),
  },
  {
    path: '/expenses',
    name: 'expenses',
    component: () => import(/* webpackChunkName: "expenses" */ '../views/Expenses.vue'),
    meta: {
      loginRequired: true,
    },
  },
  {
    path: '/revenues',
    name: 'revenues',
    component: () => import(/* webpackChunkName: "revenues" */ '../views/Revenues.vue'),
    meta: {
      loginRequired: true,
    },
  },
  {
    path: '/settings',
    name: 'settings',
    component: () => import(/* webpackChunkName: "settings" */ '../views/Settings.vue'),
    meta: {
      loginRequired: true,
    },
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  const loginRequired = to.matched.some((x) => x.meta.loginRequired);
  console.log('loginRequired', loginRequired);
  console.log('auth.currentUser', auth.currentUser);

  if (loginRequired && !auth.currentUser) {
    next('/login');
  } else {
    next();
  }
});

export default router;
