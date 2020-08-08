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
  itens: "array",
  definition: "string"
};

var TagList = function TagList(props) {
  (0, _type_validations.validate)(props, props_obj, "TagList");
  return assembleTagList(props);
};

function assembleTagList(props) {
  var code = /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null);

  if (props.itens != undefined && Array.isArray(props.itens)) {
    code = assembleListWithItens(props);
  }

  return code;
}

function assembleListWithItens(props) {
  var itens = props.itens;
  var definition = props.definition == undefined ? "tags" : "tags " + props.definition;

  var code = /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null);

  if (itens != undefined) {
    code = /*#__PURE__*/_react.default.createElement("div", {
      className: definition
    }, itens.map(function (item) {
      return assembleTag(item["definition"], item["value"], item["onClick"], item["custom"]);
    }));
  }

  return code;
}

function assembleTag(definition, value, onClick, custom) {
  var definitionTag = definition == undefined ? "tag" : "tag " + definition;
  return /*#__PURE__*/_react.default.createElement("span", (0, _extends2.default)({
    onClick: onClick,
    className: definitionTag
  }, custom), value);
}

var _default = TagList;
exports.default = _default;