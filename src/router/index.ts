import Vue from 'vue';
import VueRouter from 'vue-router';
import HomeView from '../views/HomeView.vue';
import NotFoundView from '../views/NotFoundView.vue';
import About from '../views/About.vue';
import LoginRegister from '../views/LoginRegister.vue';

Vue.use(VueRouter);

export const routes = new VueRouter({
  mode: 'history',
  linkActiveClass: 'active',
  base: __dirname,
  routes: [
    {
      path: '/',
      component: HomeView,
      meta: {
        description: 'Home'
      }
    },
    {
      path: '/about',
      component: About,
      meta: {
        description: 'About'
      }
    },
    {
      path: '/login',
      component: LoginRegister,
      meta: {
        description: 'Login'
      }
    },
    {
      path: '*',
      meta: {
        adminOnly: false
      },
      component: NotFoundView
    }
  ]
});
