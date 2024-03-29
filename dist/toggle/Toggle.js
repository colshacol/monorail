"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Toggle = exports.Slider = void 0;

var _react = _interopRequireWildcard(require("react"));

var _exports = require("../helpers/exports");

var _styledComponents = _interopRequireWildcard(require("../helpers/styled-components"));

var _theme = require("../helpers/theme");

var _Icon = require("../icon/Icon");

var _toggleTypes = require("./toggleTypes");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

// TODO(unsafe-any): Fix unsafe anys
// tslint:disable no-unsafe-any
const toggleWidth = 18;
const toggleHeight = 10;
const iconSize = 8;
const toggleSizeCss = {
  [_toggleTypes.ToggleSize.Default]: (0, _styledComponents.css)(["height:", "px;width:", "px;border:1px solid;border-radius:", "px;"], toggleHeight, toggleWidth, toggleHeight + 2 / 2),
  [_toggleTypes.ToggleSize.Large]: (0, _styledComponents.css)(["height:", "px;width:", "px;border:1px solid;border-radius:", "px;"], toggleHeight * 1.5, toggleWidth * 1.5, toggleHeight * 1.5 + 3 / 2),
  [_toggleTypes.ToggleSize.Xlarge]: (0, _styledComponents.css)(["height:", "px;width:", "px;border:2px solid;border-radius:", "px;"], toggleHeight * 2, toggleWidth * 2, toggleHeight * 2 + 4 / 2)
};
const sliderSizeCss = {
  [_toggleTypes.ToggleSize.Default]: (0, _styledComponents.css)(["width:10px;height:10px;"]),
  [_toggleTypes.ToggleSize.Large]: (0, _styledComponents.css)(["width:15px;height:15px;"]),
  [_toggleTypes.ToggleSize.Xlarge]: (0, _styledComponents.css)(["width:20px;height:20px;"])
};
const inputSizeCss = {
  [_toggleTypes.ToggleSize.Default]: (0, _styledComponents.css)(["transform:translateX(8px);"]),
  [_toggleTypes.ToggleSize.Large]: (0, _styledComponents.css)(["transform:translateX(12px);"]),
  [_toggleTypes.ToggleSize.Xlarge]: (0, _styledComponents.css)(["transform:translateX(16px);"])
};
const iconSizeCss = {
  [_toggleTypes.ToggleSize.Default]: (0, _styledComponents.css)(["font-size:", "px;"], iconSize),
  [_toggleTypes.ToggleSize.Large]: (0, _styledComponents.css)(["font-size:", "px;"], iconSize * 1.5),
  [_toggleTypes.ToggleSize.Xlarge]: (0, _styledComponents.css)(["font-size:", "px;"], iconSize * 2)
};

const CCToggle =
/*#__PURE__*/
_styledComponents.default.label.withConfig({
  displayName: "Toggle__CCToggle",
  componentId: "sc-14ermjw-0"
})(({
  toggleSize,
  checked,
  cssOverrides,
  theme: {
    mode
  }
}) => (0, _styledComponents.css)(["", ";box-sizing:content-box;cursor:pointer;display:inline-block;position:relative;transition:all ease-in 150ms;", ";", ";"], toggleSizeCss[toggleSize], checked ? (0, _styledComponents.css)(["background-color:", ";border-color:", ";"], (0, _theme.getThemeColor)(_theme.ThemeColors.ActionPrimary), (0, _theme.getThemeColor)(_theme.ThemeColors.ActionPrimary)) : (0, _styledComponents.css)(["background-color:", ";border-color:", ";"], mode === _theme.Mode.Dark ? (0, _exports.getColor)(_exports.Colors.White, 0.2) : (0, _exports.getColor)(_exports.Colors.White), (0, _exports.getColor)(_exports.Colors.Black, 0.06)), cssOverrides));

const StyledIconChecked =
/*#__PURE__*/
(0, _styledComponents.default)(({
  checked,
  toggleSize,
  ...otherProps
}) => _react.default.createElement(_Icon.Icon, otherProps))(({
  toggleSize,
  checked
}) => (0, _styledComponents.css)(["", ";", ";color:", ";position:absolute;transition:all ease-in 75ms;"], iconSizeCss[toggleSize], (0, _exports.visible)(checked), (0, _exports.getColor)(_exports.Colors.BrandLightBlue)));
const StyledIconNotChecked =
/*#__PURE__*/
(0, _styledComponents.default)(({
  checked,
  toggleSize,
  ...otherProps
}) => _react.default.createElement(_Icon.Icon, otherProps))(({
  checked,
  toggleSize
}) => (0, _styledComponents.css)(["", ";", ";color:", ";position:absolute;transition:all ease-in 75ms;"], iconSizeCss[toggleSize], (0, _exports.visible)(!checked), (0, _exports.getColor)(_exports.Colors.Black24)));

const Slider =
/*#__PURE__*/
_styledComponents.default.div.withConfig({
  displayName: "Toggle__Slider",
  componentId: "sc-14ermjw-1"
})(({
  toggleSize
}) => (0, _styledComponents.css)(["", ";", ";", ";background-color:", ";border-radius:50%;bottom:0;content:'';left:0;justify-content:center;align-items:center;transition:all ease-in 75ms;"], sliderSizeCss[toggleSize], (0, _exports.getElevationShadow)(_exports.ElevationRange.Elevation1), (0, _exports.flexFlow)('row'), (0, _exports.getColor)(_exports.Colors.White)));

exports.Slider = Slider;

const Input =
/*#__PURE__*/
_styledComponents.default.input.withConfig({
  displayName: "Toggle__Input",
  componentId: "sc-14ermjw-2"
})(({
  toggleSize
}) => (0, _styledComponents.css)(["display:none;&:checked + ", "{", ";}&:checked + ", " > ", "{", ";color:", ";}"],
/* sc-selector */
Slider, inputSizeCss[toggleSize],
/* sc-selector */
Slider,
/* sc-selector */
StyledIconChecked, (0, _exports.visible)(false), (0, _exports.getColor)(_exports.Colors.BrandLightBlue)));

class Toggle extends _react.Component {
  render() {
    const {
      cssOverrides,
      checked,
      onChange,
      toggleSize,
      ...domProps
    } = this.props;
    return _react.default.createElement(CCToggle, _extends({
      cssOverrides: cssOverrides,
      checked: checked,
      toggleSize: toggleSize
    }, domProps), _react.default.createElement(Input, {
      type: "checkbox",
      checked: checked,
      onChange: event => {
        onChange && onChange(event.currentTarget.checked);
      },
      toggleSize: toggleSize
    }), _react.default.createElement(Slider, {
      toggleSize: toggleSize
    }, _react.default.createElement(StyledIconChecked, {
      icon: "check",
      checked: checked,
      toggleSize: toggleSize
    }), _react.default.createElement(StyledIconNotChecked, {
      icon: "close",
      checked: checked,
      toggleSize: toggleSize
    })));
  }

} // tslint:enable


exports.Toggle = Toggle;
Toggle.defaultProps = {
  toggleSize: _toggleTypes.ToggleSize.Default
};