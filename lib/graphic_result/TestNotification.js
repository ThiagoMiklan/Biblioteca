"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _react = _interopRequireWildcard(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

require("bulma/css/bulma.css");

var _Notification = _interopRequireDefault(require("./components/Notification"));

function onClick() {
  alert("testando delete");
}

var itens = ["coffee", "tea", "milk"];

_reactDom.default.render( /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_Notification.default, {
  delete: true,
  onClickDelete: onClick
}, "Lorem ipsum dolor sit amet, consectetur adipiscing elit lorem ipsum dolor. ", /*#__PURE__*/_react.default.createElement("strong", null, "Pellentesque risus mi"), ", tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum ", /*#__PURE__*/_react.default.createElement("a", null, "felis venenatis"), " efficitur. Sit amet, consectetur adipiscing elit"), /*#__PURE__*/_react.default.createElement(_Notification.default, {
  definition: "is-primary",
  delete: true,
  onClickDelete: onClick
}, "Lorem ipsum dolor sit amet, consectetur adipiscing elit lorem ipsum dolor. ", /*#__PURE__*/_react.default.createElement("strong", null, "Pellentesque risus mi"), ", tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum ", /*#__PURE__*/_react.default.createElement("a", null, "felis venenatis"), " efficitur. Sit amet, consectetur adipiscing elit"), /*#__PURE__*/_react.default.createElement(_Notification.default, {
  definition: "is-link",
  delete: true,
  onClickDelete: onClick
}, "Lorem ipsum dolor sit amet, consectetur adipiscing elit lorem ipsum dolor. ", /*#__PURE__*/_react.default.createElement("strong", null, "Pellentesque risus mi"), ", tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum ", /*#__PURE__*/_react.default.createElement("a", null, "felis venenatis"), " efficitur. Sit amet, consectetur adipiscing elit"), /*#__PURE__*/_react.default.createElement(_Notification.default, {
  definition: "is-info",
  delete: true,
  onClickDelete: onClick
}, "Lorem ipsum dolor sit amet, consectetur adipiscing elit lorem ipsum dolor. ", /*#__PURE__*/_react.default.createElement("strong", null, "Pellentesque risus mi"), ", tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum ", /*#__PURE__*/_react.default.createElement("a", null, "felis venenatis"), " efficitur. Sit amet, consectetur adipiscing elit"), /*#__PURE__*/_react.default.createElement(_Notification.default, {
  definition: "is-success",
  delete: true,
  onClickDelete: onClick
}, "Lorem ipsum dolor sit amet, consectetur adipiscing elit lorem ipsum dolor. ", /*#__PURE__*/_react.default.createElement("strong", null, "Pellentesque risus mi"), ", tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum ", /*#__PURE__*/_react.default.createElement("a", null, "felis venenatis"), " efficitur. Sit amet, consectetur adipiscing elit"), /*#__PURE__*/_react.default.createElement(_Notification.default, {
  definition: "is-warning",
  delete: true,
  onClickDelete: onClick
}, "Lorem ipsum dolor sit amet, consectetur adipiscing elit lorem ipsum dolor. ", /*#__PURE__*/_react.default.createElement("strong", null, "Pellentesque risus mi"), ", tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum ", /*#__PURE__*/_react.default.createElement("a", null, "felis venenatis"), " efficitur. Sit amet, consectetur adipiscing elit"), /*#__PURE__*/_react.default.createElement(_Notification.default, {
  definition: "is-danger",
  delete: true,
  onClickDelete: onClick
}, "Lorem ipsum dolor sit amet, consectetur adipiscing elit lorem ipsum dolor. ", /*#__PURE__*/_react.default.createElement("strong", null, "Pellentesque risus mi"), ", tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum ", /*#__PURE__*/_react.default.createElement("a", null, "felis venenatis"), " efficitur. Sit amet, consectetur adipiscing elit"), /*#__PURE__*/_react.default.createElement(_Notification.default, {
  definition: "is-primary is-light",
  delete: true,
  onClickDelete: onClick
}, "Lorem ipsum dolor sit amet, consectetur adipiscing elit lorem ipsum dolor. ", /*#__PURE__*/_react.default.createElement("strong", null, "Pellentesque risus mi"), ", tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum ", /*#__PURE__*/_react.default.createElement("a", null, "felis venenatis"), " efficitur. Sit amet, consectetur adipiscing elit"), /*#__PURE__*/_react.default.createElement(_Notification.default, {
  definition: "is-link is-light",
  delete: true,
  onClickDelete: onClick
}, "Lorem ipsum dolor sit amet, consectetur adipiscing elit lorem ipsum dolor. ", /*#__PURE__*/_react.default.createElement("strong", null, "Pellentesque risus mi"), ", tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum ", /*#__PURE__*/_react.default.createElement("a", null, "felis venenatis"), " efficitur. Sit amet, consectetur adipiscing elit"), /*#__PURE__*/_react.default.createElement(_Notification.default, {
  definition: "is-info is-light",
  delete: true,
  onClickDelete: onClick
}, "Lorem ipsum dolor sit amet, consectetur adipiscing elit lorem ipsum dolor. ", /*#__PURE__*/_react.default.createElement("strong", null, "Pellentesque risus mi"), ", tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum ", /*#__PURE__*/_react.default.createElement("a", null, "felis venenatis"), " efficitur. Sit amet, consectetur adipiscing elit"), /*#__PURE__*/_react.default.createElement(_Notification.default, {
  definition: "is-success is-light",
  delete: true,
  onClickDelete: onClick
}, "Lorem ipsum dolor sit amet, consectetur adipiscing elit lorem ipsum dolor. ", /*#__PURE__*/_react.default.createElement("strong", null, "Pellentesque risus mi"), ", tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum ", /*#__PURE__*/_react.default.createElement("a", null, "felis venenatis"), " efficitur. Sit amet, consectetur adipiscing elit"), /*#__PURE__*/_react.default.createElement(_Notification.default, {
  definition: "is-warning is-light",
  delete: true,
  onClickDelete: onClick
}, "Lorem ipsum dolor sit amet, consectetur adipiscing elit lorem ipsum dolor. ", /*#__PURE__*/_react.default.createElement("strong", null, "Pellentesque risus mi"), ", tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum ", /*#__PURE__*/_react.default.createElement("a", null, "felis venenatis"), " efficitur. Sit amet, consectetur adipiscing elit"), /*#__PURE__*/_react.default.createElement(_Notification.default, {
  definition: "is-danger is-light",
  delete: true,
  onClickDelete: onClick
}, "Lorem ipsum dolor sit amet, consectetur adipiscing elit lorem ipsum dolor. ", /*#__PURE__*/_react.default.createElement("strong", null, "Pellentesque risus mi"), ", tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum ", /*#__PURE__*/_react.default.createElement("a", null, "felis venenatis"), " efficitur. Sit amet, consectetur adipiscing elit"), /*#__PURE__*/_react.default.createElement("div", {
  class: "notification is-primary is-light"
}, /*#__PURE__*/_react.default.createElement("button", {
  class: "delete"
}), "Primar lorem ipsum dolor sit amet, consectetur adipiscing elit lorem ipsum dolor. ", /*#__PURE__*/_react.default.createElement("strong", null, "Pellentesque risus mi"), ", tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum ", /*#__PURE__*/_react.default.createElement("a", null, "felis venenatis"), " efficitur. Sit amet, consectetur adipiscing elit")), document.getElementById("root"));