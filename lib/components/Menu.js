"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(require("react"));

var _type_validations = require("../tools/type_validations.js");

var props_obj = {
  definition: "string"
};

var Menu = function Menu(props) {
  (0, _type_validations.validate)(props, props_obj, "Menu");
  var definition = props.definition == undefined ? "menu" : "menu " + props.definition;
  return /*#__PURE__*/React.createElement("aside", {
    className: definition
  }, props.children);
};

var _default = Menu;
exports["default"] = _default;