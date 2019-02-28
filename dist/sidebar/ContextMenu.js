"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ContextMenu = void 0;

var _react = _interopRequireWildcard(require("react"));

var _SidebarDropDown = require("./SidebarDropDown");

var _Search = require("../inputs/Search");

var _List = require("../list/List");

var _Link = _interopRequireDefault(require("react-router/lib/Link"));

var _CommonStyles = require("../CommonStyles");

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _SearchController = require("../inputs/SearchController");

var _Array = require("fp-ts/lib/Array");

var _Option = require("fp-ts/lib/Option");

var _primitiveGuards = require("../CoreUtils/primitive-guards");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const MenuHeader = (0, _styledComponents.default)('span')`
  ${(0, _CommonStyles.typography)(500, _CommonStyles.FontSizes.Title5, '12px')};
  ${_CommonStyles.ellipsis};

  color: ${(0, _CommonStyles.colors)(_CommonStyles.Colors.Black62)};
  flex-shrink: 0;

  ${({
  css: cssOverrides
}) => cssOverrides};
`;
const MenuItemIconRow = (0, _styledComponents.default)('div')`
  ${(0, _CommonStyles.flexFlow)('row')};

  flex: 1 1 100%;
  margin: 8px 6px 12px;
`;

const ContextMenuItem = ({
  leftIcon,
  rightIcon,
  primaryText,
  secondaryText,
  children,
  dense,
  meta,
  size,
  css: cssOverrides,
  ...otherProps
}) => _react.default.createElement(_List.ListItem, _extends({
  dense: dense,
  size: size,
  css: _styledComponents.css`
      padding: 0 6px;

      ${cssOverrides};
    `
}, otherProps), !(0, _primitiveGuards.isNil)(leftIcon) && _react.default.createElement(_List.ListItemGraphic, {
  icon: leftIcon,
  dense: dense,
  css: _styledComponents.css`
          margin-top: 12px;
        `
}), (0, _primitiveGuards.isNil)(secondaryText) && (0, _primitiveGuards.isNil)(meta) ? _react.default.createElement(_List.ListItemPrimaryText, {
  css: _styledComponents.css`
          margin-top: 12px;
        `
}, primaryText) : _react.default.createElement(_List.ListItemText, null, _react.default.createElement(_List.ListItemPrimaryText, {
  css: _styledComponents.css`
            margin-top: 6px;
          `
}, primaryText), (0, _primitiveGuards.isNil)(secondaryText) ? null : _react.default.createElement(_List.ListItemSecondaryText, {
  css: _styledComponents.css`
              margin-bottom: 6px;
            `
}, secondaryText), meta), !(0, _primitiveGuards.isNil)(rightIcon) && _react.default.createElement(_List.ListItemGraphic, {
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
        onClick
      } = this.props;
      return contextItems.map(event => {
        const groupHeader = _react.default.createElement(MenuHeader, {
          key: event.title
        }, event.title);

        const items = event.items.filter(item => compareSearch(item.title) || compareSearch(item.description) || compareSearch(event.title)).map(item => _react.default.createElement(ContextMenuItem, {
          as: _Link.default,
          key: item.key,
          leftIcon: icon,
          primaryText: item.title,
          secondaryText: item.description,
          size: _CommonStyles.Sizes.DP40,
          to: item.link,
          onClick: onClick,
          tabIndex: 1,
          meta: (0, _primitiveGuards.isNil)(item.icons) ? null : _react.default.createElement(MenuItemIconRow, null, item.icons)
        }));
        return items.length > 0 ? (0, _Option.some)([groupHeader, items]) : _Option.none;
      });
    };
  }

  componentDidUpdate(prevProps) {
    const searchRef = this.searchRef.current;

    if (!(0, _primitiveGuards.isNil)(searchRef) && !prevProps.isOpen && this.props.isOpen) {
      window.setTimeout(() => searchRef.focus(), 50);
    }
  }

  render() {
    const {
      isOpen,
      position,
      onClick,
      togglePopOver,
      width
    } = this.props;
    return _react.default.createElement(_SidebarDropDown.SidebarDropDown, {
      isOpen: isOpen,
      position: position,
      onClick: onClick,
      togglePopOver: togglePopOver,
      width: width
    }, _react.default.createElement(_SearchController.SearchController, null, ({
      compareSearch,
      value,
      onChange
    }) => {
      const contextMenuItems = _Array.array.compact(this.renderContextMenuItems(compareSearch));

      return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_Search.Search, {
        value: value,
        onChange: onChange,
        css: _styledComponents.css`
                    margin: 12px;
                  `,
        searchRef: this.searchRef
      }), _react.default.createElement(_List.ListContainer, {
        css: _styledComponents.css`
                    padding: 0 0 4px;
                  `,
        emptyText: "Loading..."
      }, !(0, _primitiveGuards.isEmptyString)(value) && (0, _Array.isEmpty)(contextMenuItems) ? _react.default.createElement(ContextMenuItem, {
        size: _CommonStyles.Sizes.DP40,
        primaryText: "No results."
      }) : contextMenuItems));
    }));
  }

}

exports.ContextMenu = ContextMenu;