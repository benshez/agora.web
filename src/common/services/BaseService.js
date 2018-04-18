"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tokenKey = 'token';
var BaseService = /** @class */ (function () {
    function BaseService() {
    }
    BaseService.prototype.getHeaders = function (toAppend) {
        if (toAppend === void 0) { toAppend = {}; }
        return Object.assign({
            'Content-Type': 'application/json;charset=UTF-8'
        }, toAppend);
    };
    return BaseService;
}());
exports.default = BaseService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQmFzZVNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJCYXNlU2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUVBLElBQU0sUUFBUSxHQUFHLE9BQU8sQ0FBQztBQUV6QjtJQUNFO0lBQWUsQ0FBQztJQUVoQixnQ0FBVSxHQUFWLFVBQVcsUUFBYTtRQUFiLHlCQUFBLEVBQUEsYUFBYTtRQUN0QixPQUFPLE1BQU0sQ0FBQyxNQUFNLENBQ2xCO1lBQ0UsY0FBYyxFQUFFLGdDQUFnQztTQUNqRCxFQUNELFFBQVEsQ0FDVCxDQUFDO0lBQ0osQ0FBQztJQUNILGtCQUFDO0FBQUQsQ0FBQyxBQVhELElBV0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJQ29udGVudFR5cGUgfSBmcm9tICcuLi9pbnRlcmZhY2VzL2hlYWRlci9JSGVhZGVyJztcblxuY29uc3QgdG9rZW5LZXkgPSAndG9rZW4nO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCYXNlU2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKCkge31cblxuICBnZXRIZWFkZXJzKHRvQXBwZW5kID0ge30pIHtcbiAgICByZXR1cm4gT2JqZWN0LmFzc2lnbihcbiAgICAgIHtcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9VVRGLTgnXG4gICAgICB9LFxuICAgICAgdG9BcHBlbmRcbiAgICApO1xuICB9XG59XG4iXX0=