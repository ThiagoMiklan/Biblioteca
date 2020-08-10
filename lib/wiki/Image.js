"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _react = _interopRequireWildcard(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

require("bulma/css/bulma.css");

var _Image = _interopRequireDefault(require("./components/Image"));

_reactDom.default.render( /*#__PURE__*/_react.default.createElement("div", {
  className: "container is-fluid"
}, /*#__PURE__*/_react.default.createElement(_Image.default, {
  src: "https://bulma.io/images/placeholders/128x128.png",
  definition: "is-16x16"
}, " "), /*#__PURE__*/_react.default.createElement(_Image.default, {
  src: "https://bulma.io/images/placeholders/128x128.png",
  definition: "is-24x24"
}, " "), /*#__PURE__*/_react.default.createElement(_Image.default, {
  src: "https://bulma.io/images/placeholders/128x128.png",
  definition: "is-32x32"
}, " "), /*#__PURE__*/_react.default.createElement(_Image.default, {
  src: "https://bulma.io/images/placeholders/128x128.png",
  definition: "is-48x48"
}, " "), /*#__PURE__*/_react.default.createElement(_Image.default, {
  src: "https://bulma.io/images/placeholders/128x128.png",
  definition: "is-64x64"
}, " "), /*#__PURE__*/_react.default.createElement(_Image.default, {
  src: "https://bulma.io/images/placeholders/128x128.png",
  definition: "is-96x96"
}, " "), /*#__PURE__*/_react.default.createElement(_Image.default, {
  src: "https://bulma.io/images/placeholders/128x128.png",
  definition: "is-128x128"
}, " "), /*#__PURE__*/_react.default.createElement(_Image.default, {
  src: "https://bulma.io/images/placeholders/128x128.png",
  definition: "is-128x128",
  image_definition: "is-rounded"
}, " "), /*#__PURE__*/_react.default.createElement(_Image.default, {
  src: "https://bulma.io/images/placeholders/128x128.png",
  definition: "is-128x128",
  image_definition: "is-rounded",
  onClick: function onClick() {
    return alert("Clicked");
  }
})), document.getElementById("root"));