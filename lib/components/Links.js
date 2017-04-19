'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NavItemLink = exports.ButtonLink = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactBootstrap = require('react-bootstrap');

var _LinkContainer = require('./LinkContainer');

var _LinkContainer2 = _interopRequireDefault(_LinkContainer);

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


var ButtonLink = exports.ButtonLink = function (_React$Component) {
  _inherits(ButtonLink, _React$Component);

  function ButtonLink() {
    _classCallCheck(this, ButtonLink);

    return _possibleConstructorReturn(this, (ButtonLink.__proto__ || Object.getPrototypeOf(ButtonLink)).apply(this, arguments));
  }

  _createClass(ButtonLink, [{
    key: 'render',
    value: function render() {
      /* eslint-disable no-redeclare */
      var _props = this.props,
          to = _props.to,
          rest = _objectWithoutProperties(_props, ['to']);
      /* eslint-enable no-redeclare */


      return _react2.default.createElement(
        _LinkContainer2.default,
        _extends({ to: to }, rest),
        _react2.default.createElement(
          _reactBootstrap.Button,
          rest,
          this.props.children
        )
      );
    }
  }]);

  return ButtonLink;
}(_react2.default.Component);

var NavItemLink = exports.NavItemLink = function (_React$Component2) {
  _inherits(NavItemLink, _React$Component2);

  function NavItemLink() {
    _classCallCheck(this, NavItemLink);

    return _possibleConstructorReturn(this, (NavItemLink.__proto__ || Object.getPrototypeOf(NavItemLink)).apply(this, arguments));
  }

  _createClass(NavItemLink, [{
    key: 'render',
    value: function render() {
      /* eslint-disable no-redeclare */
      var _props2 = this.props,
          to = _props2.to,
          rest = _objectWithoutProperties(_props2, ['to']);
      /* eslint-enable no-redeclare */


      return _react2.default.createElement(
        _LinkContainer2.default,
        _extends({ to: to }, rest),
        _react2.default.createElement(
          _reactBootstrap.NavItem,
          rest,
          this.props.children
        )
      );
    }
  }]);

  return NavItemLink;
}(_react2.default.Component);