'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }(); /*=============================================================================
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          * Copyright (C) 2015-2016 Stephen F. Norledge and Alces Software Ltd.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          * This file is part of Alces FlightDeck.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          * All rights reserved, see LICENSE.txt.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          *===========================================================================*/


var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactFontawesome = require('react-fontawesome');

var _reactFontawesome2 = _interopRequireDefault(_reactFontawesome);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var sizeToPixels = function sizeToPixels(size) {
  switch (size) {
    case '1x':
      return '16px';
    case '2x':
      return '32px';
    case '3x':
      return '48px';
    case '4x':
      return '64px';
    default:
      return '16px';
  }
};

var ImageIcon = function ImageIcon(_ref) {
  var iconSrc = _ref.iconSrc,
      size = _ref.size;
  return _jsx('span', {
    className: 'flight-icon'
  }, void 0, _jsx('img', {
    src: iconSrc,
    role: 'presentation',
    height: sizeToPixels(size)
  }));
};

ImageIcon.propTypes = {
  iconSrc: _react.PropTypes.string.isRequired,
  size: _react.PropTypes.string
};

var iconNameToFontAwesomeProps = {
  // Invitation icons
  // Actions we can take on invitations and their feedback
  "invitation": { name: "chain" },
  "invitation-accept": { name: "check" },
  "invitation-accepting": { name: "spinner", spin: true },
  "invitation-decline": { name: "times" },
  "invitation-declining": { name: "spinner", spin: true },
  // States that an invitation can be in
  "invitation-pending": { name: "chain-broken" },
  "invitation-accepted": { name: "chain" },
  "invitation-declined": { name: "ban" },

  // Cluster icons
  "clusters": { name: "server" },
  "cluster": { name: "server" },
  "cluster-queueing": { name: "hourglass-o", className: "animation-halfSpinStopSpin" },
  "cluster-onhold": { name: "hand-stop-o" },
  "cluster-launching": { name: "hourglass-o", className: "animation-halfSpinStopSpin" },
  "cluster-terminating": { name: "trash-o", className: "animation-fullSpinStopSpin" },
  "cluster-available": { name: "cog", className: "animation-slowSpin" },
  "cluster-failed": { name: "exclamation-circle" },
  "cluster-ssh-access": { name: "terminal" },
  "cluster-reference": { name: "sun-o" },
  "cluster-launch": { name: "rocket" },
  "cluster-terminate": { name: "stop" },
  "cluster-composition": { name: "list-alt" },
  "cluster-runtime": { name: "hourglass-half" },

  // Environment icons
  "environments": { name: "bank" },
  "environment": { name: "bank" },
  "environment-target": { name: "bullseye" },
  "environment-join": { name: "share-square" },
  "environment-create": { name: "plus-square" },
  "environment-share": { name: "send" },
  "environment-owner": { name: "key" },

  // Component icons
  "component": { name: "puzzle-piece" },
  "component-create": { name: "plus-square" },

  // Component template icons
  "componentTemplate": { name: "file-code-o" },
  "componentTemplate-create": { name: "plus-square" },

  // Cluster template icons
  "clusterTemplate": { name: "object-ungroup" },
  "clusterTemplate-create": { name: "plus-square" },

  // Miscellaneous icons
  "arrow-go": { name: "arrow-right" },
  "arrow-return": { name: "arrow-left" },
  "compute": { name: "puzzle-piece" },
  "credit": { name: "ticket" },
  "connect": { name: "bolt" },
  "delete-resource": { name: "times" },
  "error": { name: "exclamation-triangle" },
  "summary": { name: "info-circle" },
  "quotas": { name: "tachometer" },
  "share-resource": { name: "share-alt" },
  "shared-resource": { name: "share-alt" },

  // Access Manager icons - for now these are prefixed to avoid collisions, at
  // some point we might want to unify them with above.
  "aam-cluster": { name: "rocket" },
  "aam-cluster-authenticating": { name: "spinner", spin: true },
  "aam-cluster-logout": { name: "sign-out" },
  "aam-cluster-pinging": { name: "spinner", spin: true },

  "aam-session-connect": { name: "link" },
  "aam-session-external-access": { name: "external-link-square" },
  "aam-session-external-access-back": { name: "arrow-circle-left" },
  "aam-session-external-access-info": { name: "info-circle" },
  "aam-session-launch": { name: "desktop" },
  "aam-session-launching": { name: "spinner", spin: true },
  "aam-session-password-hide": { name: "eye-slash" },
  "aam-session-password-reveal": { name: "eye" },

  "aam-vnc-volume-on": { name: "volume-up" },
  "aam-vnc-volume-off": { name: "volume-off" },
  "aam-vnc-copy": { name: "files-o" },
  "aam-vnc-paste": { name: "clipboard" },
  "aam-vnc-interactive": { name: "mouse-pointer" },
  "aam-vnc-drag-viewport": { name: "arrows" }
};

var faPropsForIconName = function faPropsForIconName(iconName) {
  var props = iconNameToFontAwesomeProps[iconName];
  return props ? props : {};
};

var Icon = function (_React$Component) {
  _inherits(Icon, _React$Component);

  function Icon() {
    _classCallCheck(this, Icon);

    return _possibleConstructorReturn(this, (Icon.__proto__ || Object.getPrototypeOf(Icon)).apply(this, arguments));
  }

  _createClass(Icon, [{
    key: 'render',
    value: function render() {
      var faProps = faPropsForIconName(this.props.name);
      var classes = (0, _classnames2.default)("flight-icon", 'flight-icon-' + this.props.name, faProps.className, this.props.className);
      return _react2.default.createElement(_reactFontawesome2.default, _extends({}, this.props, faProps, {
        className: classes
      }));
    }
  }]);

  return Icon;
}(_react2.default.Component);

Icon.propTypes = _extends({}, _reactFontawesome2.default.propTypes, {
  name: _react.PropTypes.string.isRequired,
  className: _react.PropTypes.string
});

var IconWrapper = function IconWrapper(_ref2) {
  var iconSrc = _ref2.iconSrc,
      iconName = _ref2.iconName,
      size = _ref2.size,
      rest = _objectWithoutProperties(_ref2, ['iconSrc', 'iconName', 'size']);

  if (iconSrc == null) {
    return _react2.default.createElement(Icon, _extends({ name: iconName, size: size }, rest));
  }

  return _react2.default.createElement(ImageIcon, _extends({ iconSrc: iconSrc, size: size }, rest));
};

IconWrapper.propTypes = {
  iconSrc: _react.PropTypes.string,
  iconName: _react.PropTypes.string,
  size: Icon.propTypes.size
};

exports.default = IconWrapper;