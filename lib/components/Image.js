"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _type_validations = require("../tools/type_validations");

var props_obj = {
  definition: 'string',
  image_definition: 'string',
  src: 'string'
};

var Image = function Image(props) {
  (0, _type_validations.validate)(props, props_obj, "Image");
  var definition = props.definition == undefined ? "image" : "image " + props.definition;
  return /*#__PURE__*/_react["default"].createElement("figure", {
    className: definition,
    onClick: props.onClick
  }, /*#__PURE__*/_react["default"].createElement("img", {
    className: props.image_definition,
    src: props.src
  }));
};

var _default = Image;
exports["default"] = _default;