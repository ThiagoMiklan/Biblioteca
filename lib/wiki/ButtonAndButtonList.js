"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _react = _interopRequireWildcard(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

require("bulma/css/bulma.css");

var _Button = _interopRequireDefault(require("./components/Button"));

var _ButtonList = _interopRequireDefault(require("./components/ButtonList"));

var _Columns = _interopRequireDefault(require("./components/Columns"));

var _Column = _interopRequireDefault(require("./components/Column"));

var onClick = function onClick() {
  alert("Clicked");
};

var custom = {
  onDoubleClick: onClick
};

_reactDom.default.render( /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement(_ButtonList.default, null, /*#__PURE__*/_react.default.createElement(_Button.default, {
  definition: "is-primary",
  label: "Primary"
}), /*#__PURE__*/_react.default.createElement(_Button.default, {
  definition: "is-link",
  label: "Link"
}), /*#__PURE__*/_react.default.createElement(_Button.default, {
  definition: "is-info",
  label: "Info"
}), /*#__PURE__*/_react.default.createElement(_Button.default, {
  definition: "is-success",
  label: "Success"
}), /*#__PURE__*/_react.default.createElement(_Button.default, {
  definition: "is-warning",
  label: "Warning"
}), /*#__PURE__*/_react.default.createElement(_Button.default, {
  definition: "is-danger",
  label: "Danger"
})), /*#__PURE__*/_react.default.createElement(_ButtonList.default, null, /*#__PURE__*/_react.default.createElement(_Button.default, {
  definition: "is-white",
  label: "White"
}), /*#__PURE__*/_react.default.createElement(_Button.default, {
  definition: "is-light",
  label: "Light"
}), /*#__PURE__*/_react.default.createElement(_Button.default, {
  definition: "is-dark",
  label: "Dark"
}), /*#__PURE__*/_react.default.createElement(_Button.default, {
  definition: "is-black",
  label: "Black"
}), /*#__PURE__*/_react.default.createElement(_Button.default, {
  definition: "is-text",
  label: "Text"
})), /*#__PURE__*/_react.default.createElement(_ButtonList.default, null, /*#__PURE__*/_react.default.createElement(_Button.default, {
  definition: "is-primary is-light",
  label: "primary light"
}), /*#__PURE__*/_react.default.createElement(_Button.default, {
  definition: "is-link is-light",
  label: "link light"
}), /*#__PURE__*/_react.default.createElement(_Button.default, {
  definition: "is-info is-light",
  label: "info light"
}), /*#__PURE__*/_react.default.createElement(_Button.default, {
  definition: "is-success is-light",
  label: "success light"
}), /*#__PURE__*/_react.default.createElement(_Button.default, {
  definition: "is-warning is-light",
  label: "warning light"
}), /*#__PURE__*/_react.default.createElement(_Button.default, {
  definition: "is-danger is-light",
  label: "danger light"
})), /*#__PURE__*/_react.default.createElement(_ButtonList.default, null, /*#__PURE__*/_react.default.createElement(_Button.default, {
  definition: "button is-small",
  label: "Small"
}), /*#__PURE__*/_react.default.createElement(_Button.default, {
  label: "Normal"
}), /*#__PURE__*/_react.default.createElement(_Button.default, {
  definition: "button is-medium",
  label: "Medium"
}), /*#__PURE__*/_react.default.createElement(_Button.default, {
  definition: "button is-large",
  label: "Large"
})), /*#__PURE__*/_react.default.createElement(_ButtonList.default, {
  definition: "are-small"
}, /*#__PURE__*/_react.default.createElement(_Button.default, {
  label: "Small"
}), /*#__PURE__*/_react.default.createElement(_Button.default, {
  label: "Small"
}), /*#__PURE__*/_react.default.createElement(_Button.default, {
  label: "Small"
})), /*#__PURE__*/_react.default.createElement(_ButtonList.default, {
  definition: "are-medium"
}, /*#__PURE__*/_react.default.createElement(_Button.default, {
  label: "Medium"
}), /*#__PURE__*/_react.default.createElement(_Button.default, {
  label: "Medium"
}), /*#__PURE__*/_react.default.createElement(_Button.default, {
  label: "Medium"
})), /*#__PURE__*/_react.default.createElement(_ButtonList.default, {
  definition: "are-large"
}, /*#__PURE__*/_react.default.createElement(_Button.default, {
  label: "Large"
}), /*#__PURE__*/_react.default.createElement(_Button.default, {
  label: "Large"
}), /*#__PURE__*/_react.default.createElement(_Button.default, {
  label: "Large"
})), /*#__PURE__*/_react.default.createElement(_Columns.default, null, /*#__PURE__*/_react.default.createElement(_Column.default, {
  definition: "is-half"
}, /*#__PURE__*/_react.default.createElement(_Button.default, {
  definition: "is-small is-fullwidth",
  label: "small fullwidt"
}), /*#__PURE__*/_react.default.createElement(_Button.default, {
  definition: "is-fullwidth",
  label: "normal fullwidth"
}), /*#__PURE__*/_react.default.createElement(_Button.default, {
  definition: "is-medium is-fullwidth",
  label: "medium fullwidth"
}), /*#__PURE__*/_react.default.createElement(_Button.default, {
  definition: "is-large is-fullwidth",
  label: "large fullwidth"
}))), /*#__PURE__*/_react.default.createElement(_ButtonList.default, null, /*#__PURE__*/_react.default.createElement(_Button.default, {
  definition: "is-primary is-outlined",
  label: "primary outlined"
}), /*#__PURE__*/_react.default.createElement(_Button.default, {
  definition: "is-link is-outlined",
  label: " link outlined"
}), /*#__PURE__*/_react.default.createElement(_Button.default, {
  definition: "is-info is-outlined",
  label: "info outlined"
}), /*#__PURE__*/_react.default.createElement(_Button.default, {
  definition: "is-success is-outlined",
  label: "success outlined"
}), /*#__PURE__*/_react.default.createElement(_Button.default, {
  definition: "is-warning is-outlined",
  label: "warning outlined"
}), /*#__PURE__*/_react.default.createElement(_Button.default, {
  definition: "is-danger is-outlined",
  label: "danger outlined"
})), /*#__PURE__*/_react.default.createElement(_ButtonList.default, {
  definition: "is-primary"
}, /*#__PURE__*/_react.default.createElement(_Button.default, {
  definition: "is-primary is-inverted",
  label: "primary inverted"
}), /*#__PURE__*/_react.default.createElement(_Button.default, {
  definition: "is-link is-inverted",
  label: "link inverted"
}), /*#__PURE__*/_react.default.createElement(_Button.default, {
  definition: "is-info is-inverted",
  label: "info inverted"
}), /*#__PURE__*/_react.default.createElement(_Button.default, {
  definition: "is-success is-inverted",
  label: "success inverted"
}), /*#__PURE__*/_react.default.createElement(_Button.default, {
  definition: "is-danger is-inverted",
  label: "danger inverted"
})), /*#__PURE__*/_react.default.createElement(_ButtonList.default, null, /*#__PURE__*/_react.default.createElement(_Button.default, {
  definition: "is-primary is-rounded",
  label: "primary rounded"
}), /*#__PURE__*/_react.default.createElement(_Button.default, {
  definition: "is-link is-rounded",
  label: "link rounded"
}), /*#__PURE__*/_react.default.createElement(_Button.default, {
  definition: "is-info is-rounded",
  label: " info rounded"
}), /*#__PURE__*/_react.default.createElement(_Button.default, {
  definition: "is-success is-rounded",
  label: "success rounded"
}), /*#__PURE__*/_react.default.createElement(_Button.default, {
  definition: "is-warning is-rounded",
  label: "warning rounded"
}), /*#__PURE__*/_react.default.createElement(_Button.default, {
  definition: "is-danger is-rounded",
  label: "danger rounded"
})), /*#__PURE__*/_react.default.createElement(_ButtonList.default, null, /*#__PURE__*/_react.default.createElement(_Button.default, {
  definition: "is-primary is-focused",
  label: "primary focused"
}), /*#__PURE__*/_react.default.createElement(_Button.default, {
  definition: "is-link is-focused",
  label: "link focused"
}), /*#__PURE__*/_react.default.createElement(_Button.default, {
  definition: "is-info is-focused",
  label: "info focused"
}), /*#__PURE__*/_react.default.createElement(_Button.default, {
  definition: "is-success is-focused",
  label: "success focused"
}), /*#__PURE__*/_react.default.createElement(_Button.default, {
  definition: "is-warning is-focused",
  label: "warning focused"
}), /*#__PURE__*/_react.default.createElement(_Button.default, {
  definition: "is-danger is-focused",
  label: "danger focused"
})), /*#__PURE__*/_react.default.createElement(_ButtonList.default, null, /*#__PURE__*/_react.default.createElement(_Button.default, {
  definition: "is-primary is-active",
  label: "primary active"
}), /*#__PURE__*/_react.default.createElement(_Button.default, {
  definition: "is-link is-active",
  label: "link active"
}), /*#__PURE__*/_react.default.createElement(_Button.default, {
  definition: "is-info is-active",
  label: "info active"
}), /*#__PURE__*/_react.default.createElement(_Button.default, {
  definition: "is-success is-active",
  label: "success active"
}), /*#__PURE__*/_react.default.createElement(_Button.default, {
  definition: "is-warning is-active",
  label: "warning active"
}), /*#__PURE__*/_react.default.createElement(_Button.default, {
  definition: "is-danger is-active",
  label: "danger active"
})), /*#__PURE__*/_react.default.createElement(_ButtonList.default, null, /*#__PURE__*/_react.default.createElement(_Button.default, {
  definition: "is-loading",
  label: "loading"
}), /*#__PURE__*/_react.default.createElement(_Button.default, {
  definition: "is-primary is-loading",
  label: "loading"
}), /*#__PURE__*/_react.default.createElement(_Button.default, {
  definition: "is-link is-loading",
  label: "loading"
}), /*#__PURE__*/_react.default.createElement(_Button.default, {
  definition: "is-info is-loading",
  label: "loading"
}), /*#__PURE__*/_react.default.createElement(_Button.default, {
  definition: "is-success is-loading",
  label: "loading"
}), /*#__PURE__*/_react.default.createElement(_Button.default, {
  definition: "is-warning is-loading",
  label: "loading"
}), /*#__PURE__*/_react.default.createElement(_Button.default, {
  definition: "is-danger is-loading",
  label: "loading"
})), /*#__PURE__*/_react.default.createElement(_ButtonList.default, null, /*#__PURE__*/_react.default.createElement(_Button.default, {
  definition: "is-primary",
  disabled: true,
  label: "primary disabled"
}), /*#__PURE__*/_react.default.createElement(_Button.default, {
  definition: "is-link",
  disabled: true,
  label: "link disabled"
}), /*#__PURE__*/_react.default.createElement(_Button.default, {
  definition: "is-info",
  disabled: true,
  label: "info disabled"
}), /*#__PURE__*/_react.default.createElement(_Button.default, {
  definition: "is-uccess",
  disabled: true,
  label: "success disabled"
}), /*#__PURE__*/_react.default.createElement(_Button.default, {
  definition: "is-warning",
  disabled: true,
  label: "warning disabled"
}), /*#__PURE__*/_react.default.createElement(_Button.default, {
  definition: "is-danger",
  disabled: true,
  label: "danger disabled"
})), /*#__PURE__*/_react.default.createElement(_ButtonList.default, null, /*#__PURE__*/_react.default.createElement(_Button.default, {
  label: "Custom",
  custom: custom
}), /*#__PURE__*/_react.default.createElement(_Button.default, {
  onClick: onClick,
  definition: "is-success",
  label: "No Custom"
}))), document.getElementById("root"));