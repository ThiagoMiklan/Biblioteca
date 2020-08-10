"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _Content = _interopRequireDefault(require("../components/Content"));

var _reactTestRenderer = _interopRequireDefault(require("react-test-renderer"));

var _List = _interopRequireDefault(require("../components/List"));

test('test with list', function () {});
test('teste content small', function () {
  var content = _reactTestRenderer.default.create( /*#__PURE__*/_react.default.createElement(_Content.default, {
    definition: "small"
  }, /*#__PURE__*/_react.default.createElement("h1", null, "Hello World"), /*#__PURE__*/_react.default.createElement("p", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla accumsan, metus ultrices eleifend gravida, nulla nunc varius lectus, nec rutrum justo nibh eu lectus. Ut vulputate semper dui. Fusce erat odio, sollicitudin vel erat vel, interdum mattis neque."), /*#__PURE__*/_react.default.createElement("h2", null, "Second Level"), /*#__PURE__*/_react.default.createElement("p", null, "Curabitur accumsan turpis pharetra ", /*#__PURE__*/_react.default.createElement("strong", null, "augue tincidunt"), "blandit. Quisque condimentum maximus mi, sit amet commodo arcu rutrum id. Proin pretium urna vel cursus venenatis. Suspendisse potenti. Etiam mattis sem rhoncus lacus dapibus facilisis. Donec at dignissim dui. Ut et neque nisl."), /*#__PURE__*/_react.default.createElement("ul", null, /*#__PURE__*/_react.default.createElement("li", null, "In fermentum leo eu lectus mollis, quis dictum mi aliquet."), /*#__PURE__*/_react.default.createElement("li", null, "In fermentum leo eu lectus mollis, quis dictum mi aliquet."), /*#__PURE__*/_react.default.createElement("li", null, "Aliquam nec felis in sapien venenatis viverra fermentum nec lectus."), /*#__PURE__*/_react.default.createElement("li", null, "Ut non enim metus.")))).toJSON();

  expect(content).toMatchSnapshot();
});
test('teste content medium', function () {
  var content = _reactTestRenderer.default.create( /*#__PURE__*/_react.default.createElement(_Content.default, {
    definition: "is-medium"
  }, /*#__PURE__*/_react.default.createElement("h1", null, "Hello World"), /*#__PURE__*/_react.default.createElement("p", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla accumsan, metus ultrices eleifend gravida, nulla nunc varius lectus, nec rutrum justo nibh eu lectus. Ut vulputate semper dui. Fusce erat odio, sollicitudin vel erat vel, interdum mattis neque."), /*#__PURE__*/_react.default.createElement("h2", null, "Second Level"), /*#__PURE__*/_react.default.createElement("p", null, "Curabitur accumsan turpis pharetra ", /*#__PURE__*/_react.default.createElement("strong", null, "augue tincidunt"), "blandit. Quisque condimentum maximus mi, sit amet commodo arcu rutrum id. Proin pretium urna vel cursus venenatis. Suspendisse potenti. Etiam mattis sem rhoncus lacus dapibus facilisis. Donec at dignissim dui. Ut et neque nisl."), /*#__PURE__*/_react.default.createElement("ul", null, /*#__PURE__*/_react.default.createElement("li", null, "In fermentum leo eu lectus mollis, quis dictum mi aliquet."), /*#__PURE__*/_react.default.createElement("li", null, "In fermentum leo eu lectus mollis, quis dictum mi aliquet."), /*#__PURE__*/_react.default.createElement("li", null, "Aliquam nec felis in sapien venenatis viverra fermentum nec lectus."), /*#__PURE__*/_react.default.createElement("li", null, "Ut non enim metus.")))).toJSON();

  expect(content).toMatchSnapshot();
});
test('teste content large', function () {
  var content = _reactTestRenderer.default.create( /*#__PURE__*/_react.default.createElement(_Content.default, {
    definition: "is-large"
  }, /*#__PURE__*/_react.default.createElement("h1", null, "Hello World"), /*#__PURE__*/_react.default.createElement("p", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla accumsan, metus ultrices eleifend gravida, nulla nunc varius lectus, nec rutrum justo nibh eu lectus. Ut vulputate semper dui. Fusce erat odio, sollicitudin vel erat vel, interdum mattis neque."), /*#__PURE__*/_react.default.createElement("h2", null, "Second Level"), /*#__PURE__*/_react.default.createElement("p", null, "Curabitur accumsan turpis pharetra ", /*#__PURE__*/_react.default.createElement("strong", null, "augue tincidunt"), "blandit. Quisque condimentum maximus mi, sit amet commodo arcu rutrum id. Proin pretium urna vel cursus venenatis. Suspendisse potenti. Etiam mattis sem rhoncus lacus dapibus facilisis. Donec at dignissim dui. Ut et neque nisl."), /*#__PURE__*/_react.default.createElement("ul", null, /*#__PURE__*/_react.default.createElement("li", null, "In fermentum leo eu lectus mollis, quis dictum mi aliquet."), /*#__PURE__*/_react.default.createElement("li", null, "In fermentum leo eu lectus mollis, quis dictum mi aliquet."), /*#__PURE__*/_react.default.createElement("li", null, "Aliquam nec felis in sapien venenatis viverra fermentum nec lectus."), /*#__PURE__*/_react.default.createElement("li", null, "Ut non enim metus.")))).toJSON();

  expect(content).toMatchSnapshot();
});