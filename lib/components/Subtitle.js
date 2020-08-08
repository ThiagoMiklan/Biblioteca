"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _type_validations = require("../tools/type_validations");

var props_obj = {
  definition: "number",
  p: "boolean"
};

var SubTitle = function SubTitle(props) {
  (0, _type_validations.validate)(props, props_obj, "Subtitle");
  return assembleSubTitle(props);
};

function assembleSubTitle(props) {
  var code_title = "";

  if (props.definition != undefined && typeof props.definition == 'number') {
    var title = getTitle(props);
    code_title = title;
  }

  return code_title;
}

function getTitle(props) {
  var assemble_functions = mapFunctionsTitle();
  var title = "";
  var definition = props.definition;

  if (definition >= 1 && definition <= 6) {
    var assemble = assemble_functions.get(definition);

    if (assemble != undefined) {
      title = assemble(props);
    }
  }

  return title;
}

var assemble1 = function assemble1(props) {
  var code = "";
  var definition = getDefinition(props);

  if (props.p == true) {
    code = /*#__PURE__*/React.createElement("p", {
      className: definition
    }, props.children);
  } else {
    code = /*#__PURE__*/React.createElement("h1", {
      className: definition
    }, props.children);
  }

  return code;
};

var assemble2 = function assemble2(props) {
  var code = "";
  var definition = getDefinition(props);

  if (props.p == true) {
    code = /*#__PURE__*/React.createElement("p", {
      className: definition
    }, props.children);
  } else {
    code = /*#__PURE__*/React.createElement("h2", {
      className: definition
    }, props.children);
  }

  return code;
};

var assemble3 = function assemble3(props) {
  var code = "";
  var definition = getDefinition(props);

  if (props.p == true) {
    code = /*#__PURE__*/React.createElement("p", {
      className: definition
    }, props.children);
  } else {
    code = /*#__PURE__*/React.createElement("h3", {
      className: definition
    }, props.children);
  }

  return code;
};

var assemble4 = function assemble4(props) {
  var code = "";
  var definition = getDefinition(props);

  if (props.p == true) {
    code = /*#__PURE__*/React.createElement("p", {
      className: definition
    }, props.children);
  } else {
    code = /*#__PURE__*/React.createElement("h4", {
      className: definition
    }, props.children);
  }

  return code;
};

var assemble5 = function assemble5(props) {
  var code = "";
  var definition = getDefinition(props);

  if (props.p == true) {
    code = /*#__PURE__*/React.createElement("p", {
      className: definition
    }, props.children);
  } else {
    code = /*#__PURE__*/React.createElement("h5", {
      className: definition
    }, props.children);
  }

  return code;
};

var assemble6 = function assemble6(props) {
  var code = "";
  var definition = getDefinition(props);

  if (props.p == true) {
    code = /*#__PURE__*/React.createElement("p", {
      className: definition
    }, props.children);
  } else {
    code = /*#__PURE__*/React.createElement("h6", {
      className: definition
    }, props.children);
  }

  return code;
};

function mapFunctionsTitle() {
  var map = new Map();
  map.set(1, assemble1);
  map.set(2, assemble2);
  map.set(3, assemble3);
  map.set(4, assemble4);
  map.set(5, assemble5);
  map.set(6, assemble6);
  return map;
}

function getDefinition(props) {
  var definition = "subtitle is-" + String(props.definition);
  return definition;
}

var _default = SubTitle;
exports.default = _default;