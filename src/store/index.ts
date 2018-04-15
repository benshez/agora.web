import Vue from 'vue';
import Vuex from 'vuex';
import { IRootState } from 'agora.common/interfaces/store/IRootState';
import { UserModule } from 'agora.common/store/modules/user';

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

const store = new Vuex.Store<IRootState>({
  modules: { UserModule },
  strict: debug
});

export default store;
