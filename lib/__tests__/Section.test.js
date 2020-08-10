"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _Section = _interopRequireDefault(require("../components/Section"));

var _Title = _interopRequireDefault(require("../components/Title"));

var _reactTestRenderer = _interopRequireDefault(require("react-test-renderer"));

var itens = [{
  value: "Yes",
  disabled: false,
  onClick: function onClick() {
    alert("Yes");
  }
}, {
  value: "No",
  checked: true,
  onClick: function onClick() {
    alert("No");
  }
}, {
  value: "Maybe",
  checked: true,
  onClick: function onClick() {
    alert("Maybe");
  },
  disabled: true
}];
test('value correctly', function () {
  var componentWithValue = _reactTestRenderer.default.create( /*#__PURE__*/_react.default.createElement(_Section.default, null, /*#__PURE__*/_react.default.createElement(_Title.default, {
    definition: 1
  }, "Texto Principal"), /*#__PURE__*/_react.default.createElement(_Title.default, {
    definition: 3
  }, "Texto Secund\xE1rios"), /*#__PURE__*/_react.default.createElement("p", null, "Em lingu\xEDstica, a no\xE7\xE3o de texto \xE9 ampla e ainda aberta a uma defini\xE7\xE3o mais precisa. Grosso modo, pode ser entendido como manifesta\xE7\xE3o lingu\xEDstica das ideias de um autor, que ser\xE3o interpretadas pelo leitor de acordo com seus conhecimentos lingu\xEDsticos e culturais. Seu tamanho \xE9 vari\xE1vel"))).toJSON(); // componente com valor


  expect(componentWithValue).toMatchSnapshot();
});