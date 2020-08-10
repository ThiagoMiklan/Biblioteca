"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _Tag = _interopRequireDefault(require("./components/Tag"));

var _TagList = _interopRequireDefault(require("./components/TagList"));

var _Control = _interopRequireDefault(require("./components/Control"));

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

_reactDom.default.render( /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_TagList.default, {
  itens: tags
}), /*#__PURE__*/_react.default.createElement(_TagList.default, {
  itens: tags_addons
})), document.getElementById('root'));