"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _type_validations = require("../tools/type_validations");

var props_obj = {
  itens: "array",
  label: "string"
};

var MenuItem = function MenuItem(props) {
  (0, _type_validations.validate)(props, props_obj, "MenuItem");
  return /*#__PURE__*/_react["default"].createElement("div", null, props.itens != undefined && /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, assembleLabel(props.label), /*#__PURE__*/_react["default"].createElement("ul", {
    className: "menu-list"
  }, props.itens != undefined && assembleItem(props.itens))));
};

function assembleLabel(label) {
  return /*#__PURE__*/_react["default"].createElement("p", {
    "class": "menu-label"
  }, label);
}
/*

*/


function assembleItem(itens) {
  var item_code = "";

  if (Array.isArray(itens)) {
    item_code = assembleItemWithSubList(itens);
  } else {
    item_code = assembleSingleItem(itens);
  }

  return item_code;
}

function assembleSingleItem(item) {
  var item_code = "";

  if (item["sub_itens"] != undefined) {
    item_code = decideTypeOfItem(item);
  } else {
    var definition = item["definition"];
    item_code = /*#__PURE__*/_react["default"].createElement("li", null, /*#__PURE__*/_react["default"].createElement("a", {
      className: definition,
      onClick: item["onClick"]
    }, item["value"]));
  }

  return item_code;
}

function assembleSubItens(item) {
  var definition = item["definition"];
  return /*#__PURE__*/_react["default"].createElement("li", null, /*#__PURE__*/_react["default"].createElement("a", {
    className: definition,
    onClick: item["onClick"]
  }, item["value"]));
}

function assembleItemWithSubList(itens) {
  return itens.map(function (item) {
    return decideTypeOfItem(item);
  });
}

function decideTypeOfItem(item) {
  var item_code = "";

  if (item["sub_itens"] != undefined) {
    var definition = item["definition"];
    item_code = /*#__PURE__*/_react["default"].createElement("li", null, /*#__PURE__*/_react["default"].createElement("a", {
      className: definition,
      onClick: item["onClick"]
    }, " ", item["value"]), /*#__PURE__*/_react["default"].createElement("ul", null, item["sub_itens"].map(function (item) {
      return assembleSubItens(item);
    })));
  } else {
    item_code = assembleSingleItem(item);
  }

  return item_code;
}

var _default = MenuItem;
exports["default"] = _default;