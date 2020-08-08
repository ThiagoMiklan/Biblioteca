"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _type_validations = require("../tools/type_validations");

var props_obj = {
  onChange: "function",
  max: "number",
  value: "number",
  definition: "string"
};

var ProgressBar = function ProgressBar(props) {
  (0, _type_validations.validate)(props, props_obj, "ProgressBar");
  var definition = props.definition == undefined ? "progress" : "progress " + props.definition;
  return /*#__PURE__*/_react.default.createElement("progress", {
    onChange: props.onChange,
    className: definition,
    max: props.max,
    value: props.value
  });
};

var _default = ProgressBar;
exports.default = _default;