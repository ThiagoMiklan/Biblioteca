"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _type_validations = require("../tools/type_validations.js");

var _Container = _interopRequireDefault(require("./Container"));

var props_obj = {
  title: "string",
  subtitle: "string",
  definition: "string"
};

var Hero = function Hero(props) {
  (0, _type_validations.validate)(props, props_obj, "Hero");
  var definition = props.definition == undefined ? "hero" : "hero " + props.definition;
  return /*#__PURE__*/_react["default"].createElement("section", {
    className: definition
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "hero-body"
  }, /*#__PURE__*/_react["default"].createElement(_Container["default"], {
    definition: props.container_definition
  }, /*#__PURE__*/_react["default"].createElement("h1", {
    className: "title"
  }, props.title), /*#__PURE__*/_react["default"].createElement("h2", {
    className: "subtitle"
  }, props.subtitle))));
};

var _default = Hero;
exports["default"] = _default;