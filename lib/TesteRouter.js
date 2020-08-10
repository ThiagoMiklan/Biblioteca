"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

require("bulma/css/bulma.css");

var _react = _interopRequireDefault(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _Button = _interopRequireDefault(require("./biblioteca/Button"));

var _reactRouterDom = require("react-router-dom");

var _Title = _interopRequireDefault(require("./biblioteca/Title"));

var History = function History(props) {
  var history = (0, _reactRouterDom.useHistory)();

  function onClickBackHome() {
    history.push("/");
  }

  function onClickBackButton() {
    history.push("/button");
  }

  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_Title.default, {
    definition: 1
  }, "Testing Router React"), /*#__PURE__*/_react.default.createElement(_Button.default, {
    onClick: onClickBackHome
  }, "Back to Home"), /*#__PURE__*/_react.default.createElement(_Button.default, {
    onClick: onClickBackButton
  }, "Back to Button"));
};

_reactDom.default.render( /*#__PURE__*/_react.default.createElement(_reactRouterDom.BrowserRouter, null, /*#__PURE__*/_react.default.createElement(_reactRouterDom.Route, {
  exact: true,
  path: "/"
}, /*#__PURE__*/_react.default.createElement(_Title.default, {
  definition: 1
}, "Hello Router")), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Route, {
  path: "/button"
}, /*#__PURE__*/_react.default.createElement(_Button.default, null, "Testando")), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Route, {
  path: "/back"
}, /*#__PURE__*/_react.default.createElement(History, null))), document.getElementById('root'));