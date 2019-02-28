"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AppIcon = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _CommonStyles = require("../CommonStyles");

var _Icon = require("../icon/Icon");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const AppIcon = (0, _styledComponents.default)(({
  appName,
  css: cssOverrides,
  ...otherProps
}) => _react.default.createElement("div", otherProps, _react.default.createElement(_Icon.Icon, {
  icon: (0, _CommonStyles.convertAppNameToString)(appName)
})))`
  ${({
  appName
}) => _styledComponents.css`
    background: ${(0, _CommonStyles.colors)((0, _CommonStyles.convertAppNameToColor)(appName))};
  `};

  ${(0, _CommonStyles.flexFlow)('row')};
  ${(0, _CommonStyles.borderRadius)()};

  box-sizing: border-box;
  height: 16px;
  width: 16px;

  ${_Icon.Icon} {
    fill: ${(0, _CommonStyles.colors)(_CommonStyles.Colors.White)};
    height: 100%;
    margin: auto;
    width: 100%;
  }

  ${({
  css: cssOverrides
}) => cssOverrides};
`;
exports.AppIcon = AppIcon;