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
var sales_service_1 = require("../../services/sales/sales.service");
var shared_service_1 = require("../../services/sharedservice/shared.service");
var router_1 = require("@angular/router");
var SalesComponent = (function () {
    function SalesComponent(salesService, sharedService, router) {
        this.salesService = salesService;
        this.sharedService = sharedService;
        this.router = router;
        this.pieChartType = 'pie';
    }
    // events
    SalesComponent.prototype.chartClicked = function (e) {
        console.log(e);
    };
    SalesComponent.prototype.chartHovered = function (e) {
        console.log(e);
    };
    SalesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.salesService.getSales(this.sharedService.username)
            .subscribe(function (response) {
            _this.pieChartLabels = response.labels;
            _this.pieChartData = response.data;
        }, function (err) {
            console.log("error in loading the details");
        });
    };
    return SalesComponent;
}());
SalesComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'sales',
        providers: [sales_service_1.SalesService],
        templateUrl: "sales.component.html"
    }),
    __metadata("design:paramtypes", [sales_service_1.SalesService, shared_service_1.SharedService, router_1.Router])
], SalesComponent);
exports.SalesComponent = SalesComponent;
//# sourceMappingURL=sales.component.js.map