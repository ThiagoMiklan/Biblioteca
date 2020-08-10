"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _react = _interopRequireWildcard(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _Field = _interopRequireDefault(require("./components/Field"));

require("bulma/css/bulma.css");

var _Columns = _interopRequireDefault(require("./components/Columns"));

var _Column = _interopRequireDefault(require("./components/Column"));

var custom = {
  draggable: true
};

_reactDom.default.render( /*#__PURE__*/_react.default.createElement("div", {
  className: "container is-fluid"
}, /*#__PURE__*/_react.default.createElement(_Field.default, {
  label: "Example",
  input_definition: "is-primary",
  icon_definition: "is-primary",
  icon_name: "fas fa-user",
  placeholder: "testing",
  control_definition: "has-icons-right"
}), /*#__PURE__*/_react.default.createElement(_Field.default, {
  label: "Example",
  input_definition: "is-info",
  icon_definition: "is-info",
  icon_name: "fas fa-user",
  placeholder: "testing",
  control_definition: "has-icons-right"
}), /*#__PURE__*/_react.default.createElement(_Field.default, {
  label: "Example",
  input_definition: "is-success",
  icon_definition: "is-success",
  icon_name: "fas fa-user",
  placeholder: "testing",
  control_definition: "has-icons-right"
}), /*#__PURE__*/_react.default.createElement(_Field.default, {
  label: "Example",
  input_definition: "is-danger",
  icon_definition: "is-danger",
  icon_name: "fas fa-user",
  placeholder: "testing",
  control_definition: "has-icons-right"
}), /*#__PURE__*/_react.default.createElement(_Field.default, {
  label: "Example",
  input_definition: "is-warning",
  icon_definition: "is-warning",
  placeholder: "testing",
  icon_name: "fas fa-user",
  control_definition: "has-icons-right"
}), /*#__PURE__*/_react.default.createElement(_Field.default, {
  label: "Example",
  input_definition: "is-small",
  icon_definition: "is-warning",
  icon_name: "fas fa-user",
  control_definition: "has-icons-right"
}), /*#__PURE__*/_react.default.createElement(_Field.default, {
  label: "Example",
  input_definition: "is-medium",
  icon_definition: "is-warning",
  icon_name: "fas fa-user",
  control_definition: "has-icons-right"
}), /*#__PURE__*/_react.default.createElement(_Field.default, {
  label: "Example",
  input_definition: "is-large",
  icon_definition: "is-warning",
  icon_name: "fas fa-user",
  control_definition: "has-icons-right"
}), /*#__PURE__*/_react.default.createElement(_Field.default, {
  label: "Example",
  input_definition: "is-small is-rounded",
  control_definition: "has-icons-right"
}), /*#__PURE__*/_react.default.createElement(_Field.default, {
  label: "Example",
  input_definition: "is-medium is-rounded",
  control_definition: "has-icons-right"
}), /*#__PURE__*/_react.default.createElement(_Field.default, {
  label: "Example",
  input_definition: "is-large is-rounded",
  control_definition: "has-icons-right"
}), /*#__PURE__*/_react.default.createElement(_Columns.default, null, /*#__PURE__*/_react.default.createElement(_Column.default, {
  definition: "is-half"
}, /*#__PURE__*/_react.default.createElement(_Field.default, {
  label: "Example Help",
  input_definition: "is-large is-rounded",
  control_definition: "has-icons-right",
  help_value: "This is a help message",
  help_definition: "is-success"
}))), /*#__PURE__*/_react.default.createElement("br", null)), document.getElementById('root'));