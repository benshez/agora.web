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
    _a[mutationTypes.GET_USER] = function (state, user) {
        console.log(mutationTypes.GET_USER, user);
        state.user = user;
    },
    _a);
var _a;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXV0YXRpb24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJtdXRhdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQSx5REFBNkM7QUFJaEMsUUFBQSxTQUFTLEdBQUcsQ0FBQTtJQUN2QixHQUFDLGFBQWEsQ0FBQyxRQUFRLElBQXZCLFVBQXlCLEtBQWlCLEVBQUUsSUFBVztRQUNyRCxPQUFPLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDMUMsS0FBSyxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7SUFDcEIsQ0FBQztNQUNGLENBQUEsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE11dGF0aW9uVHJlZSB9IGZyb20gJ3Z1ZXgnO1xuaW1wb3J0ICogYXMgbXV0YXRpb25UeXBlcyBmcm9tICcuLi8uLi90eXBlcyc7XG5pbXBvcnQgeyBJVXNlciB9IGZyb20gJy4uLy4uLy4uL2ludGVyZmFjZXMvdXNlci9JVXNlcic7XG5pbXBvcnQgeyBJUm9vdFN0YXRlIH0gZnJvbSAnLi4vLi4vLi4vaW50ZXJmYWNlcy9zdG9yZS9JUm9vdFN0YXRlJztcblxuZXhwb3J0IGNvbnN0IG11dGF0aW9ucyA9IDxNdXRhdGlvblRyZWU8SVJvb3RTdGF0ZT4+e1xuICBbbXV0YXRpb25UeXBlcy5HRVRfVVNFUl0oc3RhdGU6IElSb290U3RhdGUsIHVzZXI6IElVc2VyKSB7XG4gICAgY29uc29sZS5sb2cobXV0YXRpb25UeXBlcy5HRVRfVVNFUiwgdXNlcik7XG4gICAgc3RhdGUudXNlciA9IHVzZXI7XG4gIH1cbn07XG4iXX0=