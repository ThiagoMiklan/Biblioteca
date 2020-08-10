"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _BreadCrumb = _interopRequireDefault(require("../components/BreadCrumb"));

var _Icon = _interopRequireDefault(require("../components/Icon"));

var _reactTestRenderer = _interopRequireDefault(require("react-test-renderer"));

// Array comum sem eventos
var itens = [{
  value: "Bulma"
}, {
  value: "Documentation"
}, {
  value: "Componentes"
}, {
  value: "BreadCrumb"
}]; // Array com componente como value

var itens_with_icons = [{
  value: /*#__PURE__*/_react.default.createElement(_Icon.default, {
    icon_name: "fas fa-home"
  }, "Bulma")
}, {
  value: /*#__PURE__*/_react.default.createElement(_Icon.default, {
    icon_name: "fas fa-book"
  }, "Documentation")
}, {
  value: /*#__PURE__*/_react.default.createElement(_Icon.default, {
    icon_name: "fas fa-puzzle-piece"
  }, "Componentes")
}, {
  value: /*#__PURE__*/_react.default.createElement(_Icon.default, {
    icon_name: "fas fa-thumbs-up"
  }, "BreadCrumb")
}]; // Array com href em cada item do BreadCrumb

var itens_with_href = [{
  value: "Bulma",
  href: "https://ufsc.br"
}, {
  value: "Documentation",
  href: "https://ufsc.br"
}, {
  value: "Componentes",
  href: "https://ufsc.br"
}, {
  value: "BreadCrumb",
  href: "https://ufsc.br"
}]; // Evento ao clicar

var onClickItem = function onClickItem() {
  alert("Clicou no item do BreadCrumb");
}; // Array com a propriedade onClick
// Nesse caso o usuário informa através do objeto o que irá acontecer
// quando for clicado no item,sendo essa uma solução provida pelo 
//  componente BreadCrumb


var itens_with_onClick = [{
  value: "Bulma",
  onClick: onClickItem
}, {
  value: "Documentation",
  onClick: onClickItem
}, {
  value: "Componentes",
  onClick: onClickItem
}, {
  value: "BreadCrumb",
  onClick: onClickItem
}]; // Array com um componente que contém seu próprio onClick
// Neste caso, o usuário informa o evento dentro do componente
// Icon(fornecido pela presente biblioteca), e esse evento será disparado
// normalmente, porém ao contrário de itens_with_onClick, será o componente
// Icon o responsável pelo evento e não BreadCrumb

var itens_with_onClick_on_component = [{
  value: /*#__PURE__*/_react.default.createElement(_Icon.default, {
    icon_name: "fas fa-home"
  }, "Bulma")
}, {
  value: /*#__PURE__*/_react.default.createElement(_Icon.default, {
    icon_name: "fas fa-book"
  }, "Documentation")
}, {
  value: /*#__PURE__*/_react.default.createElement(_Icon.default, {
    icon_name: "fas fa-puzzle-piece"
  }, "Componentes")
}, {
  value: /*#__PURE__*/_react.default.createElement(_Icon.default, {
    icon_name: "fas fa-thumbs-up"
  }, "BreadCrumb")
}]; // Caso deseje-se informar uma key para cada item
// adicionar a propriedade id em cada objeto
// Caso não informe a propriedade key unica para cada valor,
// provalvemente uma warning será disparada pelo browser

var itens_with_id = [{
  value: "Bulma",
  key: "bulma_item"
}, {
  value: "Documentation",
  key: "documentation_item"
}, {
  value: "Componentes",
  key: "components_item"
}, {
  value: "BreadCrumb",
  key: "breadcrumb_item"
}]; // Junção de algumas características
// Com os itens abaixo é possível
// Informar um ícone no BreadCrumb
// Informar um evento para quando o usuário clicar no ícone (props no componente Icon)
// Informar um evento no link, através do onClick suportado pelo BreadCrumb
// Informar uma key para cada item, precavendo-se de warnings em browsers
// Informar um redirecionamento para o link quando for clicado, através de href

