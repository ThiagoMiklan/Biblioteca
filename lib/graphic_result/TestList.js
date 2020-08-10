"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

require("bulma/css/bulma.css");

var _react = _interopRequireWildcard(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _Content = _interopRequireDefault(require("./components/Content"));

var _List = _interopRequireDefault(require("./components/List"));

var itens = [{
  value: "Item 1",
  custom: {
    onDoubleClick: function onDoubleClick() {
      alert("Duplo clique");
    }
  }
}, {
  value: "Item 2",
  onClick: function onClick() {
    alert("Clicked");
  }
}, {
  value: "Item 3",
  onClick: function onClick() {
    alert("Clicked");
  }
}];

_reactDom.default.render( /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_Content.default, null, /*#__PURE__*/_react.default.createElement(_List.default, {
  definition: "is-lower-alpha",
  itens: itens
}), /*#__PURE__*/_react.default.createElement(_List.default, {
  definition: "is-lower-roman",
  itens: itens
}), /*#__PURE__*/_react.default.createElement(_List.default, {
  definition: "is-upper-alpha",
  itens: itens
}), /*#__PURE__*/_react.default.createElement(_List.default, {
  definition: "is-upper-roman",
  itens: itens
}))), document.getElementById("root"));