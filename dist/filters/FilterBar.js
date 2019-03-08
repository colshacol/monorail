"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FilterBar = void 0;

var _Record = require("../CoreUtils/Record");

var _Array = require("../CoreUtils/Array");

var _Option = require("../CoreUtils/Option");

var _Array2 = require("fp-ts/lib/Array");

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _CommonStyles = require("../CommonStyles");

var _StyleHelpers = require("../StyleHelpers");

var _Filter = require("./Filter");

var _Search = require("../inputs/Search");

var _Choice = require("../inputs/Choice");

var _Status = require("../status/Status");

var _Button = require("../buttons/Button");

var _buttonTypes = require("../buttons/buttonTypes");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

const sorterItemStyle = selected => (0, _styledComponents.css)(["", ";cursor:pointer;padding:8px;", ";:hover{background:hsla(219,100%,54%,0.1);}"], (0, _CommonStyles.typography)(500, _CommonStyles.FontSizes.Content), selected && (0, _styledComponents.css)(["background:hsla(219,100%,54%,0.1);"]));

const BBFilterBar =
/*#__PURE__*/
(0, _styledComponents.default)('div').withConfig({
  displayName: "FilterBar__BBFilterBar",
  componentId: "sc-1g2tevy-0"
})(["", ";margin-left:-4px;", ";"], (0, _CommonStyles.flexFlow)('row'), ({
  cssOverrides
}) => cssOverrides);

class FilterBar extends _react.Component {
  constructor(...args) {
    super(...args);

    this.renderFilterName = filterGroup => {
      if (filterGroup.activeFilterCount === (0, _Array.len)(filterGroup.filters)) {
        // If unchanged, just show label
        return filterGroup.label;
      } else if (filterGroup.activeFilterCount > 1) {
        // If changed and label is greater than 1, show the count
        return _react.default.createElement(_react.default.Fragment, null, filterGroup.label, _react.default.createElement(_Status.Status, {
          cssOverrides: (0, _styledComponents.css)(["margin-left:4px;"])
        }, filterGroup.activeFilterCount));
      } else if (filterGroup.activeFilterCount === 1) {
        const headFilterOpt = (0, _Array2.head)(filterGroup.filters);
        const activeFilterLabel = (0, _Option.fold)(headFilterOpt, '', (0, _Record.prop)('label')); // If equal to 1, show the label and the single active filter

        return `${filterGroup.label} - ${activeFilterLabel}`;
      } else {
        // Otherwise no filters are checked, so show None
        return `${filterGroup.label} - None`;
      }
    };

    this.renderFilters = () => {
      const {
        document,
        filterGroups,
        onFilterChange
      } = this.props;
      return _Array2.array.map(filterGroups, group => _react.default.createElement(_Filter.Filter, {
        document: document,
        content: _Array2.array.map(group.filters, filter => _react.default.createElement(_Choice.Choice, {
          onChange: event => onFilterChange(group.filterKey, filter.value, event.currentTarget.checked),
          type: "checkbox",
          checked: filter.checked,
          key: filter.value
        }, filter.label)),
        cssOverrides: (0, _styledComponents.css)(["margin:4px;"]),
        isActive: group.activeFilterCount !== group.filters.length,
        key: group.filterKey,
        title: this.renderFilterName(group)
      }));
    };

    this.renderSorters = () => {
      const {
        document,
        sorterGroup,
        onSorterChange
      } = this.props;
      return sorterGroup ? _react.default.createElement(_Filter.Filter, {
        document: document,
        content: _Array2.array.map(sorterGroup.sorters, sorter => _react.default.createElement(_StyleHelpers.Div, {
          cssOverrides: sorterItemStyle(sorter.selected),
          onClick: () => onSorterChange ? onSorterChange(sorter.key) : undefined,
          key: sorter.key
        }, sorter.label)),
        cssOverrides: (0, _styledComponents.css)(["margin:4px;"]),
        isActive: false,
        key: sorterGroup.key,
        title: sorterGroup.label
      }) : undefined;
    };
  }

  render() {
    const {
      searchText,
      onSearchChange,
      isFiltered,
      resetFilters,
      cssOverrides
    } = this.props;
    return _react.default.createElement(BBFilterBar, {
      cssOverrides: cssOverrides
    }, this.renderFilters(), this.renderSorters(), _react.default.createElement(_Button.Button, {
      size: _buttonTypes.ButtonSize.Compact,
      display: _buttonTypes.ButtonDisplay.Secondary,
      cssOverrides: (0, _styledComponents.css)(["", ";margin:4px;transform:translateX(", "px);transition:background ease 75ms,visibility ", " 150ms,opacity ", " 150ms,transform ", " 150ms;"], (0, _CommonStyles.visible)(isFiltered), isFiltered ? 0 : -32, (0, _CommonStyles.ease)(isFiltered), (0, _CommonStyles.ease)(isFiltered), (0, _CommonStyles.ease)(isFiltered)),
      onClick: resetFilters
    }, "Clear Filters"), _react.default.createElement(_Search.Search, {
      cssOverrides: (0, _styledComponents.css)(["margin:auto 0 auto auto;max-width:256px;width:100%;flex-shrink:1;"]),
      value: searchText,
      onChange: onSearchChange
    }));
  }

}

exports.FilterBar = FilterBar;