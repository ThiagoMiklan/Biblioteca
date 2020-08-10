"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _FieldContent = _interopRequireDefault(require("./components/FieldContent"));

var _Field = _interopRequireDefault(require("./components/Field"));

var _Image = _interopRequireDefault(require("./components/Image"));

require("bulma/css/bulma.css");

_reactDom.default.render( /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_FieldContent.default, {
  label: "Content 2"
}, /*#__PURE__*/_react.default.createElement(_Image.default, {
  definition: "is-128x128",
  src: "https://bulma.io/images/bulma-logo.png"
})), /*#__PURE__*/_react.default.createElement(_Field.default, {
  label: "Content 2"
}, /*#__PURE__*/_react.default.createElement(_Image.default, {
  definition: "is-128x128",
  src: "https://bulma.io/images/bulma-logo.png"
}))), document.getElementById('root'));
/*
<>
    
    <FieldContent label="Content 2"> 
      <Image  definition="is-128x128" src="https://bulma.io/images/bulma-logo.png"/>
    </FieldContent>
  </>
  

*/