"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ReportsAnalytics = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const ReportsAnalytics = props => _react.default.createElement("svg", _extends({
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, props), _react.default.createElement("path", {
  d: "M3 5H4.71429V17.25H21V19H3V5Z",
  fill: "#161C4F"
}), _react.default.createElement("path", {
  d: "M6.42857 11.125H9V15.5H6.42857V11.125Z",
  fill: "#161C4F"
}), _react.default.createElement("path", {
  d: "M9.85714 6.75H12.4286V15.5H9.85714V6.75Z",
  fill: "#161C4F"
}), _react.default.createElement("path", {
  d: "M13.2857 12H15.8571V15.5H13.2857V12Z",
  fill: "#161C4F"
}), _react.default.createElement("path", {
  d: "M16.7143 9.375H19.2857V15.5H16.7143V9.375Z",
  fill: "#161C4F"
}));

exports.ReportsAnalytics = ReportsAnalytics;