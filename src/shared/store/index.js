"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var vue_1 = __importDefault(require("vue"));
var vuex_1 = __importDefault(require("vuex"));
var store_1 = require("./modules/user/store");
vue_1.default.use(vuex_1.default);
var debug = process.env.NODE_ENV !== 'production';
var store = new vuex_1.default.Store({
    modules: { user: store_1.user },
    strict: debug
});
//Vue.prototype.$store = store;
exports.default = store;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLDRDQUFzQjtBQUN0Qiw4Q0FBd0I7QUFFeEIsOENBQTRDO0FBRTVDLGFBQUcsQ0FBQyxHQUFHLENBQUMsY0FBSSxDQUFDLENBQUM7QUFFZCxJQUFNLEtBQUssR0FBRyxPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsS0FBSyxZQUFZLENBQUM7QUFFcEQsSUFBTSxLQUFLLEdBQUcsSUFBSSxjQUFJLENBQUMsS0FBSyxDQUFhO0lBQ3ZDLE9BQU8sRUFBRSxFQUFFLElBQUksY0FBQSxFQUFFO0lBQ2pCLE1BQU0sRUFBRSxLQUFLO0NBQ2QsQ0FBQyxDQUFDO0FBRUgsK0JBQStCO0FBRS9CLGtCQUFlLEtBQUssQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBWdWUgZnJvbSAndnVlJztcbmltcG9ydCBWdWV4IGZyb20gJ3Z1ZXgnO1xuaW1wb3J0IHsgSVJvb3RTdGF0ZSB9IGZyb20gJy4uL2ludGVyZmFjZXMvc3RvcmUvSVJvb3RTdGF0ZSc7XG5pbXBvcnQgeyB1c2VyIH0gZnJvbSAnLi9tb2R1bGVzL3VzZXIvc3RvcmUnO1xuXG5WdWUudXNlKFZ1ZXgpO1xuXG5jb25zdCBkZWJ1ZyA9IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbic7XG5cbmNvbnN0IHN0b3JlID0gbmV3IFZ1ZXguU3RvcmU8SVJvb3RTdGF0ZT4oe1xuICBtb2R1bGVzOiB7IHVzZXIgfSxcbiAgc3RyaWN0OiBkZWJ1Z1xufSk7XG5cbi8vVnVlLnByb3RvdHlwZS4kc3RvcmUgPSBzdG9yZTtcblxuZXhwb3J0IGRlZmF1bHQgc3RvcmU7XG4iXX0=