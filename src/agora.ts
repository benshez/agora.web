import Vue from 'vue';
import VeeValidate from 'vee-validate';
import VueMDCAdapter from 'vue-mdc-adapter';
import App from './views/App.vue';
import store from './store';

import { routes } from './router';
import { AgoraLodash } from './common/system/utilities/AgoraLodash';

import 'vue-mdc-adapter/dist/vue-mdc-adapter.css';

Vue.use(AgoraLodash);
Vue.use(VeeValidate);
Vue.use(VueMDCAdapter);

new Vue({
  el: '#app',
  router: routes,
  store,
  render: h => h(App)
});
