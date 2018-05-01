import { RouteConfig } from 'vue-router';

import { AboutRoute } from './about';
import { HomeRoute } from './home';
import { LoginRoute } from './login';
import { NotFoundRoute } from './error';

export const AppRoutes: Array<RouteConfig> = [
  AboutRoute,
  HomeRoute,
  LoginRoute,
  NotFoundRoute
];
