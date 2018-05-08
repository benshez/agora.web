import { MutationTree } from 'vuex';
import { IUser, mutationTypes } from '../../../';

export const mutations: MutationTree<IUser> = {
  [mutationTypes.GET_USER_BY_EMAIL](state: IUser, user: IUser) {
    Object.assign(state, user);
  }
};
