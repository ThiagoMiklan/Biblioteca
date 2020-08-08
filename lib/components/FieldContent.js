"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _type_validations = require("../tools/type_validations");

var props_obj = {
  label: 'string'
};

var FieldContent = function FieldContent(props) {
  (0, _type_validations.validate)(props, props_obj, "FieldContent");
  return /*#__PURE__*/React.createElement("div", {
    className: "field"
  }, /*#__PURE__*/React.createElement("label", {
    className: "label"
  }, props.label), /*#__PURE__*/React.createElement("div", {
    className: "control"
  }, props.children));
};

var _default = FieldContent;
exports.default = _default;