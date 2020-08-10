"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _react = _interopRequireWildcard(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

require("bulma/css/bulma.css");

var _Tiles = _interopRequireDefault(require("./components/Tiles"));

var _Notification = _interopRequireDefault(require("./components/Notification"));

_reactDom.default.render( /*#__PURE__*/_react.default.createElement(_Tiles.default, {
  definition: "tile is-ancestor"
}, /*#__PURE__*/_react.default.createElement(_Tiles.default, {
  definition: "tile is-vertical is-8"
}, /*#__PURE__*/_react.default.createElement(_Tiles.default, {
  definition: "tile"
}, /*#__PURE__*/_react.default.createElement(_Tiles.default, {
  definition: "tile is-parent is-vertical"
}, /*#__PURE__*/_react.default.createElement(_Notification.default, {
  definition: "tile is-child is-primary",
  title: "Vertical...",
  subtitle: "Top tile"
}), /*#__PURE__*/_react.default.createElement(_Notification.default, {
  definition: "tile is-child is-warning",
  title: "...tiles",
  subtitle: "Bottom tile"
})), /*#__PURE__*/_react.default.createElement(_Tiles.default, {
  definition: "tile is-parent"
}, /*#__PURE__*/_react.default.createElement(_Notification.default, {
  definition: "tile is-child is-info",
  title: "Middle tile",
  subtitle: "With an image"
}, /*#__PURE__*/_react.default.createElement("figure", {
  class: "image is-4by3"
}, /*#__PURE__*/_react.default.createElement("img", {
  src: "https://bulma.io/images/placeholders/640x480.png"
}))))), /*#__PURE__*/_react.default.createElement(_Tiles.default, {
  definition: "tile is-parent"
}, /*#__PURE__*/_react.default.createElement(_Notification.default, {
  definition: "tile is-child is-danger",
  title: "Wide tile",
  subtitle: "ALigned with the right tile"
}, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis."))), /*#__PURE__*/_react.default.createElement(_Tiles.default, {
  definition: "is-parent"
}, /*#__PURE__*/_react.default.createElement(_Notification.default, {
  definition: "tile is-child is-success",
  title: "Tall tile",
  subtitle: "With even more content"
}, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam semper diam at erat pulvinar, at pulvinar felis blandit. Vestibulum volutpat tellus diam, consequat gravida libero rhoncus ut. Morbi maximus, leo sit amet vehicula eleifend, nunc dui porta orci, quis semper odio felis ut quam. Suspendisse varius ligula in molestie lacinia. Maecenas varius eget ligula a sagittis. Pellentesque interdum, nisl nec interdum maximus, augue diam porttitor lorem, et sollicitudin felis neque sit amet erat. Maecenas imperdiet felis nisi, fringilla luctus felis hendrerit sit amet. Aenean vitae gravida diam, finibus dignissim turpis. Sed eget varius ligula, at volutpat tortor. Integer sollicitudin, tortor a mattis commodo, velit urna rhoncus erat, vitae congue lectus dolor consequat libero. Donec leo ligula, maximus et pellentesque sed, gravida a metus. Cras ullamcorper a nunc ac porta. Aliquam ut aliquet lacus, quis faucibus libero. Quisque non semper leo."))), document.getElementById("root"));