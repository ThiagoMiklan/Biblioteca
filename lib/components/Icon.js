"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

require("../css/all");

var _type_validations = require("../tools/type_validations.js");

var props_obj = {
  definition: "string",
  right: "boolean",
  onClick: "function",
  icon_name: "string"
};

var Icon = function Icon(props) {
  (0, _type_validations.validate)(props, props_obj, "Icon");
  var definition = props.definition == undefined ? "icon" : "icon " + props.definition;
  return /*#__PURE__*/React.createElement(React.Fragment, null, props.right == false || props.right == undefined ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", {
    onClick: props.onClick,
    className: definition
  }, /*#__PURE__*/React.createElement("i", {
    className: props.icon_name
  })), /*#__PURE__*/React.createElement("span", null, props.children)) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", null, props.children), /*#__PURE__*/React.createElement("span", {
    onClick: props.onClick,
    className: definition
  }, /*#__PURE__*/React.createElement("i", {
    className: props.icon_name
  }))));
};

var _default = Icon;
exports.default = _default;