'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactBootstrap = require('react-bootstrap');

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _reactRouterDom = require('react-router-dom');

var _Icon = require('../Icon');

var _Icon2 = _interopRequireDefault(_Icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*=============================================================================
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Copyright (C) 2015-2016 Stephen F. Norledge and Alces Software Ltd.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * This file is part of Alces FlightDeck.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * All rights reserved, see LICENSE.txt.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *===========================================================================*/


var _ref = _jsx(_Icon2.default, {
  name: 'arrow-go'
});

var NavOverlay = function (_React$Component) {
  _inherits(NavOverlay, _React$Component);

  function NavOverlay() {
    _classCallCheck(this, NavOverlay);

    return _possibleConstructorReturn(this, (NavOverlay.__proto__ || Object.getPrototypeOf(NavOverlay)).apply(this, arguments));
  }

  _createClass(NavOverlay, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          title = _props.title,
          linkTo = _props.linkTo,
          linkText = _props.linkText,
          onHide = _props.onHide,
          container = _props.container,
          show = _props.show,
          target = _props.target,
          popoverProps = _objectWithoutProperties(_props, ['title', 'linkTo', 'linkText', 'onHide', 'container', 'show', 'target']);

      var popoverTitle = _jsx('div', {
        className: 'flight-navOverlay-title'
      }, void 0, title, linkTo ? _jsx(_reactRouterDom.Link, {
        to: linkTo,
        className: 'flight-navOverlay-link'
      }, void 0, linkText, ' ', _ref) : null, _jsx(_Icon2.default, {
        className: 'flight-navOverlay-action flight-navOverlay-action-close',
        name: 'close',
        onClick: onHide
      }));

      var classes = (0, _classnames2.default)("flight-navOverlay", this.props.className);

      return (
        // We need to pass all of `this.props` to Overlay or it won't be
        // positioned or styled correctly.
        _react2.default.createElement(
          _reactBootstrap.Overlay,
          _extends({}, this.props, {
            container: container,
            placement: 'bottom',
            rootClose: true,
            show: show,
            target: target
          }),
          _react2.default.createElement(_reactBootstrap.Popover, _extends({}, popoverProps, {
            title: popoverTitle,
            className: classes
          }))
        )
      );
    }
  }]);

  return NavOverlay;
}(_react2.default.Component);

exports.default = NavOverlay;


NavOverlay.defaultProps = {
  linkText: 'See all'
};

NavOverlay.propTypes = {
  children: _react.PropTypes.node.isRequired,
  className: _react.PropTypes.any,
  id: _react.PropTypes.string.isRequired,
  linkText: _react.PropTypes.node,
  linkTo: _react.PropTypes.string,
  onHide: _react.PropTypes.func,
  title: _react.PropTypes.node.isRequired
};