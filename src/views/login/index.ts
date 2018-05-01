import { RouteConfig } from 'vue-router';
import Login from './Login.vue';

export const LoginRoute: RouteConfig = {
  path: '/login',
  component: Login,
  meta: {
    description: 'Login'
  }
};
