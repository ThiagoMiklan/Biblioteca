"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(require("react"));

var _type_validations = require("../tools/type_validations");

var props_obj = {
  definition: "string"
};

var Tile = function Tile(props) {
  (0, _type_validations.validate)(props, props_obj, "Tiles");
  var tiles_definition = props.definition == undefined ? "tile" : "tile " + props.definition;
  return /*#__PURE__*/React.createElement("div", {
    className: tiles_definition
  }, props.children);
};

var _default = Tile;
exports["default"] = _default;