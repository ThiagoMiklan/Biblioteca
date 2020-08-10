"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _ButtonHook = _interopRequireDefault(require("../hooks/ButtonHook"));

var estadoInicial = {
  definition: 'button is-primary'
};

function useModelo() {
  var _useState = (0, _react.useState)(estadoInicial),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      estado = _useState2[0],
      setEstado = _useState2[1];

  function onDataValida() {
    //setEstado({definition: 'button is-danger'})
    alert("deu certo");
  }

  return [estado, {
    onDataValida: onDataValida
  }];
}

function App() {
  var _useModelo = useModelo(),
      _useModelo2 = (0, _slicedToArray2.default)(_useModelo, 2),
      estado = _useModelo2[0],
      onDataValida = _useModelo2[1].onDataValida;

  return /*#__PURE__*/_react.default.createElement(_ButtonHook.default, {
    definition: estado.definition,
    onClick: onDataValida
  });
}

var _default = App;
exports.default = _default;