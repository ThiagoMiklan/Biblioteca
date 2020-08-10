"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _Button = _interopRequireDefault(require("../components/Button"));

var _ButtonList = _interopRequireDefault(require("../components/ButtonList"));

var _Icon = _interopRequireDefault(require("../components/Icon"));

var _reactTestRenderer = _interopRequireDefault(require("react-test-renderer"));

var _Columns = _interopRequireDefault(require("../components/Columns"));

var _Column = _interopRequireDefault(require("../components/Column"));

function onClick() {
  alert(testando);
}

test('value correctly', function () {
  var componentWithValue = _reactTestRenderer.default.create( /*#__PURE__*/_react.default.createElement(_Button.default, {
    value: "Facebook"
  })).toJSON(); // componente com valor


  expect(componentWithValue).toMatchSnapshot(); // componente sem valor

  var componentWithoutValue = _reactTestRenderer.default.create( /*#__PURE__*/_react.default.createElement(_Button.default, null)).toJSON();

  expect(componentWithoutValue).toMatchSnapshot();
}); // testa se as cores estão corretas, cores simples sem características adicionais

test('color correctly', function () {
  var simple_color = _reactTestRenderer.default.create( /*#__PURE__*/_react.default.createElement(_ButtonList.default, null, /*#__PURE__*/_react.default.createElement(_Button.default, null, "Testando"), /*#__PURE__*/_react.default.createElement(_Button.default, {
    definition: "is-primary"
  }, "Primary"), /*#__PURE__*/_react.default.createElement(_Button.default, {
    definition: "is-link"
  }, " Link"), /*#__PURE__*/_react.default.createElement(_Button.default, {
    definition: "is-info"
  }, " Info"), /*#__PURE__*/_react.default.createElement(_Button.default, {
    definition: "is-success"
  }, " Success"), /*#__PURE__*/_react.default.createElement(_Button.default, {
    definition: "is-warning"
  }, " Warning"), /*#__PURE__*/_react.default.createElement(_Button.default, {
    definition: "is-danger"
  }, " Danger"))).toJSON();

  expect(simple_color).toMatchSnapshot();
}); // testa se as cores estão corretas, cores secundárias dos botões

test('color secundary correctly', function () {
  var secundary_color = _reactTestRenderer.default.create( /*#__PURE__*/_react.default.createElement(_ButtonList.default, null, /*#__PURE__*/_react.default.createElement(_Button.default, {
    definition: "is-white"
  }, " White"), /*#__PURE__*/_react.default.createElement(_Button.default, {
    definition: "is-light"
  }, " Light"), /*#__PURE__*/_react.default.createElement(_Button.default, {
    definition: "is-dark"
  }, " Dark"), /*#__PURE__*/_react.default.createElement(_Button.default, {
    definition: "is-black"
  }, " Black"), /*#__PURE__*/_react.default.createElement(_Button.default, {
    definition: "is-text"
  }, " Text"))).toJSON();

  expect(secundary_color).toMatchSnapshot();
}); // testa se as cores estão corretas, cores com característica claras

test('colors light correctly', function () {
  var light_color = _reactTestRenderer.default.create( /*#__PURE__*/_react.default.createElement(_ButtonList.default, null, /*#__PURE__*/_react.default.createElement(_Button.default, {
    definition: "is-primary is-light"
  }, " primary light"), /*#__PURE__*/_react.default.createElement(_Button.default, {
    definition: "is-link is-light"
  }, " link light"), /*#__PURE__*/_react.default.createElement(_Button.default, {
    definition: "is-info is-light"
  }, " info light"), /*#__PURE__*/_react.default.createElement(_Button.default, {
    definition: "is-success is-light"
  }, " success light"), /*#__PURE__*/_react.default.createElement(_Button.default, {
    definition: "is-warning is-light"
  }, " warning light"), /*#__PURE__*/_react.default.createElement(_Button.default, {
    definition: "is-danger is-light"
  }, " danger light"))).toJSON();

  expect(light_color).toMatchSnapshot();
}); // testa se os tamanhos dos botões estão corretos

test('buttons size correctly', function () {
  var light_color = _reactTestRenderer.default.create( /*#__PURE__*/_react.default.createElement(_ButtonList.default, null, /*#__PURE__*/_react.default.createElement(_Button.default, {
    definition: "button is-small"
  }, " Small"), /*#__PURE__*/_react.default.createElement(_Button.default, null, " Normal"), /*#__PURE__*/_react.default.createElement(_Button.default, {
    definition: "button is-medium"
  }, " Medium"), /*#__PURE__*/_react.default.createElement(_Button.default, {
    definition: "button is-large"
  }, " Large"))).toJSON();

  expect(light_color).toMatchSnapshot();
}); // testa se os tamanhos dos botões estão corretos

