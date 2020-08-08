"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var React = _interopRequireWildcard(require("react"));

var _type_validations = require("../tools/type_validations.js");

var props_obj = {
  disabled: 'boolean',
  onClick: 'function',
  custom: 'object'
};

var CheckBox = function CheckBox(props) {
  (0, _type_validations.validate)(props, props_obj, "CheckBox");
  var definition = props.definition == undefined ? "checkbox" : "checkbox " + props.definition;
  return /*#__PURE__*/React.createElement("label", {
    className: definition,
    disabled: props.disabled
  }, /*#__PURE__*/React.createElement("input", (0, _extends2.default)({
    type: "checkbox",
    onClick: props.onClick,
    disabled: props.disabled
  }, props.custom)), props.children);
};

var _default = CheckBox;
exports.default = _default;