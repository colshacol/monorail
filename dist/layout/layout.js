"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PageContent = exports.AppContainer = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _exports = require("../helpers/exports");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const AppContainer =
/*#__PURE__*/
_styledComponents.default.div.withConfig({
  displayName: "layout__AppContainer",
  componentId: "sc-1ygcav0-0"
})(["", ";flex:1;overflow:hidden;&.catalog,&.events:not(.execution),&.reports-analytics{", ";}"], (0, _exports.flexFlow)(), _exports.gothamFontFamily);

exports.AppContainer = AppContainer;

const PageContent =
/*#__PURE__*/
_styledComponents.default.div.withConfig({
  displayName: "layout__PageContent",
  componentId: "sc-1ygcav0-1"
})(["", ";flex:1;overflow:hidden;"], (0, _exports.flexFlow)());

exports.PageContent = PageContent;