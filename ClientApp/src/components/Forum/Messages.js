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
exports.Messages = exports.UserName = void 0;
var auth0_react_1 = require("@auth0/auth0-react");
var React = require("react");
var react_router_dom_1 = require("react-router-dom");
var forumpage_1 = require("./forumpage");
var forumpage_2 = require("./forumpage");
var date = new Date().toLocaleDateString();
var time = new Date().toLocaleTimeString();
var UserName = function () {
    var user = auth0_react_1.useAuth0().user;
    var User;
    User = user === null || user === void 0 ? void 0 : user.nickname;
    return (React.createElement("input", { name: 'messageSender', type: "hidden", defaultValue: User }));
};
exports.UserName = UserName;
var Messages = /** @class */ (function (_super) {
    __extends(Messages, _super);
    function Messages(props) {
        var _this = _super.call(this, props) || this;
        _this.fileSelectHandler = function (e) {
            var param = e.target.files[0];
            var reader = new FileReader();
            reader.readAsDataURL(param);
        };
        _this.state = { title: "", loading: true, forumid: _this.props.match.params["forumid"], nick: "", forum: new forumpage_1.Forum, mesmassive: [], messages: new forumpage_2.ForumMessagges, path: "data:image/png;base64," };
        _this.setState({ nick: "" });
        var forumid = _this.props.match.params["forumid"];
        fetch('/api/ForumMessages/Index')
            .then(function (response) { return response.json(); })
            .then(function (data) {
            _this.setState({ mesmassive: data });
        });
        // This will set state for Edit employee
        if (forumid > 0) {
            fetch('/api/Forum/Details/' + forumid)
                .then(function (response) { return response.json(); })
                .then(function (data) {
                _this.setState({ title: "Чат", loading: false, forum: data });
            });
        }
        // This binding is necessary to make "this" work in the callback
        _this.handleSave = _this.handleSave.bind(_this);
        _this.redirect = _this.redirect.bind(_this);
        _this.handleCancel = _this.handleCancel.bind(_this);
        return _this;
    }
    Messages.prototype.render = function () {
        var contents = this.state.loading
            ? React.createElement("p", null,
                React.createElement("em", null, "Loading..."))
            : this.renderCreateForm();
        return React.createElement("div", null,
            React.createElement("h1", null, this.state.title),
            React.createElement(react_router_dom_1.NavLink, { to: "/forum" }, "\u041F\u043E\u0432\u0435\u0440\u043D\u0443\u0442\u0438\u0441\u044C \u0434\u043E \u0424\u043E\u0440\u0443\u043C\u0443"),
            React.createElement("hr", null),
            contents);
    };
    Messages.prototype.componentDidMount = function () {
        var _this = this;
        setInterval(function () { return fetch('/api/ForumMessages/Index')
            .then(function (response) { return response.json(); })
            .then(function (data) {
            _this.setState({ mesmassive: data });
            date = new Date().toLocaleDateString();
            time = new Date().toLocaleTimeString();
        }); }, 2000);
    };
    // This will handle the submit form event.
    Messages.prototype.handleSave = function (event) {
        var _this = this;
        event.preventDefault();
        var data = new FormData(event.target);
        fetch('/api/ForumMessages/Create', {
            method: 'POST',
            body: data,
        }).then(function (response) { return response.json(); })
            .then(function (responseJson) {
            _this.redirect();
        });
    };
    Messages.prototype.redirect = function () {
        var _this = this;
        fetch('/api/ForumMessages/Index')
            .then(function (response) { return response.json(); })
            .then(function (data) {
            _this.setState({ mesmassive: data });
        });
    };
    // This will handle Cancel button click event.
    Messages.prototype.handleCancel = function (e) {
        e.preventDefault();
        this.props.history.push("/forum");
    };
    // Returns the HTML Form to the render() method.
    Messages.prototype.renderCreateForm = function () {
        var _this = this;
        return (React.createElement("div", null,
            React.createElement("div", { className: '' },
                React.createElement("div", { className: "form-group col" },
                    React.createElement("input", { type: "hidden", name: "forum_Id", value: this.state.forum.id })),
                React.createElement("div", { className: "form-group col" },
                    React.createElement("label", { className: " control-label col-md-12", htmlFor: "Name" },
                        "\u041D\u0430\u0437\u0432\u0430 \u043E\u0431\u0433\u043E\u0432\u043E\u0440\u0435\u043D\u043D\u044F: ",
                        React.createElement("b", null, this.state.forum.title))),
                React.createElement("div", { className: "form-group col" },
                    React.createElement("label", { className: " control-label col-md-12", htmlFor: "Name" },
                        "\u0410\u0432\u0442\u043E\u0440: ",
                        React.createElement("b", null, this.state.forum.creator))),
                React.createElement("div", { className: "form-group col" },
                    React.createElement("label", { className: " control-label col-md-12", htmlFor: "Name" },
                        "\u0414\u0430\u0442\u0430 \u0441\u0442\u0432\u043E\u0440\u0435\u043D\u043D\u044F: ",
                        React.createElement("b", null, this.state.forum.dateOfCreation.toString())))),
            React.createElement("br", null),
            React.createElement("table", { className: 'messageff' },
                React.createElement("tr", null,
                    React.createElement("td", null,
                        React.createElement("div", { className: 'chatting' }, this.state.mesmassive.map(function (m) {
                            return m.forum_Id == _this.state.forum.id ?
                                React.createElement("div", null,
                                    React.createElement("label", { className: 'coloring1' }, m.messageSender),
                                    React.createElement("br", null),
                                    React.createElement("label", { className: 'coloring2' },
                                        m.message,
                                        " ",
                                        React.createElement("br", null),
                                        React.createElement("h5", null,
                                            m.dateOfSend != null ? m.dateOfSend : "",
                                            " - ",
                                            m.timeOfSend != null ? m.timeOfSend : "")))
                                : null;
                        })))),
                React.createElement("tr", null,
                    React.createElement("td", null,
                        React.createElement("form", { onSubmit: this.handleSave },
                            React.createElement("tr", null,
                                React.createElement("input", { name: 'forum_Id', type: "hidden", value: this.state.forum.id }),
                                React.createElement("input", { name: 'forum_Title', type: "hidden", value: this.state.forum.title }),
                                React.createElement("input", { name: 'dateOfSend', type: "hidden", value: date }),
                                React.createElement("input", { name: 'timeOfSend', type: "hidden", value: time }),
                                React.createElement(exports.UserName, null),
                                React.createElement("input", { className: 'send', name: 'message', type: "text", placeholder: "\u041D\u0430\u043F\u0438\u0448\u0456\u0442\u044C \u043F\u043E\u0432\u0456\u0434\u043E\u043C\u043B\u0435\u043D\u043D\u044F", defaultValue: this.state.messages.message })),
                            React.createElement("br", null),
                            React.createElement("div", { className: "form-group col" },
                                React.createElement("button", { onClick: this.redirect, type: "submit", className: "btn btn-default buta" }, "\u0412\u0456\u0434\u043F\u0440\u0430\u0432\u0438\u0442\u0438"),
                                React.createElement("button", { className: "btn buta", onClick: this.handleCancel }, "\u041F\u043E\u0432\u0435\u0440\u043D\u0443\u0442\u0438\u0441\u044C"))))))));
    };
    return Messages;
}(React.Component));
exports.Messages = Messages;
//# sourceMappingURL=Messages.js.map