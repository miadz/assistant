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
var core_1 = require('@angular/core');
var database_service_1 = require('./database.service');
var AppComponent = (function () {
    function AppComponent(database) {
        this.database = database;
        this.title = 'assistant';
    }
    AppComponent.prototype.ngOnInit = function () {
        this.getAlgorithms();
    };
    AppComponent.prototype.getAlgorithms = function () {
        var _this = this;
        this.database.getAlgorithms().then(function (algorithms) { return _this.algorithms = algorithms; });
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            templateUrl: 'app/app.component.html',
            providers: [database_service_1.Database]
        }), 
        __metadata('design:paramtypes', [database_service_1.Database])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map