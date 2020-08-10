"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _Tag = _interopRequireDefault(require("../components/Tag"));

var _Control = _interopRequireDefault(require("../components/Control"));

var _reactTestRenderer = _interopRequireDefault(require("react-test-renderer"));

var tags = [];
tags[0] = {
  definition: "tag primary rounded large light",
  value: "tag1"
};
tags[1] = {
  definition: "tag primary",
  value: "tag2"
};
test('value correctly', function () {
  var componentWithValue = _reactTestRenderer.default.create( /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_Tag.default, null, "Tag label"), /*#__PURE__*/_react.default.createElement(_Tag.default, {
    definition: "is-black"
  }, "Tag label"), /*#__PURE__*/_react.default.createElement(_Tag.default, {
    definition: "is-dark"
  }, "Tag label"), /*#__PURE__*/_react.default.createElement(_Tag.default, {
    definition: "is-light"
  }, "Tag label"), /*#__PURE__*/_react.default.createElement(_Tag.default, {
    definition: "is-white"
  }, "Tag label"), /*#__PURE__*/_react.default.createElement(_Tag.default, {
    definition: "is-primary"
  }, "Tag label"), /*#__PURE__*/_react.default.createElement(_Tag.default, {
    definition: "is-link"
  }, "Tag label"), /*#__PURE__*/_react.default.createElement(_Tag.default, {
    definition: "is-info"
  }, "Tag label"), /*#__PURE__*/_react.default.createElement(_Tag.default, {
    definition: "is-success"
  }, "Tag label"), /*#__PURE__*/_react.default.createElement(_Tag.default, {
    definition: "is-warning"
  }, "Tag label"), /*#__PURE__*/_react.default.createElement(_Tag.default, {
    definition: "is-danger"
  }, "Tag label"), /*#__PURE__*/_react.default.createElement(_Control.default, null), /*#__PURE__*/_react.default.createElement(_Tag.default, {
    definition: "is-primary is-light"
  }, "Tag label"), /*#__PURE__*/_react.default.createElement(_Tag.default, {
    definition: "is-link is-light"
  }, "Tag label"), /*#__PURE__*/_react.default.createElement(_Tag.default, {
    definition: "is-info is-light"
  }, "Tag label"), /*#__PURE__*/_react.default.createElement(_Tag.default, {
    definition: "is-success is-light"
  }, "Tag label"), /*#__PURE__*/_react.default.createElement(_Tag.default, {
    definition: "is-warning is-light"
  }, "Tag label"), /*#__PURE__*/_react.default.createElement(_Tag.default, {
    definition: "is-danger is-light"
  }, "Tag label"), /*#__PURE__*/_react.default.createElement(_Control.default, null), /*#__PURE__*/_react.default.createElement(_Tag.default, {
    definition: "is-link"
  }, "Normal"), /*#__PURE__*/_react.default.createElement(_Tag.default, {
    definition: "is-primary is-medium"
  }, "Normal"), /*#__PURE__*/_react.default.createElement(_Tag.default, {
    definition: "is-link is-large"
  }, "Normal"), /*#__PURE__*/_react.default.createElement(_Control.default, null), /*#__PURE__*/_react.default.createElement(_Tag.default, {
    definition: "is-primary is-rounded"
  }, "Tag rounded"), /*#__PURE__*/_react.default.createElement(_Tag.default, {
    onClickDelete: function onClickDelete() {
      alert("clicou");
    },
    definition: "is-primary is-rounded",
    delete: true
  }, "Tag rounded"))).toJSON(); // componente com valor


  expect(componentWithValue).toMatchSnapshot();
});