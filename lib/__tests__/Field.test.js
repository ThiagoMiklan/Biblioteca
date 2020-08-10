"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _Field = _interopRequireDefault(require("../components/Field"));

var _reactTestRenderer = _interopRequireDefault(require("react-test-renderer"));

test('fields colors', function () {
  var colors = _reactTestRenderer.default.create( /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_Field.default, {
    label: "Example",
    input_definition: "is-primary",
    icon_definition: "is-primary",
    icon_name: "fas fa-user",
    placeholder: "testing",
    control_definition: "has-icons-right"
  }), /*#__PURE__*/_react.default.createElement(_Field.default, {
    label: "Example",
    input_definition: "is-info",
    icon_definition: "is-info",
    icon_name: "fas fa-user",
    placeholder: "testing",
    control_definition: "has-icons-right"
  }), /*#__PURE__*/_react.default.createElement(_Field.default, {
    label: "Example",
    input_definition: "is-success",
    icon_definition: "is-success",
    icon_name: "fas fa-user",
    placeholder: "testing",
    control_definition: "has-icons-right"
  }), /*#__PURE__*/_react.default.createElement(_Field.default, {
    label: "Example",
    input_definition: "is-danger",
    icon_definition: "is-danger",
    icon_name: "fas fa-user",
    placeholder: "testing",
    control_definition: "has-icons-right"
  }), /*#__PURE__*/_react.default.createElement(_Field.default, {
    label: "Example",
    input_definition: "is-warning",
    icon_definition: "is-warning",
    placeholder: "testing",
    icon_name: "fas fa-user",
    control_definition: "has-icons-right"
  }))).toJSON();

  expect(colors).toMatchSnapshot();
});
test('sizes', function () {
  var sizes = _reactTestRenderer.default.create( /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_Field.default, {
    label: "Example",
    input_definition: "is-small",
    icon_definition: "is-warning",
    icon_name: "fas fa-user",
    control_definition: "has-icons-right"
  }), /*#__PURE__*/_react.default.createElement(_Field.default, {
    label: "Example",
    input_definition: "is-medium",
    icon_definition: "is-warning",
    icon_name: "fas fa-user",
    control_definition: "has-icons-right"
  }), /*#__PURE__*/_react.default.createElement(_Field.default, {
    label: "Example",
    input_definition: "is-large",
    icon_definition: "is-warning",
    icon_name: "fas fa-user",
    control_definition: "has-icons-right"
  }))).toJSON();

  expect(sizes).toMatchSnapshot();
});
test('sizes rounded', function () {
  var rounded = _reactTestRenderer.default.create( /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_Field.default, {
    label: "Example",
    input_definition: "is-small is-rounded",
    control_definition: "has-icons-right"
  }), /*#__PURE__*/_react.default.createElement(_Field.default, {
    label: "Example",
    input_definition: "is-medium is-rounded",
    control_definition: "has-icons-right"
  }), /*#__PURE__*/_react.default.createElement(_Field.default, {
    label: "Example",
    input_definition: "is-large is-rounded",
    control_definition: "has-icons-right"
  }))).toJSON();

  expect(rounded).toMatchSnapshot();
});