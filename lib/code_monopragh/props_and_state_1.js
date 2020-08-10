"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _react = _interopRequireWildcard(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

require("bulma/css/bulma.css");

var Input = function Input(props) {
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "columns is-centered"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "column is-half"
  }, /*#__PURE__*/_react.default.createElement("input", {
    className: props.definition,
    value: "Example Props and State"
  })));
};

var InputParent = function InputParent(props) {
  return /*#__PURE__*/_react.default.createElement(Input, {
    definition: "input is-primary"
  });
};

_reactDom.default.render( /*#__PURE__*/_react.default.createElement(InputParent, null), document.getElementById("root"));