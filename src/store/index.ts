import Vue from 'vue';
import Vuex, { StoreOptions } from 'vuex';
import { user } from '../common/store/modules/user';
import { AgoraConfiguration } from '../common/system/constants/AgoraConfiguration';
import { IRootState } from '../common/interfaces/store/IRootState';

Vue.use(Vuex);

const store: StoreOptions<IRootState> = {
  modules: { user },
  strict: AgoraConfiguration.APP_SETTINGS.STORE_STRICT_MODE
};

export default new Vuex.Store<IRootState>(store);
