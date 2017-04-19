'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactBootstrap = require('react-bootstrap');

var _Icon = require('./Icon');

var _Icon2 = _interopRequireDefault(_Icon);

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


_reactBootstrap.utils.bootstrapUtils.addStyle(_reactBootstrap.Button, "sideEffect");

var _ref = _jsx(_Icon2.default, {
  name: 'spinner',
  spin: true
});

var StatefulButton = function (_React$Component) {
  _inherits(StatefulButton, _React$Component);

  function StatefulButton() {
    _classCallCheck(this, StatefulButton);

    return _possibleConstructorReturn(this, (StatefulButton.__proto__ || Object.getPrototypeOf(StatefulButton)).apply(this, arguments));
  }

  _createClass(StatefulButton, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          submittingText = _props.submittingText,
          disabled = _props.disabled,
          submitting = _props.submitting,
          rest = _objectWithoutProperties(_props, ['submittingText', 'disabled', 'submitting']);

      return _react2.default.createElement(
        _reactBootstrap.Button,
        _extends({
          bsStyle: 'success'
        }, rest, {
          disabled: disabled || submitting
        }),
        this.renderContent(submitting)
      );
    }
  }, {
    key: 'renderContent',
    value: function renderContent(submitting) {
      var content = void 0;
      if (submitting) {
        var text = this.props.submittingText || "Submitting...";
        content = _jsx('span', {}, void 0, text, ' ', _ref);
      } else {
        content = this.props.children;
      }
      var icon = this.props.icon ? _jsx(_Icon2.default, {
        name: this.props.icon
      }) : null;
      if (icon) {
        return _jsx('span', {}, void 0, icon, ' ', content);
      } else {
        return content;
      }
    }
  }]);

  return StatefulButton;
}(_react2.default.Component);

StatefulButton.propTypes = {
  block: _reactBootstrap.Button.propTypes.block,
  bsSize: _reactBootstrap.Button.propTypes.bsSize,
  bsStyle: _reactBootstrap.Button.propTypes.bsStyle,
  onClick: _react2.default.PropTypes.func,
  submitting: _react2.default.PropTypes.bool,
  submittingText: _react2.default.PropTypes.string
};

exports.default = StatefulButton;