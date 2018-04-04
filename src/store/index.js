import Vue from 'vue';
import Vuex from '../common/vue/Vuex';

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

const store = new Vuex.Store({
  modules: {},
  strict: debug
});

Vue.prototype.$store = store;

export default store;
