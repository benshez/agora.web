"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// import Vue from 'vue';
// import Vuex from 'vuex';
// import { MutationTree, ActionTree } from 'vuex';
// import { IUser, IUserPost } from '../../../interfaces/user/IUser';
// import { IUserState } from '../../../interfaces/user/IUserState';
// import { UserService } from '../../../services/user/UserService';
// import { IRootState } from '../../../interfaces/store/IRootState';
// import * as mutationTypes from '../../mutation-types';
var mutation_1 = require("./mutation");
var actions_1 = require("./actions");
var state_1 = require("./state");
var getters_1 = require("./getters");
var constants_1 = require("../../../system/constants/constants");
// const actions = <ActionTree<IUser, IRootState>>{
//   getUserByUserName({ dispatch, commit }, user: IUserPost) {
//     new UserService()
//       .getUserByUserName<IUser, IRootState>(user)
//       .then(reponse => {
//         commit(mutationTypes.GET_USER, { reponse });
//         return reponse;
//       });
//   }
// };
// const state: IUser = {
//   id: null,
//   entity: null,
//   role: null,
//   enabled: false,
//   locked: false,
//   username: '',
//   usersurname: '',
//   address: '',
//   city: '',
//   state: '',
//   post_code: '',
//   phone: '',
//   email: '',
//   website: '',
//   facebook: '',
//   twitter: '',
//   logo: '',
//   abn: '',
//   token_char: '',
//   token_expiry: ''
// };
exports.user = {
    namespaced: constants_1.AgoraConstants.STORE_NAMESPACED,
    state: state_1.state,
    getters: getters_1.getters,
    mutations: mutation_1.mutations,
    actions: actions_1.actions
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RvcmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzdG9yZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHlCQUF5QjtBQUN6QiwyQkFBMkI7QUFDM0IsbURBQW1EO0FBQ25ELHFFQUFxRTtBQUNyRSxvRUFBb0U7QUFDcEUsb0VBQW9FO0FBQ3BFLHFFQUFxRTtBQUNyRSx5REFBeUQ7QUFDekQsdUNBQXVDO0FBQ3ZDLHFDQUFvQztBQUNwQyxpQ0FBZ0M7QUFDaEMscUNBQW9DO0FBQ3BDLGlFQUFxRTtBQUVyRSxtREFBbUQ7QUFDbkQsK0RBQStEO0FBQy9ELHdCQUF3QjtBQUN4QixvREFBb0Q7QUFDcEQsMkJBQTJCO0FBQzNCLHVEQUF1RDtBQUN2RCwwQkFBMEI7QUFDMUIsWUFBWTtBQUNaLE1BQU07QUFDTixLQUFLO0FBRUwseUJBQXlCO0FBQ3pCLGNBQWM7QUFDZCxrQkFBa0I7QUFDbEIsZ0JBQWdCO0FBQ2hCLG9CQUFvQjtBQUNwQixtQkFBbUI7QUFDbkIsa0JBQWtCO0FBQ2xCLHFCQUFxQjtBQUNyQixpQkFBaUI7QUFDakIsY0FBYztBQUNkLGVBQWU7QUFDZixtQkFBbUI7QUFDbkIsZUFBZTtBQUNmLGVBQWU7QUFDZixpQkFBaUI7QUFDakIsa0JBQWtCO0FBQ2xCLGlCQUFpQjtBQUNqQixjQUFjO0FBQ2QsYUFBYTtBQUNiLG9CQUFvQjtBQUNwQixxQkFBcUI7QUFDckIsS0FBSztBQUVRLFFBQUEsSUFBSSxHQUFHO0lBQ2xCLFVBQVUsRUFBRSwwQkFBYyxDQUFDLGdCQUFnQjtJQUMzQyxLQUFLLGVBQUE7SUFDTCxPQUFPLG1CQUFBO0lBQ1AsU0FBUyxzQkFBQTtJQUNULE9BQU8sbUJBQUE7Q0FDUixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1wb3J0IFZ1ZSBmcm9tICd2dWUnO1xuLy8gaW1wb3J0IFZ1ZXggZnJvbSAndnVleCc7XG4vLyBpbXBvcnQgeyBNdXRhdGlvblRyZWUsIEFjdGlvblRyZWUgfSBmcm9tICd2dWV4Jztcbi8vIGltcG9ydCB7IElVc2VyLCBJVXNlclBvc3QgfSBmcm9tICcuLi8uLi8uLi9pbnRlcmZhY2VzL3VzZXIvSVVzZXInO1xuLy8gaW1wb3J0IHsgSVVzZXJTdGF0ZSB9IGZyb20gJy4uLy4uLy4uL2ludGVyZmFjZXMvdXNlci9JVXNlclN0YXRlJztcbi8vIGltcG9ydCB7IFVzZXJTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vc2VydmljZXMvdXNlci9Vc2VyU2VydmljZSc7XG4vLyBpbXBvcnQgeyBJUm9vdFN0YXRlIH0gZnJvbSAnLi4vLi4vLi4vaW50ZXJmYWNlcy9zdG9yZS9JUm9vdFN0YXRlJztcbi8vIGltcG9ydCAqIGFzIG11dGF0aW9uVHlwZXMgZnJvbSAnLi4vLi4vbXV0YXRpb24tdHlwZXMnO1xuaW1wb3J0IHsgbXV0YXRpb25zIH0gZnJvbSAnLi9tdXRhdGlvbic7XG5pbXBvcnQgeyBhY3Rpb25zIH0gZnJvbSAnLi9hY3Rpb25zJztcbmltcG9ydCB7IHN0YXRlIH0gZnJvbSAnLi9zdGF0ZSc7XG5pbXBvcnQgeyBnZXR0ZXJzIH0gZnJvbSAnLi9nZXR0ZXJzJztcbmltcG9ydCB7IEFnb3JhQ29uc3RhbnRzIH0gZnJvbSAnLi4vLi4vLi4vc3lzdGVtL2NvbnN0YW50cy9jb25zdGFudHMnO1xuXG4vLyBjb25zdCBhY3Rpb25zID0gPEFjdGlvblRyZWU8SVVzZXIsIElSb290U3RhdGU+Pntcbi8vICAgZ2V0VXNlckJ5VXNlck5hbWUoeyBkaXNwYXRjaCwgY29tbWl0IH0sIHVzZXI6IElVc2VyUG9zdCkge1xuLy8gICAgIG5ldyBVc2VyU2VydmljZSgpXG4vLyAgICAgICAuZ2V0VXNlckJ5VXNlck5hbWU8SVVzZXIsIElSb290U3RhdGU+KHVzZXIpXG4vLyAgICAgICAudGhlbihyZXBvbnNlID0+IHtcbi8vICAgICAgICAgY29tbWl0KG11dGF0aW9uVHlwZXMuR0VUX1VTRVIsIHsgcmVwb25zZSB9KTtcbi8vICAgICAgICAgcmV0dXJuIHJlcG9uc2U7XG4vLyAgICAgICB9KTtcbi8vICAgfVxuLy8gfTtcblxuLy8gY29uc3Qgc3RhdGU6IElVc2VyID0ge1xuLy8gICBpZDogbnVsbCxcbi8vICAgZW50aXR5OiBudWxsLFxuLy8gICByb2xlOiBudWxsLFxuLy8gICBlbmFibGVkOiBmYWxzZSxcbi8vICAgbG9ja2VkOiBmYWxzZSxcbi8vICAgdXNlcm5hbWU6ICcnLFxuLy8gICB1c2Vyc3VybmFtZTogJycsXG4vLyAgIGFkZHJlc3M6ICcnLFxuLy8gICBjaXR5OiAnJyxcbi8vICAgc3RhdGU6ICcnLFxuLy8gICBwb3N0X2NvZGU6ICcnLFxuLy8gICBwaG9uZTogJycsXG4vLyAgIGVtYWlsOiAnJyxcbi8vICAgd2Vic2l0ZTogJycsXG4vLyAgIGZhY2Vib29rOiAnJyxcbi8vICAgdHdpdHRlcjogJycsXG4vLyAgIGxvZ286ICcnLFxuLy8gICBhYm46ICcnLFxuLy8gICB0b2tlbl9jaGFyOiAnJyxcbi8vICAgdG9rZW5fZXhwaXJ5OiAnJ1xuLy8gfTtcblxuZXhwb3J0IGNvbnN0IHVzZXIgPSB7XG4gIG5hbWVzcGFjZWQ6IEFnb3JhQ29uc3RhbnRzLlNUT1JFX05BTUVTUEFDRUQsXG4gIHN0YXRlLFxuICBnZXR0ZXJzLFxuICBtdXRhdGlvbnMsXG4gIGFjdGlvbnNcbn07XG4iXX0=