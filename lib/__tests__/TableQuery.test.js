"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _TableQuery = _interopRequireDefault(require("../components/TableQuery"));

var _reactTestRenderer = _interopRequireDefault(require("react-test-renderer"));

var itens = [{
  nome: "Jackson",
  email: "jackson@arb.com.br",
  telefone: "123456"
}, {
  nome: "Marty",
  email: "marty@arb.com.br",
  telefone: "123456"
}, {
  nome: "Walter",
  email: "walter@arb.com.br",
  telefone: "123456"
}, {
  nome: "Antony",
  email: "antony@arb.com.br",
  telefone: "123456"
}];
test('value correctly', function () {
  var componentWithValue = _reactTestRenderer.default.create( /*#__PURE__*/_react.default.createElement("div", {
    className: "container is-fluid"
  }, /*#__PURE__*/_react.default.createElement(_TableQuery.default, {
    definition: "is-fullwidth is-bordered",
    itens: itens,
    header: true
  }), /*#__PURE__*/_react.default.createElement(_TableQuery.default, {
    definition: "is-fullwidth is-striped",
    itens: itens,
    header: true
  }), /*#__PURE__*/_react.default.createElement(_TableQuery.default, {
    definition: "is-fullwidth is-narrow",
    itens: itens,
    header: true
  }), /*#__PURE__*/_react.default.createElement(_TableQuery.default, {
    definition: "is-fullwidth is-hoverable",
    itens: itens,
    header: true
  }), /*#__PURE__*/_react.default.createElement(_TableQuery.default, {
    definition: "is-fullwidth",
    itens: itens,
    header: true,
    footer: true
  }), /*#__PURE__*/_react.default.createElement(_TableQuery.default, {
    definition: "is-fullwidth",
    itens: itens,
    footer: true
  }), /*#__PURE__*/_react.default.createElement(_TableQuery.default, {
    definition: "is-bordered is-striped is-narrow is-hoverable is-fullwidth",
    itens: itens
  }), /*#__PURE__*/_react.default.createElement("br", null))).toJSON(); // componente com valor


  expect(componentWithValue).toMatchSnapshot();
});