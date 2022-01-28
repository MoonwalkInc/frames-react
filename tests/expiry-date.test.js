"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_dom_1 = require("react-dom");
var test_utils_1 = require("react-dom/test-utils");
var config_1 = require("../config/config");
var index_1 = require("../index");
var container = null;
beforeEach(function () {
    // setup a DOM element as a render target
    container = document.createElement('div');
    document.body.appendChild(container);
});
afterEach(function () {
    // cleanup on exiting
    react_dom_1.unmountComponentAtNode(container);
    container.remove();
    container = null;
});
it('renders expiry date placeholder with injected class name', function () {
    test_utils_1.act(function () {
        react_dom_1.render(react_1.default.createElement(index_1.ExpiryDate, { className: "example" }), container);
    });
    expect(container.firstChild.className).toEqual(config_1.EXPIRY_DATE_FRAME + " example");
});
//# sourceMappingURL=expiry-date.test.js.map