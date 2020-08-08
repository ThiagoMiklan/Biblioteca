"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var Container = function Container(props) {
  var definition = props.definition == undefined ? "container" : "container " + props.definition;
  return /*#__PURE__*/React.createElement("div", {
    className: definition
  }, props.children);
};

var _default = Container;
exports.default = _default;