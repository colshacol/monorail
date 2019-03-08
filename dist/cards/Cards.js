"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BBCardGrid = exports.BBCardHeader = exports.BBCardBackground = void 0;

var _react = _interopRequireWildcard(require("react"));

var _AppIcon = require("../appIcon/AppIcon");

var _Icon = require("../icon/Icon");

var _CommonStyles = require("../CommonStyles");

var _styledComponents = _interopRequireWildcard(require("styled-components"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const BBCardContent =
/*#__PURE__*/
(0, _styledComponents.default)('div').withConfig({
  displayName: "Cards__BBCardContent",
  componentId: "mqkraz-0"
})(["", ";border-radius:inherit;height:100%;overflow:hidden;width:100%;position:relative;", ";"], (0, _CommonStyles.flexFlow)(), ({
  cssOverrides
}) => cssOverrides); // building-blocks/cards/background

const BBCardBackground =
/*#__PURE__*/
(0, _styledComponents.default)((0, _react.forwardRef)(({
  children,
  cssOverrides,
  hover,
  elevation,
  cssCardContent,
  ...otherProps
}, ref) => _react.default.createElement("div", _extends({
  ref: ref
}, otherProps), _react.default.createElement(BBCardContent, {
  cssOverrides: cssCardContent
}, children)))).withConfig({
  displayName: "Cards__BBCardBackground",
  componentId: "mqkraz-1"
})(["", ";", ";", ";background:", ";position:relative;z-index:0;", ";&::before{border-radius:inherit;background:", ";bottom:0;content:'';left:0;position:absolute;right:0;top:0;z-index:0;}&::after{", ";", ";background:", ";bottom:2px;content:'';left:2px;position:absolute;right:2px;top:2px;z-index:-5;}"], ({
  hover
}) => hover && (0, _styledComponents.css)(["cursor:pointer;&:hover{&::after{transition:box-shadow ease 125ms;", ";}}"], (0, _CommonStyles.getElevation)(_CommonStyles.ElevationRange.Elevation10)), (0, _CommonStyles.flexFlow)(), (0, _CommonStyles.borderRadius)(_CommonStyles.BorderRadius.Large), (0, _CommonStyles.colors)(_CommonStyles.Colors.White), ({
  cssOverrides
}) => cssOverrides, (0, _CommonStyles.colors)(_CommonStyles.Colors.White), (0, _CommonStyles.borderRadius)(_CommonStyles.BorderRadius.Medium), ({
  elevation = _CommonStyles.ElevationRange.Elevation6
}) => (0, _CommonStyles.getElevation)(elevation), (0, _CommonStyles.colors)(_CommonStyles.Colors.White));
exports.BBCardBackground = BBCardBackground;
const BBCardHeaderContainer =
/*#__PURE__*/
(0, _styledComponents.default)('div').withConfig({
  displayName: "Cards__BBCardHeaderContainer",
  componentId: "mqkraz-2"
})(["", ";align-items:center;flex-shrink:0;height:32px;padding:0 16px;position:relative;", ";"], (0, _CommonStyles.flexFlow)('row'), ({
  cssOverrides
}) => cssOverrides);
const BBCardHeaderTitle =
/*#__PURE__*/
(0, _styledComponents.default)('h1').withConfig({
  displayName: "Cards__BBCardHeaderTitle",
  componentId: "mqkraz-3"
})(["", ";margin:0;"], (0, _CommonStyles.typography)(700, _CommonStyles.FontSizes.Title5));
const StyledAppIconLeft =
/*#__PURE__*/
(0, _styledComponents.default)(_AppIcon.AppIcon).withConfig({
  displayName: "Cards__StyledAppIconLeft",
  componentId: "mqkraz-4"
})(["margin-right:16px;"]);
const StyledIconLeft =
/*#__PURE__*/
(0, _styledComponents.default)(_Icon.Icon).withConfig({
  displayName: "Cards__StyledIconLeft",
  componentId: "mqkraz-5"
})(["margin-right:16px;"]);
const StyledIconRight =
/*#__PURE__*/
(0, _styledComponents.default)(_Icon.Icon).withConfig({
  displayName: "Cards__StyledIconRight",
  componentId: "mqkraz-6"
})(["margin-left:16px;"]);
const BBCardBottomBorder =
/*#__PURE__*/
(0, _styledComponents.default)('div').withConfig({
  displayName: "Cards__BBCardBottomBorder",
  componentId: "mqkraz-7"
})(["", ";bottom:0;height:1px;left:0;position:absolute;right:0;"], ({
  accentColor
}) => (0, _styledComponents.css)(["background:linear-gradient( to right,", " 0,", " 16px,", " calc(100% - 16px),", " 100% );"], (0, _CommonStyles.colors)(_CommonStyles.Colors.White, 0), accentColor, accentColor, (0, _CommonStyles.colors)(_CommonStyles.Colors.White, 0)));

// building-blocks/cards/header
const BBCardHeader = ({
  accentColor = (0, _CommonStyles.colors)(_CommonStyles.Colors.BrandLightBlue),
  appIcon,
  children,
  cssOverrides,
  iconLeft,
  iconRight,
  noBorder,
  title
}) => _react.default.createElement(BBCardHeaderContainer, {
  cssOverrides: cssOverrides
}, appIcon && _react.default.createElement(StyledAppIconLeft, {
  appName: appIcon
}), iconLeft && _react.default.createElement(StyledIconLeft, {
  icon: iconLeft
}), _react.default.createElement(BBCardHeaderTitle, null, title), iconRight && _react.default.createElement(StyledIconRight, {
  icon: iconRight
}), children, !noBorder && _react.default.createElement(BBCardBottomBorder, {
  accentColor: accentColor
})); // building-blocks/cards/card-grid


exports.BBCardHeader = BBCardHeader;
const BBCardGrid =
/*#__PURE__*/
(0, _styledComponents.default)('div').withConfig({
  displayName: "Cards__BBCardGrid",
  componentId: "mqkraz-8"
})(["display:grid;flex-grow:1;grid-auto-rows:max-content;grid-template-columns:repeat( auto-fill,", "px );justify-content:center;padding:20px 32px 14px;display:-ms-flexbox;flex-flow:row wrap;align-content:flex-start;", ";"], ({
  cardWidth = 272
}) => cardWidth, ({
  cssOverrides
}) => cssOverrides);
exports.BBCardGrid = BBCardGrid;