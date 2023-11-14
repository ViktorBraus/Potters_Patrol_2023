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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Distribution = void 0;
var React = require("react");
require("./HomeAfter.css");
var Distribution = /** @class */ (function (_super) {
    __extends(Distribution, _super);
    function Distribution() {
        var _this = _super.call(this) || this;
        _this.Distribution1 = function () {
            return (React.createElement("div", { className: 'distribution' },
                React.createElement("div", { className: "circle" },
                    React.createElement("a", { href: '/wand' },
                        React.createElement("div", { className: 'imga' }))),
                React.createElement("div", { className: "circle" },
                    React.createElement("a", { href: "/patronus" },
                        React.createElement("div", { className: 'imga1', alt: "" }))),
                React.createElement("div", { className: "circle" },
                    React.createElement("a", { href: "/faculty" },
                        React.createElement("div", { className: 'imga2', alt: "" })))));
        };
        return _this;
    }
    Distribution.prototype.render = function () {
        return this.Distribution1();
    };
    return Distribution;
}(React.Component));
exports.Distribution = Distribution;
//# sourceMappingURL=Distribution.js.map