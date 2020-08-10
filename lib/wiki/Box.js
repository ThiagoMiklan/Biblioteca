"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _Box = _interopRequireDefault(require("./components/Box"));

var _Columns = _interopRequireDefault(require("./components/Columns"));

var _Column = _interopRequireDefault(require("./components/Column"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _react = _interopRequireDefault(require("react"));

var _Container = _interopRequireDefault(require("./components/Container"));

require("bulma/css/bulma.css");

require("./css/all");

_reactDom.default.render( /*#__PURE__*/_react.default.createElement(_Container.default, {
  definition: "is-fluid"
}, /*#__PURE__*/_react.default.createElement(_Columns.default, null, /*#__PURE__*/_react.default.createElement(_Column.default, {
  definition: "is-two-fifths"
}, /*#__PURE__*/_react.default.createElement(_Box.default, null, /*#__PURE__*/_react.default.createElement("article", {
  class: "media"
}, /*#__PURE__*/_react.default.createElement("div", {
  class: "media-left"
}, /*#__PURE__*/_react.default.createElement("figure", {
  class: "image is-64x64"
}, /*#__PURE__*/_react.default.createElement("img", {
  src: "https://bulma.io/images/placeholders/128x128.png",
  alt: "Image"
}))), /*#__PURE__*/_react.default.createElement("div", {
  class: "media-content"
}, /*#__PURE__*/_react.default.createElement("div", {
  class: "content"
}, /*#__PURE__*/_react.default.createElement("p", null, /*#__PURE__*/_react.default.createElement("strong", null, "John Smith"), " ", /*#__PURE__*/_react.default.createElement("small", null, "@johnsmith"), " ", /*#__PURE__*/_react.default.createElement("small", null, "31m"), /*#__PURE__*/_react.default.createElement("br", null), "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean efficitur sit amet massa fringilla egestas. Nullam condimentum luctus turpis.")), /*#__PURE__*/_react.default.createElement("nav", {
  class: "level is-mobile"
}, /*#__PURE__*/_react.default.createElement("div", {
  class: "level-left"
}, /*#__PURE__*/_react.default.createElement("a", {
  class: "level-item",
  "aria-label": "reply"
}, /*#__PURE__*/_react.default.createElement("span", {
  class: "icon is-small"
}, /*#__PURE__*/_react.default.createElement("i", {
  class: "fas fa-reply",
  "aria-hidden": "true"
}))), /*#__PURE__*/_react.default.createElement("a", {
  class: "level-item",
  "aria-label": "retweet"
}, /*#__PURE__*/_react.default.createElement("span", {
  class: "icon is-small"
}, /*#__PURE__*/_react.default.createElement("i", {
  class: "fas fa-retweet",
  "aria-hidden": "true"
}))), /*#__PURE__*/_react.default.createElement("a", {
  class: "level-item",
  "aria-label": "like"
}, /*#__PURE__*/_react.default.createElement("span", {
  class: "icon is-small"
}, /*#__PURE__*/_react.default.createElement("i", {
  class: "fas fa-heart",
  "aria-hidden": "true"
}))))))))))), document.getElementById('root'));