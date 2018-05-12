import { RouteConfig } from 'vue-router';
import NotFound from './NotFound.vue';

export const NotFoundRoute: RouteConfig = {
  path: '*',
  component: NotFound,
  meta: {
    description: 'NotFound'
  }
};
