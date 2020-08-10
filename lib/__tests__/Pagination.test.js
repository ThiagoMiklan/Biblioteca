"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _Pagination = _interopRequireDefault(require("../components/Pagination"));

var _reactTestRenderer = _interopRequireDefault(require("react-test-renderer"));

var _Columns = _interopRequireDefault(require("../components/Columns"));

var _Column = _interopRequireDefault(require("../components/Column"));

var onClickItem = function onClickItem() {
  alert("Clicked");
};

var itens = [{
  value: 1,
  href: "https://pt-br.reactjs.org/docs/hooks-overview.html",
  definition: "is-current",
  onClick: onClickItem
}, {
  value: 2,
  href: "https://pt-br.reactjs.org/docs/hooks-effect.html"
}, {
  value: 3,
  href: "https://pt-br.reactjs.org/docs/hooks-effect.html"
}];
test('value correctly', function () {
  var componentWithValue = _reactTestRenderer.default.create( /*#__PURE__*/_react.default.createElement(_Columns.default, null, /*#__PURE__*/_react.default.createElement(_Column.default, {
    definition: "is-half"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "container is-fluid"
  }, /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement(_Pagination.default, {
    itens: itens,
    next_name: "Next",
    previous_name: "Previous"
  }), /*#__PURE__*/_react.default.createElement(_Pagination.default, {
    itens: itens,
    next_name: "Next",
    previous_name: "Previous",
    previous_disabled: true
  }), /*#__PURE__*/_react.default.createElement(_Pagination.default, {
    itens: itens,
    next_name: "Next",
    previous_name: "Previous",
    previous_disabled: true,
    next_disabled: true
  }), /*#__PURE__*/_react.default.createElement(_Pagination.default, {
    definition: "is-center",
    itens: itens,
    next_name: "Next",
    previous_name: "Previous"
  }), /*#__PURE__*/_react.default.createElement(_Pagination.default, {
    definition: "is-right",
    itens: itens,
    next_name: "Next",
    previous_name: "Previous"
  }), /*#__PURE__*/_react.default.createElement(_Pagination.default, {
    definition: "is-right is-rounded",
    itens: itens,
    next_name: "Next",
    previous_name: "Previous"
  }), /*#__PURE__*/_react.default.createElement(_Pagination.default, {
    definition: "is-right is-small",
    itens: itens,
    next_name: "Next",
    previous_name: "Previous"
  }), /*#__PURE__*/_react.default.createElement(_Pagination.default, {
    definition: "is-right is-medium",
    itens: itens,
    next_name: "Next",
    previous_name: "Previous"
  }), /*#__PURE__*/_react.default.createElement(_Pagination.default, {
    definition: "is-right is-large",
    itens: itens,
    next_name: "Next",
    previous_name: "Previous"
  }))))).toJSON(); // componente com valor


  expect(componentWithValue).toMatchSnapshot();
});