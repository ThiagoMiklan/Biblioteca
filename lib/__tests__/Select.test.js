"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _Icon = _interopRequireDefault(require("../components/Icon"));

var _Select = _interopRequireDefault(require("../components/Select"));

var _Control = _interopRequireDefault(require("../components/Control"));

var _reactTestRenderer = _interopRequireDefault(require("react-test-renderer"));

var click = function click() {
  alert("Clicou");
};

var itens_1 = [{
  value: "Select DropDown",
  onClick: click
}, {
  value: "With Options",
  onClick: click
}];
var itens_2 = [{
  value: "Argentina"
}, {
  value: "Brasil"
}, {
  value: "Bolivia"
}, {
  value: "Uruguai"
}, {
  value: "Paraguai"
}];
test('value correctly', function () {
  var componentWithValue = _reactTestRenderer.default.create( /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("div", {
    className: "field"
  }, /*#__PURE__*/_react.default.createElement(_Select.default, {
    onChange: click,
    definition: "is-rounded",
    itens: itens_1
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "field"
  }, /*#__PURE__*/_react.default.createElement(_Select.default, {
    definition: "is-primary is-rounded",
    itens: itens_1
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "field"
  }, /*#__PURE__*/_react.default.createElement(_Select.default, {
    definition: "is-info is-rounded",
    itens: itens_1
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "field"
  }, /*#__PURE__*/_react.default.createElement(_Select.default, {
    definition: "is-success is-rounded",
    itens: itens_1
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "field"
  }, /*#__PURE__*/_react.default.createElement(_Select.default, {
    definition: "is-warning is-rounded",
    itens: itens_1
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "field"
  }, /*#__PURE__*/_react.default.createElement(_Select.default, {
    definition: "is-danger is-rounded",
    itens: itens_1
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "field"
  }, /*#__PURE__*/_react.default.createElement(_Select.default, {
    definition: "is-small",
    itens: itens_1
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "field"
  }, /*#__PURE__*/_react.default.createElement(_Select.default, {
    definition: "is-medium",
    itens: itens_1
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "field"
  }, /*#__PURE__*/_react.default.createElement(_Select.default, {
    definition: "is-large",
    itens: itens_1
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "field"
  }, /*#__PURE__*/_react.default.createElement(_Select.default, {
    definition: "is-primary",
    itens: itens_1
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "field"
  }, /*#__PURE__*/_react.default.createElement(_Select.default, {
    definition: "is-primary is-hovered",
    itens: itens_1
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "field"
  }, /*#__PURE__*/_react.default.createElement(_Select.default, {
    definition: "is-focused",
    itens: itens_1
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "field"
  }, /*#__PURE__*/_react.default.createElement(_Select.default, {
    definition: "is-loading",
    itens: itens_1
  })), /*#__PURE__*/_react.default.createElement(_Select.default, {
    definition: "is-multiple",
    itens: itens_1,
    multiple_size: "8"
  }), /*#__PURE__*/_react.default.createElement(_Control.default, {
    definition: "has-icons-left"
  }, /*#__PURE__*/_react.default.createElement(_Select.default, {
    definition: "is-small",
    itens: itens_1
  }), /*#__PURE__*/_react.default.createElement(_Icon.default, {
    definition: "is-small is-left",
    icon_name: "fas fa-globe"
  })), /*#__PURE__*/_react.default.createElement(_Control.default, {
    definition: "has-icons-left"
  }, /*#__PURE__*/_react.default.createElement(_Select.default, {
    definition: "is-medium",
    itens: itens_1
  }), /*#__PURE__*/_react.default.createElement(_Icon.default, {
    definition: "is-small is-left",
    icon_name: "fas fa-globe"
  })), /*#__PURE__*/_react.default.createElement(_Control.default, {
    definition: "has-icons-left"
  }, /*#__PURE__*/_react.default.createElement(_Select.default, {
    definition: "is-large is-focused",
    itens: itens_1
  }), /*#__PURE__*/_react.default.createElement(_Icon.default, {
    definition: "is-small is-left",
    icon_name: "fas fa-globe"
  })))).toJSON(); // componente com valor


  expect(componentWithValue).toMatchSnapshot();
});