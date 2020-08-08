"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var React = _interopRequireWildcard(require("react"));

var _type_validations = require("../tools/type_validations.js");

var props_obj = {
  definition: "string",
  custom: 'object'
};

var ButtonList = function ButtonList(props) {
  (0, _type_validations.validate)(props, props_obj, "ButtonList");
  return assembleButtonList(props);
};

function assembleButtonList(props) {
  (0, _type_validations.validate)(props, props_obj, "ButtonList");
  var code_icon = "";
  var definition = props.definition == undefined ? "buttons" : "buttons " + props.definition;

  if (definition.includes("addons")) {
    code_icon = /*#__PURE__*/React.createElement("div", (0, _extends2.default)({
      className: props.definition
    }, props.custom), React.Children.map(props.children, function (child, i) {
      return /*#__PURE__*/React.createElement("p", {
        className: "control"
      }, /*#__PURE__*/React.createElement("div", {
        className: definition
      }, child));
    }));
  } else {
    code_icon = /*#__PURE__*/React.createElement("div", {
      className: definition
    }, props.children);
  }

  return code_icon;
}

var _default = ButtonList;
exports.default = _default;