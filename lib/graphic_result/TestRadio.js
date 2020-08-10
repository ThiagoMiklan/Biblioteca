"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _Radio = _interopRequireDefault(require("./components/Radio"));

var _Control = _interopRequireDefault(require("./components/Control"));

var custom = {
  checked: true
};
var itens = [{
  value: "Yes",
  disabled: false,
  onClick: function onClick() {
    alert("Yes");
  },
  custom: {
    checked: true
  }
}, {
  value: "No",
  checked: false,
  onClick: function onClick() {
    alert("No");
  }
}, {
  value: "Maybe",
  checked: false,
  onClick: function onClick() {
    alert("Maybe");
  },
  disabled: true
}];

_reactDom.default.render( /*#__PURE__*/_react.default.createElement("div", {
  className: "container is-fluid"
}, /*#__PURE__*/_react.default.createElement(_Radio.default, {
  name: "resposta",
  itens: itens
})), document.getElementById("root"));