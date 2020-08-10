"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _Content = _interopRequireDefault(require("../components/Content"));

var _List = _interopRequireDefault(require("../components/List"));

var _reactTestRenderer = _interopRequireDefault(require("react-test-renderer"));

var itens = [{
  value: "Thiago",
  onClick: function onClick() {
    alert("Clicou");
  }
}, {
  value: "João",
  onClick: function onClick() {
    alert("Clicou");
  }
}, {
  value: "Mathias",
  onClick: function onClick() {
    alert("Clicou");
  }
}];
test('test list', function () {
  var lists = _reactTestRenderer.default.create( /*#__PURE__*/_react.default.createElement(_Content.default, null, /*#__PURE__*/_react.default.createElement(_List.default, {
    definition: "is-lower-alpha",
    itens: itens
  }), /*#__PURE__*/_react.default.createElement(_List.default, {
    definition: "is-lower-roman",
    itens: itens
  }), /*#__PURE__*/_react.default.createElement(_List.default, {
    definition: "is-upper-alpha",
    itens: itens
  }), /*#__PURE__*/_react.default.createElement(_List.default, {
    definition: "is-upper-roman",
    itens: itens
  }))).toJSON();

  expect(lists).toMatchSnapshot();
});