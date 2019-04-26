"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Header = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _AppIcon = require("../appIcon/AppIcon");

var _Icon = require("../icon/Icon");

var _exports = require("../helpers/exports");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// TODO(unsafe-any): Fix unsafe anys
// tslint:disable no-unsafe-any
const HeaderRow =
/*#__PURE__*/
_styledComponents.default.div.withConfig({
  displayName: "Header__HeaderRow",
  componentId: "muzh11-0"
})(({
  cssOverrides
}) => (0, _styledComponents.css)(["color:", ";", ";", ";align-items:center;flex-shrink:0;height:48px;padding:0 16px;", ";"], (0, _exports.getColor)(_exports.Colors.BrandDarkBlue), (0, _exports.flexFlow)('row'), (0, _exports.typography)(500, _exports.FontSizes.Title3), cssOverrides));

const iconRightCss =
/*#__PURE__*/
(0, _styledComponents.css)(["color:", ";flex-shrink:0;margin-right:12px;"], (0, _exports.getColor)(_exports.Colors.BrandDarkBlue));
const iconLeftCss =
/*#__PURE__*/
(0, _styledComponents.css)(["color:", ";flex-shrink:0;margin-left:12px;"], (0, _exports.getColor)(_exports.Colors.BrandDarkBlue));
const Header =
/*#__PURE__*/
(0, _styledComponents.default)(({
  actions,
  appIcon,
  children,
  cssOverrides,
  cssHeaderRow,
  iconLeft,
  noBorder = false,
  title,
  ...otherProps
}) => _react.default.createElement("div", otherProps, _react.default.createElement(HeaderRow, {
  cssOverrides: cssHeaderRow
}, appIcon && _react.default.createElement(_AppIcon.AppIcon, {
  cssOverrides: iconRightCss,
  appName: appIcon
}), iconLeft && _react.default.createElement(_Icon.Icon, {
  cssOverrides: iconRightCss,
  icon: iconLeft
}), title, actions), children))(({
  noBorder,
  appIcon,
  cssOverrides
}) => (0, _styledComponents.css)(["", ";", ";position:relative;flex-shrink:0;", ";"], !noBorder && (0, _styledComponents.css)(["&::after{content:'';background:", ";bottom:0;height:1px;left:0;position:absolute;right:0;}"], appIcon ? (0, _exports.getColor)((0, _exports.convertAppNameToColor)(appIcon)) : '#ebebeb'), (0, _exports.flexFlow)(), cssOverrides)); // tslint:enable

exports.Header = Header;