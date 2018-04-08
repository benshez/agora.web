"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiX3N0b3JlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiX3N0b3JlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBS0EsMERBQTZEO0FBQzdELGlFQUFzRTtBQUV0RSxnQ0FBZ0M7QUFDaEMsc0JBQXNCO0FBQ3RCLElBQUk7QUFFSixJQUFNLGdCQUFnQixHQUFlO0lBQ25DLGNBQWMsRUFBRTtRQUNkLEVBQUUsRUFBRTtZQUNGLEVBQUUsRUFBRSxJQUFJO1lBQ1IsTUFBTSxFQUFFLElBQUk7WUFDWixJQUFJLEVBQUUsSUFBSTtZQUNWLE9BQU8sRUFBRSxLQUFLO1lBQ2QsTUFBTSxFQUFFLEtBQUs7WUFDYixRQUFRLEVBQUUsRUFBRTtZQUNaLFdBQVcsRUFBRSxFQUFFO1lBQ2YsT0FBTyxFQUFFLEVBQUU7WUFDWCxJQUFJLEVBQUUsRUFBRTtZQUNSLEtBQUssRUFBRSxFQUFFO1lBQ1QsU0FBUyxFQUFFLEVBQUU7WUFDYixLQUFLLEVBQUUsRUFBRTtZQUNULEtBQUssRUFBRSxFQUFFO1lBQ1QsT0FBTyxFQUFFLEVBQUU7WUFDWCxRQUFRLEVBQUUsRUFBRTtZQUNaLE9BQU8sRUFBRSxFQUFFO1lBQ1gsSUFBSSxFQUFFLEVBQUU7WUFDUixHQUFHLEVBQUUsRUFBRTtZQUNQLFVBQVUsRUFBRSxFQUFFO1lBQ2QsWUFBWSxFQUFFLEVBQUU7U0FDakI7S0FDRjtJQUNELFdBQVcsRUFBRTtRQUNYLEVBQUUsRUFBRTtZQUNGLEVBQUUsRUFBRSxJQUFJO1lBQ1IsTUFBTSxFQUFFLElBQUk7WUFDWixJQUFJLEVBQUUsSUFBSTtZQUNWLE9BQU8sRUFBRSxLQUFLO1lBQ2QsTUFBTSxFQUFFLEtBQUs7WUFDYixRQUFRLEVBQUUsRUFBRTtZQUNaLFdBQVcsRUFBRSxFQUFFO1lBQ2YsT0FBTyxFQUFFLEVBQUU7WUFDWCxJQUFJLEVBQUUsRUFBRTtZQUNSLEtBQUssRUFBRSxFQUFFO1lBQ1QsU0FBUyxFQUFFLEVBQUU7WUFDYixLQUFLLEVBQUUsRUFBRTtZQUNULEtBQUssRUFBRSxFQUFFO1lBQ1QsT0FBTyxFQUFFLEVBQUU7WUFDWCxRQUFRLEVBQUUsRUFBRTtZQUNaLE9BQU8sRUFBRSxFQUFFO1lBQ1gsSUFBSSxFQUFFLEVBQUU7WUFDUixHQUFHLEVBQUUsRUFBRTtZQUNQLFVBQVUsRUFBRSxFQUFFO1lBQ2QsWUFBWSxFQUFFLEVBQUU7U0FDakI7S0FDRjtDQUNGLENBQUM7QUFFRixJQUFNLEdBQUcsR0FBRywyQkFBZSxFQUFjLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxnQkFBZ0IsQ0FBQyxDQUFDO0FBRTNFLElBQU0saUJBQWlCLEdBQUcsR0FBRyxDQUFDLElBQUksQ0FDaEMsVUFBQSxLQUFLLElBQUksT0FBQSxVQUFDLFFBQWdCLElBQUssT0FBQSxLQUFLLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxFQUE5QixDQUE4QixFQUFwRCxDQUFvRCxFQUM3RCxtQkFBbUIsQ0FDcEIsQ0FBQztBQUVGLElBQU0sY0FBYyxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQzdCLFVBQUEsS0FBSyxJQUFJLE9BQUEsVUFBQyxLQUFhLElBQUssT0FBQSxLQUFLLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxFQUF4QixDQUF3QixFQUEzQyxDQUEyQyxFQUNwRCxnQkFBZ0IsQ0FDakIsQ0FBQztBQUVGLElBQU0sV0FBVyxHQUFHLEdBQUcsQ0FBQyxLQUFLLEVBQUUsQ0FBQztBQUVoQyxJQUFNLFNBQVMsR0FBRztJQUNoQixJQUFJLEtBQUs7UUFDUCxPQUFPLFdBQVcsRUFBRSxDQUFDO0lBQ3ZCLENBQUM7SUFFRCxpQkFBaUIsWUFBQyxRQUFnQjtRQUNoQyxPQUFPLGlCQUFpQixFQUFFLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDdkMsQ0FBQztJQUVELGNBQWMsWUFBQyxLQUFhO1FBQzFCLE9BQU8sY0FBYyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDakMsQ0FBQztJQUVELHNCQUFzQixFQUFFLEdBQUcsQ0FBQyxRQUFRLENBQUMsSUFBSSxxQkFBVyxFQUFFLENBQUMsaUJBQWlCLENBQUM7SUFFekUsbUJBQW1CLEVBQUUsR0FBRyxDQUFDLFFBQVEsQ0FBQyxJQUFJLHFCQUFXLEVBQUUsQ0FBQyxjQUFjLENBQUM7Q0FDcEUsQ0FBQztBQUVGLGtCQUFlLFNBQVMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFjdGlvbkNvbnRleHQsIFN0b3JlIH0gZnJvbSAndnVleCc7XG5pbXBvcnQgeyBJVXNlciB9IGZyb20gJy4uLy4uLy4uL2ludGVyZmFjZXMvdXNlci9JVXNlcic7XG5pbXBvcnQgeyBJVXNlclN0YXRlIH0gZnJvbSAnLi4vLi4vLi4vaW50ZXJmYWNlcy91c2VyL0lVc2VyU3RhdGUnO1xuLy9pbXBvcnQgeyBJUm9vdFN0YXRlIH0gZnJvbSAnLi4vLi4vLi4vaW50ZXJmYWNlcy9zdG9yZS9JUm9vdFN0YXRlJztcbmltcG9ydCB7IElSb290U3RhdGUgfSBmcm9tICcuLi8uLi9zdG9yZSc7XG5pbXBvcnQgeyBVc2VyU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL3NlcnZpY2VzL3VzZXIvc2VydmljZSc7XG5pbXBvcnQgeyBnZXRTdG9yZUJ1aWxkZXIgfSBmcm9tICcuLi8uLi8uLi9zeXN0ZW0vdXRpbGl0aWVzL3Z1ZS10eXBleCc7XG5cbi8vIGV4cG9ydCBpbnRlcmZhY2UgSVJvb3RTdGF0ZSB7XG4vLyAgIHVzZXI6IElVc2VyU3RhdGU7XG4vLyB9XG5cbmNvbnN0IGluaXRpYWxVc2VyU3RhdGU6IElVc2VyU3RhdGUgPSB7XG4gIFVzZXJCeVVzZXJOYW1lOiB7XG4gICAgJyc6IHtcbiAgICAgIGlkOiBudWxsLFxuICAgICAgZW50aXR5OiBudWxsLFxuICAgICAgcm9sZTogbnVsbCxcbiAgICAgIGVuYWJsZWQ6IGZhbHNlLFxuICAgICAgbG9ja2VkOiBmYWxzZSxcbiAgICAgIHVzZXJuYW1lOiAnJyxcbiAgICAgIHVzZXJzdXJuYW1lOiAnJyxcbiAgICAgIGFkZHJlc3M6ICcnLFxuICAgICAgY2l0eTogJycsXG4gICAgICBzdGF0ZTogJycsXG4gICAgICBwb3N0X2NvZGU6ICcnLFxuICAgICAgcGhvbmU6ICcnLFxuICAgICAgZW1haWw6ICcnLFxuICAgICAgd2Vic2l0ZTogJycsXG4gICAgICBmYWNlYm9vazogJycsXG4gICAgICB0d2l0dGVyOiAnJyxcbiAgICAgIGxvZ286ICcnLFxuICAgICAgYWJuOiAnJyxcbiAgICAgIHRva2VuX2NoYXI6ICcnLFxuICAgICAgdG9rZW5fZXhwaXJ5OiAnJ1xuICAgIH1cbiAgfSxcbiAgVXNlckJ5RW1haWw6IHtcbiAgICAnJzoge1xuICAgICAgaWQ6IG51bGwsXG4gICAgICBlbnRpdHk6IG51bGwsXG4gICAgICByb2xlOiBudWxsLFxuICAgICAgZW5hYmxlZDogZmFsc2UsXG4gICAgICBsb2NrZWQ6IGZhbHNlLFxuICAgICAgdXNlcm5hbWU6ICcnLFxuICAgICAgdXNlcnN1cm5hbWU6ICcnLFxuICAgICAgYWRkcmVzczogJycsXG4gICAgICBjaXR5OiAnJyxcbiAgICAgIHN0YXRlOiAnJyxcbiAgICAgIHBvc3RfY29kZTogJycsXG4gICAgICBwaG9uZTogJycsXG4gICAgICBlbWFpbDogJycsXG4gICAgICB3ZWJzaXRlOiAnJyxcbiAgICAgIGZhY2Vib29rOiAnJyxcbiAgICAgIHR3aXR0ZXI6ICcnLFxuICAgICAgbG9nbzogJycsXG4gICAgICBhYm46ICcnLFxuICAgICAgdG9rZW5fY2hhcjogJycsXG4gICAgICB0b2tlbl9leHBpcnk6ICcnXG4gICAgfVxuICB9XG59O1xuXG5jb25zdCB1c3IgPSBnZXRTdG9yZUJ1aWxkZXI8SVJvb3RTdGF0ZT4oKS5tb2R1bGUoJ3VzZXInLCBpbml0aWFsVXNlclN0YXRlKTtcblxuY29uc3QgZ2V0VXNlckJ5VXNlck5hbWUgPSB1c3IucmVhZChcbiAgc3RhdGUgPT4gKHVzZXJuYW1lOiBzdHJpbmcpID0+IHN0YXRlLlVzZXJCeVVzZXJOYW1lW3VzZXJuYW1lXSxcbiAgJ2dldFVzZXJCeVVzZXJOYW1lJ1xuKTtcblxuY29uc3QgZ2V0VXNlckJ5RW1haWwgPSB1c3IucmVhZChcbiAgc3RhdGUgPT4gKGVtYWlsOiBzdHJpbmcpID0+IHN0YXRlLlVzZXJCeUVtYWlsW2VtYWlsXSxcbiAgJ2dldFVzZXJCeUVtYWlsJ1xuKTtcblxuY29uc3Qgc3RhdGVHZXR0ZXIgPSB1c3Iuc3RhdGUoKTtcblxuY29uc3QgVXNlclN0b3JlID0ge1xuICBnZXQgc3RhdGUoKSB7XG4gICAgcmV0dXJuIHN0YXRlR2V0dGVyKCk7XG4gIH0sXG5cbiAgZ2V0VXNlckJ5VXNlck5hbWUodXNlcm5hbWU6IHN0cmluZykge1xuICAgIHJldHVybiBnZXRVc2VyQnlVc2VyTmFtZSgpKHVzZXJuYW1lKTtcbiAgfSxcblxuICBnZXRVc2VyQnlFbWFpbChlbWFpbDogc3RyaW5nKSB7XG4gICAgcmV0dXJuIGdldFVzZXJCeUVtYWlsKCkoZW1haWwpO1xuICB9LFxuXG4gIGRpc3BhdGNoVXNlckJ5VXNlck5hbWU6IHVzci5kaXNwYXRjaChuZXcgVXNlclNlcnZpY2UoKS5nZXRVc2VyQnlVc2VyTmFtZSksXG5cbiAgZGlzcGF0Y2hVc2VyQnlFbWFpbDogdXNyLmRpc3BhdGNoKG5ldyBVc2VyU2VydmljZSgpLmdldFVzZXJCeUVtYWlsKVxufTtcblxuZXhwb3J0IGRlZmF1bHQgVXNlclN0b3JlO1xuIl19