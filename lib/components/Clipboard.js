'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CopyToClipboard = exports.CopyToClipboardButton = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactBootstrap = require('react-bootstrap');

var _clipboardAction = require('clipboard/lib/clipboard-action');

var _clipboardAction2 = _interopRequireDefault(_clipboardAction);

var _Icon = require('./Icon');

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


var _ref = _jsx(_reactBootstrap.Button, {}, void 0, _jsx(_Icon2.default, {
  name: 'clipboard'
}));

var CopyToClipboardButton = exports.CopyToClipboardButton = function (_React$Component) {
  _inherits(CopyToClipboardButton, _React$Component);

  function CopyToClipboardButton(props) {
    _classCallCheck(this, CopyToClipboardButton);

    var _this = _possibleConstructorReturn(this, (CopyToClipboardButton.__proto__ || Object.getPrototypeOf(CopyToClipboardButton)).call(this, props));

    _this.state = { copyState: "notCopied" };
    return _this;
  }

  _createClass(CopyToClipboardButton, [{
    key: 'handleCopy',
    value: function handleCopy(payload) {
      this.setState({ copyState: "copied" });
      if (this.props.onCopy) {
        this.props.onCopy(payload);
      }
    }
  }, {
    key: 'handleCopyFailure',
    value: function handleCopyFailure(payload) {
      this.setState({ copyState: "failed" });
      if (this.props.onCopyFailure) {
        this.props.onCopyFailure(payload);
      }
    }
  }, {
    key: 'tooltipText',
    value: function tooltipText() {
      switch (this.state.copyState) {
        case "notCopied":
          return "Copy to clipboard";
        case "copied":
          return "Copied!";
        case "failed":
          return "Press Ctrl-C to copy";
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var tooltip = _jsx(_reactBootstrap.Tooltip, {
        id: 'copy-to-clipboard-button-' + this.props.text
      }, void 0, this.tooltipText());

      return _jsx(_reactBootstrap.OverlayTrigger, {
        onExited: function onExited() {
          return _this2.setState({ copyState: "notCopied" });
        },
        overlay: tooltip,
        placement: 'bottom',
        shouldUpdatePosition: true,
        trigger: ["hover"]
      }, void 0, _react2.default.createElement(
        CopyToClipboard,
        _extends({}, this.props, { onCopy: this.handleCopy.bind(this) }),
        _ref
      ));
    }
  }]);

  return CopyToClipboardButton;
}(_react2.default.Component);

var CopyToClipboard = exports.CopyToClipboard = function (_React$Component2) {
  _inherits(CopyToClipboard, _React$Component2);

  function CopyToClipboard(props) {
    _classCallCheck(this, CopyToClipboard);

    var _this3 = _possibleConstructorReturn(this, (CopyToClipboard.__proto__ || Object.getPrototypeOf(CopyToClipboard)).call(this, props));

    _this3.emitter = { emit: _this3.runCallbacks.bind(_this3) };
    return _this3;
  }

  _createClass(CopyToClipboard, [{
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      if (this.clipboard) {
        this.clipboard.destroy();
      }
    }
  }, {
    key: 'runCallbacks',
    value: function runCallbacks(event, payload) {
      if (event === "success") {
        this.props.onCopy && this.props.onCopy(payload);
      } else if (event === "error") {
        this.props.onCopyFailed && this.props.onCopyFailed(payload);
      }
    }
  }, {
    key: 'handleCopy',
    value: function handleCopy() {
      var text = this.props.text;
      // Can we create one and keep reusing it?

      if (this.clipboard) {
        this.clipboard = null;
      }
      this.clipboard = new _clipboardAction2.default({
        action: "copy",
        emitter: this.emitter,
        text: text
      });
    }
  }, {
    key: 'render',
    value: function render() {
      // eslint-disable-next-line no-unused-vars
      var _props = this.props,
          text = _props.text,
          onCopy = _props.onCopy,
          children = _props.children,
          rest = _objectWithoutProperties(_props, ['text', 'onCopy', 'children']);

      var elem = _react2.default.Children.only(children);
      return _react2.default.cloneElement(elem, _extends({}, rest, {
        onClick: this.handleCopy.bind(this)
      }));
    }
  }]);

  return CopyToClipboard;
}(_react2.default.Component);

CopyToClipboard.propTypes = {
  text: _react2.default.PropTypes.string.isRequired,
  children: _react2.default.PropTypes.element.isRequired,
  onCopy: _react2.default.PropTypes.func
};