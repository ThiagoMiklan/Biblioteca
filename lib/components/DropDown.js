"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var React = _interopRequireWildcard(require("react"));

var _Button = _interopRequireDefault(require("./Button"));

var _Icon = _interopRequireDefault(require("./Icon"));

var _type_validations = require("../tools/type_validations.js");

var props_obj = {
  definition: 'string',
  itens: 'array',
  onClick: 'function'
};

var DropDown = function DropDown(props) {
  (0, _type_validations.validate)(props, props_obj, "DropDown");
  var definition = props.definition == undefined ? "dropdown" : "dropdown " + props.definition;
  return /*#__PURE__*/React.createElement("div", {
    className: definition
  }, /*#__PURE__*/React.createElement("div", {
    "class": "dropdown-trigger"
  }, extractButton(props.itens, props.onClick)), /*#__PURE__*/React.createElement("div", {
    "class": "dropdown-menu"
  }, /*#__PURE__*/React.createElement("div", {
    "class": "dropdown-content"
  }, assemble(props.itens))));
};

function extractButton(itens, onClick) {
  var name = "";
  var icon_name = "";
  var icon_definition = "";

  if (itens != undefined && Array.isArray(itens)) {
    if (itens[0] != undefined) {
      var item = itens[0];
      name = item["value"];
      icon_name = item["icon_name"];
    }
  }

  var label = "";

  if (icon_name != undefined && icon_name != '') {
    label = /*#__PURE__*/React.createElement(_Icon["default"], {
      icon_name: icon_name,
      right: true
    }, name);
  } else {
    label = /*#__PURE__*/React.createElement(_Icon["default"], {
      icon_name: "fas fa-angle-down",
      definition: icon_definition,
      right: true
    }, name);
  }

  return /*#__PURE__*/React.createElement(_Button["default"], {
    onClick: onClick,
    label: label
  });
}

function assemble(itens) {
  var code = /*#__PURE__*/React.createElement(React.Fragment, null);

  if (itens != undefined && Array.isArray(itens)) {
    code = itens.map(function (item) {
      return decideTypeOfItens(item);
    });
  }

  return code;
}

function decideTypeOfItens(item) {
  var item_code = "";

  if (item["link"] == true) {
    item_code = assembleItensLinks(item);
  } else {
    item_code = assembleComponentsItens(item);
  }

  return item_code;
}

function assembleItensLinks(item) {
  var definition = item["definition"] == undefined ? "dropdown-item" : "dropdown-item " + item["definition"];
  return /*#__PURE__*/React.createElement("a", (0, _extends2["default"])({
    className: definition,
    onClick: item["onClick"],
    href: item["href"]
  }, item["custom"]), item["value"]);
}

function assembleComponentsItens(item) {
  var definition = item["definition"] == undefined ? "dropdown-item" : "dropdown-item " + item["definition"];
  return /*#__PURE__*/React.createElement("div", (0, _extends2["default"])({
    className: definition,
    onClick: item["onClick"],
    href: item["href"]
  }, item["custom"]), item["value"]);
}

var _default = DropDown;
exports["default"] = _default;