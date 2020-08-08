"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _type_validations = require("../tools/type_validations");

var props_obj = {
  onClick: "function"
};

var PanelItem = function PanelItem(props) {
  (0, _type_validations.validate)(props, props_obj, "PanelItem");
  return /*#__PURE__*/React.createElement("div", {
    className: "panel-block",
    onClick: props.onClick
  }, props.children);
};

var _default = PanelItem;
exports.default = _default;