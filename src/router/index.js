import Vue from 'vue';
import VueRouter from 'vue-router';
import HomeView from '../views/HomeView';
import NotFoundView from '../views/NotFoundView';

Vue.use(VueRouter);

const routes = new VueRouter({
  pageRouting: true,
  mode: 'history',
  hashbang: false,
  linkActiveClass: 'active',
  base: __dirname,
  routes: [{
      path: '/',
      name: 'home',
      component: HomeView
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

routes.mode = 'html5';

export default routes;
