"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//import { IRootState } from '../../store';
var service_1 = require("../../../services/user/service");
var vue_typex_1 = require("../../../system/utilities/vue-typex");
// export interface IRootState {
//   user: IUserState;
// }
var initialUserState = {
    UserByUserName: {
        '': {
            id: null,
            entity: null,
            role: null,
            enabled: false,
            locked: false,
            username: '',
            usersurname: '',
            address: '',
            city: '',
            state: '',
            post_code: '',
            phone: '',
            email: '',
            website: '',
            facebook: '',
            twitter: '',
            logo: '',
            abn: '',
            token_char: '',
            token_expiry: ''
        }
    },
    UserByEmail: {
        '': {
            id: null,
            entity: null,
            role: null,
            enabled: false,
            locked: false,
            username: '',
            usersurname: '',
            address: '',
            city: '',
            state: '',
            post_code: '',
            phone: '',
            email: '',
            website: '',
            facebook: '',
            twitter: '',
            logo: '',
            abn: '',
            token_char: '',
            token_expiry: ''
        }
    }
};
var usr = vue_typex_1.getStoreBuilder().module('user', initialUserState);
var getUserByUserName = usr.read(function (state) { return function (username) { return state.UserByUserName[username]; }; }, 'getUserByUserName');
var getUserByEmail = usr.read(function (state) { return function (email) { return state.UserByEmail[email]; }; }, 'getUserByEmail');
var stateGetter = usr.state();
var UserStore = {
    get state() {
        return stateGetter();
    },
    getUserByUserName: function (username) {
        return getUserByUserName()(username);
    },
    getUserByEmail: function (email) {
        return getUserByEmail()(email);
    },
    dispatchUserByUserName: usr.dispatch(new service_1.UserService().getUserByUserName),
    dispatchUserByEmail: usr.dispatch(new service_1.UserService().getUserByEmail)
};
exports.default = UserStore;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiX19fc3RvcmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJfX19zdG9yZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUlBLDJDQUEyQztBQUMzQywwREFBNkQ7QUFDN0QsaUVBQXNFO0FBRXRFLGdDQUFnQztBQUNoQyxzQkFBc0I7QUFDdEIsSUFBSTtBQUVKLElBQU0sZ0JBQWdCLEdBQWU7SUFDbkMsY0FBYyxFQUFFO1FBQ2QsRUFBRSxFQUFFO1lBQ0YsRUFBRSxFQUFFLElBQUk7WUFDUixNQUFNLEVBQUUsSUFBSTtZQUNaLElBQUksRUFBRSxJQUFJO1lBQ1YsT0FBTyxFQUFFLEtBQUs7WUFDZCxNQUFNLEVBQUUsS0FBSztZQUNiLFFBQVEsRUFBRSxFQUFFO1lBQ1osV0FBVyxFQUFFLEVBQUU7WUFDZixPQUFPLEVBQUUsRUFBRTtZQUNYLElBQUksRUFBRSxFQUFFO1lBQ1IsS0FBSyxFQUFFLEVBQUU7WUFDVCxTQUFTLEVBQUUsRUFBRTtZQUNiLEtBQUssRUFBRSxFQUFFO1lBQ1QsS0FBSyxFQUFFLEVBQUU7WUFDVCxPQUFPLEVBQUUsRUFBRTtZQUNYLFFBQVEsRUFBRSxFQUFFO1lBQ1osT0FBTyxFQUFFLEVBQUU7WUFDWCxJQUFJLEVBQUUsRUFBRTtZQUNSLEdBQUcsRUFBRSxFQUFFO1lBQ1AsVUFBVSxFQUFFLEVBQUU7WUFDZCxZQUFZLEVBQUUsRUFBRTtTQUNqQjtLQUNGO0lBQ0QsV0FBVyxFQUFFO1FBQ1gsRUFBRSxFQUFFO1lBQ0YsRUFBRSxFQUFFLElBQUk7WUFDUixNQUFNLEVBQUUsSUFBSTtZQUNaLElBQUksRUFBRSxJQUFJO1lBQ1YsT0FBTyxFQUFFLEtBQUs7WUFDZCxNQUFNLEVBQUUsS0FBSztZQUNiLFFBQVEsRUFBRSxFQUFFO1lBQ1osV0FBVyxFQUFFLEVBQUU7WUFDZixPQUFPLEVBQUUsRUFBRTtZQUNYLElBQUksRUFBRSxFQUFFO1lBQ1IsS0FBSyxFQUFFLEVBQUU7WUFDVCxTQUFTLEVBQUUsRUFBRTtZQUNiLEtBQUssRUFBRSxFQUFFO1lBQ1QsS0FBSyxFQUFFLEVBQUU7WUFDVCxPQUFPLEVBQUUsRUFBRTtZQUNYLFFBQVEsRUFBRSxFQUFFO1lBQ1osT0FBTyxFQUFFLEVBQUU7WUFDWCxJQUFJLEVBQUUsRUFBRTtZQUNSLEdBQUcsRUFBRSxFQUFFO1lBQ1AsVUFBVSxFQUFFLEVBQUU7WUFDZCxZQUFZLEVBQUUsRUFBRTtTQUNqQjtLQUNGO0NBQ0YsQ0FBQztBQUVGLElBQU0sR0FBRyxHQUFHLDJCQUFlLEVBQWMsQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFLGdCQUFnQixDQUFDLENBQUM7QUFFM0UsSUFBTSxpQkFBaUIsR0FBRyxHQUFHLENBQUMsSUFBSSxDQUNoQyxVQUFBLEtBQUssSUFBSSxPQUFBLFVBQUMsUUFBZ0IsSUFBSyxPQUFBLEtBQUssQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLEVBQTlCLENBQThCLEVBQXBELENBQW9ELEVBQzdELG1CQUFtQixDQUNwQixDQUFDO0FBRUYsSUFBTSxjQUFjLEdBQUcsR0FBRyxDQUFDLElBQUksQ0FDN0IsVUFBQSxLQUFLLElBQUksT0FBQSxVQUFDLEtBQWEsSUFBSyxPQUFBLEtBQUssQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLEVBQXhCLENBQXdCLEVBQTNDLENBQTJDLEVBQ3BELGdCQUFnQixDQUNqQixDQUFDO0FBRUYsSUFBTSxXQUFXLEdBQUcsR0FBRyxDQUFDLEtBQUssRUFBRSxDQUFDO0FBRWhDLElBQU0sU0FBUyxHQUFHO0lBQ2hCLElBQUksS0FBSztRQUNQLE9BQU8sV0FBVyxFQUFFLENBQUM7SUFDdkIsQ0FBQztJQUVELGlCQUFpQixZQUFDLFFBQWdCO1FBQ2hDLE9BQU8saUJBQWlCLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUN2QyxDQUFDO0lBRUQsY0FBYyxZQUFDLEtBQWE7UUFDMUIsT0FBTyxjQUFjLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNqQyxDQUFDO0lBRUQsc0JBQXNCLEVBQUUsR0FBRyxDQUFDLFFBQVEsQ0FBQyxJQUFJLHFCQUFXLEVBQUUsQ0FBQyxpQkFBaUIsQ0FBQztJQUV6RSxtQkFBbUIsRUFBRSxHQUFHLENBQUMsUUFBUSxDQUFDLElBQUkscUJBQVcsRUFBRSxDQUFDLGNBQWMsQ0FBQztDQUNwRSxDQUFDO0FBRUYsa0JBQWUsU0FBUyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWN0aW9uQ29udGV4dCwgU3RvcmUgfSBmcm9tICd2dWV4JztcbmltcG9ydCB7IElVc2VyIH0gZnJvbSAnLi4vLi4vLi4vaW50ZXJmYWNlcy91c2VyL0lVc2VyJztcbmltcG9ydCB7IElVc2VyU3RhdGUgfSBmcm9tICcuLi8uLi8uLi9pbnRlcmZhY2VzL3VzZXIvSVVzZXJTdGF0ZSc7XG5pbXBvcnQgeyBJUm9vdFN0YXRlIH0gZnJvbSAnLi4vLi4vLi4vaW50ZXJmYWNlcy9zdG9yZS9JUm9vdFN0YXRlJztcbi8vaW1wb3J0IHsgSVJvb3RTdGF0ZSB9IGZyb20gJy4uLy4uL3N0b3JlJztcbmltcG9ydCB7IFVzZXJTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vc2VydmljZXMvdXNlci9zZXJ2aWNlJztcbmltcG9ydCB7IGdldFN0b3JlQnVpbGRlciB9IGZyb20gJy4uLy4uLy4uL3N5c3RlbS91dGlsaXRpZXMvdnVlLXR5cGV4JztcblxuLy8gZXhwb3J0IGludGVyZmFjZSBJUm9vdFN0YXRlIHtcbi8vICAgdXNlcjogSVVzZXJTdGF0ZTtcbi8vIH1cblxuY29uc3QgaW5pdGlhbFVzZXJTdGF0ZTogSVVzZXJTdGF0ZSA9IHtcbiAgVXNlckJ5VXNlck5hbWU6IHtcbiAgICAnJzoge1xuICAgICAgaWQ6IG51bGwsXG4gICAgICBlbnRpdHk6IG51bGwsXG4gICAgICByb2xlOiBudWxsLFxuICAgICAgZW5hYmxlZDogZmFsc2UsXG4gICAgICBsb2NrZWQ6IGZhbHNlLFxuICAgICAgdXNlcm5hbWU6ICcnLFxuICAgICAgdXNlcnN1cm5hbWU6ICcnLFxuICAgICAgYWRkcmVzczogJycsXG4gICAgICBjaXR5OiAnJyxcbiAgICAgIHN0YXRlOiAnJyxcbiAgICAgIHBvc3RfY29kZTogJycsXG4gICAgICBwaG9uZTogJycsXG4gICAgICBlbWFpbDogJycsXG4gICAgICB3ZWJzaXRlOiAnJyxcbiAgICAgIGZhY2Vib29rOiAnJyxcbiAgICAgIHR3aXR0ZXI6ICcnLFxuICAgICAgbG9nbzogJycsXG4gICAgICBhYm46ICcnLFxuICAgICAgdG9rZW5fY2hhcjogJycsXG4gICAgICB0b2tlbl9leHBpcnk6ICcnXG4gICAgfVxuICB9LFxuICBVc2VyQnlFbWFpbDoge1xuICAgICcnOiB7XG4gICAgICBpZDogbnVsbCxcbiAgICAgIGVudGl0eTogbnVsbCxcbiAgICAgIHJvbGU6IG51bGwsXG4gICAgICBlbmFibGVkOiBmYWxzZSxcbiAgICAgIGxvY2tlZDogZmFsc2UsXG4gICAgICB1c2VybmFtZTogJycsXG4gICAgICB1c2Vyc3VybmFtZTogJycsXG4gICAgICBhZGRyZXNzOiAnJyxcbiAgICAgIGNpdHk6ICcnLFxuICAgICAgc3RhdGU6ICcnLFxuICAgICAgcG9zdF9jb2RlOiAnJyxcbiAgICAgIHBob25lOiAnJyxcbiAgICAgIGVtYWlsOiAnJyxcbiAgICAgIHdlYnNpdGU6ICcnLFxuICAgICAgZmFjZWJvb2s6ICcnLFxuICAgICAgdHdpdHRlcjogJycsXG4gICAgICBsb2dvOiAnJyxcbiAgICAgIGFibjogJycsXG4gICAgICB0b2tlbl9jaGFyOiAnJyxcbiAgICAgIHRva2VuX2V4cGlyeTogJydcbiAgICB9XG4gIH1cbn07XG5cbmNvbnN0IHVzciA9IGdldFN0b3JlQnVpbGRlcjxJUm9vdFN0YXRlPigpLm1vZHVsZSgndXNlcicsIGluaXRpYWxVc2VyU3RhdGUpO1xuXG5jb25zdCBnZXRVc2VyQnlVc2VyTmFtZSA9IHVzci5yZWFkKFxuICBzdGF0ZSA9PiAodXNlcm5hbWU6IHN0cmluZykgPT4gc3RhdGUuVXNlckJ5VXNlck5hbWVbdXNlcm5hbWVdLFxuICAnZ2V0VXNlckJ5VXNlck5hbWUnXG4pO1xuXG5jb25zdCBnZXRVc2VyQnlFbWFpbCA9IHVzci5yZWFkKFxuICBzdGF0ZSA9PiAoZW1haWw6IHN0cmluZykgPT4gc3RhdGUuVXNlckJ5RW1haWxbZW1haWxdLFxuICAnZ2V0VXNlckJ5RW1haWwnXG4pO1xuXG5jb25zdCBzdGF0ZUdldHRlciA9IHVzci5zdGF0ZSgpO1xuXG5jb25zdCBVc2VyU3RvcmUgPSB7XG4gIGdldCBzdGF0ZSgpIHtcbiAgICByZXR1cm4gc3RhdGVHZXR0ZXIoKTtcbiAgfSxcblxuICBnZXRVc2VyQnlVc2VyTmFtZSh1c2VybmFtZTogc3RyaW5nKSB7XG4gICAgcmV0dXJuIGdldFVzZXJCeVVzZXJOYW1lKCkodXNlcm5hbWUpO1xuICB9LFxuXG4gIGdldFVzZXJCeUVtYWlsKGVtYWlsOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gZ2V0VXNlckJ5RW1haWwoKShlbWFpbCk7XG4gIH0sXG5cbiAgZGlzcGF0Y2hVc2VyQnlVc2VyTmFtZTogdXNyLmRpc3BhdGNoKG5ldyBVc2VyU2VydmljZSgpLmdldFVzZXJCeVVzZXJOYW1lKSxcblxuICBkaXNwYXRjaFVzZXJCeUVtYWlsOiB1c3IuZGlzcGF0Y2gobmV3IFVzZXJTZXJ2aWNlKCkuZ2V0VXNlckJ5RW1haWwpXG59O1xuXG5leHBvcnQgZGVmYXVsdCBVc2VyU3RvcmU7XG4iXX0=