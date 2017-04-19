'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactBootstrap = require('react-bootstrap');

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


var LoadingPage = function (_React$Component) {
  _inherits(LoadingPage, _React$Component);

  function LoadingPage() {
    _classCallCheck(this, LoadingPage);

    return _possibleConstructorReturn(this, (LoadingPage.__proto__ || Object.getPrototypeOf(LoadingPage)).apply(this, arguments));
  }

  _createClass(LoadingPage, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          bsStyle = _props.bsStyle,
          now = _props.now,
          productName = _props.productName,
          progressDescription = _props.progressDescription;


      return _jsx('div', {
        className: 'loading-indicator'
      }, void 0, _jsx('p', {}, void 0, 'One moment please \u2014', ' ', _jsx('em', {
        className: 'nowrap'
      }, void 0, productName), ' ', 'is\xA0starting\xA0up.'), _jsx(_reactBootstrap.ProgressBar, {
        active: true,
        bsStyle: bsStyle,
        className: 'loading-indicator-progress-bar',
        now: now,
        striped: true
      }), progressDescription ? _jsx('p', {}, void 0, progressDescription, '\u2026') : null);
    }
  }]);

  return LoadingPage;
}(_react2.default.Component);

LoadingPage.propTypes = {
  bsStyle: _reactBootstrap.ProgressBar.propTypes.bsStyle,
  now: _react.PropTypes.number.isRequired,
  productName: _react.PropTypes.string.isRequired,
  progressDescription: _react.PropTypes.string
};

LoadingPage.defaultProps = {
  now: 100
};

exports.default = LoadingPage;