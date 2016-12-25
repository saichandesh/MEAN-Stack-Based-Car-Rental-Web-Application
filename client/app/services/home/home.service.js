"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var api_service_1 = require("../webservices/api.service");
var HomeService = (function () {
    function HomeService(apiService) {
        this.apiService = apiService;
    }
    HomeService.prototype.getCarDetails = function () {
        return this.apiService.getCarDetails();
    };
    HomeService.prototype.bookCar = function (carname, username) {
        return this.apiService.bookCar(carname, username);
    };
    HomeService.prototype.deleteCar = function (carname) {
        return this.apiService.deleteCar(carname);
    };
    HomeService.prototype.updateCarDetails = function (carname, segment, rent) {
        return this.apiService.updateCarDetails(carname, segment, rent);
    };
    return HomeService;
}());
HomeService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [api_service_1.ApiService])
], HomeService);
exports.HomeService = HomeService;
//# sourceMappingURL=home.service.js.map