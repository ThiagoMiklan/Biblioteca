"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _Table = _interopRequireDefault(require("./components/Table.jsx"));

require("bulma/css/bulma.min.css");

var _SearchTable = _interopRequireDefault(require("./components/SearchTable"));

var itens_header = [{
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
var itens_footer = [{
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
var initial = {
  itens_body: [{
    Pos: "2",
    team: "Flamengo",
    pld: "38",
    w: "20",
    D: "11",
    L: "7",
    GF: "65",
    GA: "36",
    GD: "+29",
    Pts: "71",
    Quali: "Qualification for the Libertadores"
  }, {
    Pos: "3",
    team: "Palmeiras",
    pld: "23",
    w: "20",
    D: "11",
    L: "7",
    GF: "65",
    GA: "36",
    GD: "+29",
    Pts: "65",
    Quali: "Qualification for the Libertadores"
  }]
};

function SearchTableParent(props) {
  function onChange(e) {
    alert("typed " + e.target.value);
  }

  var _useState = (0, _react.useState)(initial),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      state = _useState2[0],
      setState = _useState2[1];

  return /*#__PURE__*/_react.default.createElement(_SearchTable.default, {
    label: "Find Team",
    value: "Back",
    onClick: function onClick() {
      alert("clicou");
    },
    icon_name: "fas fa-search",
    control_definition: "has-icons-right",
    icon_definition: "is-info",
    itens_header: itens_header,
    button_definition: "is-success",
    input_definition: "is-warning",
    header_definition: "has-background-grey-light",
    itens_body: state.itens_body,
    itens_footer: itens_footer,
    table_definition: "has-background-grey-lighter is-fullwidth is-bordered is-hoverable",
    onChange: onChange
  });
}

_reactDom.default.render( /*#__PURE__*/_react.default.createElement("div", {
  className: "container is-fluid"
}, /*#__PURE__*/_react.default.createElement(SearchTableParent, null)), document.getElementById('root'));