"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _DropDown = _interopRequireDefault(require("./components/DropDown"));

require("bulma/css/bulma.css");

var itens_link = [{
  value: "Dropdown Button",
  link: true,
  href: "https://ufsc.br",
  onClick: function onClick() {
    alert("Clicou");
  }
}, {
  value: "Dropdown Item",
  link: true,
  href: "https://ufsc.br"
}, {
  value: "Other Dropdown Item",
  link: true,
  href: "https://ufsc.br"
}, {
  value: "Active Dropdown Item",
  link: true,
  definition: "is-active",
  href: "https://ufsc.br"
}, {
  value: "Other Dropdown Item",
  link: true,
  href: "https://ufsc.br"
}, {
  value: "With a divider",
  link: true,
  href: "https://ufsc.br"
}];
var itens_div = [{
  value: /*#__PURE__*/_react.default.createElement("p", null, "You can insert ", /*#__PURE__*/_react.default.createElement("strong", null, "any type of content"), " within the dropdown menu."),
  onClick: function onClick() {
    alert("Clicou");
  }
}, {
  value: /*#__PURE__*/_react.default.createElement("p", null, "You simply need to use a ", /*#__PURE__*/_react.default.createElement("code", null, "<div>"), " instead.")
}, {
  value: "This is a link",
  link: true
}];

var HookDropDown = function HookDropDown(props) {
  var initial = {
    definition: ""
  };

  var _useState = (0, _react.useState)(initial),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      state = _useState2[0],
      setState = _useState2[1];

  var onClick = function onClick() {
    if (state.definition == "is-active") {
      setState({
        definition: ""
      });
    } else {
      setState({
        definition: "is-active"
      });
    }
  };

  return /*#__PURE__*/_react.default.createElement(_DropDown.default, {
    definition: state.definition,
    onClick: onClick,
    itens: itens_link
  });
};

_reactDom.default.render( /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_DropDown.default, {
  definition: "is-active",
  itens: itens_link
}), /*#__PURE__*/_react.default.createElement(_DropDown.default, {
  definition: "is-hoverable",
  itens: itens_link
}), /*#__PURE__*/_react.default.createElement(_DropDown.default, {
  definition: "is-up is-active",
  itens: itens_link
})), document.getElementById('root'));