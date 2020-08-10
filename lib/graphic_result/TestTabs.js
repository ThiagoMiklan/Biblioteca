"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _react = _interopRequireWildcard(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

require("bulma/css/bulma.css");

var _Tabs = _interopRequireDefault(require("./components/Tabs"));

var _Column = _interopRequireDefault(require("./components/Column"));

var _Columns = _interopRequireDefault(require("./components/Columns"));

var _Icon = _interopRequireDefault(require("./components/Icon"));

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

_reactDom.default.render( /*#__PURE__*/_react.default.createElement(_Columns.default, null, /*#__PURE__*/_react.default.createElement(_Column.default, null, /*#__PURE__*/_react.default.createElement("div", {
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
})))), document.getElementById('root'));
/*
<Columns>
        <Column definition="half">
            <div className="container is-fluid">
                <Tabs itens={itens} />
                <Tabs itens={itens} definition="center" />
                <Tabs itens={itens} definition="right" />
                <Tabs itens={itens} definition="small" />
                <Tabs itens={itens} definition="center small" />
                <Tabs itens={itens} definition="right small" />
                <Tabs itens={itens} definition="medium" />
                <Tabs itens={itens} definition="center medium" />
                <Tabs itens={itens} definition="right medium" />
                <Tabs itens={itens} definition="large" />
                <Tabs itens={itens} definition="center large" />
                <Tabs itens={itens} definition="right large" />
                <Tabs itens={itens} definition="center large boxed" />
                <Tabs itens={itens} definition="center large toggle" />
                <Tabs itens={itens} definition="center large toggle toggle-rounded fullwidth" />
                <Tabs itens={itens} definition="center boxed" />
                <Tabs itens={itens} definition="fullwidth toggle" />
            </div>
        </Column>
    </Columns>

*/