import { Module } from 'vuex';
import { IRootState, IUser, AgoraConfiguration } from '../../../';
import { mutations } from './mutation';
import { actions } from './actions';
import { state } from './state';
import { getters } from './getters';

export const user: Module<IUser, IRootState> = {
  namespaced: AgoraConfiguration.APP_SETTINGS.STORE_NAMESPACED,
  state,
  getters,
  mutations,
  actions
};
