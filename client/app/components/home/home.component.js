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
var home_service_1 = require("../../services/home/home.service");
var shared_service_1 = require("../../services/sharedservice/shared.service");
var HomeComponent = (function () {
    function HomeComponent(homeService, sharedService) {
        this.homeService = homeService;
        this.sharedService = sharedService;
        this.cars = null;
        this.loading = false;
        this.loaded = false;
        this.loadedMessage = "";
        this.loadingInfo = "";
    }
    HomeComponent.prototype.bookCar = function (carname) {
        var _this = this;
        this.loading = true;
        this.loaded = false;
        this.loadingInfo = "loading the car...Please Wait (Don't close the window)";
        this.homeService.bookCar(carname, this.sharedService.username)
            .subscribe(function (response) {
            _this.loading = false;
            _this.loaded = true;
            if (response.status) {
                _this.loadedMessage = "Booked successfully. Check the Order History";
            }
            else {
                _this.loadedMessage = "Error in Booking the car...please try later";
            }
        }, function (err) {
            _this.loading = false;
            _this.loaded = true;
            _this.loadedMessage = "Error in Booking the car...please try later";
        });
    };
    HomeComponent.prototype.deleteCar = function (carname) {
        var _this = this;
        this.loading = true;
        this.loaded = false;
        this.editing = false;
        this.loadingInfo = "Deleting the car...Please Wait (Don't close the window)";
        this.homeService.deleteCar(carname)
            .subscribe(function (response) {
            _this.loading = false;
            _this.loaded = true;
            if (response.status) {
                _this.loadedMessage = "Delted successfully.";
                _this.ngOnInit();
            }
            else {
                _this.loadedMessage = "Error in deleting the car...please try later";
            }
        }, function (err) {
            _this.loading = false;
            _this.loaded = true;
            _this.loadedMessage = "Error in deleting the car...please try later";
        });
    };
    HomeComponent.prototype.editCar = function (car) {
        this.loading = false;
        this.loaded = false;
        this.carname = car.carName;
        this.segment = car.segment;
        this.rent = car.rentCost;
        this.editing = true;
        this.imagePath = car.imagePath;
    };
    HomeComponent.prototype.updateCarDetails = function () {
        var _this = this;
        this.homeService.updateCarDetails(this.carname, this.segment, this.rent)
            .subscribe(function (response) {
            _this.editing = false;
            _this.loading = false;
            _this.loaded = true;
            if (response.status) {
                console.log("edited");
                _this.loadedMessage = "Updated successfully.";
                _this.ngOnInit();
            }
            else {
                _this.loadedMessage = "Error in upating the car...please try later";
            }
        }, function (err) {
            _this.loading = false;
            _this.loaded = true;
            _this.loadedMessage = "Error in updating the car...please try later";
        });
    };
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sharedService.refreshDetails();
        this.homeService.getCarDetails()
            .subscribe(function (response) {
            _this.cars = response;
        }, function (err) {
            console.log(err);
        });
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'home',
        providers: [home_service_1.HomeService],
        templateUrl: "home.component.html",
        styleUrls: ['home.component.css']
    }),
    __metadata("design:paramtypes", [home_service_1.HomeService, shared_service_1.SharedService])
], HomeComponent);
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=home.component.js.map