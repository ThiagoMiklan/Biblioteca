"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _Icon = _interopRequireDefault(require("./Icon"));

var _type_validations = require("../tools/type_validations");

var props_obj = {
  definition: "string",
  itens: "array"
};

var Tabs = function Tabs(props) {
  (0, _type_validations.validate)(props, props_obj, "Tabs");
  var definition = props.definition == undefined ? "tabs" : "tabs " + props.definition;
  return /*#__PURE__*/React.createElement("div", {
    className: definition
  }, assembleListTabs(props.itens));
};

function assembleListTabs(itens) {
  var tabs_code = "";

  if (Array.isArray(itens)) {
    tabs_code = /*#__PURE__*/React.createElement("ul", null, itens.map(function (item) {
      return /*#__PURE__*/React.createElement("li", {
        onClick: item["onClick"],
        className: item["definition"]
      }, /*#__PURE__*/React.createElement("a", null, item["icon_name"] != undefined && /*#__PURE__*/React.createElement(_Icon.default, {
        definition: item["icon_definition"],
        icon_name: item["icon_name"]
      }), item["value"]));
    }));
  }

  return tabs_code;
}

var _default = Tabs;
exports.default = _default;