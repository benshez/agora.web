import Vue from 'vue';
import Vuex, { StoreOptions } from 'vuex';
import { UserModule } from '../common/store/modules/user';
import { AgoraConstants } from '../common/system/constants/constants';
import { IRootState } from '../common/interfaces/store/IRootState';

Vue.use(Vuex);

const store: StoreOptions<IRootState> = {
  modules: { UserModule },
  strict: AgoraConstants.STORE_STRICT_MODE
};

export default new Vuex.Store<IRootState>(store);
