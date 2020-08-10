"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _Tabs = _interopRequireDefault(require("../components/Tabs"));

var _Columns = _interopRequireDefault(require("../components/Columns"));

var _Column = _interopRequireDefault(require("../components/Column"));

var _reactTestRenderer = _interopRequireDefault(require("react-test-renderer"));

var itens = [{
  value: "Pictures",
  definition: "active"
}, {
  value: "Musica"
}, {
  value: "Videos"
}, {
  value: "Documents"
}];
var itens_icons = [{
  value: "Pictures",
  definition: "is-active",
  icon_name: "fas fa-image"
}, {
  value: "Musica",
  icon_name: "fas fa-music"
}, {
  value: "Videos",
  icon_name: "fas fa-film",
  icon_definition: "has-text-success"
}, {
  value: "Documents",
  icon_name: "far fa-file-alt"
}];
var itens_full = [{
  value: "Left",
  icon_name: "fas fa-angle-left"
}, {
  value: "Up",
  icon_name: "fas fa-angle-up"
}, {
  value: "Right",
  icon_name: "fas fa-angle-right"
}];
test('value correctly', function () {
  var componentWithValue = _reactTestRenderer.default.create( /*#__PURE__*/_react.default.createElement(_Columns.default, null, /*#__PURE__*/_react.default.createElement(_Column.default, null, /*#__PURE__*/_react.default.createElement("div", {
    className: "container is-fluid"
  }, /*#__PURE__*/_react.default.createElement(_Tabs.default, {
    itens: itens
  }), /*#__PURE__*/_react.default.createElement(_Tabs.default, {
    itens: itens,
    definition: "is-centered"
  }), /*#__PURE__*/_react.default.createElement(_Tabs.default, {
    itens: itens,
    definition: "is-right"
  }), /*#__PURE__*/_react.default.createElement(_Tabs.default, {
    itens: itens_icons
  }), /*#__PURE__*/_react.default.createElement(_Tabs.default, {
    itens: itens,
    definition: "is-small"
  }), /*#__PURE__*/_react.default.createElement(_Tabs.default, {
    itens: itens,
    definition: "is-medium"
  }), /*#__PURE__*/_react.default.createElement(_Tabs.default, {
    itens: itens,
    definition: "is-large"
  }), /*#__PURE__*/_react.default.createElement(_Tabs.default, {
    itens: itens_icons,
    definition: "is-boxed"
  }), /*#__PURE__*/_react.default.createElement(_Tabs.default, {
    itens: itens_icons,
    definition: "is-toggle"
  }), /*#__PURE__*/_react.default.createElement(_Tabs.default, {
    itens: itens_icons,
    definition: "is-toggle is-toggle-rounded"
  }), /*#__PURE__*/_react.default.createElement(_Tabs.default, {
    itens: itens_full,
    definition: "is-fullwidth"
  }), /*#__PURE__*/_react.default.createElement(_Tabs.default, {
    itens: itens_icons,
    definition: "is-centered is-boxed"
  }), /*#__PURE__*/_react.default.createElement(_Tabs.default, {
    itens: itens_icons,
    definition: "is-toggle is-fullwidth"
  }), /*#__PURE__*/_react.default.createElement(_Tabs.default, {
    itens: itens_icons,
    definition: "is-centered is-boxed is-medium"
  }), /*#__PURE__*/_react.default.createElement(_Tabs.default, {
    itens: itens_icons,
    definition: "is-toggle is-fullwidth is-large"
  }))))).toJSON(); // componente com valor


  expect(componentWithValue).toMatchSnapshot();
});