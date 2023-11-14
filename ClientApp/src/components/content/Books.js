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
exports.BookData = exports.Books = void 0;
var React = require("react");
var react_router_dom_1 = require("react-router-dom");
require("./content.css");
var Books = /** @class */ (function (_super) {
    __extends(Books, _super);
    function Books() {
        var _this = _super.call(this) || this;
        _this.state = { bookList: [], loading: true, path: "data:image/png;base64," };
        fetch('api/Book/Index')
            .then(function (response) { return response.json(); })
            .then(function (data) {
            _this.setState({ bookList: data, loading: false });
        });
        // This binding is necessary to make "this" work in the callback
        _this.handleEdit = _this.handleEdit.bind(_this);
        return _this;
    }
    Books.prototype.handleEdit = function (id) {
        this.props.history.push("/content/books/" + id);
    };
    Books.prototype.render = function () {
        var contents = this.state.loading
            ? React.createElement("p", null,
                React.createElement("em", null, "Loading..."))
            : this.renderBookTable(this.state.bookList);
        return React.createElement("div", null,
            React.createElement("div", { className: "linn" },
                React.createElement(react_router_dom_1.NavLink, { className: 'contentButton', to: "/" }, "\u041D\u0430 \u0433\u043E\u043B\u043E\u0432\u043D\u0443")),
            React.createElement("br", null),
            contents);
    };
    Books.prototype.renderBookTable = function (bookList) {
        var _this = this;
        return React.createElement("table", { className: 'table1' },
            React.createElement("thead", null, bookList.map(function (b) {
                return React.createElement("th", { key: b.bookId },
                    React.createElement("td", null,
                        React.createElement("a", { className: "action", onClick: function (id) { return _this.handleEdit(b.bookId); } }, b.book_Name)));
            })),
            React.createElement("tbody", null, bookList.map(function (b) {
                return React.createElement("td", null,
                    React.createElement("a", { onClick: function (id) { return _this.handleEdit(b.bookId); } },
                        React.createElement("img", { className: 'imj', alt: "", src: _this.state.path + b.book_Image })));
            })));
    };
    return Books;
}(React.Component));
exports.Books = Books;
var BookData = /** @class */ (function () {
    function BookData() {
        this.bookId = 0;
        this.book_Name = "";
        this.book_Image = "";
        this.book_description = "";
        this.book_url = "";
    }
    return BookData;
}());
exports.BookData = BookData;
//# sourceMappingURL=Books.js.map