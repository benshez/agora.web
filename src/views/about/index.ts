import { RouteConfig } from 'vue-router';
import About from './About.vue';
import { IRoute } from '../../common/interfaces/routes/IRoute';

export const AboutRoute: RouteConfig = {
  path: '/about',
  component: About,
  meta: {
    translationKey: 'AboutMenuItemText',
    description: 'About'
  }
};
