"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _NavigationBar = _interopRequireDefault(require("../components/NavigationBar"));

var _HeroThreeParts = _interopRequireDefault(require("../components/HeroThreeParts"));

var _Title = _interopRequireDefault(require("../components/Title"));

var _Subtitle = _interopRequireDefault(require("../components/Subtitle"));

var _Tabs = _interopRequireDefault(require("../components/Tabs"));

var _Button = _interopRequireDefault(require("../components/Button"));

var _Icon = _interopRequireDefault(require("../components/Icon"));

var _reactTestRenderer = _interopRequireDefault(require("react-test-renderer"));

var _reactDom = require("react-dom");

var itens_navbar_end = [{
  value: "Home",
  definition: "active"
}, {
  value: "Examples"
}, {
  value: "Documentation"
}, {
  value: /*#__PURE__*/_react.default.createElement(_Button.default, {
    definition: "is-primary is-inverted"
  }, /*#__PURE__*/_react.default.createElement(_Icon.default, {
    icon_name: "fab fa-github"
  }, "Github"))
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
test('hero three parts medium primary', function () {
  var component = _reactTestRenderer.default.create( /*#__PURE__*/_react.default.createElement(_HeroThreeParts.default, {
    definition: "is-medium is-primary"
  }, /*#__PURE__*/_react.default.createElement(_NavigationBar.default, {
    src_brand: "https://bulma.io/images/bulma-type-white.png",
    alt_brand: "logo",
    itens_end: itens_navbar_end
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "container has-text-centered"
  }, /*#__PURE__*/_react.default.createElement(_Title.default, {
    definition: 1
  }, "Title"), /*#__PURE__*/_react.default.createElement(_Subtitle.default, {
    definition: 2
  }, "Subtitle")), /*#__PURE__*/_react.default.createElement(_Tabs.default, {
    definition: "is-boxed is-fullwidth",
    itens: itens_tabs
  }))).toJSON();

  expect(component).toMatchSnapshot();
});
test('hero three parts fullheight success', function () {
  var component = _reactTestRenderer.default.create( /*#__PURE__*/_react.default.createElement(_HeroThreeParts.default, {
    definition: "is-fullheight is-info"
  }, /*#__PURE__*/_react.default.createElement(_NavigationBar.default, {
    src_brand: "https://bulma.io/images/bulma-type-white.png",
    alt_brand: "logo",
    itens_end: itens_navbar_end
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "container has-text-centered"
  }, /*#__PURE__*/_react.default.createElement(_Title.default, {
    definition: 1
  }, "Title"), /*#__PURE__*/_react.default.createElement(_Subtitle.default, {
    definition: 2
  }, "Subtitle")), /*#__PURE__*/_react.default.createElement(_Tabs.default, {
    definition: "is-boxed is-fullwidth",
    itens: itens_tabs
  }))).toJSON();

  expect(component).toMatchSnapshot();
});
test('hero three parts fullheight success', function () {
  var component = _reactTestRenderer.default.create( /*#__PURE__*/_react.default.createElement(_HeroThreeParts.default, {
    definition: "is-fullheight is-success"
  }, /*#__PURE__*/_react.default.createElement(_NavigationBar.default, {
    src_brand: "https://bulma.io/images/bulma-type-white.png",
    alt_brand: "logo",
    itens_end: itens_navbar_end
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "container has-text-centered"
  }, /*#__PURE__*/_react.default.createElement(_Title.default, {
    definition: 1
  }, "Title"), /*#__PURE__*/_react.default.createElement(_Subtitle.default, {
    definition: 2
  }, "Subtitle")), /*#__PURE__*/_react.default.createElement(_Tabs.default, {
    definition: "is-boxed is-fullwidth",
    itens: itens_tabs
  }))).toJSON();

  expect(component).toMatchSnapshot();
});