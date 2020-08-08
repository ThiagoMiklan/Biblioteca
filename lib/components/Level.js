"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _type_validations = require("../tools/type_validations");

var pointer = {
  cursor: "pointer"
};
var props_obj = {
  definition: 'string',
  itens: 'array'
};

var Level = function Level(props) {
  var code = /*#__PURE__*/React.createElement(React.Fragment, null);
  (0, _type_validations.validate)(props, props_obj, "Level");

  if (props.itens != undefined) {
    code = assembleItens(props);
  }

  return code;
};

function assembleItens(props) {
  var left = props.itens.filter(function (item) {
    return isLeft(item);
  });
  var right = props.itens.filter(function (item) {
    return isRight(item);
  });
  var definition = props.definition == undefined ? "level" : "level " + props.definition;
  var code = /*#__PURE__*/React.createElement("nav", {
    className: definition
  }, props.center == true || left.length <= 0 && right.length <= 0 ? /*#__PURE__*/React.createElement(React.Fragment, null, assembleCenter(props.itens)) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "level-left"
  }, assembleLeftItens(left)), /*#__PURE__*/React.createElement("div", {
    className: "level-right"
  }, assembleRightItens(right))));
  return code;
}

function noSide(item) {
  if ((item['right'] == undefined || item['right'] == false) && (item['left'] == undefined || item['left'] == false)) {
    return item;
  }
}

function isRight(item) {
  if (item['right'] == true) {
    return item;
  }
}

function isLeft(item) {
  if (item['left'] == true) {
    return item;
  }
}

function assembleLeftItens(left) {
  var code = left.map(function (item) {
    return assembleLevelItem(item);
  });
  return code;
}

function assembleRightItens(right) {
  var code = right.map(function (item) {
    return assembleLevelItem(item);
  });
  return code;
}

function assembleCenter(itens) {
  var code = itens.map(function (item) {
    return assembleLevelItem(item);
  });
  return code;
}

function assembleLevelItem(item) {
  return /*#__PURE__*/React.createElement("p", {
    key: item["key"],
    style: pointer,
    onClick: item["onClick"],
    className: item["definition"] == undefined ? "level-item" : "level-item " + item["definition"]
  }, item["value"]);
}

var _default = Level;
exports.default = _default;