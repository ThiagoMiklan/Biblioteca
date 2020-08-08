"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.assembleDefaultMessage = exports.InvalidNumberChilds = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _wrapNativeSuper2 = _interopRequireDefault(require("@babel/runtime/helpers/wrapNativeSuper"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var InvalidNumberChilds = /*#__PURE__*/function (_Error) {
  (0, _inherits2.default)(InvalidNumberChilds, _Error);

  var _super = _createSuper(InvalidNumberChilds);

  // number of childs to the message
  function InvalidNumberChilds(message) {
    var _this;

    (0, _classCallCheck2.default)(this, InvalidNumberChilds);
    var exception_name = "InvalidNumberChilds";
    _this = _super.call(this, exception_name + ": " + message);
    _this.name = exception_name;
    return _this;
  }

  return InvalidNumberChilds;
}( /*#__PURE__*/(0, _wrapNativeSuper2.default)(Error));

exports.InvalidNumberChilds = InvalidNumberChilds;

var assembleDefaultMessage = function assembleDefaultMessage(number_child_expect, number_childrens_received) {
  return "You can provide " + number_child_expect + " components children, however you informed " + number_childrens_received + " childrens";
};

exports.assembleDefaultMessage = assembleDefaultMessage;