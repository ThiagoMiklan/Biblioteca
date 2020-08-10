"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _Message = _interopRequireDefault(require("../components/Message.jsx"));

var _Columns = _interopRequireDefault(require("../components/Columns"));

var _Column = _interopRequireDefault(require("../components/Column"));

var _reactTestRenderer = _interopRequireDefault(require("react-test-renderer"));

var onClickDelete = function onClickDelete() {
  alert("Clicked delete");
};

test('message colors', function () {
  var message = _reactTestRenderer.default.create( /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_Message.default, {
    definition: "is-dark",
    onClickDelete: onClickDelete,
    delete: true,
    header: "Hello World"
  }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ", /*#__PURE__*/_react.default.createElement("strong", null, "Pellentesque risus mi"), ", tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum ", /*#__PURE__*/_react.default.createElement("a", null, "felis venenatis"), " efficitur. Aenean ac ", /*#__PURE__*/_react.default.createElement("em", null, "eleifend lacus"), ", in mollis lectus. Donec sodales, arcu et sollicitudin porttitor, tortor urna tempor ligula, id porttitor mi magna a neque. Donec dui urna, vehicula et sem eget, facilisis sodales sem."), /*#__PURE__*/_react.default.createElement(_Message.default, {
    definition: "is-primary",
    onClickDelete: onClickDelete,
    delete: true,
    header: "Hello World"
  }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ", /*#__PURE__*/_react.default.createElement("strong", null, "Pellentesque risus mi"), ", tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum ", /*#__PURE__*/_react.default.createElement("a", null, "felis venenatis"), " efficitur. Aenean ac ", /*#__PURE__*/_react.default.createElement("em", null, "eleifend lacus"), ", in mollis lectus. Donec sodales, arcu et sollicitudin porttitor, tortor urna tempor ligula, id porttitor mi magna a neque. Donec dui urna, vehicula et sem eget, facilisis sodales sem."), /*#__PURE__*/_react.default.createElement(_Message.default, {
    definition: "is-link",
    onClickDelete: onClickDelete,
    delete: true,
    header: "Hello World"
  }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ", /*#__PURE__*/_react.default.createElement("strong", null, "Pellentesque risus mi"), ", tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum ", /*#__PURE__*/_react.default.createElement("a", null, "felis venenatis"), " efficitur. Aenean ac ", /*#__PURE__*/_react.default.createElement("em", null, "eleifend lacus"), ", in mollis lectus. Donec sodales, arcu et sollicitudin porttitor, tortor urna tempor ligula, id porttitor mi magna a neque. Donec dui urna, vehicula et sem eget, facilisis sodales sem."), /*#__PURE__*/_react.default.createElement(_Message.default, {
    definition: "is-info",
    onClickDelete: onClickDelete,
    delete: true,
    header: "Hello World"
  }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ", /*#__PURE__*/_react.default.createElement("strong", null, "Pellentesque risus mi"), ", tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum ", /*#__PURE__*/_react.default.createElement("a", null, "felis venenatis"), " efficitur. Aenean ac ", /*#__PURE__*/_react.default.createElement("em", null, "eleifend lacus"), ", in mollis lectus. Donec sodales, arcu et sollicitudin porttitor, tortor urna tempor ligula, id porttitor mi magna a neque. Donec dui urna, vehicula et sem eget, facilisis sodales sem."), /*#__PURE__*/_react.default.createElement(_Message.default, {
    definition: "is-success",
    onClickDelete: onClickDelete,
    delete: true,
    header: "Hello World"
  }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ", /*#__PURE__*/_react.default.createElement("strong", null, "Pellentesque risus mi"), ", tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum ", /*#__PURE__*/_react.default.createElement("a", null, "felis venenatis"), " efficitur. Aenean ac ", /*#__PURE__*/_react.default.createElement("em", null, "eleifend lacus"), ", in mollis lectus. Donec sodales, arcu et sollicitudin porttitor, tortor urna tempor ligula, id porttitor mi magna a neque. Donec dui urna, vehicula et sem eget, facilisis sodales sem."), /*#__PURE__*/_react.default.createElement(_Message.default, {
    definition: "is-warning",
    onClickDelete: onClickDelete,
    delete: true,
    header: "Hello World"
  }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ", /*#__PURE__*/_react.default.createElement("strong", null, "Pellentesque risus mi"), ", tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum ", /*#__PURE__*/_react.default.createElement("a", null, "felis venenatis"), " efficitur. Aenean ac ", /*#__PURE__*/_react.default.createElement("em", null, "eleifend lacus"), ", in mollis lectus. Donec sodales, arcu et sollicitudin porttitor, tortor urna tempor ligula, id porttitor mi magna a neque. Donec dui urna, vehicula et sem eget, facilisis sodales sem."), /*#__PURE__*/_react.default.createElement(_Message.default, {
    definition: "is-danger",
    onClickDelete: onClickDelete,
    delete: true,
    header: "Hello World"
  }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ", /*#__PURE__*/_react.default.createElement("strong", null, "Pellentesque risus mi"), ", tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum ", /*#__PURE__*/_react.default.createElement("a", null, "felis venenatis"), " efficitur. Aenean ac ", /*#__PURE__*/_react.default.createElement("em", null, "eleifend lacus"), ", in mollis lectus. Donec sodales, arcu et sollicitudin porttitor, tortor urna tempor ligula, id porttitor mi magna a neque. Donec dui urna, vehicula et sem eget, facilisis sodales sem."))).toJSON();

  expect(message).toMatchSnapshot();
});
test('message colors without header', function () {
  var message = _reactTestRenderer.default.create( /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_Message.default, {
    definition: "is-dark",
    onClickDelete: onClickDelete,
    delete: true
  }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ", /*#__PURE__*/_react.default.createElement("strong", null, "Pellentesque risus mi"), ", tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum ", /*#__PURE__*/_react.default.createElement("a", null, "felis venenatis"), " efficitur. Aenean ac ", /*#__PURE__*/_react.default.createElement("em", null, "eleifend lacus"), ", in mollis lectus. Donec sodales, arcu et sollicitudin porttitor, tortor urna tempor ligula, id porttitor mi magna a neque. Donec dui urna, vehicula et sem eget, facilisis sodales sem."), /*#__PURE__*/_react.default.createElement(_Message.default, {
    definition: "is-primary",
    onClickDelete: onClickDelete,
    delete: true
  }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ", /*#__PURE__*/_react.default.createElement("strong", null, "Pellentesque risus mi"), ", tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum ", /*#__PURE__*/_react.default.createElement("a", null, "felis venenatis"), " efficitur. Aenean ac ", /*#__PURE__*/_react.default.createElement("em", null, "eleifend lacus"), ", in mollis lectus. Donec sodales, arcu et sollicitudin porttitor, tortor urna tempor ligula, id porttitor mi magna a neque. Donec dui urna, vehicula et sem eget, facilisis sodales sem."), /*#__PURE__*/_react.default.createElement(_Message.default, {
    definition: "is-link",
    onClickDelete: onClickDelete,
    delete: true
  }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ", /*#__PURE__*/_react.default.createElement("strong", null, "Pellentesque risus mi"), ", tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum ", /*#__PURE__*/_react.default.createElement("a", null, "felis venenatis"), " efficitur. Aenean ac ", /*#__PURE__*/_react.default.createElement("em", null, "eleifend lacus"), ", in mollis lectus. Donec sodales, arcu et sollicitudin porttitor, tortor urna tempor ligula, id porttitor mi magna a neque. Donec dui urna, vehicula et sem eget, facilisis sodales sem."), /*#__PURE__*/_react.default.createElement(_Message.default, {
    definition: "is-info",
    onClickDelete: onClickDelete,
    delete: true
  }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ", /*#__PURE__*/_react.default.createElement("strong", null, "Pellentesque risus mi"), ", tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum ", /*#__PURE__*/_react.default.createElement("a", null, "felis venenatis"), " efficitur. Aenean ac ", /*#__PURE__*/_react.default.createElement("em", null, "eleifend lacus"), ", in mollis lectus. Donec sodales, arcu et sollicitudin porttitor, tortor urna tempor ligula, id porttitor mi magna a neque. Donec dui urna, vehicula et sem eget, facilisis sodales sem."), /*#__PURE__*/_react.default.createElement(_Message.default, {
    definition: "is-success",
    onClickDelete: onClickDelete,
    delete: true
  }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ", /*#__PURE__*/_react.default.createElement("strong", null, "Pellentesque risus mi"), ", tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum ", /*#__PURE__*/_react.default.createElement("a", null, "felis venenatis"), " efficitur. Aenean ac ", /*#__PURE__*/_react.default.createElement("em", null, "eleifend lacus"), ", in mollis lectus. Donec sodales, arcu et sollicitudin porttitor, tortor urna tempor ligula, id porttitor mi magna a neque. Donec dui urna, vehicula et sem eget, facilisis sodales sem."), /*#__PURE__*/_react.default.createElement(_Message.default, {
    definition: "is-warning",
    onClickDelete: onClickDelete,
    delete: true
  }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ", /*#__PURE__*/_react.default.createElement("strong", null, "Pellentesque risus mi"), ", tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum ", /*#__PURE__*/_react.default.createElement("a", null, "felis venenatis"), " efficitur. Aenean ac ", /*#__PURE__*/_react.default.createElement("em", null, "eleifend lacus"), ", in mollis lectus. Donec sodales, arcu et sollicitudin porttitor, tortor urna tempor ligula, id porttitor mi magna a neque. Donec dui urna, vehicula et sem eget, facilisis sodales sem."), /*#__PURE__*/_react.default.createElement(_Message.default, {
    definition: "is-danger",
    onClickDelete: onClickDelete,
    delete: true
  }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ", /*#__PURE__*/_react.default.createElement("strong", null, "Pellentesque risus mi"), ", tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum ", /*#__PURE__*/_react.default.createElement("a", null, "felis venenatis"), " efficitur. Aenean ac ", /*#__PURE__*/_react.default.createElement("em", null, "eleifend lacus"), ", in mollis lectus. Donec sodales, arcu et sollicitudin porttitor, tortor urna tempor ligula, id porttitor mi magna a neque. Donec dui urna, vehicula et sem eget, facilisis sodales sem."))).toJSON();

  expect(message).toMatchSnapshot();
});
test('message sizes', function () {
  var message = _reactTestRenderer.default.create( /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_Message.default, {
    definition: "is-small",
    onClickDelete: onClickDelete,
    delete: true,
    header: "Hello World"
  }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ", /*#__PURE__*/_react.default.createElement("strong", null, "Pellentesque risus mi"), ", tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum ", /*#__PURE__*/_react.default.createElement("a", null, "felis venenatis"), " efficitur. Aenean ac ", /*#__PURE__*/_react.default.createElement("em", null, "eleifend lacus"), ", in mollis lectus. Donec sodales, arcu et sollicitudin porttitor, tortor urna tempor ligula, id porttitor mi magna a neque. Donec dui urna, vehicula et sem eget, facilisis sodales sem."), /*#__PURE__*/_react.default.createElement(_Message.default, {
    onClickDelete: onClickDelete,
    delete: true,
    header: "Hello World"
  }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ", /*#__PURE__*/_react.default.createElement("strong", null, "Pellentesque risus mi"), ", tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum ", /*#__PURE__*/_react.default.createElement("a", null, "felis venenatis"), " efficitur. Aenean ac ", /*#__PURE__*/_react.default.createElement("em", null, "eleifend lacus"), ", in mollis lectus. Donec sodales, arcu et sollicitudin porttitor, tortor urna tempor ligula, id porttitor mi magna a neque. Donec dui urna, vehicula et sem eget, facilisis sodales sem."), /*#__PURE__*/_react.default.createElement(_Message.default, {
    definition: "is-medium",
    onClickDelete: onClickDelete,
    delete: true,
    header: "Hello World"
  }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ", /*#__PURE__*/_react.default.createElement("strong", null, "Pellentesque risus mi"), ", tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum ", /*#__PURE__*/_react.default.createElement("a", null, "felis venenatis"), " efficitur. Aenean ac ", /*#__PURE__*/_react.default.createElement("em", null, "eleifend lacus"), ", in mollis lectus. Donec sodales, arcu et sollicitudin porttitor, tortor urna tempor ligula, id porttitor mi magna a neque. Donec dui urna, vehicula et sem eget, facilisis sodales sem."), /*#__PURE__*/_react.default.createElement(_Message.default, {
    definition: "is-large",
    onClickDelete: onClickDelete,
    delete: true,
    header: "Hello World"
  }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ", /*#__PURE__*/_react.default.createElement("strong", null, "Pellentesque risus mi"), ", tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum ", /*#__PURE__*/_react.default.createElement("a", null, "felis venenatis"), " efficitur. Aenean ac ", /*#__PURE__*/_react.default.createElement("em", null, "eleifend lacus"), ", in mollis lectus. Donec sodales, arcu et sollicitudin porttitor, tortor urna tempor ligula, id porttitor mi magna a neque. Donec dui urna, vehicula et sem eget, facilisis sodales sem."))).toJSON();

  expect(message).toMatchSnapshot();
});