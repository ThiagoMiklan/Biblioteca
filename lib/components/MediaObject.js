"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var React = _interopRequireWildcard(require("react"));

var _Image = _interopRequireDefault(require("./Image"));

var _Content = _interopRequireDefault(require("./Content"));

var _Button = _interopRequireDefault(require("./Button"));

var _Level = _interopRequireDefault(require("./Level"));

var _type_validations = require("../tools/type_validations");

var _props_obj;

var props_obj = (_props_obj = {
  definition: 'string',
  image_definition: 'string',
  figure_definition: 'string',
  content_definition: 'string',
  src: 'string',
  itens: 'array',
  level_definition: 'string',
  left_definition: 'string',
  right_definition: 'string'
}, (0, _defineProperty2.default)(_props_obj, "content_definition", 'string'), (0, _defineProperty2.default)(_props_obj, "onClickDelete", 'function'), _props_obj);

var MediaObject = function MediaObject(props) {
  var definition = props.definition == undefined ? "media" : "media " + props.definition;
  (0, _type_validations.validate)(props, props_obj, "MediaObject");
  return /*#__PURE__*/React.createElement("article", {
    className: definition
  }, assembleLeftMedia(props), assembleContentMedia(props), assembleRightMedia(props));
};

function assembleLeftMedia(props) {
  var definition = props.left_definition == undefined ? "media-left" : "media-left " + props.left_definition;
  return /*#__PURE__*/React.createElement("figure", {
    className: definition
  }, /*#__PURE__*/React.createElement(_Image.default, {
    definition: props.figure_definition,
    image_definition: props.image_definition,
    src: props.src
  }));
}

function assembleContentMedia(props) {
  var definition = props.content_definition == undefined ? "media-content" : "media-content " + props.content_definition;
  return /*#__PURE__*/React.createElement("div", {
    className: definition
  }, /*#__PURE__*/React.createElement(_Content.default, {
    definition: definition
  }, props.children), assembleDefaultLevel(props));
}

function assembleDefaultLevel(props) {
  return /*#__PURE__*/React.createElement(_Level.default, {
    definition: props.level_definition,
    itens: props.itens
  });
}

function assembleRightMedia(props) {
  var definition = props.right_definition == undefined ? "media-right" : "media-right " + props.right_definition;
  return /*#__PURE__*/React.createElement("div", {
    className: definition
  }, props.right != undefined ? props.right : /*#__PURE__*/React.createElement(_Button.default, {
    onClick: props.onClickDelete,
    delete: true
  }, " "));
}

var _default = MediaObject;
exports.default = _default;