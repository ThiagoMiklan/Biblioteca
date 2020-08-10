"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _Table = _interopRequireDefault(require("./components/Table.jsx"));

require("bulma/css/bulma.min.css");

var elements_header = [{
  value: "Pos"
}, {
  value: "Team"
}, {
  value: "Pld"
}, {
  value: "W"
}, {
  value: "D"
}, {
  value: "L"
}, {
  value: "GF"
}, {
  value: "GA"
}, {
  value: "GD"
}, {
  value: "Pts"
}, {
  value: "Qualification or relegation"
}];
var elements_footer = elements_header; //2	Arsenal	38	20	11	7	65	36	+29	71	Qualification for the Champions League group stage

var elements_body = [{
  Pos: "2",
  team: "Arsenal",
  pld: "38",
  w: "20",
  D: "11",
  L: "7",
  GF: "65",
  GA: "36",
  GD: "+29",
  Pts: "71",
  Quali: "Qualification for the Champions League group stage"
}];

_reactDom.default.render( /*#__PURE__*/_react.default.createElement(_Table.default, {
  definition: "is-bordered is-striped is-narrow is-fullwidth",
  itens_header: elements_header,
  itens_body: elements_body
}), document.getElementById('root'));