"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LoadingButton = void 0;

var _react = _interopRequireWildcard(require("react"));

var _Button = require("./Button");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/**
 * Takes an `onClick` that returns a Promise and toggles loading/disabled state
 */
class LoadingButton extends _react.Component {
  constructor(...args) {
    super(...args);
    this.state = {
      loading: false
    };
    this._isMounted = false;

    this.onClick = async e => {
      const origOnClick = this.props.onClick;

      if (!origOnClick) {
        return;
      }

      this.setState({
        loading: true
      });

      try {
        await origOnClick(e);
      } finally {
        if (this._isMounted) {
          this.setState({
            loading: false
          });
        }
      }
    };
  }

  componentDidMount() {
    this._isMounted = true;
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  render() {
    const {
      loadingText,
      ...rest
    } = this.props;
    return _react.default.createElement(_Button.Button, _extends({}, rest, {
      disabled: this.props.disabled || this.state.loading,
      onClick: this.onClick
    }), this.state.loading ? loadingText : this.props.children);
  }

}

exports.LoadingButton = LoadingButton;
LoadingButton.defaultProps = {
  /** override buttonDefaultProps.onClick */
  ...{ ..._Button.buttonDefaultProps,
    onClick: async () => {}
  },
  loadingText: 'Loading...'
};