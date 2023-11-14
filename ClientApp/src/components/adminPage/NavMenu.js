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
exports.NavMenu = void 0;
var React = require("react");
var react_router_dom_1 = require("react-router-dom");
var NavMenu = /** @class */ (function (_super) {
    __extends(NavMenu, _super);
    function NavMenu() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NavMenu.prototype.render = function () {
        return React.createElement("div", { className: 'vv' },
            React.createElement("ul", { className: 'ul' },
                React.createElement("li", null,
                    React.createElement("a", null,
                        React.createElement(react_router_dom_1.NavLink, { className: 'lol1', to: '/', exact: true, activeClassName: 'active' }, "\u0413\u043E\u043B\u043E\u0432\u043D\u0430"))),
                React.createElement("li", null,
                    React.createElement(react_router_dom_1.NavLink, { className: 'lol1', to: '/fetchbook', activeClassName: 'active' }, "\u041A\u043D\u0438\u0433\u0438")),
                React.createElement("li", null,
                    React.createElement(react_router_dom_1.NavLink, { className: 'lol1', to: '/fetchgame', activeClassName: 'active' }, "\u0406\u0433\u0440\u0438")),
                React.createElement("li", null,
                    React.createElement(react_router_dom_1.NavLink, { to: '/fetchmovie', activeClassName: 'active' }, "\u0424\u0456\u043B\u044C\u043C\u0438")),
                React.createElement("li", null,
                    React.createElement(react_router_dom_1.NavLink, { to: '/fetchForum', activeClassName: 'active' }, "\u0424\u043E\u0440\u0443\u043C"))));
    };
    return NavMenu;
}(React.Component));
exports.NavMenu = NavMenu;
//# sourceMappingURL=NavMenu.js.map