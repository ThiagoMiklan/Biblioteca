"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _Radio = _interopRequireDefault(require("../components/Radio"));

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
  var componentWithValue = _reactTestRenderer.default.create( /*#__PURE__*/_react.default.createElement("div", {
    className: "container is-fluid"
  }, /*#__PURE__*/_react.default.createElement(_Radio.default, {
    name: "resposta",
    itens: itens
  }))).toJSON(); // componente com valor


  expect(componentWithValue).toMatchSnapshot();
});