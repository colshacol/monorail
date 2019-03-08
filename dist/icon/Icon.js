"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Icon = exports.MaterialIconFontFace = void 0;

var _CommonStyles = require("../CommonStyles");

var _Academy = require("./custom/Academy");

var _Admin = require("./custom/Admin");

var _Catalog = require("./custom/Catalog");

var _Certificate = require("./custom/Certificate");

var _ChevronDoubleLeft = require("./custom/ChevronDoubleLeft");

var _CircleArrowLeft = require("./custom/CircleArrowLeft");

var _Dashboard = require("./custom/Dashboard");

var _ErrorRobot = require("./custom/ErrorRobot");

var _Filter = require("./custom/Filter");

var _Gauge = require("./custom/Gauge");

var _Hardhat = require("./custom/Hardhat");

var _Impact = require("./custom/Impact");

var _LMS = require("./custom/LMS");

var _Range = require("./custom/Range");

var _Retry = require("./custom/Retry");

var _ServerNetwork = require("./custom/ServerNetwork");

var _SortAscending = require("./custom/SortAscending");

var _SortDescending = require("./custom/SortDescending");

var _StarFilled = require("./custom/StarFilled");

var _StarHalf = require("./custom/StarHalf");

var _StarOutline = require("./custom/StarOutline");

var _TechOps = require("./custom/TechOps");

var _ThreeGears = require("./custom/ThreeGears");

var _Tracker = require("./custom/Tracker");

var _Unscored = require("./custom/Unscored");

var _VCenter = require("./custom/VCenter");

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// https://fonts.googleapis.com/icon?family=Material+Icons&style=baseline
const MaterialIconFontFace =
/*#__PURE__*/
_styledComponents.createGlobalStyle`
  @font-face {
    font-family: 'Material Icons';
    font-style: normal;
    font-weight: 400;
    src: url('../assets/fonts/MaterialIcons-Regular.eot'); /* For IE6-8 */
    src: local('Material Icons'),
    local('MaterialIcons-Regular'),
    url('../assets/fonts/MaterialIcons-Regular.woff2') format('woff2'),
    url('../assets/fonts/MaterialIcons-Regular.woff') format('woff'),
    url('../assets/fonts/MaterialIcons-Regular.ttf') format('truetype');
  }
`; // TODO: Refactor [key: string] to more concrete type

exports.MaterialIconFontFace = MaterialIconFontFace;
const customIcons = {
  academy: _Academy.Academy,
  admin: _Admin.Admin,
  catalog: _Catalog.Catalog,
  certificate: _Certificate.Certificate,
  chevron_double_left: _ChevronDoubleLeft.ChevronDoubleLeft,
  circle_arrow_left: _CircleArrowLeft.CircleArrowLeft,
  dashboard: _Dashboard.Dashboard,
  errorRobot: _ErrorRobot.ErrorRobot,
  externalLms: _LMS.LMS,
  filter: _Filter.Filter,
  gauge: _Gauge.Gauge,
  hardhat: _Hardhat.Hardhat,
  impact: _Impact.Impact,
  range: _Range.Range,
  repo: _Catalog.Catalog,
  server_network: _ServerNetwork.ServerNetwork,
  sort_ascending: _SortAscending.SortAscending,
  sort_descending: _SortDescending.SortDescending,
  techops: _TechOps.TechOps,
  threeGears: _ThreeGears.ThreeGears,
  tracker: _Tracker.Tracker,
  training: _Academy.Academy,
  unscored: _Unscored.Unscored,
  vcenter: _VCenter.VCenter,
  retry: _Retry.Retry,
  star_filled: _StarFilled.StarFilled,
  star_outline: _StarOutline.StarOutline,
  star_half: _StarHalf.StarHalf
};
const Icon =
/*#__PURE__*/
(0, _styledComponents.default)(({
  cssOverrides: _cssOverrides,
  icon,
  ...otherProps
}) => {
  const CustomIcon = customIcons[icon];

  if (CustomIcon) {
    return _react.default.createElement(CustomIcon, otherProps);
  }

  return _react.default.createElement("i", otherProps, icon);
}).withConfig({
  displayName: "Icon",
  componentId: "sc-17ga27i-0"
})(["", ";color:", ";direction:ltr;display:inline-block;fill:currentColor;flex-shrink:0;font-family:'Material Icons';font-style:normal;font-weight:normal;height:1em;letter-spacing:normal;line-height:1;text-transform:none;user-select:none;white-space:nowrap;width:1em;word-wrap:normal;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility;-moz-osx-font-smoothing:grayscale;font-feature-settings:'liga';", ";"], ({
  size
}) => size ? (0, _styledComponents.css)(["font-size:", "px;"], size) : (0, _styledComponents.css)(["font-size:16px;"]), (0, _CommonStyles.colors)(_CommonStyles.Colors.Black54), ({
  cssOverrides
}) => cssOverrides);
exports.Icon = Icon;