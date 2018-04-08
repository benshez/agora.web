"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var vue_1 = __importDefault(require("vue"));
var vuex_1 = __importDefault(require("vuex"));
vue_1.default.use(vuex_1.default);
var mutations = {
    reverse: function (state) { return state.links.reverse(); }
};
var actions = {
    getConversations: function (_a, url) {
        var Dispatch = _a.dispatch, Commit = _a.commit;
        return state.links.filter(function (x) { return x.url === url; });
    }
};
var state = {
    links: [
        { url: 'https://vuejs.org', description: 'Core Docs' },
        { url: 'https://forum.vuejs.org', description: 'Forum' },
        { url: 'https://chat.vuejs.org', description: 'Community Chat' }
    ]
};
exports.default = new vuex_1.default.Store({
    state: state,
    mutations: mutations,
    actions: actions
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiX19zdG9yZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIl9fc3RvcmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSw0Q0FBc0I7QUFDdEIsOENBQXdCO0FBS3hCLGFBQUcsQ0FBQyxHQUFHLENBQUMsY0FBSSxDQUFDLENBQUM7QUFNZCxJQUFNLFNBQVMsR0FBd0I7SUFDckMsT0FBTyxFQUFFLFVBQUEsS0FBSyxJQUFJLE9BQUEsS0FBSyxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUUsRUFBckIsQ0FBcUI7Q0FDeEMsQ0FBQztBQUVGLElBQU0sT0FBTyxHQUEyQjtJQUN0QyxnQkFBZ0IsWUFBQyxFQUFzQyxFQUFFLEdBQVc7WUFBakQsc0JBQWtCLEVBQUUsa0JBQWM7UUFDbkQsT0FBTyxLQUFLLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLENBQUMsQ0FBQyxHQUFHLEtBQUssR0FBRyxFQUFiLENBQWEsQ0FBQyxDQUFDO0lBQ2hELENBQUM7Q0FDRixDQUFDO0FBRUYsSUFBTSxLQUFLLEdBQVU7SUFDbkIsS0FBSyxFQUFFO1FBQ0wsRUFBRSxHQUFHLEVBQUUsbUJBQW1CLEVBQUUsV0FBVyxFQUFFLFdBQVcsRUFBRTtRQUN0RCxFQUFFLEdBQUcsRUFBRSx5QkFBeUIsRUFBRSxXQUFXLEVBQUUsT0FBTyxFQUFFO1FBQ3hELEVBQUUsR0FBRyxFQUFFLHdCQUF3QixFQUFFLFdBQVcsRUFBRSxnQkFBZ0IsRUFBRTtLQUNqRTtDQUNGLENBQUM7QUFFRixrQkFBZSxJQUFJLGNBQUksQ0FBQyxLQUFLLENBQVE7SUFDbkMsS0FBSyxPQUFBO0lBQ0wsU0FBUyxXQUFBO0lBQ1QsT0FBTyxTQUFBO0NBQ1IsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFZ1ZSBmcm9tICd2dWUnO1xuaW1wb3J0IFZ1ZXggZnJvbSAndnVleCc7XG5pbXBvcnQgeyBNdXRhdGlvblRyZWUsIEFjdGlvblRyZWUgfSBmcm9tICd2dWV4JztcbmltcG9ydCAqIGFzIFQgZnJvbSAnLi4vLi4vLi4vaW50ZXJmYWNlcy9jb21tb24nO1xuaW1wb3J0IHsgRGlzcGF0Y2gsIENvbW1pdCB9IGZyb20gJ3Z1ZXgvdHlwZXMvaW5kZXgnO1xuXG5WdWUudXNlKFZ1ZXgpO1xuXG5pbnRlcmZhY2UgU3RhdGUge1xuICBsaW5rczogQXJyYXk8VC5MaW5rPjtcbn1cblxuY29uc3QgbXV0YXRpb25zOiBNdXRhdGlvblRyZWU8U3RhdGU+ID0ge1xuICByZXZlcnNlOiBzdGF0ZSA9PiBzdGF0ZS5saW5rcy5yZXZlcnNlKClcbn07XG5cbmNvbnN0IGFjdGlvbnM6IEFjdGlvblRyZWU8U3RhdGUsIGFueT4gPSB7XG4gIGdldENvbnZlcnNhdGlvbnMoeyBkaXNwYXRjaDogRGlzcGF0Y2gsIGNvbW1pdDogQ29tbWl0IH0sIHVybDogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHN0YXRlLmxpbmtzLmZpbHRlcih4ID0+IHgudXJsID09PSB1cmwpO1xuICB9XG59O1xuXG5jb25zdCBzdGF0ZTogU3RhdGUgPSB7XG4gIGxpbmtzOiBbXG4gICAgeyB1cmw6ICdodHRwczovL3Z1ZWpzLm9yZycsIGRlc2NyaXB0aW9uOiAnQ29yZSBEb2NzJyB9LFxuICAgIHsgdXJsOiAnaHR0cHM6Ly9mb3J1bS52dWVqcy5vcmcnLCBkZXNjcmlwdGlvbjogJ0ZvcnVtJyB9LFxuICAgIHsgdXJsOiAnaHR0cHM6Ly9jaGF0LnZ1ZWpzLm9yZycsIGRlc2NyaXB0aW9uOiAnQ29tbXVuaXR5IENoYXQnIH1cbiAgXVxufTtcblxuZXhwb3J0IGRlZmF1bHQgbmV3IFZ1ZXguU3RvcmU8U3RhdGU+KHtcbiAgc3RhdGUsXG4gIG11dGF0aW9ucyxcbiAgYWN0aW9uc1xufSk7XG4iXX0=