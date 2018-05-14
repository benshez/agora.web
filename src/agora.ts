import Vue from 'vue';
import VeeValidate from 'vee-validate';
import VueMDCAdapter from 'vue-mdc-adapter';
import { mapState } from 'vuex';
import App from './views/App.vue';
import store from './modules/store';
import { IRootState } from './common/modules/base/interfaces/IRootState';

import { routes } from './modules/router';
import { AgoraLodash } from './common/modules/core/utilities/AgoraLodash';
import { ConsoleService } from './modules/logging/';

import 'vue-mdc-adapter/dist/vue-mdc-adapter.css';

Vue.use(AgoraLodash);
Vue.use(VeeValidate);
Vue.use(VueMDCAdapter);

Vue.prototype.$eventBus = new Vue();
Vue.prototype.$consoleService = new ConsoleService();

new Vue({
  el: '#app',
  router: routes,
  store,
  computed: {
    ...mapState({
      language: (state: IRootState) => {
        return state.language;
      }
    })
  },
  render: h => h(App)
});
