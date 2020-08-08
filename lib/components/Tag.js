"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _Button = _interopRequireDefault(require("./Button"));

var _type_validations = require("../tools/type_validations");

var props_obj = {
  definition: "string",
  onClickDelete: "function",
  delete: "boolean"
};

var Tag = function Tag(props) {
  (0, _type_validations.validate)(props, props_obj, "Tag");
  var definition = props.definition == undefined ? "tag" : "tag " + props.definition;
  return /*#__PURE__*/React.createElement("span", {
    className: definition
  }, props.children, props.delete == true && /*#__PURE__*/React.createElement(_Button.default, {
    onClick: props.onClickDelete,
    delete: props.delete
  }));
};

function assembleTag(props) {
  var tag = "";

  if (Array.isArray(props.tag)) {
    tag = assembleListOfTags(props);
  } else {
    tag = assembleSingleTag(props.definition, props.value);
  }

  return tag;
}

function assembleSingleTag(definition, value) {
  return /*#__PURE__*/React.createElement("span", {
    className: definition
  }, value);
}

function assembleListOfTags(props) {
  var tag = /*#__PURE__*/React.createElement("div", {
    className: "tags"
  }, props.tag.map(function (tag) {
    return assembleSingleTag(tag["definition"], tag["value"]);
  }));
  return tag;
}

var _default = Tag;
exports.default = _default;