import { RouteConfig } from 'vue-router';
import Home from './Home.vue';

export const HomeRoute: RouteConfig = {
  path: '/',
  component: Home,
  meta: {
    translationKey: 'HomeMenuItemText',
    description: 'Home'
  }
};
