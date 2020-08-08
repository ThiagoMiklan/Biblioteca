"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var _type_validations = require("../tools/type_validations.js");

var props_obj = {
  itens: "array",
  definition: "string"
};

var List = function List(props) {
  (0, _type_validations.validate)(props, props_obj, "List");
  return assembleList(props);
};

function assembleList(props) {
  var list = props.itens;
  var list_tags = "";

  if (list != undefined && Array.isArray(list)) {
    list_tags = /*#__PURE__*/_react.default.createElement("ol", {
      className: props.definition
    }, assembleRow(list));
  }

  return list_tags;
}

function assembleRow(list) {
  return list.map(function (item) {
    return /*#__PURE__*/_react.default.createElement("li", (0, _extends2.default)({
      key: item["key"],
      onClick: item["onClick"]
    }, item["custom"]), item["value"]);
  });
}

var _default = List;
exports.default = _default;