test('button list size correctly', function () {
  var small = _reactTestRenderer.default.create( /*#__PURE__*/_react.default.createElement(_ButtonList.default, {
    definition: "are-small"
  }, /*#__PURE__*/_react.default.createElement(_Button.default, null, " Testando"), /*#__PURE__*/_react.default.createElement(_Button.default, null, " Testando"), /*#__PURE__*/_react.default.createElement(_Button.default, null, " Testando"))).toJSON();

  expect(small).toMatchSnapshot();

  var medium = _reactTestRenderer.default.create( /*#__PURE__*/_react.default.createElement(_ButtonList.default, {
    definition: "are-medium"
  }, /*#__PURE__*/_react.default.createElement(_Button.default, null, " Testando"), /*#__PURE__*/_react.default.createElement(_Button.default, null, " Testando"), /*#__PURE__*/_react.default.createElement(_Button.default, null, " Testando"))).toJSON();

  expect(medium).toMatchSnapshot();

  var large = _reactTestRenderer.default.create( /*#__PURE__*/_react.default.createElement(_ButtonList.default, {
    definition: "are-large"
  }, /*#__PURE__*/_react.default.createElement(_Button.default, null, " Testando"), /*#__PURE__*/_react.default.createElement(_Button.default, null, " Testando"), /*#__PURE__*/_react.default.createElement(_Button.default, null, " Testando"))).toJSON();

  expect(large).toMatchSnapshot();
}); // testa se a característica fullwidth está correta

test('fullwidth  correctly', function () {
  var fullwidth = _reactTestRenderer.default.create( /*#__PURE__*/_react.default.createElement(_Columns.default, null, /*#__PURE__*/_react.default.createElement(_Column.default, {
    definition: "is-half"
  }, /*#__PURE__*/_react.default.createElement(_Button.default, {
    definition: "is-small is-fullwidth"
  }, " small fullwidth"), /*#__PURE__*/_react.default.createElement(_Button.default, {
    definition: "is-fullwidth"
  }, " normal fullwidth"), /*#__PURE__*/_react.default.createElement(_Button.default, {
    definition: "is-medium is-fullwidth"
  }, " medium fullwidth"), /*#__PURE__*/_react.default.createElement(_Button.default, {
    definition: "is-large is-fullwidth"
  }, " large fullwidth")))).toJSON();

  expect(fullwidth).toMatchSnapshot();
}); // testa se a característica outlined está correta

test('outlined  correctly', function () {
  var outlined = _reactTestRenderer.default.create( /*#__PURE__*/_react.default.createElement(_ButtonList.default, null, /*#__PURE__*/_react.default.createElement(_Button.default, {
    definition: "is-primary is-outlined"
  }, " primary outlined"), /*#__PURE__*/_react.default.createElement(_Button.default, {
    definition: "is-link is-outlined"
  }, " link outlined"), /*#__PURE__*/_react.default.createElement(_Button.default, {
    definition: "is-info is-outlined"
  }, " info outlined"), /*#__PURE__*/_react.default.createElement(_Button.default, {
    definition: "is-success is-outlined"
  }, " success outlined"), /*#__PURE__*/_react.default.createElement(_Button.default, {
    definition: "is-warning is-outlined"
  }, " warning outlined"), /*#__PURE__*/_react.default.createElement(_Button.default, {
    definition: "is-danger is-outlined"
  }, " danger outlined"))).toJSON();

  expect(outlined).toMatchSnapshot();
}); // testa se a característica inverted está correta

test('inverted  correctly', function () {
  var inverted = _reactTestRenderer.default.create( /*#__PURE__*/_react.default.createElement(_ButtonList.default, {
    definition: "is-primary"
  }, /*#__PURE__*/_react.default.createElement(_Button.default, {
    definition: "is-primary is-inverted"
  }, " primary inverted"), /*#__PURE__*/_react.default.createElement(_Button.default, {
    definition: "is-link is-inverted"
  }, " link inverted"), /*#__PURE__*/_react.default.createElement(_Button.default, {
    definition: "is-info is-inverted"
  }, " info inverted"), /*#__PURE__*/_react.default.createElement(_Button.default, {
    definition: "is-success is-inverted"
  }, " success inverted"), /*#__PURE__*/_react.default.createElement(_Button.default, {
    definition: "is-danger is-inverted"
  }, " danger inverted"))).toJSON();

  expect(inverted).toMatchSnapshot();
}); // testa se a característica rounded está correta

