"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var bike = /** @class */ (function () {
    function bike(name, price) {
        this.name = name,
            this.price = price;
    }
    bike.prototype.func = function () {
        console.log('hello world!');
    };
    return bike;
}());
var myBike = new bike("shine", 100);
console.log(myBike.name);
myBike.func();
//class with inheritance 
var car = /** @class */ (function () {
    function car(name, price) {
        this.name = name;
        this.price = price;
    }
    return car;
}());
var newcar = /** @class */ (function (_super) {
    __extends(newcar, _super);
    function newcar(name, price) {
        var _this = _super.call(this, name, price) || this;
        _this.name = name;
        _this.price = price;
        return _this;
    }
    return newcar;
}(car));
var Car = new car("suzuki", 100);
// console.log(Car.name)
var car1 = new newcar("tata", 100);
console.log(car1);
