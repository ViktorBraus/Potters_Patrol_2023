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
exports.TestSection = void 0;
var React = require("react");
var react_router_dom_1 = require("react-router-dom");
require("./HomeAfter.css");
var TestSection = /** @class */ (function (_super) {
    __extends(TestSection, _super);
    function TestSection(props) {
        var _this = _super.call(this, props) || this;
        _this.state = { loading: true, testList: [] };
        fetch('api/Tests/TestIndex')
            .then(function (response) { return response.json(); })
            .then(function (data) {
            _this.setState({ testList: data, loading: false });
        });
        return _this;
    }
    TestSection.prototype.render = function () {
        var contents = this.state.loading
            ? React.createElement("p", null,
                React.createElement("em", null, "Loading..."))
            : this.table(this.state.testList);
        return React.createElement("div", { className: 'tundra' }, contents);
    };
    TestSection.prototype.table = function (test) {
        return (React.createElement("div", { className: 'HometestSection' },
            React.createElement("br", null),
            React.createElement("div", { className: 'testvariantiv' }, test.map(function (t) {
                return React.createElement("a", { href: t.test_Title == "Вибір чарівної палички" ? '/wand' :
                        t.test_Title == "Розподіл на факультети" ? '/faculty' :
                            t.test_Title == "Вибір патронуса" ? '/patronus' : "" },
                    React.createElement("div", { className: 'ull' },
                        t.test_Title,
                        React.createElement("br", null),
                        "\u041A\u0456\u043B\u044C\u043A\u0456\u0441\u0442\u044C \u0437\u0430\u043F\u0438\u0442\u0430\u043D\u044C: ",
                        t.count_of_questions,
                        React.createElement("div", { className: t.test_Title == "Вибір чарівної палички" ? 'imga_' :
                                t.test_Title == "Розподіл на факультети" ? 'imga2_' :
                                    t.test_Title == "Вибір патронуса" ? 'imga1_' : "" })));
            })),
            React.createElement("br", null),
            React.createElement("div", { className: 'textstyling' },
                React.createElement("div", { className: 'diff' },
                    React.createElement(react_router_dom_1.NavLink, { className: 'block', to: '/testSection' }, "\u0421\u0435\u043A\u0446\u0456\u044F \u0442\u0435\u0441\u0442\u0456\u0432"),
                    React.createElement(react_router_dom_1.NavLink, { className: 'block', to: '/forum' }, "\u0421\u0435\u043A\u0446\u0456\u044F \u0444\u043E\u0440\u0443\u043C\u0443")))));
    };
    return TestSection;
}(React.Component));
exports.TestSection = TestSection;
//# sourceMappingURL=TestSection.js.map