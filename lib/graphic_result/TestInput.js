"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _react = _interopRequireWildcard(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

require("bulma/css/bulma.css");

var _Input = _interopRequireDefault(require("./components/Input"));

var _Icon = _interopRequireDefault(require("./components/Icon"));

_reactDom.default.render( /*#__PURE__*/_react.default.createElement("div", {
  className: "container is-fluid"
}, /*#__PURE__*/_react.default.createElement(_Input.default, {
  definition: "is-primary",
  type: "password",
  placeholder: "Primary input"
}), /*#__PURE__*/_react.default.createElement(_Input.default, {
  definition: "is-info",
  type: "text",
  placeholder: "Info input"
}), /*#__PURE__*/_react.default.createElement(_Input.default, {
  definition: "is-success",
  type: "text",
  placeholder: "Success input"
}), /*#__PURE__*/_react.default.createElement(_Input.default, {
  definition: "is-warning",
  type: "text",
  placeholder: "Warning input"
}), /*#__PURE__*/_react.default.createElement(_Input.default, {
  definition: "is-danger",
  type: "text",
  placeholder: "Danger input"
}), /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement(_Input.default, {
  definition: "is-small",
  type: "text",
  placeholder: "Small input"
}), /*#__PURE__*/_react.default.createElement(_Input.default, {
  definition: "is-normal",
  type: "text",
  placeholder: "Normal input"
}), /*#__PURE__*/_react.default.createElement(_Input.default, {
  definition: "is-medium",
  type: "text",
  placeholder: "Medium input"
}), /*#__PURE__*/_react.default.createElement(_Input.default, {
  definition: "is-large",
  type: "text",
  placeholder: "Large input"
}), /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement(_Input.default, {
  definition: "is-rounded",
  type: "text",
  placeholder: "Rounded input"
}), /*#__PURE__*/_react.default.createElement(_Input.default, {
  definition: "is-focused",
  type: "text",
  placeholder: "Loading input"
}), /*#__PURE__*/_react.default.createElement(_Input.default, {
  definition: "is-loading is-small",
  type: "text",
  placeholder: "Loading input small"
}), /*#__PURE__*/_react.default.createElement(_Input.default, {
  definition: "is-loading",
  type: "text",
  placeholder: "Loading input normal"
}), /*#__PURE__*/_react.default.createElement(_Input.default, {
  definition: "is-loading is-medium",
  type: "text",
  placeholder: "Loading input medium"
}), /*#__PURE__*/_react.default.createElement(_Input.default, {
  definition: "is-loading is-large",
  type: "text",
  placeholder: "Loading input large"
}), /*#__PURE__*/_react.default.createElement(_Input.default, {
  definition: "is-loading is-large",
  type: "text",
  placeholder: "Loading input large",
  disabled: true
}), /*#__PURE__*/_react.default.createElement(_Input.default, {
  definition: "is-loading is-large",
  type: "text",
  value: "Loading input large",
  icon: /*#__PURE__*/_react.default.createElement(_Icon.default, {
    definition: "icon is-small is-left",
    icon: "fas fa-envelope"
  })
})), document.getElementById('root'));