"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _type_validations = require("../tools/type_validations.js");

var props_obj = {
  definition: "string"
};

var Column = function Column(props) {
  (0, _type_validations.validate)(props, props_obj, "Column");
  var definition = props.definition == undefined ? "column" : "column " + props.definition;
  return /*#__PURE__*/React.createElement("div", {
    className: definition
  }, props.children);
};

var _default = Column;
exports.default = _default;