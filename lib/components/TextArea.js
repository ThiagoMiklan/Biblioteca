"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _Control = _interopRequireDefault(require("./Control"));

var _type_validations = require("../tools/type_validations");

var props_obj = {
  definition: "string",
  loading: "boolean",
  onChange: "function",
  placeholder: "string",
  rows: "string",
  readonly: "boolean",
  disabled: "boolean",
  label: "string",
  value: "string",
  custom: "object"
};

var TextArea = function TextArea(props) {
  (0, _type_validations.validate)(props, props_obj, "TextArea");
  return assembleTextArea(props);
};

function assembleTextArea(props) {
  (0, _type_validations.validate)(props, props_obj);
  var definition = props.definition == undefined ? "textarea" : "textarea " + props.definition;
  var definitionControl = props.definition != undefined && props.definition.includes("is-loading") ? "is-loading" : "";
  return /*#__PURE__*/_react["default"].createElement(_Control["default"], {
    definition: definitionControl
  }, /*#__PURE__*/_react["default"].createElement("label", {
    className: "label"
  }, " ", props.label), /*#__PURE__*/_react["default"].createElement("textarea", {
    onChange: props.onChange,
    className: definition,
    placeholder: props.placeholder,
    rows: props.rows,
    readOnly: props.readonly,
    disabled: props.disabled,
    value: props.value
  }));
}

var _default = TextArea;
exports["default"] = _default;