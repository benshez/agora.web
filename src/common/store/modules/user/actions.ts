import { AxiosResponse, AxiosError } from 'axios';
import { ActionTree } from 'vuex';
import {
  IUser,
  IUserByName,
  IUserByEmail
} from '../../../interfaces/user/IUser';
import { IUserState } from '../../../interfaces/user/IUserState';
import { UserService } from '../../../services/user/UserService';
import { IRootState } from '../../../interfaces/store/IRootState';
import * as mutationTypes from '../../types';
import { state } from './state';

export const actions: ActionTree<IUser, IRootState> = {
  [mutationTypes.GET_USER_BY_EMAIL]({ commit }, user: IUserByEmail) {
    new UserService()
      .GET_USER_BY_EMAIL(user)
      .then((response: AxiosResponse) => {
        commit(mutationTypes.GET_USER_BY_EMAIL, response.data as IUser);
      })
      .catch(error => {
        const user: IUser = state;
        user.error = true;
        user.message = error.message;
        commit(mutationTypes.GET_USER_BY_EMAIL, user);
      });
  },

  [mutationTypes.ADD_USER]({ commit }, user: IUser) {
    new UserService()
      .ADD_USER(user)
      .then((response: AxiosResponse) => {
        commit(mutationTypes.ADD_USER, response.data as IUser);
      })
      .catch(error => {
        const user: IUser = state;
        user.error = true;
        user.message = error.message;
        commit(mutationTypes.ADD_USER, user);
      });
  }
};
