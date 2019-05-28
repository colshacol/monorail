"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.VMTemplates = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const VMTemplates = props => _react.default.createElement("svg", _extends({
  width: "24",
  height: "24",
  viewBox: "0 0 24 24"
}, props), _react.default.createElement("path", {
  d: "M9.28571 3.42859H20.8571C21.5643 3.42859 22.1429 4.00716 22.1429 4.7143V12.4286C22.1429 13.1357 21.5643 13.7143 20.8571 13.7143H16.3571V15H17.6429V16.2857H12.5L14.8571 16.2857C15.5642 16.2857 16.1428 15.7072 16.1428 15V7.28573C16.1428 6.57859 15.5642 6.00002 14.8571 6.00002H8V4.7143C8 4.00716 8.57857 3.42859 9.28571 3.42859Z",
  fillOpacity: "0.89"
}), _react.default.createElement("path", {
  fillRule: "evenodd",
  clipRule: "evenodd",
  d: "M7.78571 16.7679V16.2857H7.22321V15.8572H8.21428V16.7679H7.78571ZM6.84821 16.2857V15.8572H5.72321V16.2857H6.84821ZM5.34821 16.2857V15.8572H4.22321V16.2857H5.34821ZM3.84821 16.2857V15.8572H3.28571C3.11063 15.8572 2.94772 15.804 2.81115 15.7123L2.57222 16.0681C2.7767 16.2054 3.02228 16.2857 3.28571 16.2857H3.84821ZM2.21761 15.7135L2.5734 15.4746C2.48169 15.338 2.42857 15.1751 2.42857 15V14.4214H2V15C2 15.2635 2.08029 15.509 2.21761 15.7135ZM2 14.0357H2.42857V12.8786H2V14.0357ZM2 12.4929H2.42857V11.3357H2V12.4929ZM2 10.95H2.42857V9.79288H2V10.95ZM2 9.40716H2.42857V8.25002H2V9.40716ZM2 7.86431H2.42857V7.28573C2.42857 7.11065 2.48169 6.94774 2.5734 6.81117L2.21761 6.57224C2.08029 6.77672 2 7.0223 2 7.28573V7.86431ZM2.57222 6.21763L2.81115 6.57342C2.94772 6.48171 3.11063 6.42859 3.28571 6.42859H3.90561V6.00002H3.28571C3.02228 6.00002 2.7767 6.08031 2.57222 6.21763ZM4.31888 6.00002V6.42859H5.55867V6.00002H4.31888ZM5.97194 6.00002V6.42859H7.21173V6.00002H5.97194ZM7.625 6.00002V6.42859H8.86479V6.00002H7.625ZM9.27806 6.00002V6.42859H10.5179V6.00002H9.27806ZM10.9311 6.00002V6.42859H12.1709V6.00002H10.9311ZM12.5842 6.00002V6.42859H13.824V6.00002H12.5842ZM14.2372 6.00002V6.42859H14.8571C15.0322 6.42859 15.1951 6.48171 15.3317 6.57342L15.5706 6.21763C15.3662 6.08031 15.1205 6.00002 14.8571 6.00002L14.2372 6.00002ZM15.9252 6.57224L15.5695 6.81117C15.6612 6.94774 15.7143 7.11065 15.7143 7.28573V7.86431H16.1429L16.1428 7.28573C16.1428 7.0223 16.0626 6.77672 15.9252 6.57224ZM16.1429 8.25002H15.7143V9.40716H16.1429V8.25002ZM16.1429 9.79288H15.7143V10.95H16.1429V9.79288ZM16.1429 11.3357H15.7143V12.4929H16.1429V11.3357ZM16.1429 12.8786H15.7143V14.0357H16.1429V12.8786ZM16.1429 14.4214H15.7143V15C15.7143 15.1751 15.6612 15.338 15.5695 15.4746L15.9252 15.7135C16.0626 15.509 16.1428 15.2634 16.1428 15L16.1429 14.4214ZM15.5706 16.0681L15.3317 15.7123C15.1951 15.804 15.0322 15.8572 14.8571 15.8572H14.2946V16.2857L14.8571 16.2857C15.1205 16.2857 15.3662 16.2054 15.5706 16.0681ZM13.9196 16.2857V15.8572H12.7946V16.2857H13.9196ZM12.4196 16.2857V15.8572H11.2946V16.2857H12.4196ZM10.9196 16.2857V15.8572H9.92857V16.7679H10.3571V16.2857H10.9196ZM10.3571 17.0893H9.92857V18H10.8393V17.5714H10.3571V17.0893ZM11.1607 17.5714V18H11.2143V18.0536H11.6429V17.5714H11.1607ZM11.6429 18.375H11.2143V18.4286H11V18.8572H11.6429V18.375ZM10.5714 18.8572V18.4286H9.28571V18.8572H10.5714ZM8.85714 18.8572V18.4286H7.57143V18.8572H8.85714ZM7.14286 18.8572V18.4286H6.92857V18.375H6.5V18.8572H7.14286ZM6.5 18.0536H6.92857V18H6.98214V17.5714H6.5V18.0536ZM7.30357 17.5714V18H8.21428V17.0893H7.78571V17.5714H7.30357Z",
  fillOpacity: "0.89"
}), _react.default.createElement("path", {
  fillRule: "evenodd",
  clipRule: "evenodd",
  d: "M3.5474 7.25204C3.71779 7.13797 3.92288 7.07145 4.14286 7.07145H4.75893V7.50002H4.14286C4.01038 7.50002 3.88786 7.53986 3.78583 7.60817L3.5474 7.25204ZM5.16964 7.07145H6.40179V7.50002H5.16964V7.07145ZM6.8125 7.07145H8.04464V7.50002H6.8125V7.07145ZM8.45536 7.07145H9.6875V7.50002H8.45536V7.07145ZM10.0982 7.07145H11.3304V7.50002H10.0982V7.07145ZM11.7411 7.07145H12.9732V7.50002H11.7411V7.07145ZM13.3839 7.07145H14C14.22 7.07145 14.4251 7.13797 14.5955 7.25204L14.357 7.60817C14.255 7.53986 14.1325 7.50002 14 7.50002H13.3839V7.07145ZM14.8908 7.54742C15.0049 7.7178 15.0714 7.92289 15.0714 8.14287V8.89287H14.6429V8.14287C14.6429 8.0104 14.603 7.88788 14.5347 7.78584L14.8908 7.54742ZM3.07143 8.14287C3.07143 7.92289 3.13795 7.7178 3.25202 7.54742L3.60815 7.78584C3.53984 7.88788 3.5 8.0104 3.5 8.14287V8.89287H3.07143V8.14287ZM15.0714 9.39287V10.8929H14.6429V9.39287H15.0714ZM3.07143 10.8929V9.39287H3.5V10.8929H3.07143ZM15.0714 11.3929V12.8929H14.6429V11.3929H15.0714ZM3.07143 12.8929V11.3929H3.5V12.8929H3.07143ZM15.0714 13.3929V14.1429C15.0714 14.3629 15.0049 14.5679 14.8908 14.7383L14.5347 14.4999C14.603 14.3979 14.6429 14.2753 14.6429 14.1429V13.3929H15.0714ZM3.07143 14.1429V13.3929H3.5V14.1429C3.5 14.2753 3.53984 14.3979 3.60815 14.4999L3.25202 14.7383C3.13795 14.5679 3.07143 14.3629 3.07143 14.1429ZM4.14286 15.2143C3.92288 15.2143 3.71778 15.1478 3.5474 15.0337L3.78583 14.6776C3.88786 14.7459 4.01038 14.7857 4.14286 14.7857H4.75893V15.2143H4.14286ZM14.5955 15.0337C14.4251 15.1478 14.22 15.2143 14 15.2143H13.3839V14.7857H14C14.1325 14.7857 14.255 14.7459 14.357 14.6776L14.5955 15.0337ZM6.40178 15.2143H5.16964V14.7857H6.40178V15.2143ZM8.04464 15.2143H6.8125V14.7857H8.04464V15.2143ZM9.6875 15.2143H8.45536V14.7857H9.6875V15.2143ZM11.3304 15.2143H10.0982V14.7857H11.3304V15.2143ZM12.9732 15.2143H11.7411V14.7857H12.9732V15.2143Z",
  fillOpacity: "0.89"
}));

exports.VMTemplates = VMTemplates;