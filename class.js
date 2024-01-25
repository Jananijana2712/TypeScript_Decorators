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
function WithFuel(constructor) {
    return /** @class */ (function (_super) {
        __extends(class_1, _super);
        function class_1() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.fuel = 50;
            return _this;
        }
        class_1.prototype.isEmpty = function () {
            return this.fuel === 0;
        };
        ;
        return class_1;
    }(constructor));
}
var Rocket = /** @class */ (function () {
    function Rocket() {
        this.fuel = 75;
    }
    return Rocket;
}());
var FuelRocket = WithFuel(Rocket);
var rocket = new FuelRocket();
console.log(rocket.fuel);
