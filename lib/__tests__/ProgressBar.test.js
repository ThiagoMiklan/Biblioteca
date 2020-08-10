"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _ProgressBar = _interopRequireDefault(require("../components/ProgressBar"));

var _reactTestRenderer = _interopRequireDefault(require("react-test-renderer"));

test('progressbar fixed', function () {
  var pb_fixed = _reactTestRenderer.default.create( /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_ProgressBar.default, {
    value: "15",
    max: "100"
  }), /*#__PURE__*/_react.default.createElement(_ProgressBar.default, {
    definition: "is-primary",
    value: 15,
    max: 100
  }), /*#__PURE__*/_react.default.createElement(_ProgressBar.default, {
    definition: "is-link",
    value: 30,
    max: 100
  }), /*#__PURE__*/_react.default.createElement(_ProgressBar.default, {
    definition: "is-info",
    value: 45,
    max: 100
  }), /*#__PURE__*/_react.default.createElement(_ProgressBar.default, {
    definition: "is-success",
    value: 60,
    max: 100
  }), /*#__PURE__*/_react.default.createElement(_ProgressBar.default, {
    definition: "is-warning",
    value: 75,
    max: 100
  }), /*#__PURE__*/_react.default.createElement(_ProgressBar.default, {
    definition: "is-danger",
    value: 90,
    max: 100
  }))).toJSON();

  expect(pb_fixed).toMatchSnapshot();
});
test('progressbar sizes', function () {
  var pb_sizes = _reactTestRenderer.default.create( /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_ProgressBar.default, {
    definition: "is-small",
    value: 15,
    max: 100
  }), /*#__PURE__*/_react.default.createElement(_ProgressBar.default, {
    definition: "is-medium",
    value: 15,
    max: 100
  }), /*#__PURE__*/_react.default.createElement(_ProgressBar.default, {
    definition: "is-large",
    value: 15,
    max: 100
  }))).toJSON();

  expect(pb_sizes).toMatchSnapshot();
});
test('progressbar inderminate', function () {
  var pb_inderterminated = _reactTestRenderer.default.create( /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_ProgressBar.default, {
    definition: "is-small is-primary",
    max: 100
  }), /*#__PURE__*/_react.default.createElement(_ProgressBar.default, {
    definition: "is-danger",
    max: 100
  }), /*#__PURE__*/_react.default.createElement(_ProgressBar.default, {
    definition: "is-medium is-dark",
    max: 100
  }), /*#__PURE__*/_react.default.createElement(_ProgressBar.default, {
    definition: "is-large is-info",
    max: 100
  }))).toJSON();

  expect(pb_inderterminated).toMatchSnapshot();
});