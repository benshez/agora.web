import Vue from 'vue';
import VueRouter from 'vue-router';

import { AppRoutes } from '../views';

Vue.use(VueRouter);

export const routes = new VueRouter({
  mode: 'history',
  linkActiveClass: 'active',
  base: __dirname,
  routes: AppRoutes
});
