"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ContextMenu = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _Array = require("fp-ts/lib/Array");

var _Option = require("fp-ts/lib/Option");

var _react = _interopRequireWildcard(require("react"));

var _Link = _interopRequireDefault(require("react-router/lib/Link"));

var _exports = require("../helpers/exports");

var _Search = require("../inputs/Search");

var _SearchController = require("../inputs/SearchController");

var _List = require("../list/List");

var _typeGuards = require("../sharedHelpers/typeGuards");

var _SidebarDropDown = require("./SidebarDropDown");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const SearchContainer =
/*#__PURE__*/
_styledComponents.default.div.withConfig({
  displayName: "ContextMenu__SearchContainer",
  componentId: "n6aqip-0"
})(["", ";align-items:center;flex-shrink:0;"], (0, _exports.flexFlow)('row'));

const MenuHeader =
/*#__PURE__*/
_styledComponents.default.span.withConfig({
  displayName: "ContextMenu__MenuHeader",
  componentId: "n6aqip-1"
})(({
  cssOverrides
}) => (0, _styledComponents.css)(["", ";", ";color:", ";flex-shrink:0;", ";"], (0, _exports.typography)(500, _exports.FontSizes.Title5, '12px'), _exports.ellipsis, (0, _exports.getColor)(_exports.Colors.Black62), cssOverrides));

const MenuItemIconRow =
/*#__PURE__*/
_styledComponents.default.div.withConfig({
  displayName: "ContextMenu__MenuItemIconRow",
  componentId: "n6aqip-2"
})(["", ";flex:1 1 100%;margin:8px 6px 12px;"], (0, _exports.flexFlow)('row'));

const ContextMenuItem = ({
  leftIcon,
  rightIcon,
  primaryText,
  secondaryText,
  children,
  dense,
  meta,
  size,
  cssOverrides,
  ...otherProps
}) => _react.default.createElement(_StyledListItem, _extends({
  dense: dense,
  size: size
}, otherProps), !(0, _typeGuards.isNil)(leftIcon) && _react.default.createElement(_StyledListItemGraphic, {
  icon: leftIcon,
  dense: dense,
  _css: (0, _exports.getColor)(_exports.Colors.Black62)
}), (0, _typeGuards.isNil)(secondaryText) && (0, _typeGuards.isNil)(meta) ? _react.default.createElement(_StyledListItemPrimaryText, null, primaryText) : _react.default.createElement(_List.ListItemText, null, _react.default.createElement(_StyledListItemPrimaryText2, null, primaryText), (0, _typeGuards.isNil)(secondaryText) ? null : _react.default.createElement(_StyledListItemSecondaryText, null, secondaryText), meta), !(0, _typeGuards.isNil)(rightIcon) && _react.default.createElement(_List.ListItemGraphic, {
  icon: rightIcon,
  dense: dense
}), children);

class ContextMenu extends _react.Component {
  constructor(...args) {
    super(...args);
    this.searchRef = (0, _react.createRef)();

    this.renderContextMenuItems = compareSearch => {
      const {
        contextItems,
        icon,
        onClick,
        onItemClick
      } = this.props;
      return contextItems.map(event => {
        const groupHeader = _react.default.createElement(MenuHeader, {
          key: event.title
        }, event.title);

        const items = event.items.filter(item => compareSearch(item.title) || compareSearch(item.description) || compareSearch(event.title)).map(item => _react.default.createElement(ContextMenuItem // TODO(unsafe-any): Fix unsafe anys
        // tslint:disable no-unsafe-any
        , {
          as: ({
            as: _as,
            cssOverrides: _cssOverrides,
            ...linkProps
          }) => _react.default.createElement(_Link.default, linkProps) // tslint:enable
          ,
          key: item.key,
          leftIcon: icon,
          primaryText: item.title,
          secondaryText: item.description,
          size: _exports.Sizes.DP40,
          to: item.link,
          onClick: e => {
            onClick(e);

            if (onItemClick) {
              onItemClick(item);
            }
          },
          tabIndex: 1,
          meta: (0, _typeGuards.isNil)(item.icons) ? null : _react.default.createElement(MenuItemIconRow, null, item.icons)
        }));
        return items.length > 0 ? (0, _Option.some)([groupHeader, items]) : _Option.none;
      });
    };
  }

  componentDidUpdate(prevProps) {
    const searchRef = this.searchRef.current;

    if (!(0, _typeGuards.isNil)(searchRef) && !prevProps.isOpen && this.props.isOpen) {
      window.setTimeout(() => searchRef.focus(), 50);
    }
  }

  render() {
    const {
      closingAnimationCompleted,
      isOpen,
      onClick,
      position,
      renderFilter,
      togglePopOver,
      width
    } = this.props;
    return _react.default.createElement(_SidebarDropDown.SidebarDropDown, {
      closingAnimationCompleted: closingAnimationCompleted,
      isOpen: isOpen,
      onClick: onClick,
      position: position,
      togglePopOver: togglePopOver,
      width: width
    }, _react.default.createElement(_SearchController.SearchController, null, ({
      compareSearch,
      value,
      onChange
    }) => {
      const contextMenuItems = _Array.array.compact(this.renderContextMenuItems(compareSearch));

      return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(SearchContainer, null, _react.default.createElement(_StyledSearch, {
        value: value,
        onChange: onChange,
        searchRef: this.searchRef
      }), renderFilter()), _react.default.createElement(_StyledListContainer, {
        emptyText: "Loading..."
      }, (0, _Array.isEmpty)(contextMenuItems) ? _react.default.createElement(ContextMenuItem, {
        size: _exports.Sizes.DP40,
        primaryText: "No results."
      }) : contextMenuItems));
    }));
  }

}

exports.ContextMenu = ContextMenu;
ContextMenu.defaultProps = {
  renderFilter: () => null
};

var _StyledListItem = (0, _styledComponents.default)(_List.ListItem)`padding:0 6px;`;

var _StyledListItemGraphic = (0, _styledComponents.default)(_List.ListItemGraphic)`color:${p => p._css};margin-top:12px;`;

var _StyledListItemPrimaryText = (0, _styledComponents.default)(_List.ListItemPrimaryText)`margin-top:12px;`;

var _StyledListItemPrimaryText2 = (0, _styledComponents.default)(_List.ListItemPrimaryText)`margin-top:6px;`;

var _StyledListItemSecondaryText = (0, _styledComponents.default)(_List.ListItemSecondaryText)`margin-bottom:6px;`;

var _StyledSearch = (0, _styledComponents.default)(_Search.Search)`flex-grow:1;margin:12px;flex-shrink:unset;`;

var _StyledListContainer = (0, _styledComponents.default)(_List.ListContainer)`padding:0 0 4px;`;