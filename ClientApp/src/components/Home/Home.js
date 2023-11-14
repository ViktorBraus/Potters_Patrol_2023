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
exports.Home = void 0;
require("../../App.css");
var react_notify_toast_1 = require("react-notify-toast");
var auth0_react_1 = require("@auth0/auth0-react");
var login_button_1 = require("../Authentication/login-button");
var logout_button_1 = require("../Authentication/logout-button");
var React = require("react");
require("./HomeAfter.css");
var Home = /** @class */ (function (_super) {
    __extends(Home, _super);
    function Home() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.render = function () {
            var AuthNav = function () {
                var _a = auth0_react_1.useAuth0(), error = _a.error, isAuthenticated = _a.isAuthenticated;
                return (React.createElement("div", null, isAuthenticated ? React.createElement(logout_button_1.default, null) : !error ? React.createElement(login_button_1.default, null) : React.createElement("div", null,
                    "\u0411\u0443\u0434\u044C \u043B\u0430\u0441\u043A\u0430, \u0412\u0438\u0439\u0434\u0456\u0442\u044C \u0437 \u043E\u0431\u043B\u0456\u043A\u043E\u0432\u043E\u0433\u043E \u0437\u0430\u043F\u0438\u0441\u0443 \u0442\u0430 \u043F\u0456\u0434\u0442\u0432\u0435\u0440\u0434\u0456\u0442\u044C \u0441\u0432\u043E\u044E \u0435\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u0443 \u043F\u043E\u0448\u0442\u0443",
                    React.createElement("br", null),
                    React.createElement(logout_button_1.default, null))));
            };
            var content = function () {
                return (React.createElement("div", { className: 'HomePage' },
                    React.createElement("div", { className: 'at_hog' },
                        "\u0423 \u0425\u043E\u0433\u0432\u0430\u0440\u0442\u0441\u0456 \u041A\u043E\u0436\u0435\u043D \u0445\u0442\u043E ",
                        React.createElement("br", null),
                        "\u043F\u043E\u0442\u0440\u0435\u0431\u0443\u0454 \u0434\u043E\u043F\u043E\u043C\u043E\u0433\u0438, \u0437\u0430\u0432\u0436\u0434\u0438 \u0457\u0457 \u043E\u0442\u0440\u0438\u043C\u0443\u0454"),
                    React.createElement("br", null),
                    React.createElement("div", { className: 'at_hog1' },
                        "\u0414\u043B\u044F \u0442\u043E\u0433\u043E \u0430\u0431\u0438 \u043F\u043E\u0447\u0430\u0442\u0438 \u0441\u0432\u043E\u044E \u043F\u043E\u0434\u043E\u0440\u043E\u0436,",
                        React.createElement("p", null, "\u0410\u0432\u0442\u043E\u0440\u0438\u0437\u0443\u0439\u0442\u0435\u0441\u044C")),
                    React.createElement(AuthNav, null),
                    React.createElement(react_notify_toast_1.default, null)));
            };
            return (React.createElement("div", null,
                React.createElement("main", null, content())));
        };
        return _this;
    }
    return Home;
}(React.Component));
exports.Home = Home;
//# sourceMappingURL=Home.js.map