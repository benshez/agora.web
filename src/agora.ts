import Vue from 'vue';
import VeeValidate from 'vee-validate';
import VueMDCAdapter from 'vue-mdc-adapter';
import App from './views/App.vue';
import store from './store';

import { AgoraI18n } from './common/system/utilities/AgoraI18n';
import { routes } from './router';
import { AgoraLodash } from './common/system/utilities/AgoraLodash';

import 'vue-mdc-adapter/dist/vue-mdc-adapter.css';

Vue.use(AgoraLodash);
Vue.use(VeeValidate);
Vue.use(VueMDCAdapter);
Vue.use(AgoraI18n);

new Vue({
  el: '#app',
  router: routes,
  store,
  render: h => h(App)
});