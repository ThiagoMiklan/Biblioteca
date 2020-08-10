"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _react = _interopRequireWildcard(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _NavigationBar = _interopRequireDefault(require("./components/NavigationBar"));

var _HeroThreeParts = _interopRequireDefault(require("./components/HeroThreeParts"));

var _Title = _interopRequireDefault(require("./components/Title"));

var _Subtitle = _interopRequireDefault(require("./components/Subtitle"));

var _Tabs = _interopRequireDefault(require("./components/Tabs"));

var _Container = _interopRequireDefault(require("./components/Container"));

require("bulma/css/bulma.css");

var itens_navbar_start = [{
  value: "Administration"
}, {
  value: "General"
}, {
  value: "About"
}];
var itens_navbar_end = [{
  value: "Administration"
}, {
  value: "General"
}, {
  value: "About"
}];
var itens_tabs = [{
  value: "Clients"
}, {
  value: "Users"
}, {
  value: "Requires"
}];

_reactDom.default.render( /*#__PURE__*/_react.default.createElement(_HeroThreeParts.default, {
  definition: "is-fullheight"
}, /*#__PURE__*/_react.default.createElement(_NavigationBar.default, {
  itens_start: itens_navbar_start,
  itens_end: itens_navbar_end
}), /*#__PURE__*/_react.default.createElement("div", {
  className: "container has-text-centered"
}, /*#__PURE__*/_react.default.createElement(_Title.default, {
  definition: 1
}, "Title"), /*#__PURE__*/_react.default.createElement(_Subtitle.default, {
  definition: 2
}, "Subtitle")), /*#__PURE__*/_react.default.createElement(_Tabs.default, {
  itens: itens_tabs
})), document.getElementById('root'));