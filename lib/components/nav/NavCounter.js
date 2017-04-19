'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactBootstrap = require('react-bootstrap');

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _Icon = require('../Icon');

var _Icon2 = _interopRequireDefault(_Icon);

var _NavCounterBadge = require('./NavCounterBadge');

var _NavCounterBadge2 = _interopRequireDefault(_NavCounterBadge);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*=============================================================================
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Copyright (C) 2015 Stephen F. Norledge and Alces Software Ltd.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * This file is part of Alces FlightDeck.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * All rights reserved, see LICENSE.txt.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *===========================================================================*/


var NavCounter = function (_React$Component) {
  _inherits(NavCounter, _React$Component);

  function NavCounter(props) {
    _classCallCheck(this, NavCounter);

    var _this = _possibleConstructorReturn(this, (NavCounter.__proto__ || Object.getPrototypeOf(NavCounter)).call(this, props));

    _this.state = { show: false };
    return _this;
  }

  _createClass(NavCounter, [{
    key: 'handleHideOverlay',
    value: function handleHideOverlay() {
      this.setState({ show: false });
    }
  }, {
    key: 'handleToggleOverlay',
    value: function handleToggleOverlay() {
      this.setState({ show: !this.state.show });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var counters = this.props.counters;

      var navItemClassNames = (0, _classnames2.default)("flight-NavCounter", 'flight-NavCounter-' + this.props.name);
      var countersClassNames = (0, _classnames2.default)("flight-NavCounter-control-counters", { "flight-NavCounter-control-counters--inactive": _lodash2.default.every(counters, function (c) {
          return c.count < 1;
        }) });

      var overlay = _react2.default.cloneElement(this.props.overlay, {
        container: this.props.overlayContainer,
        onHide: this.handleHideOverlay.bind(this),
        show: this.state.show,
        // eslint-disable-next-line react/no-find-dom-node
        target: function target() {
          return _reactDom2.default.findDOMNode(_this2);
        }
      });

      return _jsx(_reactBootstrap.NavItem, {
        className: navItemClassNames,
        onClick: this.handleToggleOverlay.bind(this)
      }, void 0, _jsx('span', {
        className: 'flight-NavCounter-control flight-NavCounter-control--withIcon'
      }, void 0, _jsx('span', {
        className: countersClassNames
      }, void 0, _jsx(_Icon2.default, {
        name: this.props.iconName
      }), counters.map(function (counter, idx) {
        return _this2.renderBadge(counter, idx);
      }))), overlay);
    }
  }, {
    key: 'renderBadge',
    value: function renderBadge(counter, idx) {
      return _react2.default.createElement(_NavCounterBadge2.default, _extends({}, counter, { key: idx }));
    }
  }]);

  return NavCounter;
}(_react2.default.Component);

exports.default = NavCounter;


var counterShape = {
  count: _react.PropTypes.number.isRequired,
  style: _react.PropTypes.string
};

NavCounter.propTypes = {
  name: _react.PropTypes.string.isRequired,
  iconName: _react.PropTypes.string.isRequired,
  counters: _react.PropTypes.arrayOf(_react.PropTypes.shape(counterShape).isRequired).isRequired,
  overlay: _react.PropTypes.node.isRequired
  // Currently, I pass an instance of a React class.  What is the correct
  // proptype for that?
  // overlayContainer: PropTypes.element.isRequired
};