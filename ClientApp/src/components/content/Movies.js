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
exports.MovieData = exports.Movies = exports.info = void 0;
var React = require("react");
var react_router_dom_1 = require("react-router-dom");
require("./content.css");
var info = /** @class */ (function (_super) {
    __extends(info, _super);
    function info() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    info.prototype.render_info = function () {
        return React.createElement("div", null, Movies);
    };
    return info;
}(React.Component));
exports.info = info;
var Movies = /** @class */ (function (_super) {
    __extends(Movies, _super);
    function Movies() {
        var _this = _super.call(this) || this;
        _this.state = { movieList: [], loading: true, path: "data:image/png;base64," };
        fetch('api/Movie/Index')
            .then(function (response) { return response.json(); })
            .then(function (data) {
            _this.setState({ movieList: data, loading: false });
        });
        // This binding is necessary to make "this" work in the callback
        _this.handleEdit = _this.handleEdit.bind(_this);
        return _this;
    }
    Movies.prototype.handleEdit = function (id) {
        this.props.history.push("/content/movies/" + id);
    };
    Movies.prototype.render = function () {
        var contents = this.state.loading
            ? React.createElement("p", null,
                React.createElement("em", null, "Loading..."))
            : this.renderBookTable(this.state.movieList);
        return React.createElement("div", null,
            React.createElement("div", { className: "linn" },
                React.createElement(react_router_dom_1.NavLink, { className: 'contentButton', to: "/" }, "\u041D\u0430 \u0433\u043E\u043B\u043E\u0432\u043D\u0443")),
            React.createElement("br", null),
            contents);
    };
    Movies.prototype.renderBookTable = function (movieList) {
        var _this = this;
        return React.createElement("table", { className: 'table1' },
            React.createElement("thead", null, movieList.map(function (b) {
                return React.createElement("th", { key: b.movieId },
                    React.createElement("td", null,
                        React.createElement("a", { className: "action", onClick: function (id) { return _this.handleEdit(b.movieId); } }, b.movie_Name)));
            })),
            React.createElement("tbody", null, movieList.map(function (b) {
                return React.createElement("td", null,
                    React.createElement("a", { className: "action", onClick: function (id) { return _this.handleEdit(b.movieId); } },
                        React.createElement("img", { className: 'imj', alt: "", src: _this.state.path + b.movie_Image })));
            })));
    };
    return Movies;
}(React.Component));
exports.Movies = Movies;
var MovieData = /** @class */ (function () {
    function MovieData() {
        this.movieId = 0;
        this.movie_Name = "";
        this.movie_Image = "";
        this.movie_description = "";
        this.movie_url = "";
    }
    return MovieData;
}());
exports.MovieData = MovieData;
//# sourceMappingURL=Movies.js.map