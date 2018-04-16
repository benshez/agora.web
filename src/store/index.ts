import Vue from 'vue';
import Vuex from 'vuex';
import { UserModule } from 'agora.common/store/modules/user';
import { AgoraConstants } from 'agora.common/system/constants/constants';

Vue.use(Vuex);

//const debug = process.env.NODE_ENV !== 'production';

const store = new Vuex.Store({
  modules: { UserModule },
  strict: AgoraConstants.STORE_STRICT_MODE
});

export default store;
