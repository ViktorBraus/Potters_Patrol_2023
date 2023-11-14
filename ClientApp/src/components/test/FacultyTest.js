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
exports.UserContent = exports.TestResult = exports.User = exports.AnswerDetail = exports.QuestionDetail = exports.FacultyTest = void 0;
var React = require("react");
var react_router_dom_1 = require("react-router-dom");
require("../../App.css");
var auth0_react_1 = require("@auth0/auth0-react");
var u;
var UserName = function () {
    var user = auth0_react_1.useAuth0().user;
    u = user === null || user === void 0 ? void 0 : user.nickname;
    return (React.createElement(React.Fragment, null,
        React.createElement("input", { hidden: true, name: "Id", value: "1" }),
        React.createElement("input", { hidden: true, className: "form-control kk", type: "text", name: "UserName", defaultValue: u, required: true })));
};
var FacultyTest = /** @class */ (function (_super) {
    __extends(FacultyTest, _super);
    function FacultyTest() {
        var _this = _super.call(this) || this;
        _this.state = {
            check: false,
            gryfindor: 0,
            slytherin: 0,
            ravenclaw: 0,
            result: "",
            hufflepuff: 0,
            resulting: [],
            Test: [],
            UserContent: new UserContent,
            User_Content: [],
            answerList: [],
            questionList: [],
            User_: [],
            User: new User, loading: true, path: "data:image/png;base64,"
        };
        fetch('api/Question/Index')
            .then(function (response) { return response.json(); })
            .then(function (data) {
            _this.setState({ questionList: data, loading: false });
        });
        fetch('api/Tests/TestIndex')
            .then(function (response) { return response.json(); })
            .then(function (data) {
            _this.setState({ Test: data, loading: false });
        });
        fetch('api/User/Index')
            .then(function (response) { return response.json(); })
            .then(function (data) {
            _this.setState({ User: data, loading: false });
        });
        fetch('api/User/Index')
            .then(function (response) { return response.json(); })
            .then(function (data) {
            _this.setState({ User_: data, loading: false });
        });
        fetch('api/Result/Index')
            .then(function (response) { return response.json(); })
            .then(function (data) {
            _this.setState({ resulting: data, loading: false });
        });
        fetch('api/UserContent/Index')
            .then(function (response) { return response.json(); })
            .then(function (data) {
            _this.setState({ UserContent: data, loading: false });
        });
        fetch('api/UserContent/Index')
            .then(function (response) { return response.json(); })
            .then(function (data) {
            _this.setState({ User_Content: data, loading: false });
        });
        fetch('api/Answer/AnswerIndex')
            .then(function (response) { return response.json(); })
            .then(function (data) {
            _this.setState({ answerList: data, loading: false });
        });
        _this.imaging = _this.imaging.bind(_this);
        _this.handleSave = _this.handleSave.bind(_this);
        _this.onSiteChanged = _this.onSiteChanged.bind(_this);
        return _this;
        // This binding is necessary to make "this" work in the callback
    }
    FacultyTest.prototype.onSiteChanged = function (event) {
        if (event.target.id == 1) {
            this.setState({
                gryfindor: this.state.gryfindor + 0.7,
                slytherin: this.state.slytherin + 0.3,
                hufflepuff: this.state.hufflepuff + 0.5,
                ravenclaw: this.state.ravenclaw + 0.1
            });
        }
        if (event.target.id == 2) {
            this.setState({
                gryfindor: this.state.gryfindor + 0.4,
                slytherin: this.state.slytherin + 1,
                hufflepuff: this.state.hufflepuff + 0.2,
                ravenclaw: this.state.ravenclaw + 0.2
            });
        }
        if (event.target.id == 3) {
            this.setState({
                gryfindor: this.state.gryfindor + 0.9,
                slytherin: this.state.slytherin + 0.2,
                hufflepuff: this.state.hufflepuff + 1,
                ravenclaw: this.state.ravenclaw + 0.5
            });
        }
        if (event.target.id == 4) {
            this.setState({
                gryfindor: this.state.gryfindor + 1,
                slytherin: this.state.slytherin + 0.7,
                hufflepuff: this.state.hufflepuff + 0.6,
                ravenclaw: this.state.ravenclaw + 0.5
            });
        }
        if (event.target.id == 5) {
            this.setState({
                gryfindor: this.state.gryfindor + 0.4,
                slytherin: this.state.slytherin + 1,
                hufflepuff: this.state.hufflepuff + 0.5,
                ravenclaw: this.state.ravenclaw + 1
            });
        }
        if (event.target.id == 6) {
            this.setState({
                gryfindor: this.state.gryfindor + 0.8,
                slytherin: this.state.slytherin + 0.2,
                hufflepuff: this.state.hufflepuff + 0.8,
                ravenclaw: this.state.ravenclaw + 0.5
            });
        }
        if (event.target.id == 7) {
            this.setState({
                gryfindor: this.state.gryfindor + 0.7,
                slytherin: this.state.slytherin + 0.5,
                hufflepuff: this.state.hufflepuff + 1,
                ravenclaw: this.state.ravenclaw + 0.2
            });
        }
        if (event.target.id == 8) {
            this.setState({
                gryfindor: this.state.gryfindor + 1,
                slytherin: this.state.slytherin + 0.2,
                hufflepuff: this.state.hufflepuff + 0.7,
                ravenclaw: this.state.ravenclaw + 0.2
            });
        }
        if (event.target.id == 9) {
            this.setState({
                gryfindor: this.state.gryfindor + 1,
                slytherin: this.state.slytherin + 0.8,
                hufflepuff: this.state.hufflepuff + 0.2,
                ravenclaw: this.state.ravenclaw + 0.2
            });
        }
        if (event.target.id == 10) {
            this.setState({
                gryfindor: this.state.gryfindor + 0.7,
                slytherin: this.state.slytherin + 0.2,
                hufflepuff: this.state.hufflepuff + 1,
                ravenclaw: this.state.ravenclaw + 0.2
            });
        }
        if (event.target.id == 11) {
            this.setState({
                gryfindor: this.state.gryfindor + 0.2,
                slytherin: this.state.slytherin + 0.2,
                hufflepuff: this.state.hufflepuff + 0.6,
                ravenclaw: this.state.ravenclaw + 1
            });
        }
        if (event.target.id == 12) {
            this.setState({
                gryfindor: this.state.gryfindor + 0.7,
                slytherin: this.state.slytherin + 0.1,
                hufflepuff: this.state.hufflepuff + 1,
                ravenclaw: this.state.ravenclaw + 0.3
            });
        }
        if (event.target.id == 13) {
            this.setState({
                gryfindor: this.state.gryfindor + 1,
                slytherin: this.state.slytherin + 0.8,
                hufflepuff: this.state.hufflepuff + 0.2,
                ravenclaw: this.state.ravenclaw + 0.2
            });
        }
        if (event.target.id == 14) {
            this.setState({
                gryfindor: this.state.gryfindor + 0.2,
                slytherin: this.state.slytherin + 0.2,
                hufflepuff: this.state.hufflepuff + 0.2,
                ravenclaw: this.state.ravenclaw + 1
            });
        }
        if (event.target.id == 15) {
            this.setState({
                gryfindor: this.state.gryfindor + 0.6,
                slytherin: this.state.slytherin + 0.2,
                hufflepuff: this.state.hufflepuff + 1,
                ravenclaw: this.state.ravenclaw + 0.3
            });
        }
        if (event.target.id == 16) {
            this.setState({
                gryfindor: this.state.gryfindor + 0.2,
                slytherin: this.state.slytherin + 1,
                hufflepuff: this.state.hufflepuff + 0.2,
                ravenclaw: this.state.ravenclaw + 0.8
            });
        } //стрелец
        if (event.target.id == 17) {
            this.setState({
                gryfindor: this.state.gryfindor + 0.8,
                slytherin: this.state.slytherin + 1,
                hufflepuff: this.state.hufflepuff + 0.2,
                ravenclaw: this.state.ravenclaw + 0.2
            });
        }
        if (event.target.id == 18) {
            this.setState({
                gryfindor: this.state.gryfindor + 0.2,
                slytherin: this.state.slytherin + 1,
                hufflepuff: this.state.hufflepuff + 0.2,
                ravenclaw: this.state.ravenclaw + 0.8
            });
        }
        if (event.target.id == 19) {
            this.setState({
                gryfindor: this.state.gryfindor + 0.2,
                slytherin: this.state.slytherin + 0.2,
                hufflepuff: this.state.hufflepuff + 0.2,
                ravenclaw: this.state.ravenclaw + 1
            });
        }
        if (event.target.id == 20) {
            this.setState({
                gryfindor: this.state.gryfindor + 0.8,
                slytherin: this.state.slytherin + 0.8,
                hufflepuff: this.state.hufflepuff + 1,
                ravenclaw: this.state.ravenclaw + 0.8
            });
        } //4 вопрос
        if (event.target.id == 21) {
            this.setState({
                gryfindor: this.state.gryfindor + 1,
                slytherin: this.state.slytherin + 0.2,
                hufflepuff: this.state.hufflepuff + 0.7,
                ravenclaw: this.state.ravenclaw + 0.4
            });
        }
        if (event.target.id == 22) {
            this.setState({
                gryfindor: this.state.gryfindor + 0.6,
                slytherin: this.state.slytherin + 0.8,
                hufflepuff: this.state.hufflepuff + 1,
                ravenclaw: this.state.ravenclaw + 0.6
            });
        }
        if (event.target.id == 23) {
            this.setState({
                gryfindor: this.state.gryfindor + 0.7,
                slytherin: this.state.slytherin + 1,
                hufflepuff: this.state.hufflepuff + 0.3,
                ravenclaw: this.state.ravenclaw + 0.8
            });
        }
        if (event.target.id == 24) {
            this.setState({
                gryfindor: this.state.gryfindor + 0.9,
                slytherin: this.state.slytherin + 0.2,
                hufflepuff: this.state.hufflepuff + 0.6,
                ravenclaw: this.state.ravenclaw + 1
            });
        }
        if (event.target.id == 25) {
            this.setState({
                gryfindor: this.state.gryfindor + 0.9,
                slytherin: this.state.slytherin + 0.2,
                hufflepuff: this.state.hufflepuff + 0.6,
                ravenclaw: this.state.ravenclaw + 1
            });
        }
        if (event.target.id == 26) {
            this.setState({
                gryfindor: this.state.gryfindor + 1,
                slytherin: this.state.slytherin + 0.8,
                hufflepuff: this.state.hufflepuff + 0.3,
                ravenclaw: this.state.ravenclaw + 0.5
            });
        }
        if (event.target.id == 27) {
            this.setState({
                gryfindor: this.state.gryfindor + 0.7,
                slytherin: this.state.slytherin + 0.3,
                hufflepuff: this.state.hufflepuff + 1,
                ravenclaw: this.state.ravenclaw + 0.7
            });
        }
        if (event.target.id == 28) {
            this.setState({
                gryfindor: this.state.gryfindor + 0.8,
                slytherin: this.state.slytherin + 1,
                hufflepuff: this.state.hufflepuff + 0.6,
                ravenclaw: this.state.ravenclaw + 0.7
            });
        }
        if (event.target.id == 29) {
            this.setState({
                gryfindor: this.state.gryfindor + 0.6,
                slytherin: this.state.slytherin + 0.6,
                hufflepuff: this.state.hufflepuff + 0.6,
                ravenclaw: this.state.ravenclaw + 1
            });
        }
        if (event.target.id == 30) {
            this.setState({
                gryfindor: this.state.gryfindor + 0.4,
                slytherin: this.state.slytherin + 1,
                hufflepuff: this.state.hufflepuff + 0.6,
                ravenclaw: this.state.ravenclaw + 0.7
            });
        }
        if (event.target.id == 31) {
            this.setState({
                gryfindor: this.state.gryfindor + 1,
                slytherin: this.state.slytherin + 0.8,
                hufflepuff: this.state.hufflepuff + 0.6,
                ravenclaw: this.state.ravenclaw + 0.7
            });
        }
        if (event.target.id == 32) {
            this.setState({
                gryfindor: this.state.gryfindor + 0.5,
                slytherin: this.state.slytherin + 0.5,
                hufflepuff: this.state.hufflepuff + 1,
                ravenclaw: this.state.ravenclaw + 0.7
            });
        }
        if (event.target.id == 33) {
            this.setState({
                gryfindor: this.state.gryfindor + 0.3,
                slytherin: this.state.slytherin + 0.3,
                hufflepuff: this.state.hufflepuff + 0.3,
                ravenclaw: this.state.ravenclaw + 1
            });
        }
        if (event.target.id == 34) {
            this.setState({
                gryfindor: this.state.gryfindor + 0.3,
                slytherin: this.state.slytherin + 0.3,
                hufflepuff: this.state.hufflepuff + 1,
                ravenclaw: this.state.ravenclaw + 0.3
            });
        }
        if (event.target.id == 35) {
            this.setState({
                gryfindor: this.state.gryfindor + 1,
                slytherin: this.state.slytherin + 0.3,
                hufflepuff: this.state.hufflepuff + 0.3,
                ravenclaw: this.state.ravenclaw + 0.3
            });
        }
        if (event.target.id == 36) {
            this.setState({
                gryfindor: this.state.gryfindor + 0.3,
                slytherin: this.state.slytherin + 1,
                hufflepuff: this.state.hufflepuff + 0.3,
                ravenclaw: this.state.ravenclaw + 0.3
            });
        }
        if (event.target.id == 37) {
            this.setState({
                gryfindor: this.state.gryfindor + 0.3,
                slytherin: this.state.slytherin + 1,
                hufflepuff: this.state.hufflepuff + 0.3,
                ravenclaw: this.state.ravenclaw + 0.7
            });
        }
        if (event.target.id == 38) {
            this.setState({
                gryfindor: this.state.gryfindor + 0.7,
                slytherin: this.state.slytherin + 0.2,
                hufflepuff: this.state.hufflepuff + 1,
                ravenclaw: this.state.ravenclaw + 0.6
            });
        }
        if (event.target.id == 39) {
            this.setState({
                gryfindor: this.state.gryfindor + 1,
                slytherin: this.state.slytherin + 0.2,
                hufflepuff: this.state.hufflepuff + 0.7,
                ravenclaw: this.state.ravenclaw + 0.6
            });
        }
        if (event.target.id == 40) {
            this.setState({
                gryfindor: this.state.gryfindor + 0.4,
                slytherin: this.state.slytherin + 0.6,
                hufflepuff: this.state.hufflepuff + 0.4,
                ravenclaw: this.state.ravenclaw + 1
            });
        }
        if (event.target.id == 41) {
            this.setState({
                gryfindor: this.state.gryfindor + 0.3,
                slytherin: this.state.slytherin + 0.7,
                hufflepuff: this.state.hufflepuff + 0.3,
                ravenclaw: this.state.ravenclaw + 1
            });
        }
        if (event.target.id == 42) {
            this.setState({
                gryfindor: this.state.gryfindor + 0.3,
                slytherin: this.state.slytherin + 1,
                hufflepuff: this.state.hufflepuff + 0.3,
                ravenclaw: this.state.ravenclaw + 0.6
            });
        }
        if (event.target.id == 43) {
            this.setState({
                gryfindor: this.state.gryfindor + 1,
                slytherin: this.state.slytherin + 0.3,
                hufflepuff: this.state.hufflepuff + 0.6,
                ravenclaw: this.state.ravenclaw + 0.3
            });
        }
        if (event.target.id == 44) {
            this.setState({
                gryfindor: this.state.gryfindor + 0.7,
                slytherin: this.state.slytherin + 0.3,
                hufflepuff: this.state.hufflepuff + 1,
                ravenclaw: this.state.ravenclaw + 0.3
            });
        }
        if (event.target.id == 45) {
            this.setState({
                gryfindor: this.state.gryfindor + 1,
                slytherin: this.state.slytherin + 0.5,
                hufflepuff: this.state.hufflepuff + 0.5,
                ravenclaw: this.state.ravenclaw + 0.5,
                check: true
            });
        }
        if (event.target.id == 46) {
            this.setState({
                gryfindor: this.state.gryfindor + 0.5,
                slytherin: this.state.slytherin + 0.5,
                hufflepuff: this.state.hufflepuff + 1,
                ravenclaw: this.state.ravenclaw + 0.5,
                check: true
            });
        }
        if (event.target.id == 47) {
            this.setState({
                gryfindor: this.state.gryfindor + 0.5,
                slytherin: this.state.slytherin + 0.5,
                hufflepuff: this.state.hufflepuff + 0.5,
                ravenclaw: this.state.ravenclaw + 1,
                check: true
            });
        }
        if (event.target.id == 48) {
            this.setState({
                gryfindor: this.state.gryfindor + 0.5,
                slytherin: this.state.slytherin + 1,
                hufflepuff: this.state.hufflepuff + 0.5,
                ravenclaw: this.state.ravenclaw + 0.5,
                check: true
            });
        }
        if (this.state.gryfindor > this.state.slytherin &&
            this.state.gryfindor > this.state.hufflepuff &&
            this.state.gryfindor > this.state.ravenclaw)
            this.setState({ result: "Ґрифіндор" });
        else if (this.state.slytherin > this.state.gryfindor &&
            this.state.slytherin > this.state.hufflepuff &&
            this.state.slytherin > this.state.ravenclaw) {
            this.setState({
                result: "Слізерін"
            });
        }
        else if (this.state.hufflepuff > this.state.slytherin &&
            this.state.hufflepuff > this.state.gryfindor &&
            this.state.hufflepuff > this.state.ravenclaw) {
            this.setState({
                result: "Хафелпаф"
            });
        }
        else if (this.state.ravenclaw > this.state.slytherin &&
            this.state.ravenclaw > this.state.gryfindor &&
            this.state.ravenclaw > this.state.hufflepuff) {
            this.setState({
                result: "Рейвенкло"
            });
        }
        console.log(this.state.result);
    };
    FacultyTest.prototype.handleSave = function (event) {
        var _this = this;
        event.preventDefault();
        var data = new FormData(event.target);
        if (this.state.gryfindor > this.state.slytherin &&
            this.state.gryfindor > this.state.hufflepuff &&
            this.state.gryfindor > this.state.ravenclaw)
            this.setState({ result: "Ґрифіндор" });
        else if (this.state.slytherin > this.state.gryfindor &&
            this.state.slytherin > this.state.hufflepuff &&
            this.state.slytherin > this.state.ravenclaw) {
            this.setState({
                result: "Слізерін"
            });
        }
        else if (this.state.hufflepuff > this.state.slytherin &&
            this.state.hufflepuff > this.state.gryfindor &&
            this.state.hufflepuff > this.state.ravenclaw) {
            this.setState({
                result: "Хафелпаф"
            });
        }
        else if (this.state.ravenclaw > this.state.slytherin &&
            this.state.ravenclaw > this.state.gryfindor &&
            this.state.ravenclaw > this.state.hufflepuff) {
            this.setState({
                result: "Рейвенкло"
            });
        }
        if (this.state.UserContent.userId) {
            fetch('/api/UserContent/Edit', {
                method: 'PUT',
                body: data,
            }).then(function (response) { return response.json(); })
                .then(function (responseJson) {
                _this.props.history.push("/result");
            });
        }
        // POST request for Add employee.
        else {
            fetch('/api/UserContent/Create', {
                method: 'POST',
                body: data,
            }).then(function (response) { return response.json(); })
                .then(function (responseJson) {
                _this.props.history.push("/result");
            });
        }
    };
    FacultyTest.prototype.imaging = function (result, ob) {
        var source;
        source = ob.map(function (t) { return result == t.result ? t.resultImage : ""; });
        return source;
    };
    FacultyTest.prototype.render = function () {
        var contents = this.state.loading
            ? React.createElement("p", null,
                React.createElement("em", null, "Loading..."))
            : this.renderTestTable(this.state.resulting, this.state.questionList, this.state.answerList, this.state.User_);
        return React.createElement("div", { className: 'lolikk' },
            React.createElement("label", { className: 'lolik' }, "\u0420\u043E\u0437\u043F\u043E\u0434\u0456\u043B \u043D\u0430 \u0424\u0430\u043A\u0443\u043B\u044C\u0442\u0435\u0442"),
            React.createElement("p", null),
            contents);
    };
    FacultyTest.prototype.renderTestTable = function (result, questionList, answerList, user_) {
        var _this = this;
        return React.createElement("form", { id: '11', className: 'form' },
            questionList.map(function (q) {
                return q.id <= 10 ?
                    React.createElement(React.Fragment, null,
                        React.createElement("div", { className: 'lol' }, q.id <= 10 ?
                            React.createElement(React.Fragment, null,
                                React.createElement("label", { className: 'lola' }, q.question),
                                answerList.map(function (a) { return React.createElement("div", null, a.questionId == q.id ?
                                    React.createElement("div", { className: 'testblock' },
                                        React.createElement("label", { className: "radio" },
                                            React.createElement("input", { required: true, onChange: _this.onSiteChanged, name: a.questionId.toString(), id: a.answerId.toString(), type: "radio" }),
                                            React.createElement("div", { className: "radio__text" }, a.answer)),
                                        React.createElement("p", null)) : null); }),
                                React.createElement("br", null))
                            : null),
                        React.createElement("br", null)) : null;
            }),
            React.createElement("form", { className: 'row-md-3 zol', onSubmit: this.handleSave },
                result.map(function (r) {
                    return _this.state.result != "" ?
                        _this.state.check ?
                            _this.state.result == r.result ?
                                React.createElement("div", null,
                                    React.createElement("input", { hidden: true, className: "", type: "text", name: "Faculty_Image", defaultValue: _this.state.result == r.result ? r.resultImage.toString() : "" }),
                                    React.createElement("img", { defaultValue: _this.state.path + r.result == _this.state.result ? r.resultImage : "", width: "200", height: "200", src: _this.state.path + (r.result == _this.state.result ? r.resultImage : "") }),
                                    React.createElement("input", { className: 'buta', type: "text", name: "Faculty", defaultValue: _this.state.result }),
                                    React.createElement("span", null))
                                : null
                            : null
                        : null;
                }),
                React.createElement(UserName, null),
                React.createElement("button", { className: 'buta' },
                    React.createElement(react_router_dom_1.NavLink, { to: '/' }, "\u041F\u043E\u0432\u0435\u0440\u043D\u0443\u0442\u0438\u0441\u044C")),
                React.createElement("button", { id: '12', className: 'row-md-3 buta', type: "submit" }, "\u0417\u0430\u0432\u0435\u0440\u0448\u0438\u0442\u0438")));
    };
    return FacultyTest;
}(React.Component));
exports.FacultyTest = FacultyTest;
var QuestionDetail = /** @class */ (function () {
    function QuestionDetail() {
        this.id = 0;
        this.testTitle = "";
        this.question_Id = 0;
        this.question = "";
    }
    return QuestionDetail;
}());
exports.QuestionDetail = QuestionDetail;
var AnswerDetail = /** @class */ (function () {
    function AnswerDetail() {
        this.answerId = 0;
        this.questionId = 0;
        this.answer = "";
    }
    return AnswerDetail;
}());
exports.AnswerDetail = AnswerDetail;
var User = /** @class */ (function () {
    function User() {
        this.userId = 0;
        this.userName = "";
        this.password = "";
        this.email = "";
        this.profileImage = "";
    }
    return User;
}());
exports.User = User;
var TestResult = /** @class */ (function () {
    function TestResult() {
        this.test_Id_ = 0;
        this.result = "";
        this.resultImage = "";
    }
    return TestResult;
}());
exports.TestResult = TestResult;
var UserContent = /** @class */ (function () {
    function UserContent() {
        this.userId = 0;
        this.wand = "";
        this.wandImage = "";
        this.faculty = "";
        this.facultyImage = "";
        this.patronus = "";
        this.patronusImage = "";
    }
    return UserContent;
}());
exports.UserContent = UserContent;
//# sourceMappingURL=FacultyTest.js.map