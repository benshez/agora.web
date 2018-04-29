import Vue from 'vue';
import VeeValidate from 'vee-validate';
import VueMDCAdapter from 'vue-mdc-adapter';
import App from './views/App.vue';
import { routes } from './router';
import { VueLodash } from './common/system/utilities/vue-lodash';
import store from './store';
import 'vue-mdc-adapter/dist/vue-mdc-adapter.css';

Vue.use(VueLodash);
Vue.use(VeeValidate);
Vue.use(VueMDCAdapter);

new Vue({
  el: '#app',
  router: routes,
  store,
  render: h => h(App)
});
