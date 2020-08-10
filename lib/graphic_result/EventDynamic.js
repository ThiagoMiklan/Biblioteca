"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

require("bulma/css/bulma.css");

var _Input = _interopRequireDefault(require("./biblioteca/Input"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

// Teste de re-render
// Demonstra como 
var EventDynamic = function EventDynamic(props) {
  var _useModel = useModel(),
      _useModel2 = (0, _slicedToArray2.default)(_useModel, 2),
      state = _useModel2[0],
      onClickBtn = _useModel2[1].onClickBtn;

  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, " ", /*#__PURE__*/_react.default.createElement("control", null, /*#__PURE__*/_react.default.createElement("input", {
    draggable: state.draggable,
    type: "text"
  }), /*#__PURE__*/_react.default.createElement("button", {
    onClick: onClickBtn
  }, "Click to drag")));
};

function useModel() {
  var initial = {
    draggable: false,
    clicked: 0
  };

  var _useState = (0, _react.useState)(initial),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      state = _useState2[0],
      setState = _useState2[1];

  (0, _react.useEffect)(function () {
    // elimina primeira atualização pós render
    // sem essa condição a primeira renderização irá assumir draggable == true
    // a condição justamente trata a primeira execução "forçada"  de useEffect
    if (state.clicked != 0) {
      setState(_objectSpread(_objectSpread({}, state), {}, {
        draggable: true
      }));
    }
  }, [state.clicked]);

  function onClickBtn() {
    setState(_objectSpread(_objectSpread({}, state), {}, {
      clicked: state.clicked + 1
    }));
  }

  return [state, {
    onClickBtn: onClickBtn
  }];
}

_reactDom.default.render( /*#__PURE__*/_react.default.createElement(EventDynamic, {
  value: "thiago"
}), document.getElementById('root'));