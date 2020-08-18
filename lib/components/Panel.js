"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _Icon = _interopRequireDefault(require("./Icon"));

var _PanelItem = _interopRequireDefault(require("./PanelItem"));

var _Field = _interopRequireDefault(require("./Field"));

var _type_validations = require("../tools/type_validations");

var props_obj = {
  header: "string",
  itens_tabs: "array",
  itens_blocks: "array",
  definition: "string",
  search_definition: "string",
  search_placeholder: "string",
  search_icon_definition: "string",
  onChangeSearch: "function"
}; // v.01

var Panel = function Panel(props) {
  (0, _type_validations.validate)(props, props_obj, "Panel");
  var definition = props.definition == undefined ? "panel" : "panel " + props.definition;
  return /*#__PURE__*/_react["default"].createElement("nav", {
    "class": definition
  }, assembleHeading(props.header), haveSearch(props) == true && assembleSearch(props), assemblePanelTabs(props.itens_tabs), assemblePanelBlocks(props.itens_blocks));
};

function assembleHeading(header) {
  return /*#__PURE__*/_react["default"].createElement("p", {
    "class": "panel-heading"
  }, header);
}

function assemblePanelTabs(itens) {
  if (itens != undefined && Array.isArray(itens)) {
    return /*#__PURE__*/_react["default"].createElement("p", {
      className: "panel-tabs"
    }, itens.map(function (item) {
      return assembleLink(item);
    }));
  } else {
    return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null);
  }
}

function assembleLink(item) {
  return /*#__PURE__*/_react["default"].createElement("a", {
    onClick: item["onClick"]
  }, item["value"]);
}

function assemblePanelBlocks(itens) {
  var code = /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null);

  if (Array.isArray(itens) && itens != undefined) {
    code = itens.map(function (item) {
      return assembleBlock(item);
    });
  }

  return code;
}

function assembleBlock(item) {
  return /*#__PURE__*/_react["default"].createElement(_PanelItem["default"], {
    onClick: item["onClick"]
  }, item["icon_name"] != undefined && item["icon_name"] != '' && /*#__PURE__*/_react["default"].createElement(_Icon["default"], {
    icon_name: item["icon_name"],
    definition: item["icon_definition"]
  }), item["value"]);
}

function assembleSearch(props) {
  return /*#__PURE__*/_react["default"].createElement(_Field["default"], {
    input_definition: props.search_definition == undefined ? "" : props.search_definition,
    icon_name: "fas fa-search",
    control_definition: "has-icons-left",
    placeholder: props.search_placeholder == undefined ? "" : props.search_placeholder,
    icon_definition: props.search_icon_definition == undefined ? "" : props.search_icon_definition,
    onChange: props.onChangeSearch,
    type: "text"
  });
}

function haveSearch(props) {
  return props.search_definition != undefined || props.search_placeholder != undefined || props.search_icon_definition != undefined;
}

var _default = Panel;
exports["default"] = _default;