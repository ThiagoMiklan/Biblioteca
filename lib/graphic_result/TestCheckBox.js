"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _CheckBox = _interopRequireDefault(require("./components/CheckBox"));

var _Control = _interopRequireDefault(require("./components/Control"));

require("bulma/css/bulma.css");

var custom = {
  checked: true
};

_reactDom.default.render( /*#__PURE__*/_react.default.createElement("div", {
  className: "container is-fluid"
}, /*#__PURE__*/_react.default.createElement(_Control.default, null, /*#__PURE__*/_react.default.createElement(_CheckBox.default, {
  custom: custom
}, "normal")), /*#__PURE__*/_react.default.createElement(_Control.default, null, /*#__PURE__*/_react.default.createElement(_CheckBox.default, null, "with link ", /*#__PURE__*/_react.default.createElement("a", {
  href: "#"
}, "here"))), /*#__PURE__*/_react.default.createElement(_Control.default, null, /*#__PURE__*/_react.default.createElement(_CheckBox.default, {
  onClick: function onClick() {
    alert("Clicou CheckBox");
  }
}, "with on click")), /*#__PURE__*/_react.default.createElement(_Control.default, null, /*#__PURE__*/_react.default.createElement(_CheckBox.default, {
  disabled: true,
  onClick: function onClick() {
    alert("Clicou CheckBox");
  }
}, "disabled with onClick"))), document.getElementById("root"));