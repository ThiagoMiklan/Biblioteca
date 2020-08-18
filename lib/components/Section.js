"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(require("react"));

var _type_validations = require("../tools/type_validations");

var props_obj = {
  definition: 'string'
};

var Section = function Section(props) {
  (0, _type_validations.validate)(props, props_obj, "Section");
  var definition = props.definition == undefined ? "section" : "section " + props.definition;
  return /*#__PURE__*/React.createElement("section", {
    className: definition
  }, React.Children.map(props.children, function (child, i) {
    return child;
  }));
};

var _default = Section;
exports["default"] = _default;