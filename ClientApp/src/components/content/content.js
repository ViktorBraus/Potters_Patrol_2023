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
exports.Content = void 0;
var React = require("react");
var react_router_dom_1 = require("react-router-dom");
require("./content.css");
var Books_1 = require("./Books");
var Games_1 = require("./Games");
var Movies_1 = require("./Movies");
var Content = /** @class */ (function (_super) {
    __extends(Content, _super);
    function Content(props) {
        var _this = _super.call(this, props) || this;
        _this.state = { title: "", loading: true, BookData: new Books_1.BookData, MovieData: new Movies_1.MovieData, GameData: new Games_1.GameData, path: "data:image/png;base64," };
        var bookid = _this.props.match.params["bookid"];
        var gameid = _this.props.match.params["gameid"];
        var movieid = _this.props.match.params["movieid"];
        // This will set state for Edit employee
        if (bookid > 0) {
            fetch('/api/Book/Details/' + bookid)
                .then(function (response) { return response.json(); })
                .then(function (data) {
                _this.setState({ title: "Edit", loading: false, BookData: data });
            });
        }
        if (gameid > 0) {
            fetch('/api/Game/Details/' + gameid)
                .then(function (response) { return response.json(); })
                .then(function (data) {
                _this.setState({ title: "Edit", loading: false, GameData: data });
            });
        }
        if (movieid > 0) {
            fetch('/api/Movie/Details/' + movieid)
                .then(function (response) { return response.json(); })
                .then(function (data) {
                _this.setState({ title: "Edit", loading: false, MovieData: data });
            });
        }
        return _this;
    }
    Content.prototype.render = function () {
        var contents = this.state.loading
            ? React.createElement("p", null,
                React.createElement("em", null, "Loading..."))
            : this.state.BookData.bookId > 0 ? this.renderBookTable()
                : this.state.GameData.gameId > 0 ? this.renderGameTable()
                    : this.state.MovieData.movieId > 0 ? this.renderMovieTable() : "";
        return React.createElement("div", null,
            React.createElement("div", { className: "linn" }, this.state.BookData.bookId > 0 ? React.createElement(react_router_dom_1.NavLink, { className: 'contentButton', to: "/Books" }, "\u041D\u0430 \u0433\u043E\u043B\u043E\u0432\u043D\u0443") :
                this.state.GameData.gameId > 0 ? React.createElement(react_router_dom_1.NavLink, { className: 'contentButton', to: "/Games" }, "\u041D\u0430 \u0433\u043E\u043B\u043E\u0432\u043D\u0443") :
                    this.state.MovieData.movieId > 0 ? React.createElement(react_router_dom_1.NavLink, { className: 'contentButton', to: "/Movies" }, "\u041D\u0430 \u0433\u043E\u043B\u043E\u0432\u043D\u0443") : ""),
            React.createElement("br", null),
            contents);
    };
    Content.prototype.renderBookTable = function () {
        return React.createElement("div", null,
            React.createElement("table", { cellSpacing: 4, width: "70%", className: 'tablecontent' },
                React.createElement("tbody", null,
                    React.createElement("tr", null,
                        React.createElement("td", { rowSpan: 2 },
                            React.createElement("img", { width: "200", height: "auto", alt: "", src: this.state.path + this.state.BookData.book_Image })),
                        React.createElement("th", null,
                            React.createElement("div", null,
                                React.createElement("label", null,
                                    React.createElement("h1", null, this.state.BookData.book_Name))))),
                    React.createElement("tr", null,
                        React.createElement("th", null,
                            React.createElement("div", null,
                                React.createElement("label", null, this.state.BookData.book_description))),
                        React.createElement("th", null,
                            React.createElement("div", null,
                                React.createElement("label", null, "\u041A\u043E\u0440\u0438\u0441\u043D\u0435 \u043F\u043E\u0441\u0438\u043B\u0430\u043D\u043D\u044F"),
                                React.createElement("br", null),
                                React.createElement("br", null),
                                React.createElement("br", null),
                                React.createElement("a", { href: this.state.BookData.book_url }, this.state.BookData.book_url)))))));
    };
    Content.prototype.renderGameTable = function () {
        return React.createElement("div", null,
            React.createElement("table", { cellSpacing: 4, width: "70%", className: 'tablecontent' },
                React.createElement("tbody", null,
                    React.createElement("tr", null,
                        React.createElement("td", { rowSpan: 2 },
                            React.createElement("img", { width: "200", height: "auto", alt: "", src: this.state.path + this.state.GameData.game_Image })),
                        React.createElement("th", null,
                            React.createElement("div", null,
                                React.createElement("label", null,
                                    React.createElement("h1", null, this.state.GameData.game_Name))))),
                    React.createElement("tr", null,
                        React.createElement("th", null,
                            React.createElement("div", null,
                                React.createElement("label", null, this.state.GameData.game_description))),
                        React.createElement("th", null,
                            React.createElement("div", null,
                                React.createElement("label", null, "\u041A\u043E\u0440\u0438\u0441\u043D\u0435 \u043F\u043E\u0441\u0438\u043B\u0430\u043D\u043D\u044F"),
                                React.createElement("br", null),
                                React.createElement("br", null),
                                React.createElement("br", null),
                                React.createElement("a", { href: this.state.GameData.game_url }, this.state.GameData.game_url)))))));
    };
    Content.prototype.renderMovieTable = function () {
        return React.createElement("div", null,
            React.createElement("table", { cellSpacing: 4, width: "70%", className: 'tablecontent' },
                React.createElement("tbody", null,
                    React.createElement("tr", null,
                        React.createElement("td", { rowSpan: 2 },
                            React.createElement("img", { width: "200", height: "auto", alt: "", src: this.state.path + this.state.MovieData.movie_Image })),
                        React.createElement("th", null,
                            React.createElement("div", null,
                                React.createElement("label", null,
                                    React.createElement("h1", null, this.state.MovieData.movie_Name))))),
                    React.createElement("tr", null,
                        React.createElement("th", null,
                            React.createElement("div", null,
                                React.createElement("label", null, this.state.MovieData.movie_description))),
                        React.createElement("th", null,
                            React.createElement("div", null,
                                React.createElement("label", null, "\u041A\u043E\u0440\u0438\u0441\u043D\u0435 \u043F\u043E\u0441\u0438\u043B\u0430\u043D\u043D\u044F"),
                                React.createElement("br", null),
                                React.createElement("br", null),
                                React.createElement("br", null),
                                React.createElement("a", { href: this.state.MovieData.movie_url }, this.state.MovieData.movie_url)))))));
    };
    return Content;
}(React.Component));
exports.Content = Content;
//# sourceMappingURL=content.js.map