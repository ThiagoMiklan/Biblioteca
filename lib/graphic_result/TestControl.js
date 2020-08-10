"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _Tag = _interopRequireDefault(require("./components/Tag"));

var _TagList = _interopRequireDefault(require("./components/TagList"));

var _Control = _interopRequireDefault(require("./components/Control"));

var _Columns = _interopRequireDefault(require("./components/Columns"));

var _Column = _interopRequireDefault(require("./components/Column"));

require("bulma/css/bulma.css");

var tags = [{
  value: 'One',
  definition: 'is-primary'
}, {
  value: 'Two',
  definition: 'is-success'
}, {
  value: "Three",
  definition: 'is-info'
}, {
  value: "Four",
  definition: 'is-link'
}, {
  value: "Five",
  definition: 'is-warning'
}, {
  value: "Six",
  definition: 'vdanger'
}];
var tags_addons = [{
  value: 'Package'
}, {
  value: 'Bulma',
  definition: 'is-primary'
}];

_reactDom.default.render( /*#__PURE__*/_react.default.createElement("div", {
  className: "container is-fluid"
}, /*#__PURE__*/_react.default.createElement(_Columns.default, null, /*#__PURE__*/_react.default.createElement(_Column.default, {
  definition: "is-half is-centered"
}, /*#__PURE__*/_react.default.createElement("div", {
  class: "field"
}, /*#__PURE__*/_react.default.createElement("label", {
  class: "label"
}, "Name"), /*#__PURE__*/_react.default.createElement(_Control.default, null, /*#__PURE__*/_react.default.createElement("input", {
  class: "input",
  type: "text",
  placeholder: "Text input"
}))), /*#__PURE__*/_react.default.createElement("div", {
  class: "field"
}, /*#__PURE__*/_react.default.createElement("label", {
  class: "label"
}, "Subject"), /*#__PURE__*/_react.default.createElement(_Control.default, {
  class: "control"
}, /*#__PURE__*/_react.default.createElement("div", {
  class: "select"
}, /*#__PURE__*/_react.default.createElement("select", null, /*#__PURE__*/_react.default.createElement("option", null, "Select dropdown"), /*#__PURE__*/_react.default.createElement("option", null, "With options"))))), /*#__PURE__*/_react.default.createElement("div", {
  class: "field"
}, /*#__PURE__*/_react.default.createElement(_Control.default, {
  class: "control"
}, /*#__PURE__*/_react.default.createElement("label", {
  class: "radio"
}, /*#__PURE__*/_react.default.createElement("input", {
  type: "radio",
  name: "question"
}), "Yes"), /*#__PURE__*/_react.default.createElement("label", {
  class: "radio"
}, /*#__PURE__*/_react.default.createElement("input", {
  type: "radio",
  name: "question"
}), "No")))))), document.getElementById('root'));