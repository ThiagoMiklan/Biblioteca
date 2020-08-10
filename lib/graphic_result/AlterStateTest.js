"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _react = _interopRequireDefault(require("react"));

var _Button = _interopRequireDefault(require("../biblioteca/elements/Button"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var AlterStateTeste = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2.default)(AlterStateTeste, _React$Component);

  var _super = _createSuper(AlterStateTeste);

  function AlterStateTeste(props) {
    var _this;

    (0, _classCallCheck2.default)(this, AlterStateTeste);
    _this = _super.call(this, props);
    _this.state = {
      clickCount: 0,
      definition: "button danger",
      value: "testando"
    };
    _this.onClick = _this.onClick.bind((0, _assertThisInitialized2.default)(_this));
    return _this;
  }

  (0, _createClass2.default)(AlterStateTeste, [{
    key: "onClick",
    value: function onClick() {
      if (this.state.clickCount == 0) {
        this.setState({
          value: "1",
          clickCount: this.state.clickCount + 1
        });
      } else if (this.state.clickCount == 1) {
        this.setState({
          value: "2",
          clickCount: this.state.clickCount + 1
        });
      } else if (this.state.clickCount == 2) {
        this.setState({
          value: "3",
          clickCount: this.state.clickCount + 1
        });
      }

      ;
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("button", {
        onClick: this.onClick
      }, "Troca cor filho"), /*#__PURE__*/_react.default.createElement(_Button.default, {
        definition: this.state.definition,
        value: this.state.value
      }));
    }
  }]);
  return AlterStateTeste;
}(_react.default.Component);
/*
import React, { useState } from 'react';
import ReactDOM from 'react-dom';
 
import Button from './hooks/ButtonHook';

var clickCount = 0;

const Helper = (props)=>{
    const[definition,setDefinition] =  useState("button is-primary");
    
    var onClickFunc = ()=>{
       
        if(clickCount == 0){
            setDefinition("button is-danger");
        }else if(clickCount == 1){
            setDefinition("button is-warning");
        }else if(clickCount == 2){
            setDefinition("button is-info");
        }else if(clickCount == 3){
            setDefinition("button is-info");
        }
        
        clickCount =  clickCount + 1;
    };

    return <Button definition={definition} value="testando hooks denovo" onClick={onClickFunc}/>
}



ReactDOM.render( 
   <Helper/>
 ,
document.getElementById('root'));
*/


var _default = AlterStateTeste;
exports.default = _default;