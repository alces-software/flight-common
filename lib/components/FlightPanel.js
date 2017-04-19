'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactBootstrap = require('react-bootstrap');

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

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


var FlightPanel = function (_React$Component) {
  _inherits(FlightPanel, _React$Component);

  function FlightPanel() {
    _classCallCheck(this, FlightPanel);

    return _possibleConstructorReturn(this, (FlightPanel.__proto__ || Object.getPrototypeOf(FlightPanel)).apply(this, arguments));
  }

  _createClass(FlightPanel, [{
    key: 'render',
    value: function render() {
      var _classNames;

      var classes = (0, _classnames2.default)("flightPanel", this.props.className, (_classNames = {}, _defineProperty(_classNames, 'flightPanel-width--' + this.props.width, this.props.width), _defineProperty(_classNames, 'flightPanel-header--' + this.props.headerSize, this.props.headerSize), _classNames));

      return _jsx('div', {
        className: classes
      }, void 0, _jsx(_reactBootstrap.Panel, {
        header: this.renderHeader()
      }, void 0, this.props.children));
    }
  }, {
    key: 'renderHeader',
    value: function renderHeader() {
      var _props = this.props,
          header = _props.header,
          headerButton = _props.headerButton;


      if (header == null) {
        return null;
      }

      return _jsx(_reactBootstrap.Grid, {
        fluid: true
      }, void 0, _jsx(_reactBootstrap.Row, {}, void 0, _jsx(_reactBootstrap.Col, {
        md: 8,
        sm: 9,
        xs: 10,
        className: 'flightPanel-header-text'
      }, void 0, header), _jsx(_reactBootstrap.Col, {
        md: 4,
        sm: 3,
        xs: 2,
        className: 'flightPanel-header-actions'
      }, void 0, _jsx('div', {
        className: 'flightPanel-header-actions-button'
      }, void 0, headerButton))));
    }
  }, {
    key: 'wrapperClassNames',
    value: function wrapperClassNames() {
      var width = this.props.width;

      if (width === undefined) {
        return 'flightPanel';
      } else {
        return 'flightPanel flightPanel--' + width;
      }
    }
  }]);

  return FlightPanel;
}(_react2.default.Component);

exports.default = FlightPanel;


FlightPanel.propTypes = {
  children: _react.PropTypes.node.isRequired,
  className: _react.PropTypes.string,
  header: _react.PropTypes.node,
  headerButton: _react.PropTypes.node,
  headerSize: _react.PropTypes.oneOf(["small"]),
  width: _react.PropTypes.oneOf(["medium", "wide"])
};