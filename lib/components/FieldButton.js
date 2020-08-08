"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _FieldContent = _interopRequireDefault(require("./FieldContent"));

var _Button = _interopRequireDefault(require("./Button"));

var _type_validations = require("../tools/type_validations");

var props_obj = {
  field_definition: 'string',
  label: 'string',
  button_definition: 'string',
  onClick: 'function',
  disabled: 'boolean'
};

var FieldButton = function FieldButton(props) {
  (0, _type_validations.validate)(props, props_obj, "FieldButton");
  return /*#__PURE__*/React.createElement(_FieldContent.default, {
    definition: props.field_definition,
    label: props.label
  }, /*#__PURE__*/React.createElement(_Button.default, {
    definition: props.button_definition,
    onClick: props.onClick,
    disabled: props.disabled,
    label: props.children
  }));
};

var _default = FieldButton;
exports.default = _default;