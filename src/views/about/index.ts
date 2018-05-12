import { RouteConfig } from 'vue-router';
import About from './About.vue';

export const AboutRoute: RouteConfig = {
  path: '/about',
  component: About,
  meta: {
    translationKey: 'AboutMenuItemText',
    description: 'About'
  }
};
