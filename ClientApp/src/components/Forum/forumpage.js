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
exports.ForumMessagges = exports.Forum = exports.ForumBlock = void 0;
var React = require("react");
var react_router_dom_1 = require("react-router-dom");
require("./forum.css");
var ForumBlock = /** @class */ (function (_super) {
    __extends(ForumBlock, _super);
    function ForumBlock(props) {
        var _this = _super.call(this, props) || this;
        _this.state = { title: "", count: 0, loading: true, user: [], forumMessages: [], forum: [], path: "data:image/png;base64," };
        fetch('api/Forum/Index')
            .then(function (response) { return response.json(); })
            .then(function (data) {
            _this.setState({ forum: data, loading: false });
        });
        fetch('api/User/Index')
            .then(function (response) { return response.json(); })
            .then(function (data) {
            _this.setState({ user: data, loading: false });
        });
        fetch('api/ForumMessages/Index')
            .then(function (response) { return response.json(); })
            .then(function (data) {
            _this.setState({ forumMessages: data, loading: false });
        });
        _this.handleEdit = _this.handleEdit.bind(_this);
        _this.counting = _this.counting.bind(_this);
        return _this;
    }
    ForumBlock.prototype.Statistics_counting = function (a, forum, messagess, user) {
        var count = 0;
        if (a == 1) {
            forum.map(function (m) {
                return count++;
            });
        }
        else if (a == 2) {
            messagess.map(function (m) {
                return count++;
            });
        }
        else if (a == 3) {
            user.map(function (m) {
                return count++;
            });
        }
        return count;
    };
    ForumBlock.prototype.counting = function (b, forummesagges) {
        var count = 0;
        forummesagges.map(function (m) {
            return b == m.forum_Id ? count++ : null;
        });
        return count;
    };
    ForumBlock.prototype.render = function () {
        var contents = this.state.loading
            ? React.createElement("p", null,
                React.createElement("em", null, "Loading..."))
            : this.renderForumTable(this.state.forum, this.state.forumMessages);
        console.log(this.state.forum);
        return React.createElement("div", { className: 'ForumBlock' },
            React.createElement("br", null),
            contents,
            React.createElement("br", null),
            React.createElement("div", { className: "linn" },
                React.createElement(react_router_dom_1.NavLink, { className: 'newforum', to: "/createDiscussion" }, "\u0421\u0442\u0432\u043E\u0440\u0438\u0442\u0438 \u043D\u043E\u0432\u0435 \u043E\u0431\u0433\u043E\u0432\u043E\u0440\u0435\u043D\u043D\u044F")));
    };
    ForumBlock.prototype.handleEdit = function (id) {
        this.props.history.push("/messages/" + id);
    };
    ForumBlock.prototype.renderForumTable = function (forum, forummesagges) {
        var _this = this;
        return React.createElement("div", null,
            React.createElement("div", { className: 'zaholovok' },
                React.createElement("label", { className: 'zaholovok' }, "Potter`s Forum")),
            React.createElement("table", { className: 'horizontal' },
                React.createElement("tr", { className: 'horizontal' },
                    React.createElement("td", null,
                        React.createElement("table", { className: 'forumtable' },
                            React.createElement("tbody", { className: 'forumbody' }, forum.map(function (b) {
                                return React.createElement(React.Fragment, null,
                                    React.createElement("tr", null,
                                        React.createElement("td", { className: 'details' },
                                            React.createElement("label", { style: { color: "rgb(114, 100, 100)" } }, "\u041D\u0430\u0437\u0432\u0430 \u043E\u0431\u0433\u043E\u0432\u043E\u0440\u0435\u043D\u043D\u044F"),
                                            React.createElement("br", null),
                                            React.createElement("a", { className: "action_ details", onClick: function (id) { return _this.handleEdit(b.id); } }, b.title)),
                                        React.createElement("td", { className: 'bordering' },
                                            React.createElement("tr", { className: 'second' },
                                                React.createElement("label", { style: { color: "rgb(114, 100, 100)" } }, "\u041A\u0456\u043B\u044C\u043A\u0456\u0441\u0442\u044C \u043F\u043E\u0432\u0456\u0434\u043E\u043C\u043B\u0435\u043D\u044C"),
                                                React.createElement("br", null),
                                                React.createElement("label", { style: { color: "rgb(114, 100, 100)" } }, _this.counting(b.id, _this.state.forumMessages)))),
                                        React.createElement("td", { className: 'details' },
                                            React.createElement("tr", null,
                                                React.createElement("label", { style: { color: "rgb(114, 100, 100)" } },
                                                    "\u0410\u0432\u0442\u043E\u0440: ",
                                                    b.creator)),
                                            React.createElement("tr", null,
                                                React.createElement("label", { style: { color: "rgb(114, 100, 100)" } }, "\u0414\u0430\u0442\u0430 \u0441\u0442\u0432\u043E\u0440\u0435\u043D\u043D\u044F: "),
                                                React.createElement("label", { style: { color: "rgb(114, 100, 100)" } }, b.dateOfCreation.toString())))));
                            })))),
                    React.createElement("td", null,
                        React.createElement("table", { className: 'static' },
                            React.createElement("th", { className: 'fg' }, "\u0421\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043A\u0430 \u043D\u0430 \u0444\u043E\u0440\u0443\u043C\u0456"),
                            React.createElement("tr", null,
                                React.createElement("tr", null, "\u0417\u0430\u0433\u0430\u043B\u044C\u043D\u0430 \u043A\u0456\u043B\u044C\u043A\u0456\u0441\u0442\u044C \u0442\u0435\u043C "),
                                React.createElement("tr", null,
                                    React.createElement("b", null, this.Statistics_counting(1, this.state.forum, this.state.forumMessages, this.state.user))),
                                React.createElement("tr", null, "\u0417\u0430\u0433\u0430\u043B\u044C\u043D\u0430 \u043A\u0456\u043B\u044C\u043A\u0456\u0441\u0442\u044C \u043F\u043E\u0432\u0456\u0434\u043E\u043C\u043B\u0435\u043D\u044C "),
                                React.createElement("tr", null,
                                    React.createElement("b", null, this.Statistics_counting(2, this.state.forum, this.state.forumMessages, this.state.user))),
                                React.createElement("tr", null, "\u0417\u0430\u0433\u0430\u043B\u044C\u043D\u0430 \u043A\u0456\u043B\u044C\u043A\u0456\u0441\u0442\u044C \u0443\u0447\u0430\u0441\u043D\u0438\u043A\u0456\u0432 "),
                                React.createElement("tr", null,
                                    React.createElement("b", null, this.Statistics_counting(3, this.state.forum, this.state.forumMessages, this.state.user)))))))));
    };
    return ForumBlock;
}(React.Component));
exports.ForumBlock = ForumBlock;
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
var ForumMessagges = /** @class */ (function () {
    function ForumMessagges() {
        this.message_Id = 0;
        this.forum_Id = 0;
        this.forum_Title = "";
        this.messageSender = "";
        this.message = "";
        this.dateOfSend = "";
        this.timeOfSend = "";
    }
    return ForumMessagges;
}());
exports.ForumMessagges = ForumMessagges;
//# sourceMappingURL=forumpage.js.map