test('rounded  correctly', function () {
  var rounded = _reactTestRenderer.default.create( /*#__PURE__*/_react.default.createElement(_ButtonList.default, null, /*#__PURE__*/_react.default.createElement(_Button.default, {
    definition: "is-primary is-rounded"
  }, " primary rounded"), /*#__PURE__*/_react.default.createElement(_Button.default, {
    definition: "is-link is-rounded"
  }, " link rounded"), /*#__PURE__*/_react.default.createElement(_Button.default, {
    definition: "is-info is-rounded"
  }, " info rounded"), /*#__PURE__*/_react.default.createElement(_Button.default, {
    definition: "is-success is-rounded"
  }, " success rounded"), /*#__PURE__*/_react.default.createElement(_Button.default, {
    definition: "is-warning is-rounded"
  }, " warning rounded"), /*#__PURE__*/_react.default.createElement(_Button.default, {
    definition: "is-danger is-rounded"
  }, " danger rounded"))).toJSON();

  expect(rounded).toMatchSnapshot();
}); // testa os estados

test('state  correctly', function () {
  var hovered = _reactTestRenderer.default.create( /*#__PURE__*/_react.default.createElement(_ButtonList.default, null, /*#__PURE__*/_react.default.createElement(_Button.default, null, " Testando"), /*#__PURE__*/_react.default.createElement(_Button.default, {
    definition: "is-primary is-hovered"
  }, " Testando"), /*#__PURE__*/_react.default.createElement(_Button.default, {
    definition: "is-link is-hovered"
  }, " Testando"), /*#__PURE__*/_react.default.createElement(_Button.default, {
    definition: "is-info is-hovered"
  }, " Testando"), /*#__PURE__*/_react.default.createElement(_Button.default, {
    definition: "is-success is-hovered"
  }, " Testando"), /*#__PURE__*/_react.default.createElement(_Button.default, {
    definition: "is-warning is-hovered"
  }, " Testando"), /*#__PURE__*/_react.default.createElement(_Button.default, {
    definition: "is-danger is-hovered"
  }, " Testando"))).toJSON();

  expect(hovered).toMatchSnapshot();

  var focused = _reactTestRenderer.default.create( /*#__PURE__*/_react.default.createElement(_ButtonList.default, null, /*#__PURE__*/_react.default.createElement(_Button.default, {
    definition: "is-primary is-focused"
  }, " primary focused"), /*#__PURE__*/_react.default.createElement(_Button.default, {
    definition: "is-link is-focused"
  }, " link focused"), /*#__PURE__*/_react.default.createElement(_Button.default, {
    definition: "is-info is-focused"
  }, " info focused"), /*#__PURE__*/_react.default.createElement(_Button.default, {
    definition: "is-success is-focused"
  }, " success focused"), /*#__PURE__*/_react.default.createElement(_Button.default, {
    definition: "is-warning is-focused"
  }, " warning focused"), /*#__PURE__*/_react.default.createElement(_Button.default, {
    definition: "is-danger is-focused"
  }, " danger focused"))).toJSON();

  expect(focused).toMatchSnapshot();

  var active = _reactTestRenderer.default.create( /*#__PURE__*/_react.default.createElement(_ButtonList.default, null, /*#__PURE__*/_react.default.createElement(_Button.default, {
    definition: "is-primary is-active"
  }, " primary active"), /*#__PURE__*/_react.default.createElement(_Button.default, {
    definition: "is-link is-active"
  }, " link active"), /*#__PURE__*/_react.default.createElement(_Button.default, {
    definition: "is-info is-active"
  }, " info active"), /*#__PURE__*/_react.default.createElement(_Button.default, {
    definition: "is-success is-active"
  }, " success active"), /*#__PURE__*/_react.default.createElement(_Button.default, {
    definition: "is-warning is-active"
  }, " warning active"), /*#__PURE__*/_react.default.createElement(_Button.default, {
    definition: "is-danger is-active"
  }, " danger active"))).toJSON();

  expect(active).toMatchSnapshot();
});
test('loading corretly', function () {
  var loading = _reactTestRenderer.default.create( /*#__PURE__*/_react.default.createElement(_ButtonList.default, null, /*#__PURE__*/_react.default.createElement(_Button.default, {
    definition: "is-loading"
  }, " Testando"), /*#__PURE__*/_react.default.createElement(_Button.default, {
    definition: "is-primary is-loading"
  }, " Testando"), /*#__PURE__*/_react.default.createElement(_Button.default, {
    definition: "is-link is-loading"
  }, " Testando"), /*#__PURE__*/_react.default.createElement(_Button.default, {
    definition: "is-info is-loading"
  }, " Testando"), /*#__PURE__*/_react.default.createElement(_Button.default, {
    definition: "is-success is-loading"
  }, " Testando"), /*#__PURE__*/_react.default.createElement(_Button.default, {
    definition: "is-warning is-loading"
  }, " Testando"), /*#__PURE__*/_react.default.createElement(_Button.default, {
    definition: "is-danger is-loading"
  }, " Testando"))).toJSON();

  expect(loading).toMatchSnapshot();
});
test('disabled corretly', function () {
  var disabled = _reactTestRenderer.default.create( /*#__PURE__*/_react.default.createElement(_ButtonList.default, null, /*#__PURE__*/_react.default.createElement(_Button.default, {
    definition: "is-primary",
    disabled: true
  }, " primary disabled"), /*#__PURE__*/_react.default.createElement(_Button.default, {
    definition: "is-link",
    disabled: true
  }, " link disabled"), /*#__PURE__*/_react.default.createElement(_Button.default, {
    definition: "is-info",
    disabled: true
  }, " info disabled"), /*#__PURE__*/_react.default.createElement(_Button.default, {
    definition: "is-uccess",
    disabled: true
  }, " success disabled"), /*#__PURE__*/_react.default.createElement(_Button.default, {
    definition: "is-warning",
    disabled: true
  }, " warning disabled"), /*#__PURE__*/_react.default.createElement(_Button.default, {
    definition: "is-danger",
    disabled: true
  }, " danger disabled"))).toJSON();

  expect(disabled).toMatchSnapshot();
});
test('buttons with icons', function () {
  var buttons_icons = _reactTestRenderer.default.create( /*#__PURE__*/_react.default.createElement(_ButtonList.default, null, /*#__PURE__*/_react.default.createElement(_Button.default, null, /*#__PURE__*/_react.default.createElement(_Icon.default, {
    icon_name: "fas fa-bold"
  })), /*#__PURE__*/_react.default.createElement(_Button.default, null, /*#__PURE__*/_react.default.createElement(_Icon.default, {
    icon_name: "fas fa-italic"
  })), /*#__PURE__*/_react.default.createElement(_Button.default, null, /*#__PURE__*/_react.default.createElement(_Icon.default, {
    icon_name: "fas fa-underline"
  })), /*#__PURE__*/_react.default.createElement(_Button.default, null, /*#__PURE__*/_react.default.createElement(_Icon.default, {
    icon_name: "fab fa-github"
  }, "Github")), /*#__PURE__*/_react.default.createElement(_Button.default, {
    definition: "is-primary"
  }, /*#__PURE__*/_react.default.createElement(_Icon.default, {
    icon_name: "fab fa-twitter"
  }, "Twitter")), /*#__PURE__*/_react.default.createElement(_Button.default, {
    definition: "is-success"
  }, /*#__PURE__*/_react.default.createElement(_Icon.default, {
    icon_name: "fas fa-check"
  }, "Save")), /*#__PURE__*/_react.default.createElement(_Button.default, {
    definition: "is-danger is-outlined"
  }, /*#__PURE__*/_react.default.createElement(_Icon.default, {
    icon_name: "fas fa-times",
    icon_right: true
  }, "Delete")), /*#__PURE__*/_react.default.createElement(_Button.default, {
    definition: "is-small"
  }, /*#__PURE__*/_react.default.createElement(_Icon.default, {
    icon_name: "fab fa-github"
  }, "Github")), /*#__PURE__*/_react.default.createElement(_Button.default, null, /*#__PURE__*/_react.default.createElement(_Icon.default, {
    icon_name: "fab fa-github"
  }, "Github")), /*#__PURE__*/_react.default.createElement(_Button.default, {
    definition: "is-medium"
  }, /*#__PURE__*/_react.default.createElement(_Icon.default, {
    icon_name: "fab fa-github"
  }, "Github")), /*#__PURE__*/_react.default.createElement(_Button.default, {
    definition: "is-large"
  }, /*#__PURE__*/_react.default.createElement(_Icon.default, {
    icon_name: "fab fa-github"
  }, "Github"))));

  expect(buttons_icons).toMatchSnapshot();
});