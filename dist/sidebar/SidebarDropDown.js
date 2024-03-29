"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SidebarDropDown = void 0;

var _Option = require("fp-ts/lib/Option");

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _Cards = require("../cards/Cards");

var _exports = require("../helpers/exports");

var _Overlay = require("../toggle/Overlay");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

const DropDownContent =
/*#__PURE__*/
_styledComponents.default.div.withConfig({
  displayName: "SidebarDropDown__DropDownContent",
  componentId: "sc-18l3je-0"
})(({
  cssOverrides
}) => (0, _styledComponents.css)(["", ";overflow:hidden;", ";"], (0, _exports.flexFlow)(), cssOverrides));

class SidebarDropDown extends _react.Component {
  constructor(...args) {
    super(...args);
    this.state = {
      dropDownHeight: 0,
      isRendered: false
    };
    this.dropDownRef = (0, _react.createRef)();

    this.updateMenuHeight = () => {
      const {
        dropDownHeight
      } = this.state;
      const currentOpt = (0, _Option.fromNullable)(this.dropDownRef.current);
      const newDropDownHeight = currentOpt.fold(0, ({
        offsetHeight
      }) => offsetHeight);

      if (dropDownHeight !== newDropDownHeight) {
        this.setState(() => ({
          dropDownHeight: newDropDownHeight
        }));
      }
    };
  }

  componentDidMount() {
    this.updateMenuHeight();
    this.setState(() => ({
      isRendered: true
    }));
  }

  componentDidUpdate() {
    this.updateMenuHeight();
  }

  render() {
    const {
      isOpen,
      position,
      onClick,
      children,
      togglePopOver,
      width
    } = this.props;
    const {
      dropDownHeight,
      isRendered
    } = this.state;
    const scaleAnimation = (0, _exports.generateScaleAnimation)({
      elementHeight: dropDownHeight,
      elementWidth: width,
      isOpen: isRendered && isOpen,
      position
    });
    return _react.default.createElement(_Overlay.Overlay, {
      isOpen: isOpen,
      onClick: onClick,
      overlayProps: {
        chromeless: true
      },
      togglePopOver: togglePopOver
    }, _react.default.createElement(_Cards.BBCardBackground, {
      ref: this.dropDownRef,
      cssOverrides: (0, _styledComponents.css)(["width:", "px;", ";"], width, scaleAnimation.outSideContentStyles)
    }, _react.default.createElement(DropDownContent, {
      cssOverrides: scaleAnimation.inSideContentStyles
    }, children)));
  }

}

exports.SidebarDropDown = SidebarDropDown;
SidebarDropDown.defaultProps = {
  width: 224
};