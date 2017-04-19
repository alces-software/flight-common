'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactTimeago = require('react-timeago');

var _reactTimeago2 = _interopRequireDefault(_reactTimeago);

var _reactBootstrap = require('react-bootstrap');

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

var _momentConfiguration = require('../utils/momentConfiguration');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*=============================================================================
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Copyright (C) 2015 Stephen F. Norledge and Alces Software Ltd.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * This file is part of Alces FlightDeck.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * All rights reserved, see LICENSE.txt.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *===========================================================================*/


var TimeAgo = function (_React$Component) {
  _inherits(TimeAgo, _React$Component);

  function TimeAgo() {
    _classCallCheck(this, TimeAgo);

    return _possibleConstructorReturn(this, (TimeAgo.__proto__ || Object.getPrototypeOf(TimeAgo)).apply(this, arguments));
  }

  _createClass(TimeAgo, [{
    key: 'render',
    value: function render() {
      // eslint-disable-next-line no-unused-vars
      var _props = this.props,
          date = _props.date,
          tooltipFormat = _props.tooltipFormat,
          rest = _objectWithoutProperties(_props, ['date', 'tooltipFormat']);

      var tooltip = _jsx(_reactBootstrap.Tooltip, {
        className: 'flight-livestamp-tooltip',
        id: 'timestamp'
      }, void 0, this.formatTooltip());

      return _jsx('span', {
        className: 'flight-livestamp'
      }, void 0, _jsx(_reactBootstrap.OverlayTrigger, {
        overlay: tooltip,
        placement: this.props.tooltipPlacement || "bottom"
      }, void 0, _react2.default.createElement(_reactTimeago2.default, _extends({}, rest, { date: date, formatter: this.formatTimestamp }))));
    }
  }, {
    key: 'formatTimestamp',
    value: function formatTimestamp(value, unit, suffix, date) {
      return (0, _moment2.default)(date).fromNow();
    }
  }, {
    key: 'formatTooltip',
    value: function formatTooltip() {
      var _props2 = this.props,
          date = _props2.date,
          tooltipFormat = _props2.tooltipFormat;


      if (tooltipFormat === "calendar") {
        return (0, _momentConfiguration.upperCaseCalendar)(date);
      } else {
        return (0, _momentConfiguration.timestamp)(date);
      }
    }
  }]);

  return TimeAgo;
}(_react2.default.Component);

exports.default = TimeAgo;