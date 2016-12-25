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
var web_service_1 = require("./web.service");
var ApiService = (function () {
    function ApiService(webService) {
        this.webService = webService;
    }
    ApiService.prototype.loginDetails = function (username, password) {
        var networkConfig = {
            'url': 'login',
            'data': {
                'username': username,
                'password': password
            }
        };
        return this.webService.postDetails(networkConfig);
    };
    ApiService.prototype.getCarDetails = function () {
        var networkConfig = {
            'url': 'cars/view'
        };
        return this.webService.getDetails(networkConfig);
    };
    ApiService.prototype.bookCar = function (carname, username) {
        var networkConfig = {
            'url': 'user/book',
            'data': {
                'carname': carname,
                'username': username
            }
        };
        return this.webService.postDetails(networkConfig);
    };
    ApiService.prototype.getOrderHistory = function (username) {
        var networkConfig = {
            'url': 'user/history',
            'data': {
                'username': username
            }
        };
        return this.webService.postDetails(networkConfig);
    };
    ApiService.prototype.signupDetails = function (username, password, firstname, lastname, email) {
        var networkConfig = {
            'url': 'signup',
            'data': {
                'username': username,
                'password': password,
                'firstname': firstname,
                'lastname': lastname,
                'email': email
            }
        };
        return this.webService.postDetails(networkConfig);
    };
    ApiService.prototype.deleteCar = function (carname) {
        var networkConfig = {
            'url': 'cars/delete',
            'data': {
                'carname': carname
            }
        };
        return this.webService.deleteDetails(networkConfig);
    };
    ApiService.prototype.getSales = function (username) {
        var networkConfig = {
            'url': 'user/history',
            'data': {
                'username': username
            }
        };
        return this.webService.postDetails(networkConfig);
    };
    ApiService.prototype.addCarDetails = function (carname, segment, rent, filepath) {
        var networkConfig = {
            'url': 'cars/add',
            'data': {
                'carname': carname,
                'segment': segment,
                'rentcost': rent,
                'filepath': filepath
            }
        };
        return this.webService.postDetails(networkConfig);
    };
    ApiService.prototype.updateCarDetails = function (carname, segment, rent) {
        var networkConfig = {
            'url': 'cars/update',
            'data': {
                'carname': carname,
                'segment': segment,
                'rentcost': rent
            }
        };
        return this.webService.putDetails(networkConfig);
    };
    return ApiService;
}());
ApiService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [web_service_1.WebService])
], ApiService);
exports.ApiService = ApiService;
//# sourceMappingURL=api.service.js.map