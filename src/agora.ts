import Vue from 'vue';
import VeeValidate from 'vee-validate';
import VueMDCAdapter from 'vue-mdc-adapter';
import { mapState } from 'vuex';
import App from './views/App.vue';
import store from './store';
import { IRootState } from './common/modules/base/interfaces/IRootState';

import { routes } from './router';
import { AgoraLodash } from './common/system/utilities/AgoraLodash';

import 'vue-mdc-adapter/dist/vue-mdc-adapter.css';

Vue.use(AgoraLodash);
Vue.use(VeeValidate);
Vue.use(VueMDCAdapter);

Vue.prototype.$eventBus = new Vue();

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
