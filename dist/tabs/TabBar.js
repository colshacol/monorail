"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TabBar = exports.TabBarContainer = void 0;

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _exports = require("../helpers/exports");

var _TabBarController = require("./TabBarController");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

// TODO(unsafe-any): Fix unsafe anys
// tslint:disable no-unsafe-any
// TabBarIndicator is pos:abs to this element. Also we use offsetLeft on the Tab which references this position.
const TabBarContainer =
/*#__PURE__*/
_styledComponents.default.div.withConfig({
  displayName: "TabBar__TabBarContainer",
  componentId: "sc-1hr19pz-0"
})(({
  cssOverrides,
  size
}) => (0, _styledComponents.css)(["", ";height:", "px;padding:0 8px;position:relative;box-sizing:border-box;border-bottom:1px solid ", ";flex-shrink:0;", ";"], (0, _exports.flexFlow)('row'), size, (0, _exports.getColor)(_exports.Colors.Grey94), cssOverrides));

exports.TabBarContainer = TabBarContainer;
const tabBarIndicatorSideWidth = 3;
const tabBarIndicatorBodyWidth = 10;
const TabBarIndicatorContainer =
/*#__PURE__*/
(0, _styledComponents.default)(({
  left,
  width,
  duration,
  ...otherProps
}) => _react.default.createElement("div", otherProps, _react.default.createElement(TabBarIndicatorLeft, null), _react.default.createElement(TabBarIndicatorBody, {
  duration: duration,
  width: width
}), _react.default.createElement(TabBarIndicatorRight, {
  duration: duration,
  width: width
})))(({
  left,
  duration
}) => (0, _styledComponents.css)(["", ";bottom:0;height:3px;left:0;position:absolute;transition-duration:", "ms;transition-property:all;transition-timing-function:ease-in-out;transform-origin:bottom left;transform:translateX(", "px);"], (0, _exports.flexFlow)('row'), duration, left));

const TabBarIndicatorLeft =
/*#__PURE__*/
_styledComponents.default.div.withConfig({
  displayName: "TabBar__TabBarIndicatorLeft",
  componentId: "sc-1hr19pz-1"
})(["background:", ";border-radius:3px 0 0 0;height:100%;width:", "px;position:absolute;left:0;"], (0, _exports.getColor)(_exports.Colors.BrandLightBlue), tabBarIndicatorSideWidth + 1);

const TabBarIndicatorRight =
/*#__PURE__*/
(0, _styledComponents.default)(({
  duration,
  width,
  ...otherProps
}) => _react.default.createElement("div", otherProps))(({
  duration,
  width
}) => (0, _styledComponents.css)(["background:", ";border-radius:0 3px 0 0;height:100%;width:", "px;transition-duration:", "ms;transition-property:all;transition-timing-function:ease-in-out;transform-origin:bottom left;transform:translateX( ", "px );"], (0, _exports.getColor)(_exports.Colors.BrandLightBlue), tabBarIndicatorSideWidth + 1, duration, width - tabBarIndicatorBodyWidth - tabBarIndicatorSideWidth - 1));
const TabBarIndicatorBody =
/*#__PURE__*/
(0, _styledComponents.default)(({
  duration,
  width,
  ...otherProps
}) => _react.default.createElement("div", otherProps))(({
  duration,
  width
}) => (0, _styledComponents.css)(["background:", ";height:100%;width:", "px;transition-duration:", "ms;transition-property:all;transition-timing-function:ease-in-out;transform-origin:bottom left;transform:translateX(", "px) scaleX( ", " );"], (0, _exports.getColor)(_exports.Colors.BrandLightBlue), tabBarIndicatorBodyWidth, duration, tabBarIndicatorSideWidth, (width - tabBarIndicatorSideWidth * 2) / tabBarIndicatorBodyWidth));

class TabBar extends _react.Component {
  render() {
    const {
      cssOverrides,
      size,
      actions,
      children,
      activeTabIndex,
      getActiveTabIndex,
      ...domProps
    } = this.props;
    return _react.default.createElement(TabBarContainer, _extends({
      cssOverrides: cssOverrides,
      size: size
    }, domProps), _react.default.createElement(_TabBarController.TabBarController, {
      actions: actions,
      tabBarIndicator: props => _react.default.createElement(TabBarIndicatorContainer, props),
      activeTabIndex: activeTabIndex,
      getActiveTabIndex: getActiveTabIndex
    }, children));
  }

} // tslint:enable


exports.TabBar = TabBar;
TabBar.defaultProps = {
  size: _exports.Sizes.DP24
};