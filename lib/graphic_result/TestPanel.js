"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _Panel = _interopRequireDefault(require("./components/Panel"));

var _Column = _interopRequireDefault(require("./components/Column"));

var _Columns = _interopRequireDefault(require("./components/Columns"));

require("bulma/css/bulma.css");

var _Button = _interopRequireDefault(require("./components/Button"));

var _CheckBox = _interopRequireDefault(require("./components/CheckBox"));

var onChange = function onChange() {
  alert("Changed");
};

var itens_tabs = [{
  value: "All",
  href: "www.facebook.com",
  onClick: function onClick() {
    alert("clicked All");
  },
  icon_definition: "is-warning",
  icon_name: "fas fa-home"
}, {
  value: "Public",
  href: "www.facebook.com",
  onClick: function onClick() {
    alert("clicked Public");
  },
  icon_definition: "is-danger",
  icon_name: "far fa-user"
}, {
  value: "Private",
  href: "www.facebook.com",
  onClick: function onClick() {
    alert("clicked Private");
  },
  icon_name: "fas fa-users"
}, {
  value: "Sources",
  href: "www.facebook.com",
  onClick: function onClick() {
    alert("clicked Sourcers");
  },
  icon_definition: "is-success",
  icon_name: "fas fa-hand-holding-usd"
}, {
  value: "Forks",
  href: "www.facebook.com",
  onClick: function onClick() {
    alert("clicked Forks");
  },
  icon_definition: "is-success",
  icon_name: "fas fa-hand-holding-usd"
}];
var itens_blocks = [{
  value: "Bulma",
  href: "www.facebook.com",
  onClick: function onClick() {
    alert("clicked Bulma");
  },
  icon_definition: "has-text-warning",
  icon_name: "fab fa-css3-alt"
}, {
  value: "Github",
  href: "www.facebook.com",
  onClick: function onClick() {
    alert("clicked Github");
  },
  icon_name: "fab fa-github"
}, {
  value: "Twitter",
  href: "www.facebook.com",
  onClick: function onClick() {
    alert("clicked Twitter");
  },
  icon_definition: "has-text-info",
  icon_name: "fab fa-twitter"
}, {
  value: "Facebook",
  href: "www.facebook.com",
  onClick: function onClick() {
    alert("clicked Facebooks");
  },
  icon_definition: "has-text-info",
  icon_name: "fab fa-facebook"
}, {
  value: /*#__PURE__*/_react.default.createElement(_CheckBox.default, {
    onClick: function onClick() {
      alert("Clicked checkbox");
    }
  }, "remember me")
}, {
  value: /*#__PURE__*/_react.default.createElement(_Button.default, {
    definition: "is-primary light fullwidth",
    onClick: function onClick() {
      alert("Clicou no botao");
    }
  }, " Reset All")
}];

_reactDom.default.render( /*#__PURE__*/_react.default.createElement(_Columns.default, null, /*#__PURE__*/_react.default.createElement(_Column.default, {
  definition: "is-two-fifths"
}, /*#__PURE__*/_react.default.createElement("div", {
  className: "container is-fluid"
}, /*#__PURE__*/_react.default.createElement(_Panel.default, {
  header: "Repositories",
  itens_tabs: itens_tabs,
  itens_blocks: itens_blocks,
  control_definition: "has-itens-right",
  search_placeholder: "Search",
  search_icon_definition: "has-text-info"
}), /*#__PURE__*/_react.default.createElement(_Panel.default, {
  header: "Primary",
  definition: "is-primary",
  itens_tabs: itens_tabs,
  itens_blocks: itens_blocks
}), /*#__PURE__*/_react.default.createElement(_Panel.default, {
  header: "Link",
  definition: "is-link",
  itens_tabs: itens_tabs,
  itens_blocks: itens_blocks
}), /*#__PURE__*/_react.default.createElement(_Panel.default, {
  header: "Info",
  definition: "is-info",
  itens_tabs: itens_tabs,
  itens_blocks: itens_blocks
}), /*#__PURE__*/_react.default.createElement(_Panel.default, {
  header: "Success",
  definition: "is-success",
  itens_tabs: itens_tabs,
  itens_blocks: itens_blocks
}), /*#__PURE__*/_react.default.createElement(_Panel.default, {
  header: "Warning",
  definition: "is-warning",
  itens_tabs: itens_tabs,
  itens_blocks: itens_blocks
}), /*#__PURE__*/_react.default.createElement(_Panel.default, {
  header: "Danger",
  definition: "is-danger",
  itens_tabs: itens_tabs,
  itens_blocks: itens_blocks
})))), document.getElementById('root'));