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
var addcar_service_1 = require("../../services/addcar/addcar.service");
var router_1 = require("@angular/router");
var AddCarComponent = (function () {
    function AddCarComponent(addCarService, router) {
        this.addCarService = addCarService;
        this.router = router;
    }
    AddCarComponent.prototype.addCarDetails = function () {
        var _this = this;
        this.addCarService.addCarDetails(this.carname, this.segment, this.rent, this.filepath)
            .subscribe(function (response) {
            if (response.error_code) {
                _this.error = false;
                _this.router.navigate([('/home')]);
            }
            else {
                _this.error = true;
                _this.errorMessage = "Error in adding the car details";
            }
        }, function (err) {
            console.log(err);
            _this.error = true;
            _this.errorMessage = "Error in adding the car details";
        });
    };
    AddCarComponent.prototype.ngOnInit = function () {
        this.error = false;
    };
    return AddCarComponent;
}());
AddCarComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'addcar',
        providers: [addcar_service_1.AddCarService],
        templateUrl: "addcar.component.html"
    }),
    __metadata("design:paramtypes", [addcar_service_1.AddCarService, router_1.Router])
], AddCarComponent);
exports.AddCarComponent = AddCarComponent;
//# sourceMappingURL=addcar.component.js.map