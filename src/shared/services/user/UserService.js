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
        return axios_1.default
            .post(constants_1.AgoraConstants.APP_API + "/user/login", user, config)
            .then(function (res) {
            return res.data;
        })
            .catch(function (error) {
            console.log(error);
        });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVXNlclNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJVc2VyU2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQSxnREFBaUU7QUFLakUsOERBQWtFO0FBQ2xFLCtEQUF5QztBQUV6QztJQUFpQywrQkFBVztJQUE1Qzs7SUFrQ0EsQ0FBQztJQS9CQyx1Q0FBaUIsR0FBakIsVUFBcUMsSUFBaUI7UUFDcEQsSUFBSSxNQUFNLEdBQXVCO1lBQy9CLE9BQU8sRUFBRSxJQUFJLENBQUMsVUFBVSxFQUFFO1lBQzFCLElBQUksRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQztTQUMzQixDQUFDO1FBRUYsT0FBTyxlQUFLO2FBQ1QsSUFBSSxDQUFJLDBCQUFjLENBQUMsT0FBTyxnQkFBYSxFQUFFLElBQUksRUFBRSxNQUFNLENBQUM7YUFDMUQsSUFBSSxDQUFDLFVBQUMsR0FBa0I7WUFDdkIsT0FBTyxHQUFHLENBQUMsSUFBSSxDQUFDO1FBQ2xCLENBQUMsQ0FBQzthQUNELEtBQUssQ0FBQyxVQUFBLEtBQUs7WUFDVixPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3JCLENBQUMsQ0FBaUIsQ0FBQztJQUN2QixDQUFDO0lBRUQsb0NBQWMsR0FBZCxVQUFrQyxJQUFrQjtRQUNsRCxJQUFJLE1BQU0sR0FBdUI7WUFDL0IsT0FBTyxFQUFFLElBQUksQ0FBQyxVQUFVLEVBQUU7WUFDMUIsSUFBSSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDO1NBQzNCLENBQUM7UUFFRixPQUFPLGVBQUs7YUFDVCxJQUFJLENBQUksMEJBQWMsQ0FBQyxPQUFPLGdCQUFhLEVBQUUsSUFBSSxFQUFFLE1BQU0sQ0FBQzthQUMxRCxJQUFJLENBQUMsVUFBQyxHQUFrQjtZQUN2QixPQUFPLEdBQUcsQ0FBQyxJQUFJLENBQUM7UUFDbEIsQ0FBQyxDQUFDO2FBQ0QsS0FBSyxDQUFDLFVBQUEsS0FBSztZQUNWLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDckIsQ0FBQyxDQUFpQixDQUFDO0lBQ3ZCLENBQUM7SUFDSCxrQkFBQztBQUFELENBQUMsQUFsQ0QsQ0FBaUMscUJBQVcsR0FrQzNDO0FBbENZLGtDQUFXIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zLCB7IEF4aW9zUmVzcG9uc2UsIEF4aW9zUmVxdWVzdENvbmZpZyB9IGZyb20gJ2F4aW9zJztcbmltcG9ydCB7IEFjdGlvbkNvbnRleHQsIFN0b3JlIH0gZnJvbSAndnVleCc7XG5pbXBvcnQgeyBJVXNlciwgSVVzZXJCeU5hbWUsIElVc2VyQnlFbWFpbCB9IGZyb20gJy4uLy4uL2ludGVyZmFjZXMvdXNlci9JVXNlcic7XG5pbXBvcnQgeyBJVXNlclN0YXRlIH0gZnJvbSAnLi4vLi4vaW50ZXJmYWNlcy91c2VyL0lVc2VyU3RhdGUnO1xuaW1wb3J0IHsgSVJvb3RTdGF0ZSB9IGZyb20gJy4uLy4uL2ludGVyZmFjZXMvc3RvcmUvSVJvb3RTdGF0ZSc7XG5pbXBvcnQgeyBBZ29yYUNvbnN0YW50cyB9IGZyb20gJy4uLy4uL3N5c3RlbS9jb25zdGFudHMvY29uc3RhbnRzJztcbmltcG9ydCBCYXNlU2VydmljZSBmcm9tICcuLi9CYXNlU2VydmljZSc7XG5cbmV4cG9ydCBjbGFzcyBVc2VyU2VydmljZSBleHRlbmRzIEJhc2VTZXJ2aWNlIHtcbiAgcHJpdmF0ZSB1c2VyOiBJVXNlcjtcblxuICBnZXRVc2VyQnlVc2VyTmFtZTxJVXNlciwgSVJvb3RTdGF0ZT4odXNlcjogSVVzZXJCeU5hbWUpOiBQcm9taXNlPElVc2VyPiB7XG4gICAgbGV0IGNvbmZpZzogQXhpb3NSZXF1ZXN0Q29uZmlnID0ge1xuICAgICAgaGVhZGVyczogdGhpcy5nZXRIZWFkZXJzKCksXG4gICAgICBkYXRhOiBKU09OLnN0cmluZ2lmeSh1c2VyKVxuICAgIH07XG5cbiAgICByZXR1cm4gYXhpb3NcbiAgICAgIC5wb3N0KGAke0Fnb3JhQ29uc3RhbnRzLkFQUF9BUEl9L3VzZXIvbG9naW5gLCB1c2VyLCBjb25maWcpXG4gICAgICAudGhlbigocmVzOiBBeGlvc1Jlc3BvbnNlKSA9PiB7XG4gICAgICAgIHJldHVybiByZXMuZGF0YTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goZXJyb3IgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICB9KSBhcyBQcm9taXNlPGFueT47XG4gIH1cblxuICBnZXRVc2VyQnlFbWFpbDxJVXNlciwgSVJvb3RTdGF0ZT4odXNlcjogSVVzZXJCeUVtYWlsKTogUHJvbWlzZTxJVXNlcj4ge1xuICAgIGxldCBjb25maWc6IEF4aW9zUmVxdWVzdENvbmZpZyA9IHtcbiAgICAgIGhlYWRlcnM6IHRoaXMuZ2V0SGVhZGVycygpLFxuICAgICAgZGF0YTogSlNPTi5zdHJpbmdpZnkodXNlcilcbiAgICB9O1xuXG4gICAgcmV0dXJuIGF4aW9zXG4gICAgICAucG9zdChgJHtBZ29yYUNvbnN0YW50cy5BUFBfQVBJfS91c2VyL2xvZ2luYCwgdXNlciwgY29uZmlnKVxuICAgICAgLnRoZW4oKHJlczogQXhpb3NSZXNwb25zZSkgPT4ge1xuICAgICAgICByZXR1cm4gcmVzLmRhdGE7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKGVycm9yID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgfSkgYXMgUHJvbWlzZTxhbnk+O1xuICB9XG59XG4iXX0=