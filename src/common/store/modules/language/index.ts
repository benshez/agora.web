import { Module } from 'vuex';
import { IRootState, ILanguage, AgoraConfiguration } from '../../../';
import { mutations } from './mutation';
import { actions } from './actions';
import { state } from './state';
import { getters } from './getters';

export const language: Module<ILanguage, IRootState> = {
  namespaced: AgoraConfiguration.APP_SETTINGS.STORE_NAMESPACED,
  state,
  getters,
  mutations,
  actions
};
