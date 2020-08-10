"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _react = _interopRequireWildcard(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

require("bulma/css/bulma.css");

var _Level = _interopRequireDefault(require("./components/Level"));

var _Button = _interopRequireDefault(require("./components/Button"));

var _Input = _interopRequireDefault(require("./components/Input"));

var _Control = _interopRequireDefault(require("./components/Control"));

var _Field = _interopRequireDefault(require("./components/Field"));

var itens = [{
  value: /*#__PURE__*/_react.default.createElement("p", {
    class: "subtitle is-5"
  }, /*#__PURE__*/_react.default.createElement("strong", null, "123"), " posts"),
  left: true
}, {
  value: /*#__PURE__*/_react.default.createElement(_Field.default, {
    definition: "has-addons"
  }, /*#__PURE__*/_react.default.createElement(_Control.default, null, /*#__PURE__*/_react.default.createElement(_Input.default, {
    type: "text",
    placeholder: "Find a post"
  })), /*#__PURE__*/_react.default.createElement(_Control.default, null, /*#__PURE__*/_react.default.createElement(_Button.default, null, " Search"))),
  left: true
}, {
  value: /*#__PURE__*/_react.default.createElement("div", {
    class: "field has-addons"
  }, /*#__PURE__*/_react.default.createElement("p", {
    class: "control"
  }, /*#__PURE__*/_react.default.createElement("input", {
    class: "input",
    type: "text",
    placeholder: "Find a post"
  })), /*#__PURE__*/_react.default.createElement("p", {
    class: "control"
  }, /*#__PURE__*/_react.default.createElement("button", {
    class: "button"
  }, "Search")))
}, {
  value: /*#__PURE__*/_react.default.createElement("strong", null, "All"),
  right: true
}, {
  value: /*#__PURE__*/_react.default.createElement("a", null, "Published"),
  right: true
}, {
  value: /*#__PURE__*/_react.default.createElement("a", null, "Drafts"),
  right: true
}, {
  value: /*#__PURE__*/_react.default.createElement("a", null, "Deleted"),
  right: true
}, {
  value: /*#__PURE__*/_react.default.createElement("a", {
    class: "button is-success"
  }, "New"),
  right: true
}];
var itens_center = [{
  value: /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("p", {
    class: "heading"
  }, "Tweets"), /*#__PURE__*/_react.default.createElement("p", {
    class: "title"
  }, "3,456"))
}, {
  value: /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("p", {
    class: "heading"
  }, "Following"), /*#__PURE__*/_react.default.createElement("p", {
    class: "title"
  }, "123"))
}, {
  value: /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("p", {
    class: "heading"
  }, "Followers"), /*#__PURE__*/_react.default.createElement("p", {
    class: "title"
  }, "456K"))
}, {
  value: /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("p", {
    class: "heading"
  }, "Likes"), /*#__PURE__*/_react.default.createElement("p", {
    class: "title"
  }, "789"))
}];
var itens_center_2 = [{
  value: /*#__PURE__*/_react.default.createElement("p", {
    class: "level-item has-text-centered"
  }, /*#__PURE__*/_react.default.createElement("a", {
    class: "link is-info"
  }, "Home"))
}, {
  value: /*#__PURE__*/_react.default.createElement("a", {
    class: "link is-info"
  }, "Menu"),
  definition: "has-text-centered"
}, {
  value: /*#__PURE__*/_react.default.createElement("img", {
    src: "https://bulma.io/images/bulma-type.png",
    alt: "",
    style: {
      height: "30px"
    }
  }),
  definition: "has-text-centered"
}, {
  value: /*#__PURE__*/_react.default.createElement("a", {
    class: "link is-info"
  }, "Reservations"),
  definition: "has-text-centered"
}, {
  value: /*#__PURE__*/_react.default.createElement("p", {
    class: "level-item has-text-centered"
  }, /*#__PURE__*/_react.default.createElement("a", {
    class: "link is-info"
  }, "Contact"))
}];

_reactDom.default.render( /*#__PURE__*/_react.default.createElement("div", {
  className: "container is-fluid"
}, /*#__PURE__*/_react.default.createElement(_Level.default, {
  itens: itens
}, " "), /*#__PURE__*/_react.default.createElement(_Level.default, {
  itens: itens_center,
  center: true
}), /*#__PURE__*/_react.default.createElement(_Level.default, {
  itens: itens_center_2,
  center: true
})), document.getElementById("root"));