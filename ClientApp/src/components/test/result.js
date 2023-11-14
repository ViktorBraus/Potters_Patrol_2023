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
exports.User = exports.UserContent = exports.Result = void 0;
var React = require("react");
var react_router_dom_1 = require("react-router-dom");
var Result = /** @class */ (function (_super) {
    __extends(Result, _super);
    function Result(props) {
        var _this = _super.call(this, props) || this;
        _this.state = { title: "", loading: true, UserContent: [], User: [], path: "data:image/png;base64," };
        fetch('api/UserContent/Index')
            .then(function (response) { return response.json(); })
            .then(function (data) {
            _this.setState({ UserContent: data, loading: false });
        });
        return _this;
    }
    Result.prototype.render = function () {
        var contents = this.state.loading
            ? React.createElement("p", null,
                React.createElement("em", null, "Loading..."))
            : this.renderTestTable(this.state.UserContent, this.state.User);
        return React.createElement("div", { className: 'lolikk' }, contents);
    };
    Result.prototype.renderTestTable = function (userContent, user) {
        return React.createElement("form", null,
            user.map(function (u) {
                return userContent.map(function (q) {
                    return React.createElement("div", null,
                        React.createElement("label", null, u.userName == q.userName ? q.userName : ""));
                });
            }),
            React.createElement("div", { className: 'zol' },
                React.createElement("button", { className: 'buta' },
                    React.createElement(react_router_dom_1.NavLink, { to: '/' }, "\u041F\u043E\u0432\u0435\u0440\u043D\u0443\u0442\u0438\u0441\u044C")),
                React.createElement("button", { id: '12', className: 'buta', type: "submit" }, "\u0417\u0430\u0432\u0435\u0440\u0448\u0438\u0442\u0438")));
    };
    return Result;
}(React.Component));
exports.Result = Result;
var UserContent = /** @class */ (function () {
    function UserContent() {
        this.userId = 0;
        this.userName = "";
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
var User = /** @class */ (function () {
    function User() {
        this.userId = 0;
        this.userName = "";
        this.password = "";
        this.email = "";
        this.profileImage = "";
    }
    return User;
}());
exports.User = User;
//# sourceMappingURL=result.js.map