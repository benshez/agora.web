import { MutationTree } from 'vuex';
import { ILanguage, mutationTypes } from '../../../';

export const mutations: MutationTree<ILanguage> = {
  [mutationTypes.GET_LANGUAGE](state: ILanguage, lang: ILanguage) {
    Object.assign(state, lang);
    return lang;
  },
  [mutationTypes.UPDATE_LANGUAGE](state: ILanguage, lang: ILanguage) {
    Object.assign(state, lang);
    debugger;
  }
};
