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
exports.BookData = exports.FetchBook = void 0;
var React = require("react");
var react_router_dom_1 = require("react-router-dom");
var FetchBook = /** @class */ (function (_super) {
    __extends(FetchBook, _super);
    function FetchBook() {
        var _this = _super.call(this) || this;
        _this.state = { bookList: [], loading: true, path: "data:image/png;base64," };
        fetch('api/Book/Index')
            .then(function (response) { return response.json(); })
            .then(function (data) {
            _this.setState({ bookList: data, loading: false });
        });
        // This binding is necessary to make "this" work in the callback
        _this.handleDelete = _this.handleDelete.bind(_this);
        _this.handleEdit = _this.handleEdit.bind(_this);
        return _this;
    }
    FetchBook.prototype.render = function () {
        var contents = this.state.loading
            ? React.createElement("p", null,
                React.createElement("em", null, "Loading..."))
            : this.renderBookTable(this.state.bookList);
        return React.createElement("div", null,
            React.createElement("h1", null, "\u0414\u0430\u043D\u0456 \u043F\u043E \u043A\u043D\u0438\u0433\u0430\u043C"),
            React.createElement("div", { className: "linn" },
                React.createElement(react_router_dom_1.NavLink, { to: "/addBook" }, "\u0421\u0442\u0432\u043E\u0440\u0438\u0442\u0438 \u043D\u043E\u0432\u0443 \u043A\u043D\u0438\u0433\u0443"),
                React.createElement(react_router_dom_1.NavLink, { to: "/Layout" }, "\u041F\u043E\u0432\u0435\u0440\u043D\u0443\u0442\u0438\u0441\u044C \u0434\u043E \u0410\u0434\u043C\u0456\u043D \u043F\u0430\u043D\u0435\u043B\u0456")),
            contents);
    };
    // Handle Delete request for an employee
    FetchBook.prototype.handleDelete = function (id) {
        var _this = this;
        fetch('api/Book/Delete/' + id, {
            method: 'delete'
        }).then(function (data) {
            _this.setState({
                bookList: _this.state.bookList.filter(function (rec) {
                    return (rec.bookId != id);
                })
            });
        });
    };
    FetchBook.prototype.handleEdit = function (id) {
        this.props.history.push("/Book/edit/" + id);
    };
    // Returns the HTML table to the render() method.
    FetchBook.prototype.renderBookTable = function (bookList) {
        var _this = this;
        return React.createElement("table", { className: 'table' },
            React.createElement("thead", null,
                React.createElement("tr", null,
                    React.createElement("th", null, "Book Id"),
                    React.createElement("th", null, "Book Name"),
                    React.createElement("th", null, "Book Description"),
                    React.createElement("th", null, "Book Url"),
                    React.createElement("th", null, "Book Image"),
                    React.createElement("th", null, "Actions"))),
            React.createElement("tbody", null, bookList.map(function (b) {
                return React.createElement("tr", { key: b.bookId },
                    React.createElement("td", null, b.bookId),
                    React.createElement("td", null, b.book_Name),
                    React.createElement("td", null, b.book_description),
                    React.createElement("td", null,
                        React.createElement("a", { href: b.book_url }, b.book_url)),
                    React.createElement("td", null,
                        React.createElement("img", { width: "200", height: "auto", alt: "", src: _this.state.path + b.book_Image })),
                    React.createElement("td", null,
                        React.createElement("a", { className: "action", onClick: function (id) { return _this.handleEdit(b.bookId); } }, "Edit "),
                        "  |",
                        React.createElement("a", { className: "action", onClick: function (id) { return _this.handleDelete(b.bookId); } }, " Delete")));
            })));
    };
    return FetchBook;
}(React.Component));
exports.FetchBook = FetchBook;
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
//# sourceMappingURL=FetchEmployee.js.map