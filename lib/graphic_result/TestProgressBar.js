"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _ProgressBar = _interopRequireDefault(require("./components/ProgressBar"));

require("bulma/css/bulma.css");

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return {
        value: state.value + 1
      };

    default:
      throw new Error();
  }
}

var ProgressHook = function ProgressHook(props) {
  var initial = {
    value: 0
  };

  var _useReducer = (0, _react.useReducer)(reducer, initial),
      _useReducer2 = (0, _slicedToArray2.default)(_useReducer, 2),
      state = _useReducer2[0],
      dispatch = _useReducer2[1];

  (0, _react.useEffect)(function () {
    setInterval(function () {
      dispatch({
        type: 'increment'
      });
    }, 1000);
  }, []);
  return /*#__PURE__*/_react.default.createElement(_ProgressBar.default, {
    definition: "progress",
    value: state.value,
    max: 100
  });
};

_reactDom.default.render( /*#__PURE__*/_react.default.createElement("div", {
  class: "container is-fluid"
}, /*#__PURE__*/_react.default.createElement(ProgressHook, null), /*#__PURE__*/_react.default.createElement(_ProgressBar.default, {
  value: 15,
  max: 100
}), /*#__PURE__*/_react.default.createElement(_ProgressBar.default, {
  definition: "is-primary",
  value: 15,
  max: 100
}), /*#__PURE__*/_react.default.createElement(_ProgressBar.default, {
  definition: "is-link",
  value: 30,
  max: 100
}), /*#__PURE__*/_react.default.createElement(_ProgressBar.default, {
  definition: "is-info",
  value: 45,
  max: 100
}), /*#__PURE__*/_react.default.createElement(_ProgressBar.default, {
  definition: "is-sucess",
  value: 60,
  max: 100
}), /*#__PURE__*/_react.default.createElement(_ProgressBar.default, {
  definition: "is-warning",
  value: 75,
  max: 100
}), /*#__PURE__*/_react.default.createElement(_ProgressBar.default, {
  definition: "is-danger",
  value: 90,
  max: 100
}), /*#__PURE__*/_react.default.createElement(_ProgressBar.default, {
  definition: "is-small",
  value: 15,
  max: 100
}), /*#__PURE__*/_react.default.createElement(_ProgressBar.default, {
  definition: "is-medium",
  value: 15,
  max: 100
}), /*#__PURE__*/_react.default.createElement(_ProgressBar.default, {
  definition: "is-large",
  value: 15,
  max: 100
})), document.getElementById('root'));