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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQmFzZVNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJCYXNlU2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUdBLElBQU0sUUFBUSxHQUFHLE9BQU8sQ0FBQztBQUV6QjtJQUNFO0lBQWUsQ0FBQztJQUVoQixnQ0FBVSxHQUFWLFVBQVcsUUFBYTtRQUFiLHlCQUFBLEVBQUEsYUFBYTtRQUN0QixPQUFPLE1BQU0sQ0FBQyxNQUFNLENBQ2xCO1lBQ0UsY0FBYyxFQUFFLGdDQUFnQztTQUNqRCxFQUNELFFBQVEsQ0FDVCxDQUFDO0lBQ0osQ0FBQztJQUNILGtCQUFDO0FBQUQsQ0FBQyxBQVhELElBV0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBnZXRTdHJpbmcsIHNldFN0cmluZyB9IGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvYXBwbGljYXRpb24tc2V0dGluZ3MnO1xuaW1wb3J0IHsgSUNvbnRlbnRUeXBlIH0gZnJvbSAnLi4vaW50ZXJmYWNlcy9oZWFkZXIvSUhlYWRlcic7XG5cbmNvbnN0IHRva2VuS2V5ID0gJ3Rva2VuJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQmFzZVNlcnZpY2Uge1xuICBjb25zdHJ1Y3RvcigpIHt9XG5cbiAgZ2V0SGVhZGVycyh0b0FwcGVuZCA9IHt9KSB7XG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oXG4gICAgICB7XG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbjtjaGFyc2V0PVVURi04J1xuICAgICAgfSxcbiAgICAgIHRvQXBwZW5kXG4gICAgKTtcbiAgfVxufVxuIl19