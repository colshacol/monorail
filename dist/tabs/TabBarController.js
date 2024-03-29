"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TabBarController = void 0;

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _exports = require("../helpers/exports");

var _typeGuards = require("../sharedHelpers/typeGuards");

var _TabController = require("./TabController");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

// TODO(unsafe-any): Fix unsafe anys
// tslint:disable no-unsafe-any
const TabBarActions =
/*#__PURE__*/
_styledComponents.default.div.withConfig({
  displayName: "TabBarController__TabBarActions",
  componentId: "sc-1rak6id-0"
})(["", ";align-items:center;margin-left:auto;margin-right:8px;"], (0, _exports.flexFlow)('row'));

class TabBarController extends _react.Component {
  constructor(...args) {
    super(...args);
    this.state = {
      activeTabIndex: this.props.activeTabIndex || 0,
      indicatorLeft: 0,
      indicatorTransitionDuration: 0,
      indicatorWidth: 0
    };

    this.setIndicator = (width, left) => this.setState(() => ({
      indicatorWidth: width,
      indicatorLeft: left
    }));

    this.updateActiveTab = index => {
      const {
        getActiveTabIndex
      } = this.props;
      this.setState(() => ({
        activeTabIndex: index
      }));
      getActiveTabIndex && getActiveTabIndex(index);
    };
  }

  componentDidUpdate(prevProps, prevState) {
    // Check if the indicator needs to move, if it does set the distance of the move as the transition duration.
    if (prevState.indicatorLeft !== this.state.indicatorLeft) {
      this.setState(() => ({
        indicatorTransitionDuration: Math.abs(prevState.indicatorLeft - this.state.indicatorLeft)
      }));
    } // Check if the activeTabIndex needs to change


    if (prevProps.activeTabIndex !== this.props.activeTabIndex) {
      this.setState(() => ({
        activeTabIndex: this.props.activeTabIndex || 0
      }));
    }
  }

  renderTabs() {
    const {
      children
    } = this.props;
    const {
      activeTabIndex
    } = this.state;
    /**
     * If we're controlling the activeTabIndex with a prop,
     * then we set updateIsActive to undefined to prevent
     * automatic updates on Tab click.
     */

    return _react.default.Children.map(children, (child, index) => !(0, _typeGuards.isNil)(child) && _react.default.isValidElement(child) && _react.default.createElement(_TabController.TabController, {
      key: index,
      index: index,
      isActive: index === activeTabIndex,
      setIndicator: this.setIndicator,
      updateIsActive: (0, _typeGuards.isNil)(this.props.activeTabIndex) ? this.updateActiveTab : undefined,
      onClick: child.props.onClick,
      tab: props => _react.default.cloneElement(child, props)
    }));
  }

  render() {
    const {
      actions,
      tabBarIndicator
    } = this.props;
    const {
      indicatorLeft,
      indicatorWidth,
      indicatorTransitionDuration
    } = this.state;
    return _react.default.createElement(_react.default.Fragment, null, this.renderTabs(), !(0, _typeGuards.isNil)(actions) && _react.default.createElement(TabBarActions, {
      id: "tabBarActions"
    }, actions), tabBarIndicator({
      width: indicatorWidth,
      left: indicatorLeft,
      duration: indicatorTransitionDuration
    }));
  }

} // tslint:enable


exports.TabBarController = TabBarController;