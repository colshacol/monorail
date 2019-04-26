"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Icon = exports.MaterialIconFontFace = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _Academy = require("./custom/Academy");

var _Admin = require("./custom/Admin");

var _Catalog = require("./custom/Catalog");

var _Certificate = require("./custom/Certificate");

var _ChevronDoubleLeft = require("./custom/ChevronDoubleLeft");

var _CircleArrowLeft = require("./custom/CircleArrowLeft");

var _exports = require("../helpers/exports");

var _Dashboard = require("./custom/Dashboard");

var _ErrorRobot = require("./custom/ErrorRobot");

var _EventDesign = require("./custom/EventDesign");

var _Events = require("./custom/Events");

var _Filter = require("./custom/Filter");

var _Gauge = require("./custom/Gauge");

var _Hardhat = require("./custom/Hardhat");

var _Home = require("./custom/Home");

var _Impact = require("./custom/Impact");

var _LMS = require("./custom/LMS");

var _Range = require("./custom/Range");

var _ReportsAnalytics = require("./custom/ReportsAnalytics");

var _Robot = require("./custom/Robot");

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
  'academy-app': _Academy.Academy,
  'admin-app': _Admin.Admin,
  'catalog-app': _Catalog.Catalog,
  'dashboard-app': _Dashboard.Dashboard,
  'event-design-app': _EventDesign.EventDesign,
  'events-app': _Events.Events,
  'externalLms-app': _LMS.LMS,
  'hardhat-app': _Hardhat.Hardhat,
  'home-app': _Home.Home,
  'impact-app': _Impact.Impact,
  'range-app': _Range.Range,
  'repo-app': _Catalog.Catalog,
  'reports-analytics-app': _ReportsAnalytics.ReportsAnalytics,
  'techops-app': _TechOps.TechOps,
  'tracker-app': _Tracker.Tracker,
  'training-app': _Academy.Academy,
  certificate: _Certificate.Certificate,
  chevron_double_left: _ChevronDoubleLeft.ChevronDoubleLeft,
  circle_arrow_left: _CircleArrowLeft.CircleArrowLeft,
  errorRobot: _ErrorRobot.ErrorRobot,
  filter: _Filter.Filter,
  gauge: _Gauge.Gauge,
  robot: _Robot.Robot,
  server_network: _ServerNetwork.ServerNetwork,
  sort_ascending: _SortAscending.SortAscending,
  sort_descending: _SortDescending.SortDescending,
  star_filled: _StarFilled.StarFilled,
  star_half: _StarHalf.StarHalf,
  star_outline: _StarOutline.StarOutline,
  threeGears: _ThreeGears.ThreeGears,
  unscored: _Unscored.Unscored,
  vcenter: _VCenter.VCenter
};
const Icon =
/*#__PURE__*/
(0, _styledComponents.default)(({
  cssOverrides: _cssOverrides,
  icon,
  ...otherProps
}) => {
  const CustomIcon = customIcons[icon] || (0, _exports.isAppName)(icon) && customIcons[`${(0, _exports.convertAppNameToString)(icon)}-app`];

  if (CustomIcon) {
    return _react.default.createElement(CustomIcon, otherProps);
  }

  return _react.default.createElement("i", otherProps, icon);
})(({
  size,
  cssOverrides
}) => (0, _styledComponents.css)(["", ";color:", ";direction:ltr;display:inline-block;fill:currentColor;flex-shrink:0;font-family:'Material Icons';font-style:normal;font-weight:normal;height:1em;letter-spacing:normal;line-height:1;text-transform:none;user-select:none;white-space:nowrap;width:1em;word-wrap:normal;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility;-moz-osx-font-smoothing:grayscale;font-feature-settings:'liga';", ";"], size ? (0, _styledComponents.css)(["font-size:", "px;"], size) : (0, _styledComponents.css)(["font-size:16px;"]), (0, _exports.getColor)(_exports.Colors.Black54), cssOverrides));
exports.Icon = Icon;