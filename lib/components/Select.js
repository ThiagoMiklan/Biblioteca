"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var _type_validations = require("../tools/type_validations");

var props_obj = {
  definition: "string",
  onChange: "function",
  multiple_size: "number",
  itens: "array",
  custon: 'object'
};

var Select = function Select(props) {
  (0, _type_validations.validate)(props, props_obj, "Select");
  var definition = props.definition == undefined ? "select" : "select " + props.definition;

  var code = /*#__PURE__*/_react.default.createElement("div", {
    className: definition
  }, props.multiple_size == undefined ? /*#__PURE__*/_react.default.createElement("select", (0, _extends2.default)({
    onChange: props.onChange,
    className: definition
  }, props.custom), " ", assembleItens(props.itens)) : /*#__PURE__*/_react.default.createElement("select", (0, _extends2.default)({
    onChange: props.onChange,
    className: definition
  }, props.custom, {
    multiple: true,
    size: props.multiple_size
  }), " ", assembleItens(props.itens)));

  return code;
};

function getDefinitionCssEvents(definition) {
  var focused = "";
  var hovered = "";
  var active = "";

  if (definition != undefined) {
    focused = definition.includes("focused") == true ? "focused " : "";
    hovered = definition.includes("hovered") == true ? "hovered " : "";
    active = definition.includes("active") == true ? "active " : "";
  }

  return focused + hovered + active;
}

function assembleItens(itens) {
  var code = "";

  if (Array.isArray(itens) && itens != undefined) {
    code = itens.map(function (item) {
      return /*#__PURE__*/_react.default.createElement("option", {
        value: item["value"]
      }, item["value"]);
    });
  }

  return code;
}

var _default = Select;
exports.default = _default;