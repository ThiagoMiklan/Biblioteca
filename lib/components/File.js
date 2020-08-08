"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var _Icon = _interopRequireDefault(require("./Icon"));

var _type_validations = require("../tools/type_validations");

var props_obj = {
  icon_name: 'string',
  icon_definition: 'string',
  definition: 'string',
  label: 'string',
  filename: 'string',
  ref: 'string',
  onChange: 'function',
  custom: 'object'
};

var File = function File(props) {
  (0, _type_validations.validate)(props, props_obj, "File");
  var definition = props.definition == undefined ? "file" : "file " + props.definition;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: definition
  }, /*#__PURE__*/_react.default.createElement("label", {
    className: "file-label"
  }, /*#__PURE__*/_react.default.createElement("input", (0, _extends2.default)({
    onChange: props.onChange,
    className: "file-input",
    type: "file",
    ref: props.ref
  }, props.custom)), /*#__PURE__*/_react.default.createElement("span", {
    className: "file-cta"
  }, props.icon_name != undefined && /*#__PURE__*/_react.default.createElement(_Icon.default, {
    definition: props.icon_definition,
    icon_name: props.icon_name
  }), /*#__PURE__*/_react.default.createElement("span", {
    className: "file-label"
  }, props.label)), definition.includes("has-name") == true && props.filename != undefined && /*#__PURE__*/_react.default.createElement("span", {
    className: "file-name"
  }, props.filename)));
};

var _default = File;
exports.default = _default;