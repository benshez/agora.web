import { AxiosResponse, AxiosError } from 'axios';
import { ActionTree } from 'vuex';
import { I18nResolver } from 'i18n-ts';
import { ILanguage } from '../../../interfaces/language/ILanguage';
import { IRootState } from '../../../interfaces/store/IRootState';
import * as mutationTypes from '../types';
import { state } from './state';
import { i18n, Languages } from '../../../language';
import lodash from 'lodash';
import { AgoraConfiguration } from '../../../system/constants/AgoraConfiguration'


export const actions: ActionTree<ILanguage, IRootState> = {
  [mutationTypes.GET_LANGUAGE]({ commit }, lang: string) {
    commit(mutationTypes.GET_LANGUAGE, AgoraConfiguration.APP_LANGUAGES()[lang]);
  },
  [mutationTypes.UPDATE_LANGUAGE]({ commit }, lang: string) {
    commit(mutationTypes.UPDATE_LANGUAGE, AgoraConfiguration.APP_LANGUAGES()[lang]);
  }
};
