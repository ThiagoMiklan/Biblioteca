"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var _type_validations = require("../tools/type_validations");

var props_obj = {
  definition: "string",
  itens: "array"
};
var props_obj_item = {
  key: "object",
  definition: "string",
  href: "string",
  value: "object",
  onClick: "function",
  custom: "object"
};

var BreadCrumb = function BreadCrumb(props) {
  (0, _type_validations.validate)(props, props_obj, "BreadCrumb");
  var definition = props.definition == undefined ? "breadcrumb" : "breadcrumb " + props.definition;
  (0, _type_validations.validate)(props, props_obj);
  return /*#__PURE__*/_react["default"].createElement("nav", {
    className: definition
  }, /*#__PURE__*/_react["default"].createElement("ul", null, assemble(props.itens)));
};

function assemble(itens) {
  (0, _type_validations.validate)(props_obj_item, itens, "BreadCrumbItem");
  var itens_code = "";
  itens_code = assembleItens(itens);
  return itens_code;
}

function assembleItens(itens) {
  var itens_code = itens == undefined ? /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null) : itens.map(function (item) {
    return assembleSingleItem(item);
  });
  return itens_code;
}

function assembleSingleItem(item) {
  var definition = item["definition"];
  var custom = item["custom"];
  return /*#__PURE__*/_react["default"].createElement("li", (0, _extends2["default"])({
    key: item["key"],
    className: definition
  }, custom), /*#__PURE__*/_react["default"].createElement("a", {
    onClick: item["onClick"],
    href: item["href"]
  }, item["value"]));
}

var _default = BreadCrumb;
exports["default"] = _default;