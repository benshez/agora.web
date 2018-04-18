"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = __importDefault(require("axios"));
var constants_1 = require("../../system/constants/constants");
var BaseService_1 = __importDefault(require("../BaseService"));
var UserService = /** @class */ (function (_super) {
    __extends(UserService, _super);
    function UserService() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UserService.prototype.getUserByUserName = function (user) {
        var config = {
            headers: this.getHeaders(),
            data: JSON.stringify(user)
        };
        return axios_1.default.post(constants_1.AgoraConstants.APP_API + "/user/login", user, config);
        // .then((res: AxiosResponse) => {
        //   return res.data;
        // })
        // .catch(error => {
        //   console.log(error);
        // }) as Promise<IUser>;
    };
    UserService.prototype.getUserByEmail = function (user) {
        var config = {
            headers: this.getHeaders(),
            data: JSON.stringify(user)
        };
        return axios_1.default
            .post(constants_1.AgoraConstants.APP_API + "/user/login", user, config)
            .then(function (res) {
            return res.data;
        })
            .catch(function (error) {
            console.log(error);
        });
    };
    return UserService;
}(BaseService_1.default));
exports.UserService = UserService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVXNlclNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJVc2VyU2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQSxnREFBaUU7QUFLakUsOERBQWtFO0FBQ2xFLCtEQUF5QztBQUV6QztJQUFpQywrQkFBVztJQUE1Qzs7SUFnQ0EsQ0FBQztJQTdCQyx1Q0FBaUIsR0FBakIsVUFBa0IsSUFBa0I7UUFDbEMsSUFBSSxNQUFNLEdBQXVCO1lBQy9CLE9BQU8sRUFBRSxJQUFJLENBQUMsVUFBVSxFQUFFO1lBQzFCLElBQUksRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQztTQUMzQixDQUFDO1FBQ0YsT0FBTyxlQUFLLENBQUMsSUFBSSxDQUFJLDBCQUFjLENBQUMsT0FBTyxnQkFBYSxFQUFFLElBQUksRUFBRSxNQUFNLENBQUMsQ0FBQztRQUN4RSxrQ0FBa0M7UUFDbEMscUJBQXFCO1FBQ3JCLEtBQUs7UUFDTCxvQkFBb0I7UUFDcEIsd0JBQXdCO1FBQ3hCLHdCQUF3QjtJQUMxQixDQUFDO0lBRUQsb0NBQWMsR0FBZCxVQUFrQyxJQUFrQjtRQUNsRCxJQUFJLE1BQU0sR0FBdUI7WUFDL0IsT0FBTyxFQUFFLElBQUksQ0FBQyxVQUFVLEVBQUU7WUFDMUIsSUFBSSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDO1NBQzNCLENBQUM7UUFFRixPQUFPLGVBQUs7YUFDVCxJQUFJLENBQUksMEJBQWMsQ0FBQyxPQUFPLGdCQUFhLEVBQUUsSUFBSSxFQUFFLE1BQU0sQ0FBQzthQUMxRCxJQUFJLENBQUMsVUFBQyxHQUFrQjtZQUN2QixPQUFPLEdBQUcsQ0FBQyxJQUFJLENBQUM7UUFDbEIsQ0FBQyxDQUFDO2FBQ0QsS0FBSyxDQUFDLFVBQUEsS0FBSztZQUNWLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDckIsQ0FBQyxDQUFpQixDQUFDO0lBQ3ZCLENBQUM7SUFDSCxrQkFBQztBQUFELENBQUMsQUFoQ0QsQ0FBaUMscUJBQVcsR0FnQzNDO0FBaENZLGtDQUFXIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zLCB7IEF4aW9zUmVzcG9uc2UsIEF4aW9zUmVxdWVzdENvbmZpZyB9IGZyb20gJ2F4aW9zJztcbmltcG9ydCB7IEFjdGlvbkNvbnRleHQsIFN0b3JlIH0gZnJvbSAndnVleCc7XG5pbXBvcnQgeyBJVXNlciwgSVVzZXJCeU5hbWUsIElVc2VyQnlFbWFpbCB9IGZyb20gJy4uLy4uL2ludGVyZmFjZXMvdXNlci9JVXNlcic7XG5pbXBvcnQgeyBJVXNlclN0YXRlIH0gZnJvbSAnLi4vLi4vaW50ZXJmYWNlcy91c2VyL0lVc2VyU3RhdGUnO1xuaW1wb3J0IHsgSVJvb3RTdGF0ZSB9IGZyb20gJy4uLy4uL2ludGVyZmFjZXMvc3RvcmUvSVJvb3RTdGF0ZSc7XG5pbXBvcnQgeyBBZ29yYUNvbnN0YW50cyB9IGZyb20gJy4uLy4uL3N5c3RlbS9jb25zdGFudHMvY29uc3RhbnRzJztcbmltcG9ydCBCYXNlU2VydmljZSBmcm9tICcuLi9CYXNlU2VydmljZSc7XG5cbmV4cG9ydCBjbGFzcyBVc2VyU2VydmljZSBleHRlbmRzIEJhc2VTZXJ2aWNlIHtcbiAgcHJpdmF0ZSB1c2VyOiBJVXNlcjtcblxuICBnZXRVc2VyQnlVc2VyTmFtZSh1c2VyOiBJVXNlckJ5RW1haWwpOiBQcm9taXNlPGFueT4ge1xuICAgIGxldCBjb25maWc6IEF4aW9zUmVxdWVzdENvbmZpZyA9IHtcbiAgICAgIGhlYWRlcnM6IHRoaXMuZ2V0SGVhZGVycygpLFxuICAgICAgZGF0YTogSlNPTi5zdHJpbmdpZnkodXNlcilcbiAgICB9O1xuICAgIHJldHVybiBheGlvcy5wb3N0KGAke0Fnb3JhQ29uc3RhbnRzLkFQUF9BUEl9L3VzZXIvbG9naW5gLCB1c2VyLCBjb25maWcpO1xuICAgIC8vIC50aGVuKChyZXM6IEF4aW9zUmVzcG9uc2UpID0+IHtcbiAgICAvLyAgIHJldHVybiByZXMuZGF0YTtcbiAgICAvLyB9KVxuICAgIC8vIC5jYXRjaChlcnJvciA9PiB7XG4gICAgLy8gICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgLy8gfSkgYXMgUHJvbWlzZTxJVXNlcj47XG4gIH1cblxuICBnZXRVc2VyQnlFbWFpbDxJVXNlciwgSVJvb3RTdGF0ZT4odXNlcjogSVVzZXJCeUVtYWlsKTogUHJvbWlzZTxJVXNlcj4ge1xuICAgIGxldCBjb25maWc6IEF4aW9zUmVxdWVzdENvbmZpZyA9IHtcbiAgICAgIGhlYWRlcnM6IHRoaXMuZ2V0SGVhZGVycygpLFxuICAgICAgZGF0YTogSlNPTi5zdHJpbmdpZnkodXNlcilcbiAgICB9O1xuXG4gICAgcmV0dXJuIGF4aW9zXG4gICAgICAucG9zdChgJHtBZ29yYUNvbnN0YW50cy5BUFBfQVBJfS91c2VyL2xvZ2luYCwgdXNlciwgY29uZmlnKVxuICAgICAgLnRoZW4oKHJlczogQXhpb3NSZXNwb25zZSkgPT4ge1xuICAgICAgICByZXR1cm4gcmVzLmRhdGE7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKGVycm9yID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgfSkgYXMgUHJvbWlzZTxhbnk+O1xuICB9XG59XG4iXX0=