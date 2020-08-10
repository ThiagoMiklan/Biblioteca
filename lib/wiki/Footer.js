"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _react = _interopRequireWildcard(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _Footer = _interopRequireDefault(require("./components/Footer"));

require("bulma/css/bulma.css");

_reactDom.default.render( /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_Footer.default, null, /*#__PURE__*/_react.default.createElement("div", {
  class: "content has-text-centered"
}, /*#__PURE__*/_react.default.createElement("p", null, /*#__PURE__*/_react.default.createElement("strong", null, "Bulma"), " by ", /*#__PURE__*/_react.default.createElement("a", {
  href: "https://jgthms.com"
}, "Jeremy Thomas"), ". The source code is licensed", /*#__PURE__*/_react.default.createElement("a", {
  href: "http://opensource.org/licenses/mit-license.php"
}, "MIT"), ". The website content is licensed ", /*#__PURE__*/_react.default.createElement("a", {
  href: "http://creativecommons.org/licenses/by-nc-sa/4.0/"
}, "CC BY NC SA 4.0"), ".")))), document.getElementById('root'));