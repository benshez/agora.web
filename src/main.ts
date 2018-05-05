import Vue from 'vue';
import VeeValidate from 'vee-validate';
import VueMDCAdapter from 'vue-mdc-adapter';
import App from './views/App.vue';
import store from './store';

import { AgoraI18n } from './common/system/utilities/AgoraI18n';
import { routes } from './router';
import { AgoraLodash } from './common/system/utilities/AgoraLodash';
import { i18n } from './common/language';

import 'vue-mdc-adapter/dist/vue-mdc-adapter.css';

import * as mutationTypes from './common/store/types';

Vue.use(AgoraLodash);
Vue.use(VeeValidate);
Vue.use(VueMDCAdapter);
Vue.use(AgoraI18n);

store.dispatch(`language/${mutationTypes.GET_LANGUAGE}`, i18n.default);

new Vue({
  el: '#app',
  router: routes,
  store,
  render: h => h(App)
});
