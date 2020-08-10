"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _react = _interopRequireWildcard(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _Title = _interopRequireDefault(require("./components/Title"));

var _Subtitle = _interopRequireDefault(require("./components/Subtitle"));

require("bulma/css/bulma.css");

_reactDom.default.render( /*#__PURE__*/_react.default.createElement("div", {
  className: "container is-fluid"
}, /*#__PURE__*/_react.default.createElement(_Title.default, {
  definition: 1
}, "Title"), /*#__PURE__*/_react.default.createElement(_Subtitle.default, {
  definition: 2
}, "SubTitle"), /*#__PURE__*/_react.default.createElement(_Title.default, {
  definition: 1
}, " Title 1"), /*#__PURE__*/_react.default.createElement(_Title.default, {
  definition: 2
}, " Title 2"), /*#__PURE__*/_react.default.createElement(_Title.default, {
  definition: 3
}, " Title 3"), /*#__PURE__*/_react.default.createElement(_Title.default, {
  definition: 4
}, " Title 4"), /*#__PURE__*/_react.default.createElement(_Title.default, {
  definition: 5
}, " Title 5"), /*#__PURE__*/_react.default.createElement(_Title.default, {
  definition: 6
}, " Title 6"), /*#__PURE__*/_react.default.createElement(_Subtitle.default, {
  definition: 1
}, " SubTitle 1"), /*#__PURE__*/_react.default.createElement(_Subtitle.default, {
  definition: 2
}, " SubTitle 2"), /*#__PURE__*/_react.default.createElement(_Subtitle.default, {
  definition: 3
}, " SubTitle 3"), /*#__PURE__*/_react.default.createElement(_Subtitle.default, {
  definition: 4
}, " SubTitle 4"), /*#__PURE__*/_react.default.createElement(_Subtitle.default, {
  definition: 5
}, " SubTitle 5"), /*#__PURE__*/_react.default.createElement(_Subtitle.default, {
  definition: 6
}, " SubTitle 6"), /*#__PURE__*/_react.default.createElement(_Title.default, {
  p: true,
  definition: 1
}, " Title with p 1"), /*#__PURE__*/_react.default.createElement(_Title.default, {
  p: true,
  definition: 2
}, " Title with p 2"), /*#__PURE__*/_react.default.createElement(_Title.default, {
  p: true,
  definition: 3
}, " Title with p 3"), /*#__PURE__*/_react.default.createElement(_Title.default, {
  p: true,
  definition: 4
}, " Title with p 4"), /*#__PURE__*/_react.default.createElement(_Title.default, {
  p: true,
  definition: 5
}, " Title with p 5"), /*#__PURE__*/_react.default.createElement(_Title.default, {
  p: true,
  definition: 6
}, " Title with p 6"), /*#__PURE__*/_react.default.createElement(_Title.default, {
  p: true,
  definition: 1,
  spaced: true
}, "Title 1"), /*#__PURE__*/_react.default.createElement(_Subtitle.default, {
  p: true,
  definition: 3
}, "Subtitle 3"), /*#__PURE__*/_react.default.createElement(_Title.default, {
  p: true,
  definition: 2
}, "Title 2"), /*#__PURE__*/_react.default.createElement(_Subtitle.default, {
  p: true,
  definition: 4
}, "Subtitle 4"), /*#__PURE__*/_react.default.createElement(_Title.default, {
  p: true,
  definition: 3
}, "Title 3"), /*#__PURE__*/_react.default.createElement(_Subtitle.default, {
  p: true,
  definition: 5
}, "Subtitle 5")), document.getElementById("root"));