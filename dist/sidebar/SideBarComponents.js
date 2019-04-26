"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SideBarMenuDivider = exports.SidebarMenuContextRibbon = exports.SidebarMenuItemDropDownToggle = exports.SidebarMenuContainer = exports.SidebarContainer = exports.SidebarContainerAnimationPose = exports.sideBarCollapsedTransition = exports.sideBarCollapsedTransitionDuration = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _exports = require("../helpers/exports");

var _List = require("../list/List");

var _reactPose = _interopRequireDefault(require("react-pose"));

var _zIndex = require("../helpers/zIndex");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

// TODO(unsafe-any): Fix unsafe anys
// tslint:disable no-unsafe-any
const sideBarCollapsedTransitionDuration = 150;
exports.sideBarCollapsedTransitionDuration = sideBarCollapsedTransitionDuration;

const sideBarCollapsedTransition = ({
  properties = ['all'],
  isSideBarCollapsed
}) => (0, _exports.transition)({
  properties,
  easing: (0, _exports.ease)(isSideBarCollapsed),
  duration: sideBarCollapsedTransitionDuration
});

exports.sideBarCollapsedTransition = sideBarCollapsedTransition;
let SidebarContainerAnimationPose;
exports.SidebarContainerAnimationPose = SidebarContainerAnimationPose;

(function (SidebarContainerAnimationPose) {
  SidebarContainerAnimationPose["Open"] = "open";
  SidebarContainerAnimationPose["Collapsed"] = "collapsed";
})(SidebarContainerAnimationPose || (exports.SidebarContainerAnimationPose = SidebarContainerAnimationPose = {}));

const SidebarContainer =
/*#__PURE__*/
(0, _styledComponents.default)(_reactPose.default.div({
  [SidebarContainerAnimationPose.Open]: {
    width: 224,
    transition: {
      duration: sideBarCollapsedTransitionDuration,
      ease: 'easeIn'
    }
  },
  [SidebarContainerAnimationPose.Collapsed]: {
    width: 64,
    transition: {
      duration: sideBarCollapsedTransitionDuration,
      ease: 'easeOut'
    }
  }
})).withConfig({
  displayName: "SideBarComponents__SidebarContainer",
  componentId: "u2fke3-0"
})(["", ";", ";", ";background:#f4f4f7;box-sizing:border-box;flex-shrink:0;position:relative;will-change:width;&::after{background:linear-gradient( to right,rgba(0,0,0,0.1) 0px,rgba(0,0,0,0.1) 1px,rgba(0,0,0,0.05) 1px,rgba(0,0,0,0) 100% );bottom:0;content:'';position:absolute;right:-3px;top:0;width:3px;}"], (0, _exports.flexFlow)(), _exports.gothamFontFamily, (0, _zIndex.zIndex)(_zIndex.ZIndexNodeName.SidebarContainer));
exports.SidebarContainer = SidebarContainer;

const SidebarMenuContainer =
/*#__PURE__*/
_styledComponents.default.div.withConfig({
  displayName: "SideBarComponents__SidebarMenuContainer",
  componentId: "u2fke3-1"
})(({
  cssOverrides
}) => (0, _styledComponents.css)(["", ";flex:1;overflow-y:auto;padding:0 8px;", ";"], (0, _exports.flexFlow)(), cssOverrides));

exports.SidebarMenuContainer = SidebarMenuContainer;
const SidebarMenuItemDropDownToggle =
/*#__PURE__*/
(0, _styledComponents.default)(({
  title,
  subtitle,
  iconName,
  isOpen,
  cssOverrides,
  isSideBarCollapsed,
  ...otherProps
}) => _react.default.createElement(_List.ListItem, _extends({
  cssOverrides: (0, _styledComponents.css)(["", ";", ";"], (0, _exports.borderRadius)(_exports.BorderRadius.Medium), cssOverrides),
  size: _exports.Sizes.DP40
}, otherProps), _react.default.createElement(_List.ListItemGraphic, {
  icon: iconName,
  cssOverrides: (0, _styledComponents.css)(["color:currentColor;transform:translateX(", "px);transition:all ease 75ms,transform ", " ", "ms;"], isSideBarCollapsed ? -6 : 0, (0, _exports.ease)(isSideBarCollapsed), sideBarCollapsedTransitionDuration)
}), _react.default.createElement(_List.ListItemText, null, _react.default.createElement(_List.ListItemPrimaryText, null, title), _react.default.createElement(_List.ListItemSecondaryText, {
  cssOverrides: isOpen && (0, _styledComponents.css)(["color:", ";"], (0, _exports.getColor)(_exports.Colors.AccentPurple700))
}, subtitle)), _react.default.createElement(_List.ListItemGraphic, {
  icon: isOpen ? 'arrow_drop_up' : 'arrow_drop_down',
  cssOverrides: (0, _styledComponents.css)(["transform:translateX(", "px);transition:all ease 75ms,transform ", " ", "ms;"], isSideBarCollapsed ? -18 : 0, (0, _exports.ease)(isSideBarCollapsed), sideBarCollapsedTransitionDuration)
})))(({
  isOpen,
  isSideBarCollapsed,
  cssOverrides,
  disabled
}) => (0, _styledComponents.css)(["", ";background:", ";margin:0 8px 8px;border:1px solid ", ";color:", ";&:hover,&:active{background:", ";}&:hover{border-color:", ";}&:active{border-color:", ";color:", ";}&:active,&:active ", "{color:", ";}", "{", ";", ";}", ";"], disabled && _exports.baseDisabledStyles, (0, _exports.getColor)(_exports.Colors.White), isOpen ? (0, _exports.getColor)(_exports.Colors.AccentPurple700) : (0, _exports.getColor)(_exports.Colors.White), isOpen ? (0, _exports.getColor)(_exports.Colors.AccentPurple700) : (0, _exports.getColor)(_exports.Colors.BrandDarkBlue), (0, _exports.getColor)(_exports.Colors.White), !isOpen && (0, _exports.getColor)(_exports.Colors.AccentPurple500), (0, _exports.getColor)(_exports.Colors.AccentPurple700), (0, _exports.getColor)(_exports.Colors.AccentPurple700), _List.ListItemGraphic, (0, _exports.getColor)(_exports.Colors.AccentPurple700), _List.ListItemText, (0, _exports.visible)(!isSideBarCollapsed), sideBarCollapsedTransition({
  isSideBarCollapsed
}), cssOverrides));
exports.SidebarMenuItemDropDownToggle = SidebarMenuItemDropDownToggle;

const SidebarMenuContextRibbon =
/*#__PURE__*/
_styledComponents.default.div.withConfig({
  displayName: "SideBarComponents__SidebarMenuContextRibbon",
  componentId: "u2fke3-2"
})(["", ";color:", ";"], (0, _exports.typography)(500, _exports.FontSizes.Title5, '12px 12px 13px 20px'), (0, _exports.getColor)(_exports.Colors.Black62));

exports.SidebarMenuContextRibbon = SidebarMenuContextRibbon;

const SideBarMenuDivider =
/*#__PURE__*/
_styledComponents.default.div.withConfig({
  displayName: "SideBarComponents__SideBarMenuDivider",
  componentId: "u2fke3-3"
})(["background:#e2e4ea;height:1px;margin:15px 8px 16px;flex-shrink:0;"]); // tslint:enable


exports.SideBarMenuDivider = SideBarMenuDivider;