"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

var _react = _interopRequireDefault(require("react"));

var _type_validations = require("../tools/type_validations");

var props_obj = {
  definition: "string",
  href_previous: "string",
  href_next: "string",
  next_disabled: "boolean",
  next_name: "string",
  previous_disabled: "boolean",
  itens: "array",
  previous_name: "string"
};

var Pagination = function Pagination(props) {
  (0, _type_validations.validate)(props, props_obj, "Pagination");
  var definition = props.definition == undefined ? "pagination" : "pagination " + props.definition;
  return /*#__PURE__*/_react.default.createElement("nav", {
    className: definition
  }, /*#__PURE__*/_react.default.createElement("a", {
    className: "pagination-previous",
    href: props.href_previous,
    disabled: props.previous_disabled
  }, props.previous_name), /*#__PURE__*/_react.default.createElement("a", {
    className: "pagination-next",
    href: props.href_next,
    disabled: props.next_disabled
  }, props.next_name), /*#__PURE__*/_react.default.createElement("ul", {
    class: "pagination-list"
  }, assemble(props.itens)));
};

function assemble(itens) {
  var code_itens = "";

  if (Array.isArray(itens)) {
    code_itens = assembleItens(itens);
  } else if ((0, _typeof2.default)(itens) == 'object') {
    code_itens = assembleItem(itens);
  }

  return code_itens;
}

function assembleItens(itens) {
  return itens.map(function (item) {
    return assembleItem(item);
  });
}

function assembleItem(item) {
  var definition = item["definition"] == undefined ? "pagination-link" : "pagination-link " + item["definition"];

  var item_code = item_code = /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement("a", {
    onClick: item["onClick"],
    disabled: item["disabled"],
    href: item["href"],
    className: definition
  }, item["value"]));

  return item_code;
}

var _default = Pagination;
exports.default = _default;