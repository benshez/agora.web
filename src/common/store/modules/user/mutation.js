"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var mutationTypes = __importStar(require("../../types"));
exports.mutations = (_a = {},
    _a[mutationTypes.GET_USER_BY_EMAIL] = function (state, user) {
        return (state = user);
    },
    _a[mutationTypes.USER_LOGIN_HAS_ERROR] = function (state, hasError) {
        return (state.error = hasError);
    },
    _a[mutationTypes.USER_LOGIN_ERROR_MESSAGE] = function (state, message) {
        return (state.message = message);
    },
    _a);
var _a;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXV0YXRpb24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJtdXRhdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQSx5REFBNkM7QUFHaEMsUUFBQSxTQUFTO0lBQ3BCLEdBQUMsYUFBYSxDQUFDLGlCQUFpQixJQUFoQyxVQUFrQyxLQUFZLEVBQUUsSUFBVztRQUN6RCxPQUFPLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxDQUFDO0lBQ3hCLENBQUM7SUFDRCxHQUFDLGFBQWEsQ0FBQyxvQkFBb0IsSUFBbkMsVUFBcUMsS0FBWSxFQUFFLFFBQWlCO1FBQ2xFLE9BQU8sQ0FBQyxLQUFLLENBQUMsS0FBSyxHQUFHLFFBQVEsQ0FBQyxDQUFDO0lBQ2xDLENBQUM7SUFDRCxHQUFDLGFBQWEsQ0FBQyx3QkFBd0IsSUFBdkMsVUFBeUMsS0FBWSxFQUFFLE9BQWU7UUFDcEUsT0FBTyxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDLENBQUM7SUFDbkMsQ0FBQztRQUNEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTXV0YXRpb25UcmVlIH0gZnJvbSAndnVleCc7XG5pbXBvcnQgKiBhcyBtdXRhdGlvblR5cGVzIGZyb20gJy4uLy4uL3R5cGVzJztcbmltcG9ydCB7IElVc2VyIH0gZnJvbSAnLi4vLi4vLi4vaW50ZXJmYWNlcy91c2VyL0lVc2VyJztcblxuZXhwb3J0IGNvbnN0IG11dGF0aW9uczogTXV0YXRpb25UcmVlPElVc2VyPiA9IHtcbiAgW211dGF0aW9uVHlwZXMuR0VUX1VTRVJfQllfRU1BSUxdKHN0YXRlOiBJVXNlciwgdXNlcjogSVVzZXIpIHtcbiAgICByZXR1cm4gKHN0YXRlID0gdXNlcik7XG4gIH0sXG4gIFttdXRhdGlvblR5cGVzLlVTRVJfTE9HSU5fSEFTX0VSUk9SXShzdGF0ZTogSVVzZXIsIGhhc0Vycm9yOiBib29sZWFuKSB7XG4gICAgcmV0dXJuIChzdGF0ZS5lcnJvciA9IGhhc0Vycm9yKTtcbiAgfSxcbiAgW211dGF0aW9uVHlwZXMuVVNFUl9MT0dJTl9FUlJPUl9NRVNTQUdFXShzdGF0ZTogSVVzZXIsIG1lc3NhZ2U6IHN0cmluZykge1xuICAgIHJldHVybiAoc3RhdGUubWVzc2FnZSA9IG1lc3NhZ2UpO1xuICB9XG59O1xuIl19