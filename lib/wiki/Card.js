"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _react = _interopRequireWildcard(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

require("bulma/css/bulma.css");

var _Card = _interopRequireDefault(require("./components/Card"));

var _Column = _interopRequireDefault(require("./components/Column"));

var _Columns = _interopRequireDefault(require("./components/Columns"));

var _Content = _interopRequireDefault(require("./components/Content"));

var itens_footer = [{
  value: "Save",
  onClick: function onClick() {
    return alert('Clicked');
  }
}, {
  value: "Edit"
}, {
  value: "Delete"
}];
var itens_footer_2 = [{
  value: /*#__PURE__*/_react.default.createElement("span", null, "View on ", /*#__PURE__*/_react.default.createElement("a", {
    href: "https://twitter.com/codinghorror/status/506010907021828096"
  }, "Twitter"))
}, {
  value: /*#__PURE__*/_react.default.createElement("span", null, "Share on ", /*#__PURE__*/_react.default.createElement("a", {
    href: "#"
  }, "Facebook"))
}];

function imageClick() {
  alert("Clicou na imagem");
}

_reactDom.default.render( /*#__PURE__*/_react.default.createElement(_Columns.default, {
  definition: "is-multiline"
}, /*#__PURE__*/_react.default.createElement(_Column.default, {
  definition: "is-one-quarter"
}, /*#__PURE__*/_react.default.createElement(_Card.default, {
  definition: "has-background-light",
  image_definition: "is-4by3",
  src: "https://bulma.io/images/placeholders/1280x960.png"
}, /*#__PURE__*/_react.default.createElement("div", {
  class: "media"
}, /*#__PURE__*/_react.default.createElement("div", {
  class: "media-left"
}, /*#__PURE__*/_react.default.createElement("figure", {
  class: "image is-48x48"
}, /*#__PURE__*/_react.default.createElement("img", {
  src: "https://bulma.io/images/placeholders/96x96.png",
  alt: "Placeholder image"
}))), /*#__PURE__*/_react.default.createElement("div", {
  class: "media-content"
}, /*#__PURE__*/_react.default.createElement("p", {
  class: "title is-4"
}, "John Smith"), /*#__PURE__*/_react.default.createElement("p", {
  class: "subtitle is-6"
}, "@johnsmith"))), /*#__PURE__*/_react.default.createElement("div", {
  class: "content"
}, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris. ", /*#__PURE__*/_react.default.createElement("a", null, "@bulmaio"), ".", /*#__PURE__*/_react.default.createElement("a", {
  href: "#"
}, "#css"), " ", /*#__PURE__*/_react.default.createElement("a", {
  href: "#"
}, "#responsive"), /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement("time", {
  datetime: "2016-1-1"
}, "11:09 PM - 1 Jan 2016")))), /*#__PURE__*/_react.default.createElement(_Column.default, {
  definition: "is-one-quarter"
}, /*#__PURE__*/_react.default.createElement(_Card.default, {
  icon_name: "fas fa-angle-down",
  title: "Component",
  itens_footer: itens_footer
}, /*#__PURE__*/_react.default.createElement(_Content.default, null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.", /*#__PURE__*/_react.default.createElement("a", {
  href: "#"
}, "@bulmaio"), ". ", /*#__PURE__*/_react.default.createElement("a", {
  href: "#"
}, "#css"), " ", /*#__PURE__*/_react.default.createElement("a", {
  href: "#"
}, "#responsive"), /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement("time", {
  datetime: "2016-1-1"
}, "11:09 PM - 1 Jan 2016")))), /*#__PURE__*/_react.default.createElement(_Column.default, {
  definition: "is-one-quarter"
}, /*#__PURE__*/_react.default.createElement(_Card.default, {
  itens_footer: itens_footer_2
}, /*#__PURE__*/_react.default.createElement("p", {
  class: "title"
}, "\u201CThere are two hard things in computer science: cache invalidation, naming things, and off-by-one errors.\u201D"), /*#__PURE__*/_react.default.createElement("p", {
  class: "subtitle"
}, "Jeff Atwood")))), document.getElementById("root"));