"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _BreadCrumb = _interopRequireDefault(require("./components/BreadCrumb.jsx"));

var _Icon = _interopRequireDefault(require("./components/Icon"));

var _Container = _interopRequireDefault(require("./components/Container"));

require("bulma/css/bulma.css");

var onClickItem = function onClickItem() {
  alert("Clicked");
};

var itens = [{
  value: "Bulma"
}, {
  value: "Documentation"
}, {
  value: "Componentes"
}, {
  value: "BreadCrumb"
}];
var itens_with_icons = [{
  value: /*#__PURE__*/_react.default.createElement(_Icon.default, {
    icon_name: "fas fa-home"
  }, "Bulma")
}, {
  value: /*#__PURE__*/_react.default.createElement(_Icon.default, {
    icon_name: "fas fa-book"
  }, "Documentation")
}, {
  value: /*#__PURE__*/_react.default.createElement(_Icon.default, {
    icon_name: "fas fa-puzzle-piece"
  }, "Componentes")
}, {
  value: /*#__PURE__*/_react.default.createElement(_Icon.default, {
    icon_name: "fas fa-thumbs-up"
  }, "BreadCrumb")
}];
var itens_with_onClick = [{
  value: "Bulma",
  onClick: onClickItem
}, {
  value: "Documentation",
  onClick: onClickItem
}, {
  value: "Componentes",
  onClick: onClickItem
}, {
  value: "BreadCrumb",
  onClick: onClickItem
}];
var itens_with_href = [{
  value: "Bulma",
  href: "https://ufsc.br"
}, {
  value: "Documentation",
  href: "https://ufsc.br"
}, {
  value: "Componentes",
  href: "https://ufsc.br"
}, {
  value: "BreadCrumb",
  href: "https://ufsc.br"
}];

_reactDom.default.render( /*#__PURE__*/_react.default.createElement(_Container.default, {
  definition: "is-fluid"
}, /*#__PURE__*/_react.default.createElement(_BreadCrumb.default, {
  itens: itens
}), /*#__PURE__*/_react.default.createElement(_BreadCrumb.default, {
  itens: itens,
  definition: "is-centered"
}), /*#__PURE__*/_react.default.createElement(_BreadCrumb.default, {
  itens: itens,
  definition: "is-right"
}), /*#__PURE__*/_react.default.createElement(_BreadCrumb.default, {
  itens: itens_with_icons
}), /*#__PURE__*/_react.default.createElement(_BreadCrumb.default, {
  definition: "has-arrow-separator",
  itens: itens
}), /*#__PURE__*/_react.default.createElement(_BreadCrumb.default, {
  definition: "has-bullet-separator",
  itens: itens
}), /*#__PURE__*/_react.default.createElement(_BreadCrumb.default, {
  definition: "has-dot-separator",
  itens: itens
}), /*#__PURE__*/_react.default.createElement(_BreadCrumb.default, {
  definition: "has-succeeds-separator",
  itens: itens
}), /*#__PURE__*/_react.default.createElement(_BreadCrumb.default, {
  itens: itens,
  definition: "is-small"
}), /*#__PURE__*/_react.default.createElement(_BreadCrumb.default, {
  itens: itens,
  definition: "is-medium"
}), /*#__PURE__*/_react.default.createElement(_BreadCrumb.default, {
  itens: itens,
  definition: "is-large"
}), /*#__PURE__*/_react.default.createElement(_BreadCrumb.default, {
  itens: itens_with_href
}), /*#__PURE__*/_react.default.createElement(_BreadCrumb.default, {
  itens: itens_with_onClick
})), document.getElementById('root'));