var itens_merge = [{
  value: /*#__PURE__*/_react.default.createElement(_Icon.default, {
    icon_name: "fas fa-home",
    onClick: onClickItem
  }, "Bulma"),
  key: "bulma_item",
  onClick: onClickItem,
  href: "https://ufsc.br"
}, {
  value: /*#__PURE__*/_react.default.createElement(_Icon.default, {
    icon_name: "fas fa-book",
    onClick: onClickItem
  }, "Documentation"),
  key: "documentation_item",
  onClick: onClickItem,
  href: "https://ufsc.br"
}, {
  value: /*#__PURE__*/_react.default.createElement(_Icon.default, {
    icon_name: "fas fa-puzzle-piece",
    onClick: onClickItem
  }, "Componentes"),
  key: "components_item",
  onClick: onClickItem,
  href: "https://ufsc.br"
}, {
  value: /*#__PURE__*/_react.default.createElement(_Icon.default, {
    icon_name: "fas fa-thumbs-up",
    onClick: onClickItem
  }, "BreadCrumb"),
  key: "breadcrumb_item",
  onClick: onClickItem,
  href: "https://ufsc.br"
}];
test('breadcrumb normal', function () {
  var component = _reactTestRenderer.default.create( /*#__PURE__*/_react.default.createElement(_BreadCrumb.default, {
    itens: itens
  })).toJSON();

  expect(component).toMatchSnapshot();
});
test('breadcrumb positions', function () {
  var component = _reactTestRenderer.default.create( /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_BreadCrumb.default, {
    definition: "is-centered",
    itens: itens
  }), ",", /*#__PURE__*/_react.default.createElement(_BreadCrumb.default, {
    definition: "is-right",
    itens: itens
  }))).toJSON();

  expect(component).toMatchSnapshot();
});
test('breadcrumb with icons', function () {
  var component = _reactTestRenderer.default.create( /*#__PURE__*/_react.default.createElement(_BreadCrumb.default, {
    itens: itens_with_icons
  })).toJSON();

  expect(component).toMatchSnapshot();
});
test('breadcrumb separators', function () {
  var component = _reactTestRenderer.default.create( /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_BreadCrumb.default, {
    definition: "is-arrow",
    itens: itens
  }), /*#__PURE__*/_react.default.createElement(_BreadCrumb.default, {
    definition: "is-bullet",
    itens: itens
  }), /*#__PURE__*/_react.default.createElement(_BreadCrumb.default, {
    definition: "is-dot",
    itens: itens
  }), /*#__PURE__*/_react.default.createElement(_BreadCrumb.default, {
    definition: "is-succeeds",
    itens: itens
  }))).toJSON();

  expect(component).toMatchSnapshot();
});
test('breadcrumb sizes', function () {
  var component = _reactTestRenderer.default.create( /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_BreadCrumb.default, {
    definition: "is-small",
    itens: itens
  }), /*#__PURE__*/_react.default.createElement(_BreadCrumb.default, {
    definition: "is-medium",
    itens: itens
  }), /*#__PURE__*/_react.default.createElement(_BreadCrumb.default, {
    definition: "is-large",
    itens: itens
  }))).toJSON();

  expect(component).toMatchSnapshot();
});
test('breadcrumb with href', function () {
  var component = _reactTestRenderer.default.create( /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_BreadCrumb.default, {
    itens: itens_with_href
  }))).toJSON();

  expect(component).toMatchSnapshot();
});
test('breadcrumb with internal onClick', function () {
  var component = _reactTestRenderer.default.create( /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_BreadCrumb.default, {
    itens: itens_with_onClick
  }))).toJSON();

  expect(component).toMatchSnapshot();
});
test('breadcrumb with onCLick on component Icon', function () {
  var component = _reactTestRenderer.default.create( /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_BreadCrumb.default, {
    itens: itens_with_onClick
  }))).toJSON();

  expect(component).toMatchSnapshot();
});
test('breadcrumb with onCLick on component Icon', function () {
  var component = _reactTestRenderer.default.create( /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_BreadCrumb.default, {
    itens: itens_with_id
  }))).toJSON();

  expect(component).toMatchSnapshot();
});
test('breadcrumb with onCLick on component Icon', function () {
  var component = _reactTestRenderer.default.create( /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_BreadCrumb.default, {
    itens: itens_merge
  }))).toJSON();

  expect(component).toMatchSnapshot();
});