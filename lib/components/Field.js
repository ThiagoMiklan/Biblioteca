"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _Icon = _interopRequireDefault(require("./Icon"));

var _Control = _interopRequireDefault(require("./Control"));

var _Input = _interopRequireDefault(require("./Input"));

var _type_validations = require("../tools/type_validations.js");

var props_obj = {
  label: "string",
  control_definition: "string",
  input_definition: "string",
  icon_definition: "string",
  icon_name: "string",
  onChange: "function",
  placeholder: "string",
  type: "string",
  value: "string"
};

var Field = function Field(props) {
  (0, _type_validations.validate)(props, props_obj, "Field");
  var help_definition = props.help_definition == undefined ? "help" : "help " + props.help_definition;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "field"
  }, /*#__PURE__*/_react.default.createElement("label", {
    className: "label"
  }, props.label), /*#__PURE__*/_react.default.createElement(_Control.default, {
    definition: props.control_definition == undefined ? "has-icons-left" : props.control_definition
  }, /*#__PURE__*/_react.default.createElement(_Input.default, {
    definition: props.input_definition,
    onChangeEvent: props.onChange,
    placeholder: props.placeholder,
    type: props.type,
    value: props.value,
    custom: props.custom
  }), assembleIcon(props), props.help_value != undefined && /*#__PURE__*/_react.default.createElement("p", {
    className: help_definition
  }, props.help_value)));
};

function assembleIcon(props) {
  var code = /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null);

  if (props.control_definition != undefined) {
    var right = props.control_definition.includes("has-icons-right");

    if (right == true) {
      var definition = props.icon_definition == undefined ? "" : props.icon_definition;
      var icon_def = definition + " is-right";
      code = /*#__PURE__*/_react.default.createElement(_Icon.default, {
        definition: icon_def,
        icon_name: props.icon_name
      });
    } else {
      code = /*#__PURE__*/_react.default.createElement(_Icon.default, {
        definition: props.icon_definition,
        icon_name: props.icon_name
      });
    }
  } else {
    code = /*#__PURE__*/_react.default.createElement(_Icon.default, {
      definition: props.icon_definition,
      icon_name: props.icon_name
    });
  }

  return code;
}

var _default = Field;
exports.default = _default;