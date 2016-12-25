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
var http_1 = require("@angular/http");
var Rx_1 = require("rxjs/Rx");
// Import RxJs required methods
require("rxjs/add/operator/map");
require("rxjs/add/operator/catch");
var WebService = (function () {
    function WebService(http) {
        this.http = http;
        this.baseUrl = 'http://localhost:8080/';
    }
    WebService.prototype.postDetails = function (networkConfig) {
        var bodyString = JSON.stringify(networkConfig.data);
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        var actualUrl = "" + this.baseUrl + networkConfig.url;
        return this.http.post(actualUrl, bodyString, options)
            .map(function (res) { return res.json(); })
            .catch(function (error) { return Rx_1.Observable.throw(error.json().error || 'Server error'); });
    };
    WebService.prototype.getDetails = function (networkConfig) {
        var actualUrl = "" + this.baseUrl + networkConfig.url;
        return this.http.get(actualUrl)
            .map(function (res) { return res.json(); })
            .catch(function (error) { return Rx_1.Observable.throw(error.json().error || 'Server error'); });
    };
    WebService.prototype.deleteDetails = function (networkConfig) {
        var bodyString = JSON.stringify(networkConfig.data);
        var actualUrl = "" + this.baseUrl + networkConfig.url;
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers, body: bodyString });
        return this.http.delete(actualUrl, options)
            .map(function (res) { return res.json(); })
            .catch(function (error) { return Rx_1.Observable.throw(error.json().error || 'Server error'); });
    };
    WebService.prototype.putDetails = function (networkConfig) {
        var bodyString = JSON.stringify(networkConfig.data);
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        var actualUrl = "" + this.baseUrl + networkConfig.url;
        return this.http.put(actualUrl, bodyString, options)
            .map(function (res) { return res.json(); })
            .catch(function (error) { return Rx_1.Observable.throw(error.json().error || 'Server error'); });
    };
    return WebService;
}());
WebService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], WebService);
exports.WebService = WebService;
//# sourceMappingURL=web.service.js.map