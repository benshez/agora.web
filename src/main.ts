import Vue from 'vue';
import VeeValidate from 'vee-validate';
import App from './views/App.vue';
import { routes } from './router';
import store from './store';

Vue.use(VeeValidate);
//Vue.prototype.$store = store;

new Vue({
  el: '#app',
  router: routes,
  store,
  render: h => h(App)
});
