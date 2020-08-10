"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _Notification = _interopRequireDefault(require("../components/Notification"));

var _reactTestRenderer = _interopRequireDefault(require("react-test-renderer"));

//  ALERTA: NOTIFICATION IS-LIGHT NÃO FUNCIONANDO, NEM COM O CÓDIGO DA DOCUMENTAÇÃO BULMA
function onClick() {
  alert("testando delete");
}

test('test colors light notification', function () {
  var notifications_light = _reactTestRenderer.default.create( /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_Notification.default, {
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
  }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit lorem ipsum dolor. ", /*#__PURE__*/_react.default.createElement("strong", null, "Pellentesque risus mi"), ", tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum ", /*#__PURE__*/_react.default.createElement("a", null, "felis venenatis"), " efficitur. Sit amet, consectetur adipiscing elit"))).toJSON();

  expect(notifications_light).toMatchSnapshot();
});
test('test colors notification', function () {
  var notifications = _reactTestRenderer.default.create( /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_Notification.default, null, "Notification delete=", true, " onClickDelete =", onClick, "> \"Primar lorem ipsum dolor sit amet, consectetur adipiscing elit lorem ipsum dolor. ", /*#__PURE__*/_react.default.createElement("strong", null, "Pellentesque risus mi"), ", tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum ", /*#__PURE__*/_react.default.createElement("a", null, "felis venenatis"), " efficitur. Sit amet, consectetur adipiscing elit\""), /*#__PURE__*/_react.default.createElement(_Notification.default, {
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
  }, "\"Primar lorem ipsum dolor sit amet, consectetur adipiscing elit lorem ipsum dolor. ", /*#__PURE__*/_react.default.createElement("strong", null, "Pellentesque risus mi"), ", tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum ", /*#__PURE__*/_react.default.createElement("a", null, "felis venenatis"), " efficitur. Sit amet, consectetur adipiscing elit\""), /*#__PURE__*/_react.default.createElement("br", null))).toJSON();

  expect(notifications).toMatchSnapshot();
});