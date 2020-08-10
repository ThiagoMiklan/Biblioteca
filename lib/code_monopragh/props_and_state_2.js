"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

require("bulma/css/bulma.css");

var Input = function Input(props) {
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "columns is-centered"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "column is-half"
  }, /*#__PURE__*/_react.default.createElement("input", {
    className: props.definition,
    value: "Example Props and State"
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "column is-half"
  }, /*#__PURE__*/_react.default.createElement("button", {
    className: "button",
    onClick: props.onClick
  }, props.name)));
};

var InputParent = function InputParent(props) {
  var _useModel = useModel(),
      _useModel2 = (0, _slicedToArray2.default)(_useModel, 2),
      state = _useModel2[0],
      onClick = _useModel2[1].onClick;

  return /*#__PURE__*/_react.default.createElement(Input, {
    definition: state.definition,
    onClick: onClick,
    name: state.name
  });
};

function useModel() {
  var initial = {
    definition: 'input is-sucess',
    count: 0,
    name: "Trocar para primary"
  };

  var _useState = (0, _react.useState)(initial),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      state = _useState2[0],
      setState = _useState2[1];

  var onClick = function onClick() {
    if (state.count == 0) {
      setState({
        definition: "input is-primary",
        count: state.count + 1,
        name: "Trocar para info"
      });
    } else if (state.count == 1) {
      setState({
        definition: "input is-info",
        count: state.count + 1,
        name: "Trocar para waening"
      });
    } else if (state.count == 2) {
      setState({
        definition: "input is-warning",
        count: state.count + 1,
        name: "Trocar para danger"
      });
    } else if (state.count == 3) {
      setState({
        definition: "input is-danger",
        count: state.count + 1,
        name: "fim das trocas"
      });
    }
  };

  return [state, {
    onClick: onClick
  }];
}

_reactDom.default.render( /*#__PURE__*/_react.default.createElement(InputParent, null), document.getElementById("root"));