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
exports.Tests = exports.TestSection = void 0;
var React = require("react");
var react_router_dom_1 = require("react-router-dom");
var TestSection = /** @class */ (function (_super) {
    __extends(TestSection, _super);
    function TestSection(props) {
        var _this = _super.call(this, props) || this;
        _this.state = { title: "", loading: true, Test: [], path: "data:image/png;base64," };
        fetch('api/Tests/TestIndex')
            .then(function (response) { return response.json(); })
            .then(function (data) {
            _this.setState({ Test: data, loading: false });
        });
        _this.handleEdit = _this.handleEdit.bind(_this);
        return _this;
    }
    TestSection.prototype.render = function () {
        var contents = this.state.loading
            ? React.createElement("p", null,
                React.createElement("em", null, "Loading..."))
            : this.renderTestTable(this.state.Test);
        return React.createElement("div", { className: 'tundra' }, contents);
    };
    TestSection.prototype.handleEdit = function (id) {
        this.props.history.push("/testSection/entering/" + id);
    };
    TestSection.prototype.renderTestTable = function (test) {
        var _this = this;
        return (React.createElement("table", { className: 'table2' }, test.map(function (t) { return React.createElement(React.Fragment, null,
            React.createElement("td", { className: 'ulling tt' },
                React.createElement("div", null,
                    React.createElement("label", { htmlFor: "Name" }, "\u041D\u0430\u0437\u0432\u0430 \u0422\u0435\u0441\u0442\u0443"),
                    React.createElement("div", null,
                        React.createElement("label", { className: 'cfr', name: "test_Title", value: t.test_Title }, t.test_Title))),
                React.createElement("div", null,
                    React.createElement("label", { htmlFor: "Gender" }, "\u041A\u0456\u043B\u044C\u043A\u0456\u0441\u0442\u044C \u043F\u0438\u0442\u0430\u043D\u044C"),
                    React.createElement("div", null,
                        React.createElement("label", { className: 'cfr', name: "count_of_questions", value: t.count_of_questions.toString() }, t.count_of_questions))),
                React.createElement("div", null,
                    React.createElement("a", { className: "action", onClick: function (id) { return _this.handleEdit(t.testId); } }, "\u041F\u0435\u0440\u0435\u0439\u0442\u0438"),
                    React.createElement(react_router_dom_1.NavLink, { to: '/', className: "nmnm btn" }, "\u041F\u043E\u0432\u0435\u0440\u043D\u0443\u0442\u0438\u0441\u044C")))); })));
    };
    return TestSection;
}(React.Component));
exports.TestSection = TestSection;
var Tests = /** @class */ (function () {
    function Tests() {
        this.testId = 0;
        this.test_Title = "";
        this.count_of_questions = 0;
        this.result_ = 0;
    }
    return Tests;
}());
exports.Tests = Tests;
//# sourceMappingURL=TestSection.js.map