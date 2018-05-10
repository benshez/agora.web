import { RouteConfig } from 'vue-router';
import Login from './Login.vue';
import { IRoute } from '../../common/interfaces/routes/IRoute';

export const LoginRoute: RouteConfig = {
  path: '/login',
  component: Login,
  meta: {
    translationKey: 'LoginMenuItemText',
    description: 'Login'
  }
};
