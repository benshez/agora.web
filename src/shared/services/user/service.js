"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = __importDefault(require("axios"));
var constants_1 = require("../../system/constants/constants");
var UserService = /** @class */ (function () {
    function UserService() {
    }
    UserService.prototype.getUserByUserName = function (user) {
        var data = {
            password: user.password,
            email: user.email
        };
        var config = {
            headers: {
                'Content-Type': 'application/json;charset=UTF-8'
            },
            data: JSON.stringify(data)
        };
        // return http
        //   .request({
        //     url: `${AgoraConstants.APP_API}/user/login`,
        //     method: 'POST',
        //     headers: { 'Content-Type': 'application/json' },
        //     content: JSON.stringify({
        //       password: user.password,
        //       email: user.email
        //     })
        //   })
        //   .then(
        //     (response: http.HttpResponse) => {
        //       let result = response.content.toJSON();
        //       // console.log(result);
        //     },
        //     e => {
        //       let x: any = '';
        //       // console.log("Error occurred " + e);
        //     }
        //   ) as Promise<any>;
        return axios_1.default
            .post(constants_1.AgoraConstants.APP_API + "/user/login", data, config)
            .then(function (res) {
            return res.data;
        })
            .catch(function (error) {
            console.log(error);
        });
    };
    UserService.prototype.getUserByEmail = function (user) {
        return axios_1.default.post(constants_1.AgoraConstants.APP_API + "/user/login");
    };
    return UserService;
}());
exports.UserService = UserService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxnREFBMEI7QUFPMUIsOERBQWtFO0FBRWxFO0lBR0U7SUFBZSxDQUFDO0lBRWhCLHVDQUFpQixHQUFqQixVQUFxQyxJQUFlO1FBQ2xELElBQUksSUFBSSxHQUFHO1lBQ1QsUUFBUSxFQUFFLElBQUksQ0FBQyxRQUFRO1lBQ3ZCLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSztTQUNsQixDQUFDO1FBQ0YsSUFBSSxNQUFNLEdBQXVCO1lBQy9CLE9BQU8sRUFBRTtnQkFDUCxjQUFjLEVBQUUsZ0NBQWdDO2FBQ2pEO1lBQ0QsSUFBSSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDO1NBQzNCLENBQUM7UUFFRixjQUFjO1FBQ2QsZUFBZTtRQUNmLG1EQUFtRDtRQUNuRCxzQkFBc0I7UUFDdEIsdURBQXVEO1FBQ3ZELGdDQUFnQztRQUNoQyxpQ0FBaUM7UUFDakMsMEJBQTBCO1FBQzFCLFNBQVM7UUFDVCxPQUFPO1FBQ1AsV0FBVztRQUNYLHlDQUF5QztRQUN6QyxnREFBZ0Q7UUFDaEQsZ0NBQWdDO1FBQ2hDLFNBQVM7UUFDVCxhQUFhO1FBQ2IseUJBQXlCO1FBQ3pCLCtDQUErQztRQUMvQyxRQUFRO1FBQ1IsdUJBQXVCO1FBRXZCLE9BQU8sZUFBSzthQUNULElBQUksQ0FBSSwwQkFBYyxDQUFDLE9BQU8sZ0JBQWEsRUFBRSxJQUFJLEVBQUUsTUFBTSxDQUFDO2FBQzFELElBQUksQ0FBQyxVQUFDLEdBQWtCO1lBQ3ZCLE9BQU8sR0FBRyxDQUFDLElBQUksQ0FBQztRQUNsQixDQUFDLENBQUM7YUFDRCxLQUFLLENBQUMsVUFBQSxLQUFLO1lBQ1YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNyQixDQUFDLENBQWlCLENBQUM7SUFDdkIsQ0FBQztJQUVELG9DQUFjLEdBQWQsVUFBa0MsSUFBZTtRQUMvQyxPQUFPLGVBQUssQ0FBQyxJQUFJLENBQUksMEJBQWMsQ0FBQyxPQUFPLGdCQUFhLENBQWlCLENBQUM7SUFDNUUsQ0FBQztJQUNILGtCQUFDO0FBQUQsQ0FBQyxBQW5ERCxJQW1EQztBQW5EWSxrQ0FBVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5pbXBvcnQgKiBhcyBodHRwIGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvaHR0cCc7XG5pbXBvcnQgeyBBeGlvc1Jlc3BvbnNlLCBBeGlvc1JlcXVlc3RDb25maWcgfSBmcm9tICdheGlvcyc7XG5pbXBvcnQgeyBBY3Rpb25Db250ZXh0LCBTdG9yZSB9IGZyb20gJ3Z1ZXgnO1xuaW1wb3J0IHsgSVVzZXIsIElVc2VyUG9zdCB9IGZyb20gJy4uLy4uL2ludGVyZmFjZXMvdXNlci9JVXNlcic7XG5pbXBvcnQgeyBJVXNlclN0YXRlIH0gZnJvbSAnLi4vLi4vaW50ZXJmYWNlcy91c2VyL0lVc2VyU3RhdGUnO1xuaW1wb3J0IHsgSVJvb3RTdGF0ZSB9IGZyb20gJy4uLy4uL2ludGVyZmFjZXMvc3RvcmUvSVJvb3RTdGF0ZSc7XG5pbXBvcnQgeyBBZ29yYUNvbnN0YW50cyB9IGZyb20gJy4uLy4uL3N5c3RlbS9jb25zdGFudHMvY29uc3RhbnRzJztcblxuZXhwb3J0IGNsYXNzIFVzZXJTZXJ2aWNlIHtcbiAgcHJpdmF0ZSB1c2VyOiBJVXNlcjtcblxuICBjb25zdHJ1Y3RvcigpIHt9XG5cbiAgZ2V0VXNlckJ5VXNlck5hbWU8SVVzZXIsIElSb290U3RhdGU+KHVzZXI6IElVc2VyUG9zdCk6IFByb21pc2U8SVVzZXI+IHtcbiAgICBsZXQgZGF0YSA9IHtcbiAgICAgIHBhc3N3b3JkOiB1c2VyLnBhc3N3b3JkLFxuICAgICAgZW1haWw6IHVzZXIuZW1haWxcbiAgICB9O1xuICAgIGxldCBjb25maWc6IEF4aW9zUmVxdWVzdENvbmZpZyA9IHtcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9VVRGLTgnXG4gICAgICB9LFxuICAgICAgZGF0YTogSlNPTi5zdHJpbmdpZnkoZGF0YSlcbiAgICB9O1xuXG4gICAgLy8gcmV0dXJuIGh0dHBcbiAgICAvLyAgIC5yZXF1ZXN0KHtcbiAgICAvLyAgICAgdXJsOiBgJHtBZ29yYUNvbnN0YW50cy5BUFBfQVBJfS91c2VyL2xvZ2luYCxcbiAgICAvLyAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgLy8gICAgIGhlYWRlcnM6IHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9LFxuICAgIC8vICAgICBjb250ZW50OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgLy8gICAgICAgcGFzc3dvcmQ6IHVzZXIucGFzc3dvcmQsXG4gICAgLy8gICAgICAgZW1haWw6IHVzZXIuZW1haWxcbiAgICAvLyAgICAgfSlcbiAgICAvLyAgIH0pXG4gICAgLy8gICAudGhlbihcbiAgICAvLyAgICAgKHJlc3BvbnNlOiBodHRwLkh0dHBSZXNwb25zZSkgPT4ge1xuICAgIC8vICAgICAgIGxldCByZXN1bHQgPSByZXNwb25zZS5jb250ZW50LnRvSlNPTigpO1xuICAgIC8vICAgICAgIC8vIGNvbnNvbGUubG9nKHJlc3VsdCk7XG4gICAgLy8gICAgIH0sXG4gICAgLy8gICAgIGUgPT4ge1xuICAgIC8vICAgICAgIGxldCB4OiBhbnkgPSAnJztcbiAgICAvLyAgICAgICAvLyBjb25zb2xlLmxvZyhcIkVycm9yIG9jY3VycmVkIFwiICsgZSk7XG4gICAgLy8gICAgIH1cbiAgICAvLyAgICkgYXMgUHJvbWlzZTxhbnk+O1xuXG4gICAgcmV0dXJuIGF4aW9zXG4gICAgICAucG9zdChgJHtBZ29yYUNvbnN0YW50cy5BUFBfQVBJfS91c2VyL2xvZ2luYCwgZGF0YSwgY29uZmlnKVxuICAgICAgLnRoZW4oKHJlczogQXhpb3NSZXNwb25zZSkgPT4ge1xuICAgICAgICByZXR1cm4gcmVzLmRhdGE7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKGVycm9yID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgfSkgYXMgUHJvbWlzZTxhbnk+O1xuICB9XG5cbiAgZ2V0VXNlckJ5RW1haWw8SVVzZXIsIElSb290U3RhdGU+KHVzZXI6IElVc2VyUG9zdCk6IFByb21pc2U8SVVzZXI+IHtcbiAgICByZXR1cm4gYXhpb3MucG9zdChgJHtBZ29yYUNvbnN0YW50cy5BUFBfQVBJfS91c2VyL2xvZ2luYCkgYXMgUHJvbWlzZTxhbnk+O1xuICB9XG59XG4iXX0=