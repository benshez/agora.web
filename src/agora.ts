import Vue from 'vue';
import VeeValidate from 'vee-validate';
import VueMDCAdapter from 'vue-mdc-adapter';
import { mapState } from 'vuex';
import App from './views/App.vue';
import store from './modules/store';
import { AgoraConsole } from './modules/logging/plugins/AgoraConsole';
import { AgoraEventBus } from './modules/events/plugins/AgoraEventBus';
import { AgoraLodash } from './common/modules/core/plugins/AgoraLodash';
import { AgoraConfig } from './common/modules/core/plugins/AgoraConfig';

import { routes } from './modules/router';

import 'vue-mdc-adapter/dist/vue-mdc-adapter.css';

Vue.use(VeeValidate);
Vue.use(VueMDCAdapter);
Vue.use(AgoraConsole);
Vue.use(AgoraEventBus);
Vue.use(AgoraLodash);
Vue.use(AgoraConfig);

AgoraConfig.AgoraConfiguration.DEBUG.LEVEL_4 = true;
//Vue.prototype.$eventBus = new Vue();

new Vue({
  el: '#app',
  router: routes,
  store,
  computed: {},
  render: h => h(App)
});
