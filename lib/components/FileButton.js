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

var _File = _interopRequireDefault(require("./File"));

var props_obj = {
  label: 'string',
  onChange: 'function',
  definition: 'string',
  ref_data: 'object',
  onClick: 'function'
};
/*
// Definition Equivalente a de Button, ou seja, o definition vai para Button
const FileButton = (props: Props) => {
    validate(props,props_obj,"FileButton");
    return (
        <div className='field'>
            <label className='label'>{props.label}</label>
            <div className='control'>
                <input type='file' onChange={props.onChange} style={{ display: 'none' }} ref={props.ref_data} />
                <Button definition={props.definition} onClick={props.onClick} label={props.children} />
            </div>
        </div>
    );
}*/

var FileButton = function FileButton(props) {
  (0, _type_validations.validate)(props, props_obj, "FileButton");
  return /*#__PURE__*/React.createElement("div", {
    className: "field"
  }, /*#__PURE__*/React.createElement("label", {
    className: "label"
  }, props.label), /*#__PURE__*/React.createElement("div", {
    className: "control"
  }, /*#__PURE__*/React.createElement(_File.default, {
    onChange: props.onChange,
    style: {
      display: 'none'
    },
    ref: props.ref_data
  }), /*#__PURE__*/React.createElement(_Button.default, {
    definition: props.definition,
    onClick: props.onClick,
    label: props.children
  })));
};

var _default = FileButton;
exports.default = _default;