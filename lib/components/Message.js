"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(require("react"));

var _Button = _interopRequireDefault(require("./Button"));

var _type_validations = require("../tools/type_validations");

var prop_obj = {
  definition: "string",
  header: "string",
  "delete": "boolean",
  onClickDelete: "function"
};

var Message = function Message(props) {
  (0, _type_validations.validate)(props, prop_obj, "Message");
  var definition = props.definition == undefined ? "message" : "message " + props.definition;
  return /*#__PURE__*/React.createElement("article", {
    className: definition
  }, assembleHeader(props.header, props["delete"], props.onClickDelete, props.header_definition), assembleBody(props.children));
};

function assembleDelete(onClickDelete) {
  return /*#__PURE__*/React.createElement(_Button["default"], {
    onClick: onClickDelete,
    "delete": true
  });
}

function assembleHeader(name_header, isDelete, onClickDelete, header_definition) {
  var header = "";

  if (name_header != undefined) {
    var definition = header_definition == undefined ? "message-header" : "message-header " + header_definition;
    header = /*#__PURE__*/React.createElement("div", {
      className: "message-header"
    }, /*#__PURE__*/React.createElement("p", null, name_header), isDelete == true && assembleDelete(onClickDelete));
  }

  return header;
}

function assembleBody(message) {
  return /*#__PURE__*/React.createElement("div", {
    className: "message-body"
  }, message);
}

var _default = Message;
exports["default"] = _default;