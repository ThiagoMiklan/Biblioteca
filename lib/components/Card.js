"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var React = _interopRequireWildcard(require("react"));

var _Image = _interopRequireDefault(require("./Image"));

var _Icon = _interopRequireDefault(require("./Icon"));

var _type_validations = require("../tools/type_validations.js");

var props_obj = {
  title: "string",
  title_definition: "string",
  definition: "string",
  src: "string",
  itens_footer: "array",
  footer_definition: "string",
  icon_name: "string",
  icon_definition: "string",
  header_definition: "string",
  card_header_definition: "string",
  image_definition: "string",
  card_image_definition: "string",
  icon_onClick: "function",
  image_onClick: "function"
};

var Card = function Card(props) {
  (0, _type_validations.validate)(props, props_obj, "Card");
  var definition = props.definition == undefined ? "card" : "card " + props.definition;
  return /*#__PURE__*/React.createElement("div", {
    className: definition
  }, assembleHeader(props), props.src != undefined && assembleCardImage(props), assembleContent(props), props.itens_footer != undefined && assembleFooter(props));
};

function assembleHeader(props) {
  var header = /*#__PURE__*/React.createElement(React.Fragment, null);

  if (props.custom_header != undefined) {
    header = assembleHeaderCustom(props);
  } else {
    if (props.title != undefined) {
      header = assembleHeaderDefault(props);
    }
  }

  return header;
}

function assembleHeaderDefault(props) {
  var header_definition = props.header_definition == undefined ? "card-header" : "card-header " + props.header_definition;
  var card_header_definition = props.card_header_definition == undefined ? "card-header-icon" : "card-header-icon " + props.card_header_definition;
  var title_definition = props.title_definition == undefined ? "card-header-title" : "card-header-title " + props.title_definition;
  return /*#__PURE__*/React.createElement("header", {
    className: header_definition
  }, /*#__PURE__*/React.createElement("div", {
    className: title_definition
  }, props.title), props.icon_name != undefined && /*#__PURE__*/React.createElement("a", {
    href: "#",
    className: card_header_definition
  }, /*#__PURE__*/React.createElement(_Icon["default"], {
    definition: props.icon_definition,
    icon_name: props.icon_name,
    onClick: props.icon_onClick
  })));
}

function assembleHeaderCustom(props) {
  var header_definition = props.header_definition == undefined ? "card-header" : "card-header " + props.header_definition;
  return /*#__PURE__*/React.createElement("header", {
    className: header_definition
  }, props.custom_header);
}

function assembleCardImage(props) {
  var card_image_definition = props.card_image_definition == undefined ? "card-image" : "card-image " + props.card_image_definition;
  return /*#__PURE__*/React.createElement("div", {
    className: card_image_definition
  }, /*#__PURE__*/React.createElement(_Image["default"], {
    definition: props.image_definition,
    src: props.src,
    onClick: props.image_onClick
  }));
}

function assembleContent(props) {
  return /*#__PURE__*/React.createElement("div", {
    className: "card-content "
  }, props.children);
}

function assembleFooter(props) {
  var footer_definition = props.footer_definition == undefined ? "card-footer" : "card-footer " + props.footer_definition;
  var code = /*#__PURE__*/React.createElement(React.Fragment, null);

  if (props.itens_footer != undefined) {
    code = /*#__PURE__*/React.createElement("footer", {
      className: footer_definition
    }, props.itens_footer.map(function (item) {
      return assembleItemFooter(item);
    }));
  }

  return code;
}

function assembleItemFooter(item) {
  return /*#__PURE__*/React.createElement("p", {
    className: "card-footer-item"
  }, /*#__PURE__*/React.createElement("span", (0, _extends2["default"])({
    onClick: item["onClick"],
    style: {
      cursor: "pointer"
    }
  }, item["custom"]), item["value"]));
}

var _default = Card;
exports["default"] = _default;