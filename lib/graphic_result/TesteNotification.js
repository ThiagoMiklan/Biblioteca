"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _react = _interopRequireWildcard(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

require("bulma/css/bulma.css");

var _Notification = _interopRequireDefault(require("./components/Notification"));

var onClick = function onClick() {
  alert("Clicked");
};

_reactDom.default.render( /*#__PURE__*/_react.default.createElement("div", {
  className: "container is-fluid"
}, /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement(_Notification.default, {
  delete: true,
  onClickDelete: onClick
}, "\"Primar lorem ipsum dolor sit amet, consectetur adipiscing elit lorem ipsum dolor. ", /*#__PURE__*/_react.default.createElement("strong", null, "Pellentesque risus mi"), ", tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum ", /*#__PURE__*/_react.default.createElement("a", null, "felis venenatis"), " efficitur. Sit amet, consectetur adipiscing elit\""), /*#__PURE__*/_react.default.createElement(_Notification.default, {
  definition: "is-primary",
  delete: true
}, "\"Primar lorem ipsum dolor sit amet, consectetur adipiscing elit lorem ipsum dolor. ", /*#__PURE__*/_react.default.createElement("strong", null, "Pellentesque risus mi"), ", tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum ", /*#__PURE__*/_react.default.createElement("a", null, "felis venenatis"), " efficitur. Sit amet, consectetur adipiscing elit\""), /*#__PURE__*/_react.default.createElement(_Notification.default, {
  definition: "is-link",
  delete: true
}, "\"Primar lorem ipsum dolor sit amet, consectetur adipiscing elit lorem ipsum dolor. ", /*#__PURE__*/_react.default.createElement("strong", null, "Pellentesque risus mi"), ", tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum ", /*#__PURE__*/_react.default.createElement("a", null, "felis venenatis"), " efficitur. Sit amet, consectetur adipiscing elit\""), /*#__PURE__*/_react.default.createElement(_Notification.default, {
  definition: "is-info",
  delete: true
}, "\"Primar lorem ipsum dolor sit amet, consectetur adipiscing elit lorem ipsum dolor. ", /*#__PURE__*/_react.default.createElement("strong", null, "Pellentesque risus mi"), ", tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum ", /*#__PURE__*/_react.default.createElement("a", null, "felis venenatis"), " efficitur. Sit amet, consectetur adipiscing elit\""), /*#__PURE__*/_react.default.createElement(_Notification.default, {
  definition: "is-success",
  delete: true
}, "\"Primar lorem ipsum dolor sit amet, consectetur adipiscing elit lorem ipsum dolor. ", /*#__PURE__*/_react.default.createElement("strong", null, "Pellentesque risus mi"), ", tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum ", /*#__PURE__*/_react.default.createElement("a", null, "felis venenatis"), " efficitur. Sit amet, consectetur adipiscing elit\""), /*#__PURE__*/_react.default.createElement(_Notification.default, {
  definition: "is-warning",
  delete: true
}, "\"Primar lorem ipsum dolor sit amet, consectetur adipiscing elit lorem ipsum dolor. ", /*#__PURE__*/_react.default.createElement("strong", null, "Pellentesque risus mi"), ", tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum ", /*#__PURE__*/_react.default.createElement("a", null, "felis venenatis"), " efficitur. Sit amet, consectetur adipiscing elit\""), /*#__PURE__*/_react.default.createElement(_Notification.default, {
  definition: "is-danger",
  delete: true
}, "\"Primar lorem ipsum dolor sit amet, consectetur adipiscing elit lorem ipsum dolor. ", /*#__PURE__*/_react.default.createElement("strong", null, "Pellentesque risus mi"), ", tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum ", /*#__PURE__*/_react.default.createElement("a", null, "felis venenatis"), " efficitur. Sit amet, consectetur adipiscing elit\""), /*#__PURE__*/_react.default.createElement(_Notification.default, null, "\"Primar lorem ipsum dolor sit amet, consectetur adipiscing elit lorem ipsum dolor. ", /*#__PURE__*/_react.default.createElement("strong", null, "Pellentesque risus mi"), ", tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum ", /*#__PURE__*/_react.default.createElement("a", null, "felis venenatis"), " efficitur. Sit amet, consectetur adipiscing elit\""), /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement(_Notification.default, {
  delete: true,
  onClickDelete: onClick
}, "\"Primar lorem ipsum dolor sit amet, consectetur adipiscing elit lorem ipsum dolor. ", /*#__PURE__*/_react.default.createElement("strong", null, "Pellentesque risus mi"), ", tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum ", /*#__PURE__*/_react.default.createElement("a", null, "felis venenatis"), " efficitur. Sit amet, consectetur adipiscing elit\""), /*#__PURE__*/_react.default.createElement("br", null)), document.getElementById("root"));