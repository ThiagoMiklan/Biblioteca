"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

require("bulma/css/bulma.css");

var _Pagination = _interopRequireDefault(require("./components/Pagination"));

var _Columns = _interopRequireDefault(require("./components/Columns"));

var _Column = _interopRequireDefault(require("./components/Column"));

var onClickItem = function onClickItem() {
  alert("Clicked");
};

var itens = [{
  value: 1,
  href: "https://pt-br.reactjs.org/docs/hooks-overview.html",
  definition: "is-current",
  onClick: onClickItem
}, {
  value: 2,
  href: "https://pt-br.reactjs.org/docs/hooks-effect.html"
}, {
  value: 3,
  href: "https://pt-br.reactjs.org/docs/hooks-effect.html"
}];

_reactDom.default.render( /*#__PURE__*/_react.default.createElement(_Columns.default, null, /*#__PURE__*/_react.default.createElement(_Column.default, {
  definition: "is-half"
}, /*#__PURE__*/_react.default.createElement("div", {
  className: "container is-fluid"
}, /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement(_Pagination.default, {
  itens: itens,
  next_name: "Next",
  previous_name: "Previous"
}), /*#__PURE__*/_react.default.createElement(_Pagination.default, {
  itens: itens,
  next_name: "Next",
  previous_name: "Previous",
  previous_disabled: true
}), /*#__PURE__*/_react.default.createElement(_Pagination.default, {
  itens: itens,
  next_name: "Next",
  previous_name: "Previous",
  previous_disabled: true,
  next_disabled: true
}), /*#__PURE__*/_react.default.createElement(_Pagination.default, {
  definition: "is-center",
  itens: itens,
  next_name: "Next",
  previous_name: "Previous"
}), /*#__PURE__*/_react.default.createElement(_Pagination.default, {
  definition: "is-right",
  itens: itens,
  next_name: "Next",
  previous_name: "Previous"
}), /*#__PURE__*/_react.default.createElement(_Pagination.default, {
  definition: "is-right is-rounded",
  itens: itens,
  next_name: "Next",
  previous_name: "Previous"
}), /*#__PURE__*/_react.default.createElement(_Pagination.default, {
  definition: "is-right is-small",
  itens: itens,
  next_name: "Next",
  previous_name: "Previous"
}), /*#__PURE__*/_react.default.createElement(_Pagination.default, {
  definition: "is-right is-medium",
  itens: itens,
  next_name: "Next",
  previous_name: "Previous"
}), /*#__PURE__*/_react.default.createElement(_Pagination.default, {
  definition: "is-right is-large",
  itens: itens,
  next_name: "Next",
  previous_name: "Previous"
})))), document.getElementById('root'));
/*
<Pagination
      itens={itens}
      href_previous="https://pt-br.reactjs.org/docs/hooks-overview.html"
      href_next="https://pt-br.reactjs.org/docs/hooks-effect.html"
      next_name="Previous"
      previous_name="Next"
      previous_disabled={true}
      next_disabled={true}
    />
      <Pagination definition="center" itens={itens} href_previous="https://pt-br.reactjs.org/docs/hooks-overview.html" href_next="https://pt-br.reactjs.org/docs/hooks-effect.html" next_name="Previous" previous_name="Next" />
    <Pagination definition="right" itens={itens} href_previous="https://pt-br.reactjs.org/docs/hooks-overview.html" href_next="https://pt-br.reactjs.org/docs/hooks-effect.html" next_name="Previous" previous_name="Next" />
    <Pagination definition="rounded" itens={itens} href_previous="https://pt-br.reactjs.org/docs/hooks-overview.html" href_next="https://pt-br.reactjs.org/docs/hooks-effect.html" next_name="Previous" previous_name="Next" />
    <Pagination definition="center rounded" itens={itens} href_previous="https://pt-br.reactjs.org/docs/hooks-overview.html" href_next="https://pt-br.reactjs.org/docs/hooks-effect.html" next_name="Previous" previous_name="Next" />
    <Pagination definition="right rounded" itens={itens} href_previous="https://pt-br.reactjs.org/docs/hooks-overview.html" href_next="https://pt-br.reactjs.org/docs/hooks-effect.html" next_name="Previous" previous_name="Next" />
      <Pagination definition="small" itens={itens} href_previous="https://pt-br.reactjs.org/docs/hooks-overview.html" href_next="https://pt-br.reactjs.org/docs/hooks-effect.html" next_name="Previous" previous_name="Next" />
    <Pagination definition="small center" itens={itens} href_previous="https://pt-br.reactjs.org/docs/hooks-overview.html" href_next="https://pt-br.reactjs.org/docs/hooks-effect.html" next_name="Previous" previous_name="Next" />
    <Pagination definition="small right" itens={itens} href_previous="https://pt-br.reactjs.org/docs/hooks-overview.html" href_next="https://pt-br.reactjs.org/docs/hooks-effect.html" next_name="Previous" previous_name="Next" />
    <Pagination definition="small rounded" itens={itens} href_previous="https://pt-br.reactjs.org/docs/hooks-overview.html" href_next="https://pt-br.reactjs.org/docs/hooks-effect.html" next_name="Previous" previous_name="Next" />
    <Pagination definition="small center rounded" itens={itens} href_previous="https://pt-br.reactjs.org/docs/hooks-overview.html" href_next="https://pt-br.reactjs.org/docs/hooks-effect.html" next_name="Previous" previous_name="Next" />
    <Pagination definition="small right rounded" itens={itens} href_previous="https://pt-br.reactjs.org/docs/hooks-overview.html" href_next="https://pt-br.reactjs.org/docs/hooks-effect.html" next_name="Previous" previous_name="Next" />
      <Pagination definition="medium" itens={itens} href_previous="https://pt-br.reactjs.org/docs/hooks-overview.html" href_next="https://pt-br.reactjs.org/docs/hooks-effect.html" next_name="Previous" previous_name="Next" />
    <Pagination definition="medium center" itens={itens} href_previous="https://pt-br.reactjs.org/docs/hooks-overview.html" href_next="https://pt-br.reactjs.org/docs/hooks-effect.html" next_name="Previous" previous_name="Next" />
    <Pagination definition="medium right" itens={itens} href_previous="https://pt-br.reactjs.org/docs/hooks-overview.html" href_next="https://pt-br.reactjs.org/docs/hooks-effect.html" next_name="Previous" previous_name="Next" />
    <Pagination definition="medium rounded" itens={itens} href_previous="https://pt-br.reactjs.org/docs/hooks-overview.html" href_next="https://pt-br.reactjs.org/docs/hooks-effect.html" next_name="Previous" previous_name="Next" />
    <Pagination definition="medium center rounded" itens={itens} href_previous="https://pt-br.reactjs.org/docs/hooks-overview.html" href_next="https://pt-br.reactjs.org/docs/hooks-effect.html" next_name="Previous" previous_name="Next" />
    <Pagination definition="medium right rounded" itens={itens} href_previous="https://pt-br.reactjs.org/docs/hooks-overview.html" href_next="https://pt-br.reactjs.org/docs/hooks-effect.html" next_name="Previous" previous_name="Next" />
      <Pagination definition="large" itens={itens} href_previous="https://pt-br.reactjs.org/docs/hooks-overview.html" href_next="https://pt-br.reactjs.org/docs/hooks-effect.html" next_name="Previous" previous_name="Next" />
    <Pagination definition="large center" itens={itens} href_previous="https://pt-br.reactjs.org/docs/hooks-overview.html" href_next="https://pt-br.reactjs.org/docs/hooks-effect.html" next_name="Previous" previous_name="Next" />
    <Pagination definition="large right" itens={itens} href_previous="https://pt-br.reactjs.org/docs/hooks-overview.html" href_next="https://pt-br.reactjs.org/docs/hooks-effect.html" next_name="Previous" previous_name="Next" />
    <Pagination definition="large rounded" itens={itens} href_previous="https://pt-br.reactjs.org/docs/hooks-overview.html" href_next="https://pt-br.reactjs.org/docs/hooks-effect.html" next_name="Previous" previous_name="Next" />
    <Pagination definition="large center rounded" itens={itens} href_previous="https://pt-br.reactjs.org/docs/hooks-overview.html" href_next="https://pt-br.reactjs.org/docs/hooks-effect.html" next_name="Previous" previous_name="Next" />
    <Pagination definition="large right rounded" itens={itens} href_previous="https://pt-br.reactjs.org/docs/hooks-overview.html" href_next="https://pt-br.reactjs.org/docs/hooks-effect.html" next_name="Previous" previous_name="Next" />
  */