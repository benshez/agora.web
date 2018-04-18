"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var UserService_1 = require("../../../services/user/UserService");
var mutationTypes = __importStar(require("../../types"));
exports.actions = (_a = {},
    _a[mutationTypes.GET_USER_BY_EMAIL] = function (_a, user) {
        var dispatch = _a.dispatch, commit = _a.commit;
        new UserService_1.UserService()
            .getUserByUserName(user)
            .then(function (response) {
            var user = response.data;
            commit(mutationTypes.GET_USER_BY_EMAIL, user);
            if (user.error) {
                commit(mutationTypes.USER_LOGIN_HAS_ERROR, user.error);
                commit(mutationTypes.USER_LOGIN_ERROR_MESSAGE, user.message);
            }
        })
            .catch(function (error) {
            commit(mutationTypes.USER_LOGIN_HAS_ERROR, true);
            commit(mutationTypes.USER_LOGIN_ERROR_MESSAGE, error);
        });
    },
    _a.getUserByUserEmail = function (_a, user) {
        var dispatch = _a.dispatch, commit = _a.commit;
        new UserService_1.UserService().getUserByEmail(user).then(function (reponse) {
            commit(mutationTypes.GET_USER_BY_EMAIL, { reponse: reponse });
            return reponse;
        });
    },
    _a);
