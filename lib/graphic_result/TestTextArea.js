"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _react = _interopRequireWildcard(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _TextArea = _interopRequireDefault(require("./components/TextArea"));

require("bulma/css/bulma.css");

var _Control = _interopRequireDefault(require("./components/Control"));

_reactDom.default.render( /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("div", {
  className: "container is-fluid"
}, /*#__PURE__*/_react.default.createElement("div", {
  className: "columns"
}, /*#__PURE__*/_react.default.createElement("div", {
  className: "column is-half"
}, /*#__PURE__*/_react.default.createElement(_TextArea.default, {
  placeholder: "e.g. Hello world"
}), /*#__PURE__*/_react.default.createElement(_TextArea.default, {
  rows: "10",
  placeholder: "10 lines of text"
}), /*#__PURE__*/_react.default.createElement(_Control.default, null, /*#__PURE__*/_react.default.createElement(_TextArea.default, {
  definition: "is-primary",
  placeholder: "e.g. Hello world"
}), /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement(_TextArea.default, {
  definition: "is-info",
  placeholder: "e.g. Hello world"
}), /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement(_TextArea.default, {
  definition: "is-success",
  placeholder: "e.g. Hello world"
}), /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement(_TextArea.default, {
  definition: "is-warning",
  placeholder: "e.g. Hello world"
}), /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement(_TextArea.default, {
  definition: "is-danger",
  placeholder: "e.g. Hello world"
}), /*#__PURE__*/_react.default.createElement("br", null)), /*#__PURE__*/_react.default.createElement(_TextArea.default, {
  definition: "is-small",
  placeholder: "e.g. Hello world"
}), /*#__PURE__*/_react.default.createElement(_TextArea.default, {
  placeholder: "e.g. Hello world"
}), /*#__PURE__*/_react.default.createElement(_TextArea.default, {
  definition: "is-medium",
  placeholder: "e.g. Hello world"
}), /*#__PURE__*/_react.default.createElement(_TextArea.default, {
  definition: "is-large",
  placeholder: "e.g. Hello world"
}), /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement(_TextArea.default, {
  placeholder: "e.g. Hello world",
  definition: "is-loadingr",
  readonly: true
}), /*#__PURE__*/_react.default.createElement(_TextArea.default, {
  placeholder: "e.g. Hello world",
  definition: "is-loading",
  disabled: true
}))))), document.getElementById("root"));
/*
<>
  <div className="container is-fluid">
  <TextArea placeholder="e.g. Hello world"></TextArea>
  <TextArea rows="10" placeholder="10 lines of text"></TextArea>
  <TextArea definition="primary" placeholder="e.g. Hello world"></TextArea>
  <TextArea definition="info" placeholder="e.g. Hello world"></TextArea>
  <TextArea definition="success" placeholder="e.g. Hello world"></TextArea>
  <TextArea definition="warning" placeholder="e.g. Hello world"></TextArea>
  <TextArea definition="danger" placeholder="e.g. Hello world"></TextArea>
  <TextArea definition="small" placeholder="e.g. Hello world"></TextArea>
  <TextArea placeholder="e.g. Hello world"></TextArea>
  <TextArea definition="medium" placeholder="e.g. Hello world"></TextArea>
  <TextArea definition="large" placeholder="e.g. Hello world"></TextArea>
  <TextArea definition="hovered" placeholder="e.g. Hello world"></TextArea>
  </div>
</>

*/