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
exports.Profile = void 0;
var React = require("react");
require("../../App.css");
var TestSection_1 = require("./TestSection");
var Spinner_1 = require("../Home/Spinner");
var auth0_react_1 = require("@auth0/auth0-react");
var s;
var Photo = function () {
    var _a = auth0_react_1.useAuth0(), isLoading = _a.isLoading, user = _a.user;
    s = user === null || user === void 0 ? void 0 : user.email;
    return (React.createElement(React.Fragment, null,
        React.createElement("img", { className: 'imgpre', src: isLoading ? "" : user === null || user === void 0 ? void 0 : user.picture })));
};
var AccauntInfo = function () {
    var _a = auth0_react_1.useAuth0(), isLoading = _a.isLoading, isAuthenticated = _a.isAuthenticated, user = _a.user;
    return (React.createElement("div", { className: 'account' },
        React.createElement("div", { className: 'wrapper1' },
            React.createElement("div", { className: 'form-wrapper1' },
                React.createElement("div", { className: "email" },
                    React.createElement("label", { htmlFor: "email" }, "E-mail"),
                    React.createElement("label", { className: "userinfo" }, isAuthenticated ? user === null || user === void 0 ? void 0 : user.email : "")),
                React.createElement("div", { className: "fullName" },
                    React.createElement("label", { htmlFor: "name" }, "Username"),
                    React.createElement("label", { className: "userinfo" }, isAuthenticated ? user === null || user === void 0 ? void 0 : user.nickname : ""))))));
};
var Accaunt = function () {
    var _a = auth0_react_1.useAuth0(), isLoading = _a.isLoading, isAuthenticated = _a.isAuthenticated, user = _a.user;
    return (React.createElement("div", { className: 'account' },
        React.createElement("form", null,
            React.createElement("div", { className: 'wrapper1' },
                React.createElement("div", { className: 'form-wrapper1' },
                    React.createElement("div", { className: "email" },
                        React.createElement("label", { htmlFor: "email" }, "E-mail"),
                        React.createElement("input", { className: "email", required: true, name: "email", type: "email", placeholder: isAuthenticated ? user === null || user === void 0 ? void 0 : user.email : "" })),
                    React.createElement("div", { className: "fullName" },
                        React.createElement("label", { htmlFor: "name" }, "Username"),
                        React.createElement("input", { className: "email", required: true, name: "name", type: "name", placeholder: isAuthenticated ? user === null || user === void 0 ? void 0 : user.nickname : "" })),
                    React.createElement("div", { className: "change" },
                        React.createElement("button", { className: 'buta', disabled: true, type: "submit" }, "Change")))))));
};
var Profile = /** @class */ (function (_super) {
    __extends(Profile, _super);
    function Profile(props) {
        var _this = _super.call(this, props) || this;
        _this.render = function () {
            var imagePreviewUrl = _this.state.imagePreviewUrl;
            var $imagePreview;
            if (imagePreviewUrl) {
                $imagePreview = (React.createElement("img", { className: 'imgpre', src: imagePreviewUrl.toString() }));
            }
            else {
                $imagePreview = (React.createElement(Photo, null));
            }
            var Content = function (user) {
                if (_this.state.loading) {
                    return React.createElement("div", { className: 'spinner' },
                        React.createElement(Spinner_1.default, { size: '10x', spinning: 'spinning' }),
                        React.createElement("br", null));
                }
                return (React.createElement("div", { className: 'Profile' },
                    React.createElement("br", null),
                    React.createElement("div", { className: 'profileinformation' },
                        React.createElement("div", { className: 'profilecontent' },
                            React.createElement("div", { className: "EditPhoto" }, $imagePreview),
                            React.createElement("br", null),
                            React.createElement("input", { className: 'butaa', type: "file", onChange: function (e) { return _this._handleImageChange(e); } })),
                        React.createElement("div", null,
                            React.createElement(AccauntInfo, null)),
                        React.createElement("div", null,
                            React.createElement(Accaunt, null))),
                    React.createElement("br", null),
                    React.createElement("br", null),
                    React.createElement("br", null),
                    React.createElement("div", { className: 'profileinformation' },
                        React.createElement("div", { className: 'profilecontent' },
                            user.map(function (u) {
                                return React.createElement("div", { className: u.faculty == "���������" ? "Gryf" :
                                        u.faculty == "������" ? "Sliz" :
                                            u.faculty == "��������" ? "Huff" :
                                                u.faculty == "���������" ? "Rav" : "NameOfFaculty" });
                            }),
                            React.createElement("div", { className: 'labell' }, user.map(function (u) { return u.faculty ? u.faculty : "Name Of Faculty"; }))),
                        React.createElement("div", { className: 'profilecontent' },
                            user.map(function (u) {
                                return React.createElement("div", { className: u.faculty == "���������" ? "Patr" :
                                        u.faculty == "������" ? "Patr" :
                                            u.faculty == "��������" ? "Patr" :
                                                u.faculty == "���������" ? "Patr" : "Patronus" });
                            }),
                            React.createElement("br", null),
                            React.createElement("div", { className: 'labell' }, user.map(function (u) { return u.patronus ? u.patronus : "Patronus"; }))),
                        React.createElement("div", { className: 'profilecontent' },
                            user.map(function (u) {
                                return React.createElement("div", { className: u.faculty == "���������" ? "W" :
                                        u.faculty == "������" ? "W" :
                                            u.faculty == "��������" ? "W" :
                                                u.faculty == "���������" ? "W" : "Wand" });
                            }),
                            React.createElement("br", null),
                            React.createElement("div", { className: 'labell' }, user.map(function (u) { return u.wand ? u.wand : "Wand"; }))))));
            };
            return (React.createElement("div", null,
                React.createElement("main", null,
                    Content(_this.state.userList),
                    React.createElement("label", { className: 'Passed' }, "Passed Tests"),
                    React.createElement(TestSection_1.TestSection, null))));
        };
        _this.state = {
            loading: false, file: '', imagePreviewUrl: "", userList: []
        };
        fetch('api/UserContent/Index')
            .then(function (response) { return response.json(); })
            .then(function (data) {
            _this.setState({ userList: data, loading: false });
        });
        return _this;
    }
    Profile.prototype._handleSubmit = function (e) {
        e.preventDefault();
        // TODO: do something with -> this.state.file
        console.log('handle uploading-', this.state);
    };
    Profile.prototype._handleImageChange = function (e) {
        var _this = this;
        e.preventDefault();
        var reader = new FileReader();
        var file = e.target.files[0];
        reader.onloadend = function () {
            _this.setState({
                file: file,
                imagePreviewUrl: reader === null || reader === void 0 ? void 0 : reader.result
            });
        };
        reader.readAsDataURL(file);
    };
    return Profile;
}(React.Component));
exports.Profile = Profile;
//# sourceMappingURL=Profile.js.map