import Vue from 'vue';
import App from './views/App.vue';
import { routes } from './router';
import store from './store';

//Vue.prototype.$store = store;

new Vue({
  el: '#app',
  router: routes,
  store,
  render: h => h(App)
});
