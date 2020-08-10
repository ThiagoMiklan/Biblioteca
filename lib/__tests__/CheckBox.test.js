"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _reactTestRenderer = _interopRequireDefault(require("react-test-renderer"));

var _Control = _interopRequireDefault(require("../components/Control"));

var _CheckBox = _interopRequireDefault(require("../components/CheckBox"));

test('checkbox normal', function () {
  var component = _reactTestRenderer.default.create( /*#__PURE__*/_react.default.createElement(_Control.default, null, /*#__PURE__*/_react.default.createElement(_CheckBox.default, null, "normal"))).toJSON();

  expect(component).toMatchSnapshot();
});
test('checkbox with differents tags inside', function () {
  var component = _reactTestRenderer.default.create( /*#__PURE__*/_react.default.createElement(_Control.default, null, /*#__PURE__*/_react.default.createElement(_CheckBox.default, null, "with link ", /*#__PURE__*/_react.default.createElement("a", {
    href: "#"
  }, "here")))).toJSON();

  expect(component).toMatchSnapshot();
});
test('checkbox with onClick', function () {
  var component = _reactTestRenderer.default.create( /*#__PURE__*/_react.default.createElement(_Control.default, null, /*#__PURE__*/_react.default.createElement(_CheckBox.default, {
    onClick: function onClick() {
      alert("Clicou CheckBox");
    }
  }, "with on click"))).toJSON();

  expect(component).toMatchSnapshot();
});
test('checkbox disabled', function () {
  var component = _reactTestRenderer.default.create( /*#__PURE__*/_react.default.createElement(_Control.default, null, /*#__PURE__*/_react.default.createElement(_CheckBox.default, {
    disabled: true,
    onClick: function onClick() {
      alert("Clicou CheckBox");
    }
  }, "disabled with onClick"))).toJSON();

  expect(component).toMatchSnapshot();
});