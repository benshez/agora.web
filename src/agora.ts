import Vue from 'vue';
import VeeValidate from 'vee-validate';
import VueMDCAdapter from 'vue-mdc-adapter';
import { mapState } from 'vuex';
import App from './views/App.vue';
import store from './store';
import { IRootState } from './common/';

import { routes } from './router';
import { AgoraLodash } from './common/system/utilities/AgoraLodash';

import 'vue-mdc-adapter/dist/vue-mdc-adapter.css';
import { language } from '~common/store/modules/i18n';

Vue.use(AgoraLodash);
Vue.use(VeeValidate);
Vue.use(VueMDCAdapter);

new Vue({
  el: '#app',
  router: routes,
  store,
  computed: {
    ...mapState({
      language: (state: IRootState) => {
        return state.language;
      },
    }),
  },
  render: h => h(App)
});