var _a;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWN0aW9ucy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFjdGlvbnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBUUEsa0VBQWlFO0FBRWpFLHlEQUE2QztBQUVoQyxRQUFBLE9BQU87SUFDbEIsR0FBQyxhQUFhLENBQUMsaUJBQWlCLElBQWhDLFVBQWtDLEVBQW9CLEVBQUUsSUFBa0I7WUFBdEMsc0JBQVEsRUFBRSxrQkFBTTtRQUNsRCxJQUFJLHlCQUFXLEVBQUU7YUFDZCxpQkFBaUIsQ0FBQyxJQUFJLENBQUM7YUFDdkIsSUFBSSxDQUFDLFVBQUMsUUFBdUI7WUFDNUIsSUFBTSxJQUFJLEdBQVUsUUFBUSxDQUFDLElBQUksQ0FBQztZQUNsQyxNQUFNLENBQUMsYUFBYSxDQUFDLGlCQUFpQixFQUFFLElBQUksQ0FBQyxDQUFDO1lBQzlDLElBQUksSUFBSSxDQUFDLEtBQUssRUFBRTtnQkFDZCxNQUFNLENBQUMsYUFBYSxDQUFDLG9CQUFvQixFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDdkQsTUFBTSxDQUFDLGFBQWEsQ0FBQyx3QkFBd0IsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7YUFDOUQ7UUFDSCxDQUFDLENBQUM7YUFDRCxLQUFLLENBQUMsVUFBQSxLQUFLO1lBQ1YsTUFBTSxDQUFDLGFBQWEsQ0FBQyxvQkFBb0IsRUFBRSxJQUFJLENBQUMsQ0FBQztZQUNqRCxNQUFNLENBQUMsYUFBYSxDQUFDLHdCQUF3QixFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQ3hELENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVELHFCQUFrQixHQUFsQixVQUFtQixFQUFvQixFQUFFLElBQWtCO1lBQXRDLHNCQUFRLEVBQUUsa0JBQU07UUFDbkMsSUFBSSx5QkFBVyxFQUFFLENBQUMsY0FBYyxDQUFvQixJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQSxPQUFPO1lBQ3BFLE1BQU0sQ0FBQyxhQUFhLENBQUMsaUJBQWlCLEVBQUUsRUFBRSxPQUFPLFNBQUEsRUFBRSxDQUFDLENBQUM7WUFDckQsT0FBTyxPQUFPLENBQUM7UUFDakIsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO1FBQ0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBeGlvc1Jlc3BvbnNlIH0gZnJvbSAnYXhpb3MnO1xuaW1wb3J0IHsgQWN0aW9uVHJlZSB9IGZyb20gJ3Z1ZXgnO1xuaW1wb3J0IHtcbiAgSVVzZXIsXG4gIElVc2VyQnlOYW1lLFxuICBJVXNlckJ5RW1haWxcbn0gZnJvbSAnLi4vLi4vLi4vaW50ZXJmYWNlcy91c2VyL0lVc2VyJztcbmltcG9ydCB7IElVc2VyU3RhdGUgfSBmcm9tICcuLi8uLi8uLi9pbnRlcmZhY2VzL3VzZXIvSVVzZXJTdGF0ZSc7XG5pbXBvcnQgeyBVc2VyU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL3NlcnZpY2VzL3VzZXIvVXNlclNlcnZpY2UnO1xuaW1wb3J0IHsgSVJvb3RTdGF0ZSB9IGZyb20gJy4uLy4uLy4uL2ludGVyZmFjZXMvc3RvcmUvSVJvb3RTdGF0ZSc7XG5pbXBvcnQgKiBhcyBtdXRhdGlvblR5cGVzIGZyb20gJy4uLy4uL3R5cGVzJztcblxuZXhwb3J0IGNvbnN0IGFjdGlvbnM6IEFjdGlvblRyZWU8SVVzZXIsIElSb290U3RhdGU+ID0ge1xuICBbbXV0YXRpb25UeXBlcy5HRVRfVVNFUl9CWV9FTUFJTF0oeyBkaXNwYXRjaCwgY29tbWl0IH0sIHVzZXI6IElVc2VyQnlFbWFpbCkge1xuICAgIG5ldyBVc2VyU2VydmljZSgpXG4gICAgICAuZ2V0VXNlckJ5VXNlck5hbWUodXNlcilcbiAgICAgIC50aGVuKChyZXNwb25zZTogQXhpb3NSZXNwb25zZSkgPT4ge1xuICAgICAgICBjb25zdCB1c2VyOiBJVXNlciA9IHJlc3BvbnNlLmRhdGE7XG4gICAgICAgIGNvbW1pdChtdXRhdGlvblR5cGVzLkdFVF9VU0VSX0JZX0VNQUlMLCB1c2VyKTtcbiAgICAgICAgaWYgKHVzZXIuZXJyb3IpIHtcbiAgICAgICAgICBjb21taXQobXV0YXRpb25UeXBlcy5VU0VSX0xPR0lOX0hBU19FUlJPUiwgdXNlci5lcnJvcik7XG4gICAgICAgICAgY29tbWl0KG11dGF0aW9uVHlwZXMuVVNFUl9MT0dJTl9FUlJPUl9NRVNTQUdFLCB1c2VyLm1lc3NhZ2UpO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgLmNhdGNoKGVycm9yID0+IHtcbiAgICAgICAgY29tbWl0KG11dGF0aW9uVHlwZXMuVVNFUl9MT0dJTl9IQVNfRVJST1IsIHRydWUpO1xuICAgICAgICBjb21taXQobXV0YXRpb25UeXBlcy5VU0VSX0xPR0lOX0VSUk9SX01FU1NBR0UsIGVycm9yKTtcbiAgICAgIH0pO1xuICB9LFxuXG4gIGdldFVzZXJCeVVzZXJFbWFpbCh7IGRpc3BhdGNoLCBjb21taXQgfSwgdXNlcjogSVVzZXJCeUVtYWlsKSB7XG4gICAgbmV3IFVzZXJTZXJ2aWNlKCkuZ2V0VXNlckJ5RW1haWw8SVVzZXIsIElSb290U3RhdGU+KHVzZXIpLnRoZW4ocmVwb25zZSA9PiB7XG4gICAgICBjb21taXQobXV0YXRpb25UeXBlcy5HRVRfVVNFUl9CWV9FTUFJTCwgeyByZXBvbnNlIH0pO1xuICAgICAgcmV0dXJuIHJlcG9uc2U7XG4gICAgfSk7XG4gIH1cbn07XG4iXX0=