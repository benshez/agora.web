"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var vue_1 = __importDefault(require("vue"));
var vuex_1 = __importDefault(require("vuex"));
var user_1 = require("./modules/user");
var constants_1 = require("../system/constants/constants");
vue_1.default.use(vuex_1.default);
var store = {
    modules: { user: user_1.user },
    strict: constants_1.AgoraConstants.STORE_STRICT_MODE
};
exports.default = new vuex_1.default.Store(store);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLDRDQUFzQjtBQUN0Qiw4Q0FBMEM7QUFDMUMsdUNBQXNDO0FBRXRDLDJEQUErRDtBQUUvRCxhQUFHLENBQUMsR0FBRyxDQUFDLGNBQUksQ0FBQyxDQUFDO0FBRWQsSUFBTSxLQUFLLEdBQTZCO0lBQ3RDLE9BQU8sRUFBRSxFQUFFLElBQUksYUFBQSxFQUFFO0lBQ2pCLE1BQU0sRUFBRSwwQkFBYyxDQUFDLGlCQUFpQjtDQUN6QyxDQUFDO0FBRUYsa0JBQWUsSUFBSSxjQUFJLENBQUMsS0FBSyxDQUFhLEtBQUssQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFZ1ZSBmcm9tICd2dWUnO1xuaW1wb3J0IFZ1ZXgsIHsgU3RvcmVPcHRpb25zIH0gZnJvbSAndnVleCc7XG5pbXBvcnQgeyB1c2VyIH0gZnJvbSAnLi9tb2R1bGVzL3VzZXInO1xuaW1wb3J0IHsgSVJvb3RTdGF0ZSB9IGZyb20gJy4uL2ludGVyZmFjZXMvc3RvcmUvSVJvb3RTdGF0ZSc7XG5pbXBvcnQgeyBBZ29yYUNvbnN0YW50cyB9IGZyb20gJy4uL3N5c3RlbS9jb25zdGFudHMvY29uc3RhbnRzJztcblxuVnVlLnVzZShWdWV4KTtcblxuY29uc3Qgc3RvcmU6IFN0b3JlT3B0aW9uczxJUm9vdFN0YXRlPiA9IHtcbiAgbW9kdWxlczogeyB1c2VyIH0sXG4gIHN0cmljdDogQWdvcmFDb25zdGFudHMuU1RPUkVfU1RSSUNUX01PREVcbn07XG5cbmV4cG9ydCBkZWZhdWx0IG5ldyBWdWV4LlN0b3JlPElSb290U3RhdGU+KHN0b3JlKTtcbiJdfQ==