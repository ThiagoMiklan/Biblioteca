"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var _Control = _interopRequireDefault(require("./Control"));

var _Input = _interopRequireDefault(require("./Input"));

var _type_validations = require("../tools/type_validations");

var props_obj = {
  itens: "array",
  name: "string"
};

var Radio = function Radio(props) {
  (0, _type_validations.validate)(props, props_obj, "Radio");
  return /*#__PURE__*/_react["default"].createElement(_Control["default"], null, assembleItens(props));
};

function assembleItens(props) {
  var code = "";
  var itens = props.itens;

  if (Array.isArray(itens) && itens != undefined) {
    code = itens.map(function (item) {
      return assembleRadio(item, props.name);
    });
  }

  return code;
}

function assembleRadio(item, name) {
  return /*#__PURE__*/_react["default"].createElement("label", {
    className: "radio",
    disabled: item["disabled"]
  }, /*#__PURE__*/_react["default"].createElement("input", (0, _extends2["default"])({
    type: "radio",
    onClick: item["onClick"],
    name: name,
    checked: item["checked"]
  }, item["custom"])), item["value"]);
}

var _default = Radio;
exports["default"] = _default;