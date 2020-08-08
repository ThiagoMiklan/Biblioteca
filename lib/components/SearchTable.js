"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _Table = _interopRequireDefault(require("./Table"));

var _ButtonList = _interopRequireDefault(require("./ButtonList"));

var _Button = _interopRequireDefault(require("./Button"));

var _Field = _interopRequireDefault(require("./Field"));

var _type_validations = require("../tools/type_validations");

var props_obj = {
  onChange: 'function',
  label: 'string',
  control_definition: 'string',
  placeholder: 'string',
  icon_name: 'string',
  icon_definition: 'string',
  input_definition: 'string',
  table_definition: 'string',
  itens_header: 'array',
  itens_body: 'array',
  header_definition: 'string',
  itens_footer: 'array',
  button_definition: 'string',
  onClick: 'function',
  value: 'string',
  onClickRow: 'function'
};

var SearchTable = function SearchTable(props) {
  (0, _type_validations.validate)(props, props_obj, "SearchTable");
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "container"
  }, /*#__PURE__*/_react.default.createElement(_Field.default, {
    onChange: props.onChange,
    label: props.label,
    control_definition: props.control_definition,
    placeholder: props.placeholder,
    icon_name: props.icon_name,
    icon_definition: props.icon_definition,
    input_definition: props.input_definition
  }), /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement(_Table.default, {
    definition: props.table_definition,
    itens_header: props.itens_header,
    itens_body: props.itens_body,
    header_definition: props.header_definition,
    itens_footer: props.itens_footer,
    onClickRow: props.onClickRow
  }), /*#__PURE__*/_react.default.createElement(_ButtonList.default, null, /*#__PURE__*/_react.default.createElement(_Button.default, {
    definition: props.button_definition,
    onClick: props.onClick,
    label: props.value
  })));
};

var _default = SearchTable;
exports.default = _default;