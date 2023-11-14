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
exports.GameData = exports.Games = exports.info = void 0;
var React = require("react");
var react_router_dom_1 = require("react-router-dom");
require("./content.css");
var info = /** @class */ (function (_super) {
    __extends(info, _super);
    function info() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    info.prototype.render_info = function () {
        return React.createElement("div", null, Games);
    };
    return info;
}(React.Component));
exports.info = info;
var Games = /** @class */ (function (_super) {
    __extends(Games, _super);
    function Games() {
        var _this = _super.call(this) || this;
        _this.state = { gameList: [], loading: true, path: "data:image/png;base64," };
        fetch('api/Game/Index')
            .then(function (response) { return response.json(); })
            .then(function (data) {
            _this.setState({ gameList: data, loading: false });
        });
        return _this;
    }
    Games.prototype.render = function () {
        var contents = this.state.loading
            ? React.createElement("p", null,
                React.createElement("em", null, "Loading..."))
            : this.renderBookTable(this.state.gameList);
        return React.createElement("div", null,
            React.createElement("div", { className: "linn" },
                React.createElement(react_router_dom_1.NavLink, { className: 'contentButton', to: "/" }, "\u041D\u0430 \u0433\u043E\u043B\u043E\u0432\u043D\u0443")),
            React.createElement("br", null),
            contents);
    };
    Games.prototype.handleEdit = function (id) {
        this.props.history.push("/content/games/" + id);
    };
    Games.prototype.renderBookTable = function (gameList) {
        var _this = this;
        return React.createElement("table", { className: 'table1' },
            React.createElement("thead", null, gameList.map(function (b) {
                return React.createElement("th", { key: b.gameId },
                    React.createElement("td", null,
                        React.createElement("a", { className: "action", onClick: function (id) { return _this.handleEdit(b.gameId); } }, b.game_Name)));
            })),
            React.createElement("tbody", null, gameList.map(function (b) {
                return React.createElement("td", null,
                    React.createElement("a", { onClick: function (id) { return _this.handleEdit(b.gameId); } },
                        React.createElement("img", { className: 'imj', alt: "", src: _this.state.path + b.game_Image })));
            })));
    };
    return Games;
}(React.Component));
exports.Games = Games;
var GameData = /** @class */ (function () {
    function GameData() {
        this.gameId = 0;
        this.game_Name = "";
        this.game_Image = "";
        this.game_description = "";
        this.game_url = "";
    }
    return GameData;
}());
exports.GameData = GameData;
//# sourceMappingURL=Games.js.map