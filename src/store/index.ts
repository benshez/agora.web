import Vue from 'vue';
import Vuex, { StoreOptions } from 'vuex';
import { user } from '../common/store/modules/user';
import { AgoraConstants } from '../common/system/constants/constants';
import { IRootState } from '../common/interfaces/store/IRootState';

Vue.use(Vuex);

const store: StoreOptions<IRootState> = {
  modules: { user },
  strict: AgoraConstants.STORE_STRICT_MODE
};

export default new Vuex.Store<IRootState>(store);
