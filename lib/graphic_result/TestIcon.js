"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _react = _interopRequireWildcard(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

require("bulma/css/bulma.css");

var _Icon = _interopRequireDefault(require("./components/Icon"));

_reactDom.default.render( /*#__PURE__*/_react.default.createElement("div", {
  className: "container is-fluid"
}, /*#__PURE__*/_react.default.createElement(_Icon.default, {
  icon_name: "fas fa-info-circle",
  definition: "has-text-info"
}), /*#__PURE__*/_react.default.createElement(_Icon.default, {
  icon_name: "fas fa-check-square",
  definition: "has-text-success"
}), /*#__PURE__*/_react.default.createElement(_Icon.default, {
  icon_name: "fas fa-exclamation-triangle",
  definition: "has-text-warning"
}), /*#__PURE__*/_react.default.createElement(_Icon.default, {
  icon_name: "fas fa-ban",
  definition: "has-text-danger"
}), /*#__PURE__*/_react.default.createElement(_Icon.default, {
  icon_name: "fas fa-home",
  definition: "has-text-warning is-small"
}), /*#__PURE__*/_react.default.createElement(_Icon.default, {
  icon_name: "fas fa-home",
  definition: "has-text-warning is-medium"
}), /*#__PURE__*/_react.default.createElement(_Icon.default, {
  icon_name: "fas fa-home",
  definition: "has-text-warning is-large"
})), document.getElementById("root"));