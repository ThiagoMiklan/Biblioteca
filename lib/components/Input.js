"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireWildcard(require("react"));

var _type_validations = require("../tools/type_validations.js");

var _Control = _interopRequireDefault(require("./Control"));

var props_obj = {
  definition: "string",
  type: "string",
  placeholder: "string",
  value: "string",
  readonly: "boolean",
  disabled: "boolean",
  onChangeEvent: "function"
};

var Input = function Input(props) {
  (0, _type_validations.validate)(props, props_obj, "Input");
  return assemble(props);
};

function assemble(props) {
  var code = "";

  if (props.definition != undefined) {
    if (props.definition.includes("is-loading")) {
      code = assembleInputLoading(props);
    } else {
      code = assembleInput(props);
    }
  } else {
    code = assembleInput(props);
  }

  return code;
}

function assembleInputLoading(props) {
  var definition_input = props.definition == undefined ? "" : props.definition;
  var definition = 'control ' + definition_input;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: definition
  }, assembleInput(props));
}

function assembleInput(props) {
  var input_code = "";
  var definition = props.definition == undefined ? 'input' : "input " + props.definition;

  if (props.disabled) {
    if (props.readonly) {
      input_code = /*#__PURE__*/_react["default"].createElement(_Control["default"], null, /*#__PURE__*/_react["default"].createElement("input", (0, _extends2["default"])({
        onChange: props.onChangeEvent
      }, props.custom, {
        className: definition,
        type: props.type,
        placeholder: props.placeholder,
        value: props.value,
        disabled: true,
        readonly: true
      })));
    } else {
      input_code = /*#__PURE__*/_react["default"].createElement(_Control["default"], null, /*#__PURE__*/_react["default"].createElement("input", (0, _extends2["default"])({
        onChange: props.onChangeEvent
      }, props.custom, {
        className: definition,
        type: props.type,
        placeholder: props.placeholder,
        value: props.value,
        disabled: true
      })));
    }
  } else {
    input_code = /*#__PURE__*/_react["default"].createElement(_Control["default"], null, /*#__PURE__*/_react["default"].createElement("input", (0, _extends2["default"])({
      onChange: props.onChangeEvent
    }, props.custom, {
      className: definition,
      type: props.type,
      placeholder: props.placeholder,
      value: props.value
    })));
  }

  return input_code;
}

var _default = Input;
exports["default"] = _default;