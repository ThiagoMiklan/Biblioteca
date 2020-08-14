"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(require("react"));

var _InvalidNumberChilds = require("../exception/InvalidNumberChilds");

var _type_validations = require("../tools/type_validations.js");

var props_obj = {
  definition: 'string'
};

var HeroThreeParts = function HeroThreeParts(props) {
  (0, _type_validations.validate)(props, props_obj, "HeroThreeParts");
  var childrens = React.Children.map(props.children, function (child, i) {
    return child;
  });
  return assemble(childrens, props);
};

function assemble(childrens, props) {
  var validChildrensNumber = childrens.length <= 3 ? true : false;
  ;
  var code = /*#__PURE__*/React.createElement(React.Fragment, null);

  if (validChildrensNumber) {
    code = assembleThreePartsHero(props, childrens);
  } else {
    throw new _InvalidNumberChilds.InvalidNumberChilds((0, _InvalidNumberChilds.assembleDefaultMessage)(childrens.length));
  }

  return code;
}

function assembleThreePartsHero(props, childrens) {
  var definition = props.definition == undefined ? "hero" : "hero " + props.definition;
  return /*#__PURE__*/React.createElement("section", {
    className: definition
  }, /*#__PURE__*/React.createElement("div", {
    "class": "hero-head"
  }, childrens[0] != undefined && childrens[0]), /*#__PURE__*/React.createElement("div", {
    className: "hero-body"
  }, childrens[1] != undefined && childrens[1]), /*#__PURE__*/React.createElement("div", {
    "class": "hero-foot"
  }, childrens[2] != undefined && childrens[2]));
}

var _default = HeroThreeParts;
exports["default"] = _default;