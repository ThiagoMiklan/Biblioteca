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
  definition: 'string',
  custom: 'object'
};

function Box(props) {
  (0, _type_validations.validate)(props, props_obj, "Box");
  var definition = props.definition == undefined ? "box" : "box " + props.definition;
  return /*#__PURE__*/React.createElement("div", (0, _extends2["default"])({
    className: definition
  }, props.custom), props.children);
}

var _default = Box;
exports["default"] = _default;