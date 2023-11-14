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
exports.Forum = exports.FetchForum = void 0;
var React = require("react");
var react_router_dom_1 = require("react-router-dom");
var FetchForum = /** @class */ (function (_super) {
    __extends(FetchForum, _super);
    function FetchForum() {
        var _this = _super.call(this) || this;
        _this.state = { forumlist: [], loading: true, path: "data:image/png;base64," };
        fetch('api/Forum/Index')
            .then(function (response) { return response.json(); })
            .then(function (data) {
            _this.setState({ forumlist: data, loading: false });
        });
        // This binding is necessary to make "this" work in the callback
        _this.handleDelete = _this.handleDelete.bind(_this);
        _this.handleEdit = _this.handleEdit.bind(_this);
        return _this;
    }
    FetchForum.prototype.render = function () {
        var contents = this.state.loading
            ? React.createElement("p", null,
                React.createElement("em", null, "Loading..."))
            : this.renderForumTable(this.state.forumlist);
        return React.createElement("div", null,
            React.createElement("h1", null, "\u0414\u0430\u043D\u0456 \u043F\u043E \u0444\u043E\u0440\u0443\u043C\u0443"),
            React.createElement("div", { className: "linn" },
                React.createElement(react_router_dom_1.NavLink, { to: "/Layout" }, "\u041F\u043E\u0432\u0435\u0440\u043D\u0443\u0442\u0438\u0441\u044C \u0434\u043E \u0410\u0434\u043C\u0456\u043D \u043F\u0430\u043D\u0435\u043B\u0456")),
            contents);
    };
    // Handle Delete request for an employee
    FetchForum.prototype.handleDelete = function (id) {
        var _this = this;
        fetch('api/Forum/Delete/' + id, {
            method: 'delete'
        }).then(function (data) {
            _this.setState({
                forumlist: _this.state.forumlist.filter(function (rec) {
                    return (rec.id != id);
                })
            });
        });
    };
    FetchForum.prototype.handleEdit = function (id) {
        this.props.history.push("/messages_/edit/" + id);
    };
    // Returns the HTML table to the render() method.
    FetchForum.prototype.renderForumTable = function (forumlist) {
        var _this = this;
        return React.createElement("table", { className: 'table' },
            React.createElement("thead", null,
                React.createElement("tr", null,
                    React.createElement("th", null, "Forum Id"),
                    React.createElement("th", null, "Forum Title"),
                    React.createElement("th", null, "Forum Creator"),
                    React.createElement("th", null, "Forum Date of Creation"),
                    React.createElement("th", null, "Actions"))),
            React.createElement("tbody", null, forumlist.map(function (b) {
                return React.createElement("tr", { key: b.id },
                    React.createElement("td", null, b.id),
                    React.createElement("td", null, b.title),
                    React.createElement("td", null, b.creator),
                    React.createElement("td", null, b.dateOfCreation),
                    React.createElement("td", null,
                        React.createElement("a", { className: "action", onClick: function (id) { return _this.handleEdit(b.id); } }, "Edit "),
                        "  |",
                        React.createElement("a", { className: "action", onClick: function (id) { return _this.handleDelete(b.id); } }, " Delete")));
            })));
    };
    return FetchForum;
}(React.Component));
exports.FetchForum = FetchForum;
var Forum = /** @class */ (function () {
    function Forum() {
        this.id = 0;
        this.title = "";
        this.creator = "";
        this.dateOfCreation = new Date(0, 0, 0, 0, 0, 0, 0);
    }
    return Forum;
}());
exports.Forum = Forum;
//# sourceMappingURL=FetchForum.js.map