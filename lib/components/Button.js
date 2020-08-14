"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var React = _interopRequireWildcard(require("react"));

var _type_validations = require("../tools/type_validations.js");

var props_obj = {
  disabled: 'boolean',
  "delete": 'boolean',
  definition: 'string',
  custom: 'object',
  onClick: 'function'
};

var Button = function Button(props) {
  (0, _type_validations.validate)(props, props_obj, "Button");
  var definition = getDefinition(props);
  return /*#__PURE__*/React.createElement("button", (0, _extends2["default"])({}, props.custom, {
    disabled: props.disabled === true ? true : false,
    className: definition,
    onClick: props.onClick
  }), props.label);
};

function getDefinition(props) {
  var definition = "";

  if (props["delete"] === true) {
    definition = "delete";
  } else {
    definition = props.definition === undefined ? "button" : "button " + props.definition;
  }

  return definition;
}

var _default = Button;
exports["default"] = _default;