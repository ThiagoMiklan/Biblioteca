"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _react = _interopRequireWildcard(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

require("bulma/css/bulma.css");

var _MediaObject = _interopRequireDefault(require("./components/MediaObject"));

var _Icon = _interopRequireDefault(require("./components/Icon"));

var _Level = _interopRequireDefault(require("./components/Level"));

var _Columns = _interopRequireDefault(require("./components/Columns"));

var _Column = _interopRequireDefault(require("./components/Column"));

var itens = [{
  value: /*#__PURE__*/_react.default.createElement(_Icon.default, {
    definition: "is-small has-text-info",
    icon_name: "fas fa-reply"
  }),
  left: true,
  onClick: function onClick() {
    alert("Clicked");
  },
  key: 1
}, {
  value: /*#__PURE__*/_react.default.createElement(_Icon.default, {
    definition: "is-small has-text-info",
    icon_name: "fas fa-retweet"
  }),
  left: true,
  key: 2
}, {
  value: /*#__PURE__*/_react.default.createElement(_Icon.default, {
    definition: "is-small has-text-info",
    icon_name: "fas fa-heart"
  }),
  left: true,
  key: 3
}];

_reactDom.default.render( /*#__PURE__*/_react.default.createElement(_Columns.default, {
  definition: "is-multiline"
}, /*#__PURE__*/_react.default.createElement(_Column.default, {
  definition: "is-half is-spaced"
}, /*#__PURE__*/_react.default.createElement(_MediaObject.default, {
  itens: itens,
  src: "https://bulma.io/images/placeholders/128x128.png",
  image_definition: "is-64x64",
  level_definition: "is-mobile"
}, /*#__PURE__*/_react.default.createElement("p", null, /*#__PURE__*/_react.default.createElement("strong", null, "John Smith"), " ", /*#__PURE__*/_react.default.createElement("small", null, "@johnsmith"), " ", /*#__PURE__*/_react.default.createElement("small", null, "31m"), /*#__PURE__*/_react.default.createElement("br", null), "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.")))), document.getElementById("root"));