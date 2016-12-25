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
var history_service_1 = require("../../services/history/history.service");
var shared_service_1 = require("../../services/sharedservice/shared.service");
var HistoryComponent = (function () {
    function HistoryComponent(historyService, sharedService) {
        this.historyService = historyService;
        this.sharedService = sharedService;
    }
    HistoryComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sharedService.refreshDetails();
        this.historyService.getOrderHistory(this.sharedService.username)
            .subscribe(function (response) {
            if (response.errorcode == 0) {
                console.log("error in loading the order history");
            }
            else {
                _this.orders = response.history;
            }
        }, function (err) {
            console.log("error in loading the order history");
        });
    };
    return HistoryComponent;
}());
HistoryComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'history',
        providers: [history_service_1.HistoryService],
        templateUrl: "history.component.html"
    }),
    __metadata("design:paramtypes", [history_service_1.HistoryService, shared_service_1.SharedService])
], HistoryComponent);
exports.HistoryComponent = HistoryComponent;
//# sourceMappingURL=history.component.js.map