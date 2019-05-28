"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Puzzle = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const Puzzle = props => _react.default.createElement("svg", _extends({
  width: "24",
  height: "24",
  viewBox: "0 0 24 24"
}, props), _react.default.createElement("path", {
  d: "M12.5 4C12.5 4.71012 12.2039 5.3511 11.7285 5.80621C11.6591 5.87263 11.7038 6 11.7998 6H17C17.5523 6 18 6.44772 18 7V12.2002C18 12.2962 18.1274 12.3409 18.1938 12.2715C18.6489 11.7961 19.2899 11.5 20 11.5C21.3807 11.5 22.5 12.6193 22.5 14C22.5 15.3807 21.3807 16.5 20 16.5C19.2899 16.5 18.6489 16.2039 18.1938 15.7285C18.1274 15.6591 18 15.7038 18 15.7998V21C18 21.5523 17.5523 22 17 22H12.2998C12.2038 22 12.1591 21.8726 12.2285 21.8062C12.7039 21.3511 13 20.7101 13 20C13 18.6193 11.8807 17.5 10.5 17.5C9.11929 17.5 8 18.6193 8 20C8 20.7101 8.29608 21.3511 8.77152 21.8062C8.84091 21.8726 8.79624 22 8.70018 22H3C2.44772 22 2 21.5523 2 21V15.2998C2 15.2038 2.12737 15.1591 2.19379 15.2285C2.6489 15.7039 3.28987 16 4 16C5.38071 16 6.5 14.8807 6.5 13.5C6.5 12.1193 5.38071 11 4 11C3.28987 11 2.6489 11.2961 2.19379 11.7715C2.12737 11.8409 2 11.7962 2 11.7002V7C2 6.44772 2.44772 6 3 6H8.20018C8.29624 6 8.34091 5.87263 8.27152 5.80621C7.79608 5.3511 7.5 4.71013 7.5 4C7.5 2.61929 8.61929 1.5 10 1.5C11.3807 1.5 12.5 2.61929 12.5 4Z"
}));

exports.Puzzle = Puzzle;