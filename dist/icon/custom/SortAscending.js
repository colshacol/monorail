"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SortAscending = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const SortAscending = props => _react.default.createElement("svg", _extends({
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, props), _react.default.createElement("path", {
  d: "M10 11V13H18V11H10ZM10 5V7H14V5H10ZM10 17V19H22V17H10ZM6 7H8.5L5 3.5L1.5 7H4V20H6V7Z"
}));

exports.SortAscending = SortAscending;