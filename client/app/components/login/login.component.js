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
var login_service_1 = require("../../services/login/login.service");
var shared_service_1 = require("../../services/sharedservice/shared.service");
var router_1 = require("@angular/router");
var LoginComponent = (function () {
    function LoginComponent(loginService, sharedService, router) {
        this.loginService = loginService;
        this.sharedService = sharedService;
        this.router = router;
    }
    LoginComponent.prototype.loginDetails = function () {
        var _this = this;
        this.loginService.loginDetails(this.username, this.password)
            .subscribe(function (response) {
            if (response.status) {
                _this.error = false;
                _this.sharedService.loggedDetails(_this.username, response.role);
                _this.router.navigate([('/home')]);
            }
            else {
                _this.error = true;
                if (response.found) {
                    _this.errorMessage = "Username/password is wrong, Please login again";
                }
                else {
                    _this.errorMessage = "Username didn't exist. Please signup";
                }
            }
        }, function (err) {
            console.log(err);
        });
    };
    LoginComponent.prototype.ngOnInit = function () {
        this.error = false;
        this.submitDisabled = false;
        this.sharedService.refreshDetails();
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'login',
        providers: [login_service_1.LoginService],
        templateUrl: "login.component.html"
    }),
    __metadata("design:paramtypes", [login_service_1.LoginService, shared_service_1.SharedService, router_1.Router])
], LoginComponent);
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map