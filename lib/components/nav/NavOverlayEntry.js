'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

var _reactBootstrap = require('react-bootstrap');

var _reactRouterDom = require('react-router-dom');

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _Icon = require('../Icon');

var _Icon2 = _interopRequireDefault(_Icon);

var _TimeAgo = require('../TimeAgo');

var _TimeAgo2 = _interopRequireDefault(_TimeAgo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*=============================================================================
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Copyright (C) 2015-2016 Stephen F. Norledge and Alces Software Ltd.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * This file is part of Alces FlightDeck.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * All rights reserved, see LICENSE.txt.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *===========================================================================*/


var NavOverlayEntry = function (_React$Component) {
  _inherits(NavOverlayEntry, _React$Component);

  function NavOverlayEntry() {
    _classCallCheck(this, NavOverlayEntry);

    return _possibleConstructorReturn(this, (NavOverlayEntry.__proto__ || Object.getPrototypeOf(NavOverlayEntry)).apply(this, arguments));
  }

  _createClass(NavOverlayEntry, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          actions = _props.actions,
          children = _props.children,
          className = _props.className,
          icon = _props.icon,
          iconName = _props.iconName,
          linkTarget = _props.linkTarget,
          timestamp = _props.timestamp,
          title = _props.title;

      var classes = (0, _classnames2.default)("flight-navOverlay-entry", _defineProperty({}, 'flight-navOverlay-entry-' + className, className));

      return _jsx('div', {
        className: classes
      }, void 0, _jsx(_reactRouterDom.Link, {
        to: linkTarget
      }, void 0, _jsx('div', {
        className: 'flight-navOverlay-entry-icon'
      }, void 0, icon ? icon : _jsx(_Icon2.default, {
        name: iconName
      })), _jsx('div', {
        className: 'flight-navOverlay-entry-content'
      }, void 0, _jsx('div', {
        className: 'flight-navOverlay-entry-title'
      }, void 0, title), _jsx('div', {
        className: 'flight-navOverlay-entry-body'
      }, void 0, children), timestamp ? _jsx('div', {
        className: 'flight-navOverlay-entry-timestamp'
      }, void 0, _jsx(_TimeAgo2.default, {
        date: timestamp,
        tooltipFormat: 'calendar'
      })) : null)), actions ? actions.map(function (action, idx) {
        return _this2.renderControl(action, idx);
      }) : null);
    }
  }, {
    key: 'renderControl',
    value: function renderControl(action, key) {
      var classes = (0, _classnames2.default)("flight-navOverlay-entry-control", _defineProperty({}, 'flight-navOverlay-entry-control-' + action.className, action.className));
      return _jsx(_reactBootstrap.OverlayTrigger, {
        overlay: action.tooltip,
        placement: 'bottom',
        container: this.props.overlayContainer
      }, key, _jsx('div', {
        className: classes
      }, void 0, _jsx(_Icon2.default, {
        name: action.iconName,
        onClick: action.onClick
      })));
    }
  }, {
    key: 'formatTimestamp',
    value: function formatTimestamp(value, unit, suffix, date) {
      return (0, _moment2.default)(date).fromNow();
    }
  }]);

  return NavOverlayEntry;
}(_react2.default.Component);

exports.default = NavOverlayEntry;


var actionShape = {
  className: _react.PropTypes.string,
  iconName: _react.PropTypes.string.isRequired,
  onClick: _react.PropTypes.func.isRequired,
  tooltip: _react.PropTypes.element.isRequired
};

NavOverlayEntry.propTypes = {
  actions: _react.PropTypes.arrayOf(_react.PropTypes.shape(actionShape).isRequired),
  iconName: _react.PropTypes.string,
  icon: _react.PropTypes.node,
  timestamp: _react.PropTypes.string,
  title: _react.PropTypes.string.isRequired,
  overlayContainer: _react.PropTypes.any.isRequired
};