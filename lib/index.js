"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _react = _interopRequireWildcard(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _Card = _interopRequireDefault(require("./components/Card"));

var _Column = _interopRequireDefault(require("./components/Column"));

var _Columns = _interopRequireDefault(require("./components/Columns"));

var _Content = _interopRequireDefault(require("./components/Content"));

var _Pagination = _interopRequireDefault(require("./components/Pagination"));

var _CheckBox = _interopRequireDefault(require("./components/CheckBox"));

var _Button = _interopRequireDefault(require("./components/Button"));

var _Panel = _interopRequireDefault(require("./components/Panel"));

var _Select = _interopRequireDefault(require("./components/Select"));

var _Control = _interopRequireDefault(require("./components/Control"));

var _NavigationBar = _interopRequireDefault(require("./components/NavigationBar"));

var _Title = _interopRequireDefault(require("./components/Title"));

var _SubTitle = _interopRequireDefault(require("./components/SubTitle"));

var _Tabs = _interopRequireDefault(require("./components/Tabs"));

var _Hero = _interopRequireDefault(require("./components/Hero"));

var _HeroThreeParts = _interopRequireDefault(require("./components/HeroThreeParts"));

var _Icon = _interopRequireDefault(require("./components/Icon"));

require("../tests/icons/all.js");

require("bulma/css/bulma.css");

var itens_navbar_end = [{
  value: "Home",
  definition: "active"
}, {
  value: "Examples"
}, {
  value: "Documentation"
}, {
  value: /*#__PURE__*/_react["default"].createElement(_Button["default"], {
    definition: "is-primary is-inverted",
    label: /*#__PURE__*/_react["default"].createElement(_Icon["default"], {
      icon_name: "fab fa-github"
    }, "Github")
  })
}];
var itens_tabs = [{
  value: "Overview",
  definition: "active"
}, {
  value: "Modifiers"
}, {
  value: "Grid"
}, {
  value: "Elements"
}, {
  value: "Components"
}, {
  value: "Layout"
}];

_reactDom["default"].render( /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_HeroThreeParts["default"], {
  definition: "is-medium is-primary"
}, /*#__PURE__*/_react["default"].createElement(_NavigationBar["default"], {
  src_brand: "https://bulma.io/images/bulma-type-white.png",
  alt_brand: "logo",
  itens_end: itens_navbar_end
}), /*#__PURE__*/_react["default"].createElement("div", {
  className: "container has-text-centered"
}, /*#__PURE__*/_react["default"].createElement(_Title["default"], {
  definition: 1
}, "Title"), /*#__PURE__*/_react["default"].createElement(_SubTitle["default"], {
  definition: 2
}, "Subtitle")), /*#__PURE__*/_react["default"].createElement(_Tabs["default"], {
  definition: "is-boxed is-fullwidth",
  itens: itens_tabs
})), /*#__PURE__*/_react["default"].createElement(_HeroThreeParts["default"], {
  definition: "is-fullheight is-info"
}, /*#__PURE__*/_react["default"].createElement(_NavigationBar["default"], {
  src_brand: "https://bulma.io/images/bulma-type-white.png",
  alt_brand: "logo",
  itens_end: itens_navbar_end
}), /*#__PURE__*/_react["default"].createElement("div", {
  className: "container has-text-centered"
}, /*#__PURE__*/_react["default"].createElement(_Title["default"], {
  definition: 1
}, "Title"), /*#__PURE__*/_react["default"].createElement(_SubTitle["default"], {
  definition: 2
}, "Subtitle")), /*#__PURE__*/_react["default"].createElement(_Tabs["default"], {
  definition: "is-boxed is-fullwidth",
  itens: itens_tabs
})), /*#__PURE__*/_react["default"].createElement(_HeroThreeParts["default"], {
  definition: "is-fullheight is-success"
}, /*#__PURE__*/_react["default"].createElement(_NavigationBar["default"], {
  src_brand: "https://bulma.io/images/bulma-type-white.png",
  alt_brand: "logo",
  itens_end: itens_navbar_end
}), /*#__PURE__*/_react["default"].createElement("div", {
  className: "container has-text-centered"
}, /*#__PURE__*/_react["default"].createElement(_Title["default"], {
  definition: 1
}, "Title"), /*#__PURE__*/_react["default"].createElement(_SubTitle["default"], {
  definition: 2
}, "Subtitle")), /*#__PURE__*/_react["default"].createElement(_Tabs["default"], {
  definition: "is-boxed is-fullwidth",
  itens: itens_tabs
}))), document.getElementById("root"));