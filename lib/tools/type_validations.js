"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isString = isString;
exports.isBool = isBool;
exports.isObject = isObject;
exports.isNumber = isNumber;
exports.isArray = isArray;
exports.isFunc = isFunc;
exports.validate = validate;

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _wrapNativeSuper2 = _interopRequireDefault(require("@babel/runtime/helpers/wrapNativeSuper"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var functions = new Map();
functions.set("string", isString);
functions.set("boolean", isBool);
functions.set("object", isObject);
functions.set("number", isNumber);
functions.set("array", isArray);
functions.set("function", isFunc);

var TypePropsError = /*#__PURE__*/function (_TypeError) {
  (0, _inherits2.default)(TypePropsError, _TypeError);

  var _super = _createSuper(TypePropsError);

  function TypePropsError(message) {
    var _this;

    (0, _classCallCheck2.default)(this, TypePropsError);
    _this = _super.call(this, message); // (1)

    _this.name = "Definition Error"; // (2)

    return _this;
  }

  return TypePropsError;
}( /*#__PURE__*/(0, _wrapNativeSuper2.default)(TypeError));

function isString(props, key, name) {
  var output = true;

  if (props != undefined) {
    if (typeof props !== 'string') {
      throw new TypePropsError("Expect string but received " + (0, _typeof2.default)(props) + " on prop " + key + " of component " + name);
    }
  }

  return output;
}

function isBool(props, key, name) {
  if (props != undefined) {
    if (typeof props !== 'boolean') {
      throw new TypePropsError("Expect boolean but received " + (0, _typeof2.default)(props) + " on prop " + key + " of component " + name);
    }
  }
}

function isObject(props, key, name) {
  if (props != undefined) {
    if ((0, _typeof2.default)(props) != 'object') {
      throw new TypePropsError("Expect object but received " + (0, _typeof2.default)(props) + " on prop " + key + " of component " + name);
    }
  }
}

function isNumber(props, key, name) {
  if (props != undefined) {
    if (typeof props != 'number') {
      throw new TypePropsError("Expect number but received " + (0, _typeof2.default)(props) + " on prop " + key + " of component " + name);
    }
  }
}

function isArray(props, key, name) {
  if (props != undefined) {
    if (!Array.isArray(props)) {
      throw new TypePropsError("Expect array but received " + (0, _typeof2.default)(props) + " on prop " + key + " of component " + name);
    }
  }
}

function isFunc(props, key, name) {
  if (props != undefined) {
    if (typeof props != 'function') {
      throw new TypePropsError("Expect function but received " + (0, _typeof2.default)(props) + " on prop " + key + " of component " + name);
    }
  }
}

function validate(props, props_obj, name) {
  if (props != undefined && props_obj != undefined) {
    var keys = Object.keys(props_obj);
    var values = Object.values(props_obj);
    var size = values.length;

    for (var i = 0; i < size; i++) {
      var value = values[i];
      var key = keys[i];
      var funcao = functions.get(value);

      if (props[key] != undefined) {
        funcao(props[key], key, name);
      }
    }
  }

  return false;
}