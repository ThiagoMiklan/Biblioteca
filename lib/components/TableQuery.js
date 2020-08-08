"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _react = _interopRequireDefault(require("react"));

var _type_validations = require("../tools/type_validations");

var props_obj = {
  itens: "array",
  header: "boolean",
  footer: "boolean",
  definition: "string"
};

var TableQuery = function TableQuery(props) {
  (0, _type_validations.validate)(props, props_obj, "TableQuery");
  return assembleTable(props);
};

function assembleTable(props) {
  // validate(props,props_obj);
  var definition = props.definition == undefined ? "table" : "table " + props.definition;

  var code = /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null); // elimina vazio e não array


  if (props.itens != undefined && Array.isArray(props.itens)) {
    if (props.itens.length > 0) {
      code = /*#__PURE__*/_react.default.createElement("table", {
        className: definition
      }, props.header == true && assembleHeader(props.itens), assembleBody(props.itens), props.footer == true && assembleFooter(props.itens));
    }
  }

  return code;
}

function assembleHeader(itens) {
  var code_header = /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null);

  var itens_header = makeArray(itens);
  code_header = /*#__PURE__*/_react.default.createElement("thead", null, /*#__PURE__*/_react.default.createElement("tr", null, itens_header.map(function (item_header) {
    return assembleRow(item_header);
  })));
  return code_header;
}

function assembleFooter(itens) {
  var code_footer = /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null);

  var itens_footer = makeArray(itens);
  code_footer = /*#__PURE__*/_react.default.createElement("tfoot", null, /*#__PURE__*/_react.default.createElement("tr", null, itens_footer.map(function (item_footer) {
    return assembleRow(item_footer);
  })));
  return code_footer;
}

function assembleBody(itens) {
  var code = /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null);

  var getRow = function getRow(item) {
    var row = "";
    var values = Object.values(item);
    row = values.map(function (value) {
      return /*#__PURE__*/_react.default.createElement("td", null, value);
    });
    return row;
  };

  code = /*#__PURE__*/_react.default.createElement("tbody", null, itens.map(function (item) {
    return /*#__PURE__*/_react.default.createElement("tr", null, getRow(item));
  }));
  return code;
}

function makeArray(itens) {
  var allAttributes = itens.map(function (obj) {
    return Object.keys(obj);
  });
  var set = new Set();
  allAttributes.forEach(function (element) {
    element.map(function (item) {
      return set.add(item);
    });
  });
  return (0, _toConsumableArray2.default)(set);
}

function assembleRow(item) {
  return /*#__PURE__*/_react.default.createElement("th", null, item);
}

var _default = TableQuery;
exports.default = _default;