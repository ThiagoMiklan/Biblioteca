"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var React = _interopRequireWildcard(require("react"));

var _Button = _interopRequireDefault(require("./Button.js"));

var _Content = _interopRequireDefault(require("./Content"));

var _type_validations = require("../tools/type_validations.js");

var _props_obj;

var props_obj = (_props_obj = {
  delete: 'boolean',
  title: "string",
  onClickDelete: "function",
  definition: "string"
}, (0, _defineProperty2.default)(_props_obj, "title", "string"), (0, _defineProperty2.default)(_props_obj, "subtitle", "string"), _props_obj);

var Notification = function Notification(props) {
  (0, _type_validations.validate)(props, props_obj, "Notification");
  var definition = props.definition == undefined ? "notification" : "notification " + props.definition;
  return /*#__PURE__*/React.createElement("div", {
    className: definition
  }, props.delete == true && assembleDelete(props.onClickDelete), props.title == undefined && props.subtitle == undefined ? props.children : assembleTitleAndSubtitle(props));
};

function assembleTitleAndSubtitle(props) {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("p", {
    className: "title"
  }, props.title), /*#__PURE__*/React.createElement("p", {
    className: "subtitle"
  }, props.subtitle), /*#__PURE__*/React.createElement(_Content.default, null, props.children));
}

function assembleDelete(onClickDelete) {
  return /*#__PURE__*/React.createElement(_Button.default, {
    delete: true,
    onClick: onClickDelete
  });
}

var _default = Notification;
exports.default = _default;