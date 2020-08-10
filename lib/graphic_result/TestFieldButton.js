"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _FieldButton = _interopRequireDefault(require("./components/FieldButton"));

require("bulma/css/bulma.css");

_reactDom.default.render( /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_FieldButton.default, {
  definition: "is-primary",
  label: "Example FieldButton",
  button_definition: "is-danger"
}, "FieldButton press")), document.getElementById('root'));
/*
<>
    
    <FieldContent label="Content 2"> 
      <Image  definition="is-128x128" src="https://bulma.io/images/bulma-logo.png"/>
    </FieldContent>
  </>
  

*/