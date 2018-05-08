import Vue from 'vue';
import Vuex, { StoreOptions } from 'vuex';
import { user, language, IRootState } from '../common/';
import { AgoraConfiguration } from '../common/system';
Vue.use(Vuex);

const store: StoreOptions<IRootState> = {
  modules: { user, language },
  strict: AgoraConfiguration.APP_SETTINGS.STORE_STRICT_MODE
};

export default new Vuex.Store<IRootState>(store);
