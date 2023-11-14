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
exports.AnswerDetail = exports.QuestionDetail = exports.WandTest = void 0;
var React = require("react");
var react_router_dom_1 = require("react-router-dom");
require("../../App.css");
var WandTest = /** @class */ (function (_super) {
    __extends(WandTest, _super);
    function WandTest() {
        var _this = _super.call(this) || this;
        _this.state = { answerList: [], questionList: [], loading: true, path: "data:image/png;base64," };
        fetch('api/Question/Index')
            .then(function (response) { return response.json(); })
            .then(function (data) {
            _this.setState({ questionList: data, loading: false });
        });
        fetch('api/Answer/AnswerIndex')
            .then(function (response) { return response.json(); })
            .then(function (data) {
            _this.setState({ answerList: data, loading: false });
        });
        return _this;
        // This binding is necessary to make "this" work in the callback
    }
    WandTest.prototype.render = function () {
        var contents = this.state.loading
            ? React.createElement("p", null,
                React.createElement("em", null, "Loading..."))
            : this.renderTestTable(this.state.questionList, this.state.answerList);
        return React.createElement("div", { className: 'lolikk' },
            React.createElement("label", { className: 'lolik' }, "\u0412\u0438\u0431\u0456\u0440 \u0447\u0430\u0440\u0456\u0432\u043D\u043E\u0457 \u043F\u0430\u043B\u0438\u0447\u043A\u0438"),
            React.createElement("p", null),
            contents);
    };
    WandTest.prototype.renderTestTable = function (questionList, answerList) {
        return React.createElement("form", { className: 'form' },
            questionList.map(function (q) {
                return q.id > 10 && q.id <= 17 ? React.createElement(React.Fragment, null,
                    React.createElement("div", { className: 'lol' },
                        q.id > 10 && q.id <= 17 ?
                            React.createElement(React.Fragment, null,
                                React.createElement("label", { className: 'lola' }, q.question),
                                answerList.map(function (a) { return React.createElement("div", null, a.questionId == q.id ?
                                    React.createElement("div", { className: 'testblock' },
                                        React.createElement("label", { className: "radio" },
                                            React.createElement("input", { className: 'radio', name: a.questionId.toString(), required: true, type: "radio" }),
                                            React.createElement("div", { className: "radio__text" }, a.answer)),
                                        React.createElement("p", null)) : null); }))
                            : "",
                        React.createElement("br", null)),
                    React.createElement("br", null)) : null;
            }),
            React.createElement("div", { className: 'zol' },
                React.createElement("button", { className: 'buta' },
                    React.createElement(react_router_dom_1.NavLink, { to: '/' }, "\u041F\u043E\u0432\u0435\u0440\u043D\u0443\u0442\u0438\u0441\u044C")),
                React.createElement("button", { className: 'buta', type: "submit" }, "\u0417\u0430\u0432\u0435\u0440\u0448\u0438\u0442\u0438")));
    };
    return WandTest;
}(React.Component));
exports.WandTest = WandTest;
var QuestionDetail = /** @class */ (function () {
    function QuestionDetail() {
        this.id = 0;
        this.question_Id = 0;
        this.question = "";
    }
    return QuestionDetail;
}());
exports.QuestionDetail = QuestionDetail;
var AnswerDetail = /** @class */ (function () {
    function AnswerDetail() {
        this.questionId = 0;
        this.answer = "";
    }
    return AnswerDetail;
}());
exports.AnswerDetail = AnswerDetail;
//# sourceMappingURL=WandTest.js.map