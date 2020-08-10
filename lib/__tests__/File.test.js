"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _File = _interopRequireDefault(require("../components/File"));

var _reactTestRenderer = _interopRequireDefault(require("react-test-renderer"));

var onChange = function onChange(e) {
  alert("Escolheu o arquivo!");
};

test('test files', function () {
  var component = _reactTestRenderer.default.create( /*#__PURE__*/_react.default.createElement("div", {
    className: "container is-fluid"
  }, /*#__PURE__*/_react.default.createElement(_File.default, {
    filename: "Screenshot 2020/01/01",
    label: "Choose a File",
    icon_name: "fas fa-upload"
  }), /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement(_File.default, {
    definition: "has-name",
    filename: "Screenshot 2020/01/01",
    label: "Choose File",
    icon_name: "fas fa-upload"
  }), /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement(_File.default, {
    definition: "has-name is-right",
    filename: "Screenshot 2020/01/01",
    label: "Choose File",
    icon_name: "fas fa-upload"
  }), /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement(_File.default, {
    definition: "has-name is-fullwidth",
    filename: "Screenshot 2020/01/01",
    label: "Choose File",
    icon_name: "fas fa-upload"
  }), /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement(_File.default, {
    definition: "is-boxed",
    filename: "Screenshot 2020/01/01",
    label: "Choose a File",
    icon_name: "fas fa-upload"
  }), /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement(_File.default, {
    definition: "is-boxed has-name",
    filename: "Screenshot 2020/01/01",
    label: "Choose a File",
    icon_name: "fas fa-upload"
  }), /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement(_File.default, {
    definition: "is-primary",
    filename: "Screenshot 2020/01/01",
    label: "Primary File",
    icon_name: "fas fa-upload"
  }), /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement(_File.default, {
    definition: "is-info has-name",
    filename: "Screenshot 2020/01/01",
    label: "Info File",
    icon_name: "fas fa-upload"
  }), /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement(_File.default, {
    definition: "is-warning is-boxed",
    filename: "Screenshot 2020/01/01",
    label: "Choose a File",
    icon_name: "fas fa-upload"
  }), /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement(_File.default, {
    definition: "is-danger has-name is-medium is-boxed",
    filename: "Screenshot 2020/01/01",
    label: "Choose a File",
    icon_name: "fas fa-upload"
  }), /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement(_File.default, {
    definition: "is-small",
    filename: "Screenshot 2020/01/01",
    label: "Smalll File",
    icon_name: "fas fa-upload"
  }), /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement(_File.default, {
    filename: "Screenshot 2020/01/01",
    label: "Normal File",
    icon_name: "fas fa-upload"
  }), /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement(_File.default, {
    definition: "is-medium",
    filename: "Screenshot 2020/01/01",
    label: "Medium File",
    icon_name: "fas fa-upload"
  }), /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement(_File.default, {
    definition: "is-large",
    filename: "Screenshot 2020/01/01",
    label: "Large File",
    icon_name: "fas fa-upload"
  }), /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement(_File.default, {
    definition: "is-small  has-name",
    filename: "Screenshot 2020/01/01",
    label: "Smalll File",
    icon_name: "fas fa-upload"
  }), /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement(_File.default, {
    definition: "has-name",
    filename: "Screenshot 2020/01/01",
    label: "Normal File",
    icon_name: "fas fa-upload"
  }), /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement(_File.default, {
    definition: "is-medium has-name",
    filename: "Screenshot 2020/01/01",
    label: "Medium File",
    icon_name: "fas fa-upload"
  }), /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement(_File.default, {
    definition: "is-large has-name",
    filename: "Screenshot 2020/01/01",
    label: "Large File",
    icon_name: "fas fa-upload"
  }), /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement(_File.default, {
    definition: "is-small  is-boxed",
    filename: "Screenshot 2020/01/01",
    label: "Smalll File",
    icon_name: "fas fa-upload"
  }), /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement(_File.default, {
    definition: "is-boxed",
    filename: "Screenshot 2020/01/01",
    label: "Normal File",
    icon_name: "fas fa-upload"
  }), /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement(_File.default, {
    definition: "is-medium is-boxed",
    filename: "Screenshot 2020/01/01",
    label: "Medium File",
    icon_name: "fas fa-upload"
  }), /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement(_File.default, {
    definition: "is-large is-boxed",
    filename: "Screenshot 2020/01/01",
    label: "Large File",
    icon_name: "fas fa-upload"
  }), /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement(_File.default, {
    definition: "is-small  has-name is-boxed",
    filename: "Screenshot 2020/01/01",
    label: "Smalll File",
    icon_name: "fas fa-upload"
  }), /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement(_File.default, {
    definition: "has-name is-boxed",
    filename: "Screenshot 2020/01/01",
    label: "Normal File",
    icon_name: "fas fa-upload"
  }), /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement(_File.default, {
    definition: "is-medium has-name is-boxed",
    filename: "Screenshot 2020/01/01",
    label: "Medium File",
    icon_name: "fas fa-upload"
  }), /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement(_File.default, {
    definition: "is-large has-name is-boxed",
    filename: "Screenshot 2020/01/01",
    label: "Large File",
    icon_name: "fas fa-upload"
  }), /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement(_File.default, {
    definition: "is-success has-name is-boxed is-centered",
    filename: "Screenshot 2020/01/01",
    label: "Large File",
    icon_name: "fas fa-upload"
  }), /*#__PURE__*/_react.default.createElement(_File.default, {
    definition: "is-info has-name is-right",
    filename: "Screenshot 2020/01/01",
    label: "Large File",
    icon_name: "fas fa-upload"
  }), /*#__PURE__*/_react.default.createElement("br", null))).toJSON();

  expect(component).toMatchSnapshot();
});