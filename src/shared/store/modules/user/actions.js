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
exports.actions = {
    getUserByUserName: function (_a, user) {
        var dispatch = _a.dispatch, commit = _a.commit;
        new UserService_1.UserService()
            .getUserByUserName(user)
            .then(function (reponse) {
            commit(mutationTypes.GET_USER, { reponse: reponse });
            return reponse;
        });
    },
    getUserByUserEmail: function (_a, user) {
        var dispatch = _a.dispatch, commit = _a.commit;
        new UserService_1.UserService().getUserByEmail(user).then(function (reponse) {
            commit(mutationTypes.GET_USER, { reponse: reponse });
            return reponse;
        });
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWN0aW9ucy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFjdGlvbnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBT0Esa0VBQWlFO0FBRWpFLHlEQUE2QztBQUVoQyxRQUFBLE9BQU8sR0FBa0M7SUFDcEQsaUJBQWlCLFlBQUMsRUFBb0IsRUFBRSxJQUFpQjtZQUFyQyxzQkFBUSxFQUFFLGtCQUFNO1FBQ2xDLElBQUkseUJBQVcsRUFBRTthQUNkLGlCQUFpQixDQUFvQixJQUFJLENBQUM7YUFDMUMsSUFBSSxDQUFDLFVBQUEsT0FBTztZQUNYLE1BQU0sQ0FBQyxhQUFhLENBQUMsUUFBUSxFQUFFLEVBQUUsT0FBTyxTQUFBLEVBQUUsQ0FBQyxDQUFDO1lBQzVDLE9BQU8sT0FBTyxDQUFDO1FBQ2pCLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVELGtCQUFrQixZQUFDLEVBQW9CLEVBQUUsSUFBa0I7WUFBdEMsc0JBQVEsRUFBRSxrQkFBTTtRQUNuQyxJQUFJLHlCQUFXLEVBQUUsQ0FBQyxjQUFjLENBQW9CLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFBLE9BQU87WUFDcEUsTUFBTSxDQUFDLGFBQWEsQ0FBQyxRQUFRLEVBQUUsRUFBRSxPQUFPLFNBQUEsRUFBRSxDQUFDLENBQUM7WUFDNUMsT0FBTyxPQUFPLENBQUM7UUFDakIsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0NBQ0YsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFjdGlvblRyZWUgfSBmcm9tICd2dWV4JztcbmltcG9ydCB7XG4gIElVc2VyLFxuICBJVXNlckJ5TmFtZSxcbiAgSVVzZXJCeUVtYWlsXG59IGZyb20gJy4uLy4uLy4uL2ludGVyZmFjZXMvdXNlci9JVXNlcic7XG5pbXBvcnQgeyBJVXNlclN0YXRlIH0gZnJvbSAnLi4vLi4vLi4vaW50ZXJmYWNlcy91c2VyL0lVc2VyU3RhdGUnO1xuaW1wb3J0IHsgVXNlclNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9zZXJ2aWNlcy91c2VyL1VzZXJTZXJ2aWNlJztcbmltcG9ydCB7IElSb290U3RhdGUgfSBmcm9tICcuLi8uLi8uLi9pbnRlcmZhY2VzL3N0b3JlL0lSb290U3RhdGUnO1xuaW1wb3J0ICogYXMgbXV0YXRpb25UeXBlcyBmcm9tICcuLi8uLi90eXBlcyc7XG5cbmV4cG9ydCBjb25zdCBhY3Rpb25zID0gPEFjdGlvblRyZWU8SVVzZXIsIElSb290U3RhdGU+PntcbiAgZ2V0VXNlckJ5VXNlck5hbWUoeyBkaXNwYXRjaCwgY29tbWl0IH0sIHVzZXI6IElVc2VyQnlOYW1lKSB7XG4gICAgbmV3IFVzZXJTZXJ2aWNlKClcbiAgICAgIC5nZXRVc2VyQnlVc2VyTmFtZTxJVXNlciwgSVJvb3RTdGF0ZT4odXNlcilcbiAgICAgIC50aGVuKHJlcG9uc2UgPT4ge1xuICAgICAgICBjb21taXQobXV0YXRpb25UeXBlcy5HRVRfVVNFUiwgeyByZXBvbnNlIH0pO1xuICAgICAgICByZXR1cm4gcmVwb25zZTtcbiAgICAgIH0pO1xuICB9LFxuXG4gIGdldFVzZXJCeVVzZXJFbWFpbCh7IGRpc3BhdGNoLCBjb21taXQgfSwgdXNlcjogSVVzZXJCeUVtYWlsKSB7XG4gICAgbmV3IFVzZXJTZXJ2aWNlKCkuZ2V0VXNlckJ5RW1haWw8SVVzZXIsIElSb290U3RhdGU+KHVzZXIpLnRoZW4ocmVwb25zZSA9PiB7XG4gICAgICBjb21taXQobXV0YXRpb25UeXBlcy5HRVRfVVNFUiwgeyByZXBvbnNlIH0pO1xuICAgICAgcmV0dXJuIHJlcG9uc2U7XG4gICAgfSk7XG4gIH1cbn07XG4iXX0=