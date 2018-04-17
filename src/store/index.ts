import Vue from 'vue';
import Vuex from 'vuex';
import { UserModule } from '../common/store/modules/user';
import { AgoraConstants } from '../common/system/constants/constants';

Vue.use(Vuex);

//const debug = process.env.NODE_ENV !== 'production';

const store = new Vuex.Store({
  modules: { UserModule },
  strict: AgoraConstants.STORE_STRICT_MODE
});

export default store;
