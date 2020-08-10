"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _reactTestRenderer = _interopRequireDefault(require("react-test-renderer"));

var _Title = _interopRequireDefault(require("../components/Title"));

var _Subtitle = _interopRequireDefault(require("../components/Subtitle"));

test('test title between 1 and 6', function () {
  var group_titles = _reactTestRenderer.default.create( /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_Title.default, {
    definition: 1
  }, " T\xEDtulo 1"), /*#__PURE__*/_react.default.createElement(_Title.default, {
    definition: 2
  }, " T\xEDtulo 2"), /*#__PURE__*/_react.default.createElement(_Title.default, {
    definition: 3
  }, " T\xEDtulo 3"), /*#__PURE__*/_react.default.createElement(_Title.default, {
    definition: 4
  }, " T\xEDtulo 4"), /*#__PURE__*/_react.default.createElement(_Title.default, {
    definition: 5
  }, " T\xEDtulo 5"), /*#__PURE__*/_react.default.createElement(_Title.default, {
    definition: 6
  }, " T\xEDtulo 6"))).toJSON();

  expect(group_titles).toMatchSnapshot();
});
test('test subtitle between 1 and 6', function () {
  var group_subtitles = _reactTestRenderer.default.create( /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_Subtitle.default, {
    definition: 1
  }, " T\xEDtulo 1"), /*#__PURE__*/_react.default.createElement(_Subtitle.default, {
    definition: 2
  }, " T\xEDtulo 2"), /*#__PURE__*/_react.default.createElement(_Subtitle.default, {
    definition: 3
  }, " T\xEDtulo 3"), /*#__PURE__*/_react.default.createElement(_Subtitle.default, {
    definition: 4
  }, " T\xEDtulo 4"), /*#__PURE__*/_react.default.createElement(_Subtitle.default, {
    definition: 5
  }, " T\xEDtulo 5"), /*#__PURE__*/_react.default.createElement(_Subtitle.default, {
    definition: 6
  }, " T\xEDtulo 6"))).toJSON();

  expect(group_subtitles).toMatchSnapshot();
});
test('test title between 1 and 6 using p', function () {
  var group_title_p = _reactTestRenderer.default.create( /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_Title.default, {
    p: true,
    definition: 1
  }, " T\xEDtulo 1"), /*#__PURE__*/_react.default.createElement(_Title.default, {
    p: true,
    definition: 2
  }, " T\xEDtulo 2"), /*#__PURE__*/_react.default.createElement(_Title.default, {
    p: true,
    definition: 3
  }, " T\xEDtulo 3"), /*#__PURE__*/_react.default.createElement(_Title.default, {
    p: true,
    definition: 4
  }, " T\xEDtulo 4"), /*#__PURE__*/_react.default.createElement(_Title.default, {
    p: true,
    definition: 5
  }, " T\xEDtulo 5"), /*#__PURE__*/_react.default.createElement(_Title.default, {
    p: true,
    definition: 6
  }, " T\xEDtulo 6"))).toJSON();

  expect(group_title_p).toMatchSnapshot();
});
test('test and subtitle using spaced', function () {
  var spaced = _reactTestRenderer.default.create( /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_Title.default, {
    p: true,
    definition: 1,
    spaced: true
  }, "Title 1"), /*#__PURE__*/_react.default.createElement(_Subtitle.default, {
    p: true,
    definition: 3
  }, "Subtitle 3"), /*#__PURE__*/_react.default.createElement(_Title.default, {
    p: true,
    definition: 2
  }, "Title 2"), /*#__PURE__*/_react.default.createElement(_Subtitle.default, {
    p: true,
    definition: 4
  }, "Subtitle 4"), /*#__PURE__*/_react.default.createElement(_Title.default, {
    p: true,
    definition: 3
  }, "Title 3"), /*#__PURE__*/_react.default.createElement(_Subtitle.default, {
    p: true,
    definition: 5
  }, "Subtitle 5"))).toJSON();

  expect(spaced).toMatchSnapshot();
});