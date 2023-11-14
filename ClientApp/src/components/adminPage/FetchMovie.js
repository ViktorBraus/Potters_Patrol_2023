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
exports.MovieData = exports.FetchMovie = void 0;
var React = require("react");
var react_router_dom_1 = require("react-router-dom");
var FetchMovie = /** @class */ (function (_super) {
    __extends(FetchMovie, _super);
    function FetchMovie() {
        var _this = _super.call(this) || this;
        _this.state = { movieList: [], loading: true, path: "data:image/png;base64," };
        fetch('api/Movie/Index')
            .then(function (response) { return response.json(); })
            .then(function (data) {
            _this.setState({ movieList: data, loading: false });
        });
        // This binding is necessary to make "this" work in the callback
        _this.handleDelete = _this.handleDelete.bind(_this);
        _this.handleEdit = _this.handleEdit.bind(_this);
        return _this;
    }
    FetchMovie.prototype.render = function () {
        var contents = this.state.loading
            ? React.createElement("p", null,
                React.createElement("em", null, "Loading..."))
            : this.renderMovieTable(this.state.movieList);
        return React.createElement("div", null,
            React.createElement("h1", null, "\u0414\u0430\u043D\u0456 \u043F\u043E \u0424\u0456\u043B\u044C\u043C\u0430\u043C"),
            React.createElement("div", { className: "linn" },
                React.createElement(react_router_dom_1.NavLink, { to: "/addMovie" }, "\u0421\u0442\u0432\u043E\u0440\u0438\u0442\u0438 \u043D\u043E\u0432\u0438\u0439 \u0444\u0456\u043B\u044C\u043C"),
                React.createElement(react_router_dom_1.NavLink, { to: "/Layout" }, "\u041F\u043E\u0432\u0435\u0440\u043D\u0443\u0442\u0438\u0441\u044C \u0434\u043E \u0410\u0434\u043C\u0456\u043D \u043F\u0430\u043D\u0435\u043B\u0456")),
            contents);
    };
    // Handle Delete request for an employee
    FetchMovie.prototype.handleDelete = function (id) {
        var _this = this;
        fetch('api/Movie/Delete/' + id, {
            method: 'delete'
        }).then(function (data) {
            _this.setState({
                movieList: _this.state.movieList.filter(function (rec) {
                    return (rec.movieId != id);
                })
            });
        });
    };
    FetchMovie.prototype.handleEdit = function (id) {
        this.props.history.push("/Movie/edit/" + id);
    };
    // Returns the HTML table to the render() method.
    FetchMovie.prototype.renderMovieTable = function (movieList) {
        var _this = this;
        return React.createElement("table", { className: 'table' },
            React.createElement("thead", null,
                React.createElement("tr", null,
                    React.createElement("th", null, "Movie Id"),
                    React.createElement("th", null, "Movie Name"),
                    React.createElement("th", null, "Movie Description"),
                    React.createElement("th", null, "Movie Url"),
                    React.createElement("th", null, "Movie Image"),
                    React.createElement("th", null, "Actions"))),
            React.createElement("tbody", null, movieList.map(function (b) {
                return React.createElement("tr", { key: b.movieId },
                    React.createElement("td", null, b.movieId),
                    React.createElement("td", null, b.movie_Name),
                    React.createElement("td", null, b.movie_description),
                    React.createElement("td", null,
                        React.createElement("a", { href: b.movie_url }, b.movie_url)),
                    React.createElement("td", null,
                        React.createElement("img", { width: "200", height: "auto", alt: "", src: _this.state.path + b.movie_Image })),
                    React.createElement("td", null,
                        React.createElement("a", { className: "action", onClick: function (id) { return _this.handleEdit(b.movieId); } }, "Edit "),
                        "  |",
                        React.createElement("a", { className: "action", onClick: function (id) { return _this.handleDelete(b.movieId); } }, " Delete")));
            })));
    };
    return FetchMovie;
}(React.Component));
exports.FetchMovie = FetchMovie;
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
//# sourceMappingURL=FetchMovie.js.map