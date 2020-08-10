"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _Icon = _interopRequireDefault(require("../components/Icon"));

var _reactTestRenderer = _interopRequireDefault(require("react-test-renderer"));

test('value correctly', function () {
  var componentWithValue = _reactTestRenderer.default.create( /*#__PURE__*/_react.default.createElement("div", {
    className: "container is-fluid"
  }, /*#__PURE__*/_react.default.createElement(_Icon.default, {
    icon_name: "fas fa-info-circle",
    definition: "has-text-info"
  }), /*#__PURE__*/_react.default.createElement(_Icon.default, {
    icon_name: "fas fa-check-square",
    definition: "has-text-success"
  }), /*#__PURE__*/_react.default.createElement(_Icon.default, {
    icon_name: "fas fa-exclamation-triangle",
    definition: "has-text-warning"
  }), /*#__PURE__*/_react.default.createElement(_Icon.default, {
    icon_name: "fas fa-ban",
    definition: "has-text-danger"
  }), /*#__PURE__*/_react.default.createElement(_Icon.default, {
    icon_name: "fas fa-home",
    definition: "has-text-warning is-small"
  }), /*#__PURE__*/_react.default.createElement(_Icon.default, {
    icon_name: "fas fa-home",
    definition: "has-text-warning is-medium"
  }), /*#__PURE__*/_react.default.createElement(_Icon.default, {
    icon_name: "fas fa-home",
    definition: "has-text-warning is-large"
  }))).toJSON(); // componente com valor


  expect(componentWithValue).toMatchSnapshot();
});