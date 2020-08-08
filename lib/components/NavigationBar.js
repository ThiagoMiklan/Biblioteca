"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

var _react = _interopRequireDefault(require("react"));

var _type_validations = require("../tools/type_validations");

var props_obj = {
  definition: "string",
  link: "string",
  src: "string",
  width_brand: "number",
  alt: "string",
  height_brand: "number",
  itens_start: "array",
  itens_end: "array"
};

var NavigationBar = function NavigationBar(props) {
  (0, _type_validations.validate)(props, props_obj, "NavigationBar");
  var definition = props.definition == undefined ? "navbar" : "navbar " + props.definition;
  return /*#__PURE__*/_react.default.createElement("nav", {
    className: definition
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "navbar-brand"
  }, /*#__PURE__*/_react.default.createElement("a", {
    className: "navbar-item",
    href: props.link
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: props.src,
    alt: props.alt,
    width: props.width_brand,
    height: props.height_brand
  }))), /*#__PURE__*/_react.default.createElement("div", {
    className: "navbar-menu"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "navbar-start"
  }, assemble(props.itens_start)), /*#__PURE__*/_react.default.createElement("div", {
    className: "navbar-end"
  }, assemble(props.itens_end))));
};

function assemble(itens) {
  var itens_code = ""; // verifica se array

  if (Array.isArray(itens)) {
    // elimina vazio
    if (itens.length > 0) {
      // se não estiver vazio monta uma lista de itens
      itens_code = assembleItens(itens);
    }
  } else if ((0, _typeof2.default)(itens) == 'object' && itens != undefined) {
    //se não for array, não for undefined e for objeto realiza operação
    itens_code = assembleItem(itens);
  }

  return itens_code;
}

function assembleItens(itens) {
  var size = itens.length;
  var itens_code = itens.map(function (item) {
    return decideTypeOfItem(item);
  });
  return itens_code;
}

function decideTypeOfItem(item) {
  var itens_code = ""; // se um item for um array (array dentro do array), então ele é um dropdown

  if (Array.isArray(item)) {
    itens_code = assembleItensDropDown(item);
  } else {
    // se não ele conjunto de itens encadeados
    itens_code = assembleItem(item);
  }

  return itens_code;
} // default : hoverable


function assembleItensDropDown(itens) {
  var firstitemDropDown = assembleFirstItemDropDown(itens[0]);

  if (itens.length > 0) {
    itens.splice(0, 1);
  }

  var itens_code = /*#__PURE__*/_react.default.createElement("div", {
    className: "navbar-item has-dropdown is-hoverable"
  }, firstitemDropDown, /*#__PURE__*/_react.default.createElement("div", {
    className: "navbar-dropdown"
  }, itens.map(function (item) {
    return assembleItem(item);
  })));

  return itens_code;
}

function assembleFirstItemDropDown(item) {
  var first_item = "";

  if (item != undefined) {
    first_item = /*#__PURE__*/_react.default.createElement("a", (0, _extends2.default)({
      className: "navbar-link",
      onClick: item["onClick"]
    }, item["custom"]), item["value"]);
  }

  return first_item;
}

function assembleItem(item) {
  var definition = item["definition"] == undefined ? "navbar-item " : "navbar-item " + item["definition"];

  var item_code = /*#__PURE__*/_react.default.createElement("a", (0, _extends2.default)({
    onClick: item["onClick"],
    className: definition
  }, item["custom"]), item["value"]);

  return item_code;
}

var _default = NavigationBar;
exports.default = _default;