import { ActionTree } from 'vuex';
import { I18nResolver } from 'i18n-ts';
import { ILanguage, IRootState, mutationTypes, i18n } from '../../../';

export const actions: ActionTree<ILanguage, IRootState> = {
  [mutationTypes.GET_LANGUAGE]({ commit }, lang: string) {
    let messages = new I18nResolver(i18n, lang).translation;
    commit(mutationTypes.GET_LANGUAGE, messages);
  },
  [mutationTypes.UPDATE_LANGUAGE]({ commit }, lang: string) {
    let messages = new I18nResolver(i18n, lang).translation;
    commit(mutationTypes.GET_LANGUAGE, messages);
  }
};
