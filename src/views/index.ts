import { RouteConfig } from 'vue-router';
import { HomeRoute } from './home';
import { AboutRoute } from './about';
import { LoginRoute } from './login';
import { NotFoundRoute } from './error';

export const AppRoutes: Array<RouteConfig> = [
  HomeRoute,
  AboutRoute,
  LoginRoute,
  NotFoundRoute
];
