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
exports.HomeAfter = void 0;
var React = require("react");
require("./HomeAfter.css");
var react_notify_toast_1 = require("react-notify-toast");
var ContentBlock_1 = require("./ContentBlock");
var Distribution_1 = require("./Distribution");
var TestSection_1 = require("./TestSection");
var HomeAfter = /** @class */ (function (_super) {
    __extends(HomeAfter, _super);
    function HomeAfter(props) {
        var _this = _super.call(this, props) || this;
        _this.render = function () {
            var content = function () {
                return (React.createElement("div", null,
                    React.createElement(ContentBlock_1.default, null),
                    React.createElement("div", { className: 'textstyling' },
                        "\u041F\u043E\u0447\u043D\u0456\u0442\u044C \u0432\u0430\u0448 \u0440\u043E\u0437\u043F\u043E\u0434\u0456\u043B \u0443 \u0441\u0432\u0456\u0442\u0456 \u043C\u0430\u0433\u0456\u0457 \u0442\u0430 \u043D\u0435\u0445\u0430\u0439 ",
                        React.createElement("br", null),
                        "\u0432\u0430\u0448\u0435 \u0441\u0435\u0440\u0446\u0435 \u043E\u0431\u0435\u0440\u0435 \u0441\u0432\u0456\u0439 \u0440\u0456\u0434\u043D\u0438\u0439 \u0434\u0456\u043C"),
                    React.createElement(Distribution_1.Distribution, null),
                    React.createElement("div", { className: 'textstyling' }, "\u041D\u0430\u0439\u0431\u0456\u043B\u044C\u0448 \u043F\u043E\u043F\u0443\u043B\u044F\u0440\u043D\u0456 \u0442\u0435\u0441\u0442\u0438"),
                    React.createElement(TestSection_1.TestSection, null),
                    React.createElement(react_notify_toast_1.default, null)));
            };
            return (React.createElement("div", null,
                React.createElement("main", null, content())));
        };
        _this.state = {
            loading: true,
            testList: []
        };
        return _this;
    }
    return HomeAfter;
}(React.Component));
exports.HomeAfter = HomeAfter;
//# sourceMappingURL=HomeAfter.js.map