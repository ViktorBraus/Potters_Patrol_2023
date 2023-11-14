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
exports.UserContent = exports.NavBar = void 0;
var React = require("react");
var auth0_react_1 = require("@auth0/auth0-react");
var NavBar = /** @class */ (function (_super) {
    __extends(NavBar, _super);
    function NavBar(props) {
        var _this = _super.call(this, props) || this;
        _this.state = { userz: new UserContent };
        fetch('api/UserContent/Index')
            .then(function (response) { return response.json(); })
            .then(function (data) {
            _this.setState({ userz: data });
        });
        return _this;
    }
    NavBar.prototype.render = function () {
        return (React.createElement(Navbar, null));
    };
    return NavBar;
}(React.Component));
exports.NavBar = NavBar;
var Navibar = function () {
    var _a;
    var auth0 = auth0_react_1.useAuth0();
    var u = new UserContent;
    fetch('api/UserContent/Index')
        .then(function (response) { return response.json(); })
        .then(function (data) {
        u = data;
        console.log(u);
    });
    return (React.createElement("div", { className: 'logo' },
        React.createElement("input", { type: 'checkbox', id: "settingsbutton", className: 'menucursor' }),
        React.createElement("label", { htmlFor: "settingsbutton" }),
        React.createElement("div", { className: 'tiiitle_' },
            React.createElement("div", { className: 'facultyimage' })),
        React.createElement("div", { className: 'tiiitle' }, "Potter`s Patrol"),
        React.createElement("div", { className: 'list' },
            React.createElement("ul", { className: 'nav' },
                (auth0 === null || auth0 === void 0 ? void 0 : auth0.isAuthenticated) ? (((_a = auth0 === null || auth0 === void 0 ? void 0 : auth0.user) === null || _a === void 0 ? void 0 : _a.email) == "korolenko.viktor@chnu.edu.ua" ? React.createElement("li", null,
                    React.createElement("a", { href: "/Layout" },
                        React.createElement("button", { className: 'AdminButton' }),
                        React.createElement("br", null),
                        "\u0410\u0434\u043C\u0456\u043D")) : "") : "",
                React.createElement("li", null,
                    React.createElement("a", { href: "/About" },
                        React.createElement("button", { className: 'SearchButton' }),
                        React.createElement("br", null),
                        "About")),
                React.createElement("li", null, (auth0 === null || auth0 === void 0 ? void 0 : auth0.isAuthenticated) ?
                    React.createElement("a", { href: "/profile" },
                        React.createElement("button", { className: 'ProfileButton' }),
                        React.createElement("br", null),
                        "\u041F\u0440\u043E\u0444\u0456\u043B\u044C") :
                    React.createElement("a", { href: "/profile" },
                        React.createElement("button", { disabled: true, className: 'ProfileButton' }),
                        React.createElement("br", null),
                        "\u041F\u0440\u043E\u0444\u0456\u043B\u044C")),
                React.createElement("li", null, (auth0 === null || auth0 === void 0 ? void 0 : auth0.isAuthenticated) ?
                    React.createElement("a", { href: "/Forum" },
                        React.createElement("button", { className: 'AboutButton' }),
                        React.createElement("br", null),
                        "\u0424\u043E\u0440\u0443\u043C") :
                    React.createElement("a", { href: "/Forum" },
                        React.createElement("button", { disabled: true, className: 'AboutButton' }),
                        React.createElement("br", null),
                        "\u0424\u043E\u0440\u0443\u043C")),
                React.createElement("li", null, (auth0 === null || auth0 === void 0 ? void 0 : auth0.isAuthenticated) ?
                    React.createElement("a", { className: 'a', href: "/HomeAfter" },
                        React.createElement("button", { className: 'HomeButton' }),
                        React.createElement("br", null),
                        "\u0413\u043E\u043B\u043E\u0432\u043D\u0430") :
                    React.createElement("a", { className: 'a', href: "/Home" },
                        React.createElement("button", { className: 'HomeButton' }),
                        React.createElement("br", null),
                        "\u0413\u043E\u043B\u043E\u0432\u043D\u0430"))))));
};
var Navbar = function () {
    return (React.createElement(Navibar, null));
};
var UserContent = /** @class */ (function () {
    function UserContent() {
        this.userId = 0;
        this.wand = "";
        this.wandImage = "";
        this.faculty = "";
        this.facultyImage = "";
        this.patronus = "";
        this.patronusImage = "";
    }
    return UserContent;
}());
exports.UserContent = UserContent;
//# sourceMappingURL=navbar.js.map