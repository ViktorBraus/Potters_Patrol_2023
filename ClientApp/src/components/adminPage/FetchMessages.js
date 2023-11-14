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
exports.Message = exports.FetchMessages = void 0;
var React = require("react");
var react_router_dom_1 = require("react-router-dom");
var FetchForum_1 = require("./FetchForum");
var FetchMessages = /** @class */ (function (_super) {
    __extends(FetchMessages, _super);
    function FetchMessages(props) {
        var _this = _super.call(this, props) || this;
        _this.state = { title: "Edit", forum: new FetchForum_1.Forum, messagelist: [], loading: true, path: "data:image/png;base64," };
        var forumid = _this.props.match.params["forumid"];
        fetch('/api/ForumMessages/Index')
            .then(function (response) { return response.json(); })
            .then(function (data) {
            _this.setState({ messagelist: data });
        });
        if (forumid > 0) {
            fetch('/api/Forum/Details/' + forumid)
                .then(function (response) { return response.json(); })
                .then(function (data) {
                _this.setState({ title: "Чат", loading: false, forum: data });
            });
        }
        // This binding is necessary to make "this" work in the callback
        _this.handleDelete = _this.handleDelete.bind(_this);
        return _this;
    }
    FetchMessages.prototype.render = function () {
        var contents = this.state.loading
            ? React.createElement("p", null,
                React.createElement("em", null, "Loading..."))
            : this.renderMessageTable(this.state.messagelist);
        return React.createElement("div", null,
            React.createElement("h1", null, "\u0414\u0430\u043D\u0456 \u043F\u043E \u043E\u0431\u0433\u043E\u0432\u043E\u0440\u0435\u043D\u043D\u044E"),
            React.createElement("div", { className: "linn" },
                React.createElement(react_router_dom_1.NavLink, { to: "/fetchForum" }, "\u041F\u043E\u0432\u0435\u0440\u043D\u0443\u0442\u0438\u0441\u044C \u0434\u043E \u041A\u0435\u0440\u0443\u0432\u0430\u043D\u043D\u044F\u043C \u0444\u043E\u0440\u0443\u043C\u0430\u043C\u0438")),
            contents);
    };
    // Handle Delete request for an employee
    FetchMessages.prototype.handleDelete = function (id) {
        var _this = this;
        console.log(id);
        fetch('/api/Message/Delete/' + id, {
            method: 'delete'
        }).then(function (data) {
            _this.setState({
                messagelist: _this.state.messagelist.filter(function (rec) {
                    return (rec.messageId != id);
                })
            });
        });
    };
    // Returns the HTML table to the render() method.
    FetchMessages.prototype.renderMessageTable = function (messagelist) {
        var _this = this;
        return React.createElement("table", { className: 'table' },
            React.createElement("thead", null,
                React.createElement("tr", null,
                    React.createElement("th", null, "Message Id"),
                    React.createElement("th", null, "Forum Id"),
                    React.createElement("th", null, "Forum_Title"),
                    React.createElement("th", null, "Message Sender"),
                    React.createElement("th", null, "Message"),
                    React.createElement("th", null, "Date of Sent"),
                    React.createElement("th", null, "Action"))),
            React.createElement("tbody", null, messagelist.map(function (b) {
                return b.forum_Id == _this.state.forum.id ?
                    React.createElement("tr", { key: b.messageId },
                        React.createElement("td", null, b.messageId),
                        React.createElement("td", null, b.forum_Id),
                        React.createElement("td", null, b.forum_Title),
                        React.createElement("td", null, b.messageSender),
                        React.createElement("td", null, b.message),
                        React.createElement("td", null, b.dateOfSend + "-" + b.timeOfSend),
                        React.createElement("td", null,
                            React.createElement("a", { className: "action", onClick: function (id) { return _this.handleDelete(b.messageId); } }, " Delete")))
                    : null;
            })));
    };
    return FetchMessages;
}(React.Component));
exports.FetchMessages = FetchMessages;
var Message = /** @class */ (function () {
    function Message() {
        this.messageId = 0;
        this.forum_Id = 0;
        this.forum_Title = "";
        this.messageSender = "";
        this.message = "";
        this.dateOfSend = "";
        this.timeOfSend = "";
    }
    return Message;
}());
exports.Message = Message;
//# sourceMappingURL=FetchMessages.js.map