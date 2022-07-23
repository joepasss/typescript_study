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
var myCart = {
    x: 1,
    calculateTotal: function (options) {
        if (options && options.discountCode) {
            // apply discount
        }
        return 1;
    }
};
/*****                Merging Namespace                 *****/
/////
var MyNamespace;
(function (MyNamespace) {
    MyNamespace.x = 10;
})(MyNamespace || (MyNamespace = {}));
/////
(function (MyNamespace) {
    MyNamespace.getX = function () { return MyNamespace.x; };
})(MyNamespace || (MyNamespace = {}));
MyNamespace.x;
MyNamespace.getX();
var someInterface = {
    x: 1,
    y: 2
};
function someFunction() {
    return 10;
}
(function (someFunction) {
    someFunction.someProp = 10;
})(someFunction || (someFunction = {}));
someFunction.someProp;
/*****                Merging enum                 *****/
var Vegetables;
(function (Vegetables) {
    Vegetables["Tomato"] = "tomato";
    Vegetables["Onion"] = "onion";
})(Vegetables || (Vegetables = {}));
(function (Vegetables) {
    function makeSalad() {
        return Vegetables.Tomato + Vegetables.Onion;
    }
    Vegetables.makeSalad = makeSalad;
})(Vegetables || (Vegetables = {}));
var salad = Vegetables.makeSalad();
var Salad = /** @class */ (function () {
    function Salad() {
    }
    return Salad;
}());
(function (Salad) {
    Salad.avialableDressings = ['olive oil', 'yoghurt'];
})(Salad || (Salad = {}));
Salad.avialableDressings.includes('olive oil');
var React = require("react");
var server_1 = require("react-dom/server");
React.Component.prototype.helloWorld = function () {
    return 'Hello World!';
};
var MyComponent = /** @class */ (function (_super) {
    __extends(MyComponent, _super);
    function MyComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MyComponent.prototype.render = function () {
        return <div>{this.helloWorld()}</div>;
    };
    return MyComponent;
}(React.Component));
console.log((0, server_1.renderToString)(<MyComponent />));
