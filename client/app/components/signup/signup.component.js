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
var signup_service_1 = require("../../services/signup/signup.service");
var shared_service_1 = require("../../services/sharedservice/shared.service");
var router_1 = require("@angular/router");
var SignupComponent = (function () {
    function SignupComponent(signupService, router, sharedService) {
        this.signupService = signupService;
        this.router = router;
        this.sharedService = sharedService;
    }
    SignupComponent.prototype.signupDetails = function () {
        var _this = this;
        this.signupService.signupDetails(this.username, this.password, this.firstname, this.lastname, this.email)
            .subscribe(function (response) {
            if (response.inserted) {
                _this.error = false;
                _this.router.navigate([('/login')]);
            }
            else {
                _this.error = true;
                _this.errorMessage = "User already Exists. Please Login";
            }
        }, function (err) {
            console.log(err);
        });
    };
    SignupComponent.prototype.ngOnInit = function () {
        this.error = false;
        this.sharedService.refreshDetails();
    };
    return SignupComponent;
}());
SignupComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'signup',
        providers: [signup_service_1.SignupService],
        templateUrl: "signup.component.html"
    }),
    __metadata("design:paramtypes", [signup_service_1.SignupService, router_1.Router, shared_service_1.SharedService])
], SignupComponent);
exports.SignupComponent = SignupComponent;
//# sourceMappingURL=signup.component.js.map