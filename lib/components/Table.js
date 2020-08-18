"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _type_validations = require("../tools/type_validations");

var style_cursor = {
  cursor: "pointer"
};
var props_obj = {
  itens_body: "array",
  itens_header: "array",
  itens_footer: "array",
  definition: "string",
  onClickRow: "function",
  header_definition: "string"
};

var Table = function Table(props) {
  (0, _type_validations.validate)(props, props_obj, "Table");
  return assembleTable(props);
};

function assembleTable(props) {
  var definition = props.definition == undefined ? "table" : "table " + props.definition;

  var code = /*#__PURE__*/_react["default"].createElement("table", {
    className: definition
  }, isArrayOk(props.itens_header) && assembleHeader(props), isArrayOk(props.itens_body) && assembleBody(props.itens_body, props.onClickRow), isArrayOk(props.itens_footer) && assembleFooter(props.itens_footer));

  return code;
}

function isArrayOk(array) {
  var output = false;

  if (Array.isArray(array) && array != undefined) {
    if (array.length > 0) {
      output = true;
    }
  }

  return output;
}

function assembleHeader(props) {
  var code_header = /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null);

  var header_definition = props.header_definition;

  if (props.itens_header != undefined) {
    code_header = /*#__PURE__*/_react["default"].createElement("thead", {
      className: header_definition
    }, /*#__PURE__*/_react["default"].createElement("tr", null, props.itens_header.map(function (item_header) {
      return assembleRowHeaderFooter(item_header);
    })));
  }

  return code_header;
}

function assembleFooter(itens_footer) {
  var code_footer = /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null);

  if (itens_footer != undefined) {
    code_footer = /*#__PURE__*/_react["default"].createElement("tfoot", null, /*#__PURE__*/_react["default"].createElement("tr", null, itens_footer.map(function (item_footer) {
      return assembleRowHeaderFooter(item_footer);
    })));
  }

  return code_footer;
}

function assembleBody(itens, onClickRow) {
  var code = /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null);

  var getRow = function getRow(item) {
    var row = "";
    var values = Object.values(item);
    row = values.map(function (value) {
      return /*#__PURE__*/_react["default"].createElement("td", null, value);
    });
    return row;
  };

  if (itens != undefined) {
    code = /*#__PURE__*/_react["default"].createElement("tbody", null, itens.map(function (item) {
      return /*#__PURE__*/_react["default"].createElement("tr", {
        key: item["key"],
        style: style_cursor,
        onClick: onClickRow
      }, getRow(item));
    }));
  }

  return code;
}

function assembleRowHeaderFooter(item) {
  return /*#__PURE__*/_react["default"].createElement("th", null, item["value"]);
}

var _default = Table;
exports["default"] = _default;