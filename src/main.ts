import Vue from 'vue';
import VeeValidate from 'vee-validate';
import VueMDCAdapter from 'vue-mdc-adapter';
import App from './views/App.vue';
import { routes } from './router';
import { VueLodash } from './common/system/utilities/vue-lodash';
import store from './store';
import 'vue-mdc-adapter/dist/vue-mdc-adapter.css';
import { I18nResolver } from 'i18n-ts';
import { i18n } from './common/language';

const messages = new I18nResolver(i18n, 'en').translation;

console.log(messages.hello);

Vue.use(VueLodash);
Vue.use(VeeValidate);
Vue.use(VueMDCAdapter);

new Vue({
  el: '#app',
  router: routes,
  store,
  render: h => h(App)
});
