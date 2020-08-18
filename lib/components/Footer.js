"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(require("react"));

var _type_validations = require("../tools/type_validations");

var props_obj = {
  definition: "string"
};

var Footer = function Footer(props) {
  (0, _type_validations.validate)(props, props_obj, "Footer");
  var definition = props.definition == undefined ? "footer" : "footer " + props.definition;
  return /*#__PURE__*/React.createElement("footer", {
    className: definition
  }, props.children);
};

var _default = Footer;
exports["default"] = _default;