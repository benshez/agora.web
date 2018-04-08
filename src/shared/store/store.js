"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var vue_1 = __importDefault(require("vue"));
var vuex_1 = __importDefault(require("vuex"));
var vue_typex_1 = require("../system/utilities/vue-typex");
// export interface IRootState {
//   user: IUserState;
// }
vue_1.default.use(vuex_1.default);
var store = vue_typex_1.getStoreBuilder().vuexStore();
exports.default = store;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RvcmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzdG9yZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLDRDQUFzQjtBQUN0Qiw4Q0FBbUM7QUFDbkMsMkRBQWdFO0FBSWhFLGdDQUFnQztBQUNoQyxzQkFBc0I7QUFDdEIsSUFBSTtBQUVKLGFBQUcsQ0FBQyxHQUFHLENBQUMsY0FBSSxDQUFDLENBQUM7QUFFZCxJQUFNLEtBQUssR0FBc0IsMkJBQWUsRUFBYyxDQUFDLFNBQVMsRUFBRSxDQUFDO0FBRTNFLGtCQUFlLEtBQUssQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBWdWUgZnJvbSAndnVlJztcbmltcG9ydCBWdWV4LCB7IFN0b3JlIH0gZnJvbSAndnVleCc7XG5pbXBvcnQgeyBnZXRTdG9yZUJ1aWxkZXIgfSBmcm9tICcuLi9zeXN0ZW0vdXRpbGl0aWVzL3Z1ZS10eXBleCc7XG5pbXBvcnQgeyBJUm9vdFN0YXRlIH0gZnJvbSAnLi4vaW50ZXJmYWNlcy9zdG9yZS9JUm9vdFN0YXRlJztcbmltcG9ydCB7IElVc2VyU3RhdGUgfSBmcm9tICcuLi9pbnRlcmZhY2VzL3VzZXIvSVVzZXJTdGF0ZSc7XG5cbi8vIGV4cG9ydCBpbnRlcmZhY2UgSVJvb3RTdGF0ZSB7XG4vLyAgIHVzZXI6IElVc2VyU3RhdGU7XG4vLyB9XG5cblZ1ZS51c2UoVnVleCk7XG5cbmNvbnN0IHN0b3JlOiBTdG9yZTxJUm9vdFN0YXRlPiA9IGdldFN0b3JlQnVpbGRlcjxJUm9vdFN0YXRlPigpLnZ1ZXhTdG9yZSgpO1xuXG5leHBvcnQgZGVmYXVsdCBzdG9yZTtcbiJdfQ==