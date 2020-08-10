"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _Tag = _interopRequireDefault(require("../components/Tag"));

var _TextArea = _interopRequireDefault(require("../components/TextArea"));

var _Control = _interopRequireDefault(require("../components/Control"));

var _reactTestRenderer = _interopRequireDefault(require("react-test-renderer"));

test('value correctly', function () {
  var componentWithValue = _reactTestRenderer.default.create( /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("div", {
    className: "container is-fluid"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "columns"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "column is-half"
  }, /*#__PURE__*/_react.default.createElement(_TextArea.default, {
    placeholder: "e.g. Hello world"
  }), /*#__PURE__*/_react.default.createElement(_TextArea.default, {
    rows: 10,
    placeholder: "10 lines of text"
  }), /*#__PURE__*/_react.default.createElement(_Control.default, null, /*#__PURE__*/_react.default.createElement(_TextArea.default, {
    definition: "is-primary",
    placeholder: "e.g. Hello world"
  }), /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement(_TextArea.default, {
    definition: "is-info",
    placeholder: "e.g. Hello world"
  }), /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement(_TextArea.default, {
    definition: "is-success",
    placeholder: "e.g. Hello world"
  }), /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement(_TextArea.default, {
    definition: "is-warning",
    placeholder: "e.g. Hello world"
  }), /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement(_TextArea.default, {
    definition: "is-danger",
    placeholder: "e.g. Hello world"
  }), /*#__PURE__*/_react.default.createElement("br", null)), /*#__PURE__*/_react.default.createElement(_TextArea.default, {
    definition: "is-small",
    placeholder: "e.g. Hello world"
  }), /*#__PURE__*/_react.default.createElement(_TextArea.default, {
    placeholder: "e.g. Hello world"
  }), /*#__PURE__*/_react.default.createElement(_TextArea.default, {
    definition: "is-medium",
    placeholder: "e.g. Hello world"
  }), /*#__PURE__*/_react.default.createElement(_TextArea.default, {
    definition: "is-large",
    placeholder: "e.g. Hello world"
  }), /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement(_TextArea.default, {
    placeholder: "e.g. Hello world",
    loading: true,
    readonly: true
  }), /*#__PURE__*/_react.default.createElement(_TextArea.default, {
    placeholder: "e.g. Hello world",
    loading: true,
    disabled: true
  })))))).toJSON(); // componente com valor


  expect(componentWithValue).toMatchSnapshot();
});