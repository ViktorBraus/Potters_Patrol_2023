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
exports.CreateDiscussion = exports.UserName = void 0;
var React = require("react");
var forumpage_1 = require("./forumpage");
var auth0_react_1 = require("@auth0/auth0-react");
var core_1 = require("@material-ui/core");
var UserName = function () {
    var user = auth0_react_1.useAuth0().user;
    var User;
    User = user === null || user === void 0 ? void 0 : user.nickname;
    return (React.createElement("input", { className: "form-control kk", type: "text", name: "creator", defaultValue: User, required: true }));
};
exports.UserName = UserName;
var CreateDiscussion = /** @class */ (function (_super) {
    __extends(CreateDiscussion, _super);
    function CreateDiscussion(props) {
        var _this = _super.call(this, props) || this;
        _this.fileSelectHandler = function (e) {
            var param = e.target.files[0];
            var reader = new FileReader();
            reader.readAsDataURL(param);
        };
        _this.state = { title: "", loading: true, nick: "", forum: new forumpage_1.Forum, path: "data:image/png;base64," };
        _this.state = { title: "Створення нової теми", loading: false, nick: "", forum: new forumpage_1.Forum, path: "data:image/png;base64," };
        // This binding is necessary to make "this" work in the callback
        _this.handleSave = _this.handleSave.bind(_this);
        _this.handleCancel = _this.handleCancel.bind(_this);
        return _this;
    }
    CreateDiscussion.prototype.render = function () {
        var contents = this.state.loading
            ? React.createElement("p", null,
                React.createElement("em", null, "Loading..."))
            : this.renderCreateForm();
        return React.createElement("div", { className: 'pop' },
            React.createElement("h1", null, this.state.title),
            contents,
            React.createElement("br", null));
    };
    // This will handle the submit form event.
    CreateDiscussion.prototype.handleSave = function (event) {
        var _this = this;
        event.preventDefault();
        var data = new FormData(event.target);
        fetch('api/Forum/Create', {
            method: 'POST',
            body: data,
        }).then(function (response) { return response.json(); })
            .then(function (responseJson) {
            _this.props.history.push("/forum");
        });
    };
    // This will handle Cancel button click event.
    CreateDiscussion.prototype.handleCancel = function (e) {
        e.preventDefault();
        this.props.history.push("/forum");
    };
    // Returns the HTML Form to the render() method.
    CreateDiscussion.prototype.renderCreateForm = function () {
        return (React.createElement("form", { className: 'formchange form-wrapper', onSubmit: this.handleSave },
            React.createElement("div", { className: "form-group" },
                React.createElement("input", { type: "hidden", name: "id", value: this.state.forum.id })),
            React.createElement("div", { className: "form-group" },
                React.createElement("label", { htmlFor: "Name" }, "\u041D\u0430\u0437\u0432\u0430 \u043E\u0431\u0433\u043E\u0432\u043E\u0440\u0435\u043D\u043D\u044F"),
                React.createElement("div", null,
                    React.createElement("input", { className: "form-control kk", type: "text", name: "title", defaultValue: this.state.forum.title, required: true }))),
            React.createElement("div", { className: "form-group " },
                React.createElement("label", { htmlFor: "Gender" }, "\u0410\u0432\u0442\u043E\u0440 \u043E\u0431\u0433\u043E\u0432\u043E\u0440\u0435\u043D\u043D\u044F"),
                React.createElement("div", null,
                    React.createElement(exports.UserName, null))),
            React.createElement("div", { className: "form-group" },
                React.createElement("label", { htmlFor: "Department" }, "\u0414\u0430\u0442\u0430 \u0421\u0442\u0432\u043E\u0440\u0435\u043D\u043D\u044F"),
                React.createElement("div", null,
                    React.createElement(core_1.TextField, { noValidate: true, name: "dateOfCreation", color: "secondary", size: "medium", id: "datetime-local", className: 'form-group col title', type: "datetime-local", defaultValue: this.state.forum.dateOfCreation.toString(), InputLabelProps: {
                            shrink: true,
                        } }))),
            React.createElement("div", { className: "form-group" },
                React.createElement("button", { type: "submit", className: "btn btn-default buta" }, "\u0421\u0442\u0432\u043E\u0440\u0438\u0442\u0438"),
                React.createElement("span", null),
                React.createElement("button", { className: "btn btn-default buta", onClick: this.handleCancel }, "\u041F\u043E\u0432\u0435\u0440\u043D\u0443\u0442\u0438\u0441\u044C"))));
    };
    return CreateDiscussion;
}(React.Component));
exports.CreateDiscussion = CreateDiscussion;
//# sourceMappingURL=CreateDiscussion.js.map