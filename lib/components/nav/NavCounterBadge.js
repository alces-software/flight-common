'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactBootstrap = require('react-bootstrap');

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _reactAddonsCssTransitionGroup = require('react-addons-css-transition-group');

var _reactAddonsCssTransitionGroup2 = _interopRequireDefault(_reactAddonsCssTransitionGroup);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*=============================================================================
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Copyright (C) 2015 Stephen F. Norledge and Alces Software Ltd.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * This file is part of Alces FlightDeck.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * All rights reserved, see LICENSE.txt.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *===========================================================================*/


var TICK = 17;
var flashAnimationDuration = 750 * 3;

var NavCounterBadge = function (_React$Component) {
  _inherits(NavCounterBadge, _React$Component);

  function NavCounterBadge(props) {
    _classCallCheck(this, NavCounterBadge);

    var _this = _possibleConstructorReturn(this, (NavCounterBadge.__proto__ || Object.getPrototypeOf(NavCounterBadge)).call(this, props));

    _this.state = {
      isIncrementing: undefined,
      isDecrementing: undefined
    };
    return _this;
  }

  _createClass(NavCounterBadge, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      var nextCount = nextProps.count;
      var prevCount = this.props.count;

      var isIncrementing = void 0,
          isDecrementing = void 0;

      if (nextCount > prevCount) {
        isIncrementing = true;
        isDecrementing = false;
      } else if (nextCount < prevCount) {
        isIncrementing = false;
        isDecrementing = true;
      } else {
        isIncrementing = false;
        isDecrementing = false;
      }
      this.setState({
        isIncrementing: isIncrementing,
        isDecrementing: isDecrementing
      });
    }
  }, {
    key: 'componentWillMount',
    value: function componentWillMount() {
      if (this.props.count > 0) {
        this.startFlashSequence();
      }
    }
  }, {
    key: 'componentWillUpdate',
    value: function componentWillUpdate() {
      if (this.isChanging()) {
        // eslint-disable-next-line react/no-find-dom-node
        var node = _reactDom2.default.findDOMNode(this);
        node.classList.add("flight-NavCounterBadge-animate-flash-enter");
      }
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      if (this.isChanging()) {
        this.startFlashSequence();
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      if (this.timeout) {
        clearTimeout(this.timeout);
      }
    }
  }, {
    key: 'startFlashSequence',
    value: function startFlashSequence() {
      this.timeout = setTimeout(this.addActiveClass.bind(this), TICK);
    }
  }, {
    key: 'addActiveClass',
    value: function addActiveClass() {
      // eslint-disable-next-line react/no-find-dom-node
      var node = _reactDom2.default.findDOMNode(this);
      node.classList.add("flight-NavCounterBadge-animate-flash-enter-active");
      this.timeout = setTimeout(this.removeClasses.bind(this), flashAnimationDuration);
    }
  }, {
    key: 'removeClasses',
    value: function removeClasses() {
      // eslint-disable-next-line react/no-find-dom-node
      var node = _reactDom2.default.findDOMNode(this);
      node.classList.remove("flight-NavCounterBadge-animate-flash-enter", "flight-NavCounterBadge-animate-flash-enter-active");
      this.timeout = null;
    }
  }, {
    key: 'render',
    value: function render() {
      var _classNames;

      var _props = this.props,
          count = _props.count,
          style = _props.style;


      var badgeClassNames = (0, _classnames2.default)("flight-NavCounterBadge", (_classNames = {}, _defineProperty(_classNames, 'badge-' + style, style !== undefined), _defineProperty(_classNames, "badge-primary", style === undefined), _defineProperty(_classNames, "flight-NavCounterBadge--zero", count < 1), _classNames));

      return _jsx(_reactBootstrap.Badge, {
        className: badgeClassNames
      }, void 0, _jsx(_reactAddonsCssTransitionGroup2.default, {
        transitionEnterTimeout: 1000,
        transitionLeaveTimeout: 1000,
        transitionName: this.transitionName()
      }, void 0, _jsx('span', {}, count, count)));
    }
  }, {
    key: 'isChanging',
    value: function isChanging() {
      var _state = this.state,
          isIncrementing = _state.isIncrementing,
          isDecrementing = _state.isDecrementing;

      return isIncrementing || isDecrementing;
    }
  }, {
    key: 'transitionName',
    value: function transitionName() {
      if (this.state.isIncrementing) {
        return "flight-NavCounterBadge-animate-increment";
      } else if (this.state.isDecrementing) {
        return "flight-NavCounterBadge-animate-decrement";
      } else {
        return "";
      }
    }
  }]);

  return NavCounterBadge;
}(_react2.default.Component);

exports.default = NavCounterBadge;


NavCounterBadge.propTypes = {
  count: _react.PropTypes.number.isRequired,
  style: _react.PropTypes.string
};