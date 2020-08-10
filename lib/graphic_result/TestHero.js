"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _react = _interopRequireWildcard(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

require("bulma/css/bulma.css");

var _Hero = _interopRequireDefault(require("./components/Hero"));

var _Button = _interopRequireDefault(require("./components/Button"));

var _NavigationBar = _interopRequireDefault(require("./components/NavigationBar"));

var _HeroThreeParts = _interopRequireDefault(require("./components/HeroThreeParts"));

var _Title = _interopRequireDefault(require("./components/Title"));

var _Subtitle = _interopRequireDefault(require("./components/Subtitle"));

var _Tabs = _interopRequireDefault(require("./components/Tabs"));

var itens_navbar_start = [{
  value: "Home"
}, {
  value: "Documentation"
}];
var itens_navbar_end = [{
  value: /*#__PURE__*/_react.default.createElement(_Button.default, {
    definition: "is-dark",
    label: "Github"
  })
}, {
  value: /*#__PURE__*/_react.default.createElement(_Button.default, {
    definition: "is-link",
    label: "Download"
  })
}];
var itens_tabs = [{
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

_reactDom.default.render( /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_Hero.default, {
  title: "Hero Title",
  subtitle: "Hero Subtitle"
}), /*#__PURE__*/_react.default.createElement(_Hero.default, {
  definition: "is-primary",
  title: "Primary Title",
  subtitle: "Primary Subtitle"
}), /*#__PURE__*/_react.default.createElement(_Hero.default, {
  definition: "is-info",
  title: "Info Title",
  subtitle: "Info Subtitle"
}), /*#__PURE__*/_react.default.createElement(_Hero.default, {
  definition: "is-success",
  title: "Success Title",
  subtitle: "Success Subtitle"
}), /*#__PURE__*/_react.default.createElement(_Hero.default, {
  definition: "is-warning",
  title: "Warning Title",
  subtitle: "Warning Subtitle"
}), /*#__PURE__*/_react.default.createElement(_Hero.default, {
  definition: "is-danger",
  title: "Danger Title",
  subtitle: "Danger Subtitle"
}), /*#__PURE__*/_react.default.createElement(_Hero.default, {
  definition: "is-light",
  title: "Light Title",
  subtitle: "Light Subtitle"
}), /*#__PURE__*/_react.default.createElement(_Hero.default, {
  definition: "is-dark",
  title: "Dark Title",
  subtitle: "Dark Subtitle"
}), /*#__PURE__*/_react.default.createElement(_Hero.default, {
  definition: "is-primary is-bold",
  title: "Primary Title",
  subtitle: "Primary Subtitle"
}), /*#__PURE__*/_react.default.createElement(_Hero.default, {
  definition: "is-info is-bold",
  title: "Info Title",
  subtitle: "Info Subtitle"
}), /*#__PURE__*/_react.default.createElement(_Hero.default, {
  definition: "is-success  is-bold",
  title: "Success Title",
  subtitle: "Success Subtitle"
}), /*#__PURE__*/_react.default.createElement(_Hero.default, {
  definition: "is-warning is-bold",
  title: "Warning Title",
  subtitle: "Warning Subtitle"
}), /*#__PURE__*/_react.default.createElement(_Hero.default, {
  definition: "is-danger is-bold",
  title: "Danger Title",
  subtitle: "Danger Subtitle"
}), /*#__PURE__*/_react.default.createElement(_Hero.default, {
  definition: "is-light is-bold",
  title: "Light Title",
  subtitle: "Light Subtitle"
}), /*#__PURE__*/_react.default.createElement(_Hero.default, {
  definition: "is-dark is-bold",
  title: "Dark Title",
  subtitle: "Dark Subtitle"
}), /*#__PURE__*/_react.default.createElement(_Hero.default, {
  definition: "is-primary is-medium",
  title: "Primary Title",
  subtitle: "Primary Subtitle"
}), /*#__PURE__*/_react.default.createElement(_Hero.default, {
  definition: "is-info is-large",
  title: "Info Title",
  subtitle: "Info Subtitle"
}), /*#__PURE__*/_react.default.createElement(_Hero.default, {
  definition: "is-success is-large",
  title: "Success Title",
  subtitle: "Success Subtitle"
}), /*#__PURE__*/_react.default.createElement(_NavigationBar.default, {
  itens_start: itens_navbar_start,
  itens_end: itens_navbar_end
}), /*#__PURE__*/_react.default.createElement(_Hero.default, {
  definition: "is-link is-fullheight-with-navbar",
  title: "With navbar"
}), /*#__PURE__*/_react.default.createElement(_HeroThreeParts.default, {
  definition: "is-fullheight"
}, /*#__PURE__*/_react.default.createElement(_NavigationBar.default, {
  itens_start: itens_navbar_start,
  itens_end: itens_navbar_end
}), /*#__PURE__*/_react.default.createElement("div", {
  className: "container has-text-centered"
}, /*#__PURE__*/_react.default.createElement(_Title.default, {
  definition: 1
}, "Title"), /*#__PURE__*/_react.default.createElement(_Subtitle.default, {
  definition: 2
}, "Subtitle")), /*#__PURE__*/_react.default.createElement(_Tabs.default, {
  itens: itens_tabs
}))), document.getElementById("root"));