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
exports.MainTest = void 0;
var React = require("react");
var TestSection_1 = require("./TestSection");
var react_router_dom_1 = require("react-router-dom");
var MainTest = /** @class */ (function (_super) {
    __extends(MainTest, _super);
    function MainTest(props) {
        var _this = _super.call(this, props) || this;
        var testid = _this.props.match.params["testid"];
        _this.state = { title: "", loading: true, testId: testid, Tests: new TestSection_1.Tests, path: "data:image/png;base64," };
        // This will set state for Edit employee
        if (testid > 0) {
            fetch('/api/Test/Details/' + testid)
                .then(function (response) { return response.json(); })
                .then(function (data) {
                _this.setState({ title: "Edit", loading: false, Tests: data });
            });
        }
        else {
            _this.state = { title: "Create", testId: testid, loading: false, Tests: new TestSection_1.Tests, path: "data:image/png;base64," };
        }
        return _this;
    }
    MainTest.prototype.render = function () {
        var contents = this.state.loading
            ? React.createElement("p", null,
                React.createElement("em", null, "Loading..."))
            : this.state.Tests.testId == 1 ? React.createElement(react_router_dom_1.NavLink, { to: '/facultyTest' })
                : this.state.Tests.testId == 2 ? React.createElement(react_router_dom_1.NavLink, { to: '/patronusTest' })
                    : this.state.Tests.testId == 3 ? React.createElement(react_router_dom_1.NavLink, { to: '/wandTest' }) : "";
        return React.createElement("div", null, contents);
    };
    return MainTest;
}(React.Component));
exports.MainTest = MainTest;
//# sourceMappingURL=MainTest.js.map