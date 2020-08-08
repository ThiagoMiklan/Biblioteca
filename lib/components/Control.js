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

var Control = function Control(props) {
  (0, _type_validations.validate)(props, props_obj, "Control");
  var definition = props.definition == undefined || props.definition == '' ? "control" : "control " + props.definition;
  return /*#__PURE__*/React.createElement("div", {
    className: definition
  }, React.Children.map(props.children, function (child, i) {
    return child;
  }));
};

var _default = Control;
exports.default = _default;