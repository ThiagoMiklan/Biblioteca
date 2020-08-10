"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _DropDown = _interopRequireDefault(require("../components/DropDown"));

var _reactTestRenderer = _interopRequireDefault(require("react-test-renderer"));

var itens_link = [{
  value: "Dropdown Button",
  link: true,
  href: "https://ufsc.br",
  onClick: function onClick() {
    alert("Clicou");
  }
}, {
  value: "Dropdown Item",
  link: true,
  href: "https://ufsc.br"
}, {
  value: "Other Dropdown Item",
  link: true,
  href: "https://ufsc.br"
}, {
  value: "Active Dropdown Item",
  link: true,
  definition: "active",
  href: "https://ufsc.br"
}, {
  value: "Other Dropdown Item",
  link: true,
  href: "https://ufsc.br"
}, {
  value: "With a divider",
  link: true,
  href: "https://ufsc.br"
}];
var itens_div = [{
  value: /*#__PURE__*/_react.default.createElement("p", null, "You can insert ", /*#__PURE__*/_react.default.createElement("strong", null, "any type of content"), " within the dropdown menu."),
  onClick: function onClick() {
    alert("Clicou");
  }
}, {
  value: /*#__PURE__*/_react.default.createElement("p", null, "You simply need to use a ", /*#__PURE__*/_react.default.createElement("code", null, "<div>"), " instead.")
}, {
  value: "This is a link",
  link: true
}];
test('dropdown normal', function () {
  var normal = _reactTestRenderer.default.create( /*#__PURE__*/_react.default.createElement(_DropDown.default, {
    definition: "is-active",
    itens: itens_link
  })).toJSON();

  expect(normal).toMatchSnapshot();
});
test('dropdown with any type of content', function () {
  var anyContent = _reactTestRenderer.default.create( /*#__PURE__*/_react.default.createElement(_DropDown.default, {
    definition: "is-active is-right",
    itens: itens_div
  })).toJSON();

  expect(anyContent).toMatchSnapshot();
});