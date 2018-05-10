import Vue from 'vue';
import Vuex, { StoreOptions } from 'vuex';
import { IRootState } from '../common/';
import { user } from '../common/store/modules/user';
import { routes } from '../common/store/modules/routes';
import { language } from '../common/store/modules/i18n';
import { AgoraConfiguration } from '../common/system/constants/AgoraConfiguration';

Vue.use(Vuex);

const store: StoreOptions<IRootState> = {
  modules: { user, language, routes },
  strict: AgoraConfiguration.APP_SETTINGS.STORE_STRICT_MODE
};

export default new Vuex.Store<IRootState>(store);
