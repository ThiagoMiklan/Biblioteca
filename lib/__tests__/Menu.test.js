"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _Menu = _interopRequireDefault(require("../components/Menu.jsx"));

var _MenuItem = _interopRequireDefault(require("../components/MenuItem.jsx"));

var _reactTestRenderer = _interopRequireDefault(require("react-test-renderer"));

var onClickItem = function onClickItem() {
  alert("Clicou");
};

var itens_general = [{
  value: "General"
}, {
  value: "Dashboard"
}];
var itens_adm = [{
  value: "Team Settings"
}, {
  value: "Manage your team",
  definition: "is-active",
  sub_itens: [{
    value: "Members"
  }, {
    value: "Plugins"
  }, {
    value: "Add a member"
  }]
}, {
  value: "Invitations"
}, {
  value: "Cloud Storage Environment Settings"
}, {
  value: "Authentication"
}];
var itens_tran = [{
  value: "Payments"
}, {
  value: "Transfer"
}, {
  value: "Balance"
}];
test('menu', function () {
  var menu = _reactTestRenderer.default.create( /*#__PURE__*/_react.default.createElement(_Menu.default, null, /*#__PURE__*/_react.default.createElement(_MenuItem.default, {
    itens: itens_general,
    label: "General"
  }), /*#__PURE__*/_react.default.createElement(_MenuItem.default, {
    itens: itens_adm,
    label: "Administration"
  }), /*#__PURE__*/_react.default.createElement(_MenuItem.default, {
    itens: itens_tran,
    label: "Transactions"
  }))).toJSON();

  expect(menu).toMatchSnapshot();
});