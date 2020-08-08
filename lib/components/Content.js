"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _type_validations = require("../tools/type_validations.js");

var props_obj = {
  definition: 'string'
};

var Content = function Content(props) {
  (0, _type_validations.validate)(props, props_obj, "Content");
  var definition = props.definition == undefined ? "content" : "content " + props.definition;
  return /*#__PURE__*/React.createElement("div", {
    className: definition
  }, props.children);
};

var _default = Content;
exports.default = _default;