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
exports.ContentBlock = void 0;
var React = require("react");
var login_button_1 = require("../Authentication/login-button");
var logout_button_1 = require("../Authentication/logout-button");
var auth0_react_1 = require("@auth0/auth0-react");
var react_router_dom_1 = require("react-router-dom");
var AuthNav = function () {
    var _a = auth0_react_1.useAuth0(), isLoading = _a.isLoading, isAuthenticated = _a.isAuthenticated;
    return (React.createElement("div", null, !isLoading ? (isAuthenticated ? React.createElement(logout_button_1.default, null) : React.createElement(login_button_1.default, null)) : ""));
};
var ContentBlock = /** @class */ (function (_super) {
    __extends(ContentBlock, _super);
    function ContentBlock() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ContentBlock.prototype.render = function () {
        var ContentBlock = function () {
            return (React.createElement("div", { className: 'Main' },
                React.createElement("div", { className: 'HomePage' },
                    React.createElement("div", { className: 'title' }, "\u041F\u0456\u0437\u043D\u0430\u0439 \u0441\u0432\u0456\u0442 \u041C\u0430\u0433\u0456\u0457 \u0442\u0430 \u0447\u0430\u0440\u0456\u0432\u043D\u0438\u0446\u0442\u0432\u0430"),
                    React.createElement("div", { className: 'homediv' },
                        React.createElement("div", null,
                            "\u041A\u043D\u0438\u0433\u0438",
                            React.createElement(react_router_dom_1.NavLink, { to: '/Books' },
                                React.createElement("br", null),
                                React.createElement("img", { className: 'edge', width: "400", height: "300", src: 'https://media.phillyvoice.com/media/images/020420_HarryPotterBooks_HarryPotte.2e16d0ba.fill-735x490.jpg' }))),
                        React.createElement("div", null,
                            "\u0424\u0456\u043B\u044C\u043C\u0438",
                            React.createElement("br", null),
                            React.createElement(react_router_dom_1.NavLink, { to: '/Movies' },
                                React.createElement("img", { className: 'edge', width: "400", height: "300", src: 'https://yc.cldmlk.com/rjks7wfanfevew4g35ze2yhczw/1591847288564_HarryPottercollage.jpg' }))),
                        React.createElement("div", null,
                            "\u0406\u0433\u0440\u0438",
                            React.createElement("br", null),
                            React.createElement(react_router_dom_1.NavLink, { to: '/Games' },
                                React.createElement("img", { className: 'edge', width: "400", height: "300", src: 'https://i.ytimg.com/vi/3GMjVCHOIgg/maxresdefault.jpg' })))),
                    React.createElement("div", null),
                    React.createElement("br", null),
                    React.createElement(AuthNav, null))));
        };
        return (React.createElement("div", null,
            React.createElement(ContentBlock, null)));
    };
    return ContentBlock;
}(React.Component));
exports.ContentBlock = ContentBlock;
exports.default = ContentBlock;
//# sourceMappingURL=ContentBlock.js.map