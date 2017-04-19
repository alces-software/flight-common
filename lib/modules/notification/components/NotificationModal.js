'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _StandardModal = require('../../../components/StandardModal');

var _StandardModal2 = _interopRequireDefault(_StandardModal);

var _messageGeneration = require('../messageGeneration');

var _MessageGeneratorsMap = require('../MessageGeneratorsMap');

var _MessageGeneratorsMap2 = _interopRequireDefault(_MessageGeneratorsMap);

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


var NotificationModal = function (_React$Component) {
  _inherits(NotificationModal, _React$Component);

  function NotificationModal() {
    _classCallCheck(this, NotificationModal);

    return _possibleConstructorReturn(this, (NotificationModal.__proto__ || Object.getPrototypeOf(NotificationModal)).apply(this, arguments));
  }

  _createClass(NotificationModal, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          infoGeneratorsMap = _props.infoGeneratorsMap,
          errorGeneratorsMap = _props.errorGeneratorsMap;

      var message = this.props.message;

      if (message === undefined) {
        message = { title: undefined, content: undefined, messageId: "undefined" };
      } else if (message.messageType === "error") {
        message = (0, _messageGeneration.generateErrorMessage)(errorGeneratorsMap, message);
      } else {
        message = (0, _messageGeneration.generateInformationMessage)(infoGeneratorsMap, message);
      }

      return _jsx(_StandardModal2.default, {
        title: message.title,
        onHide: this.props.onHide,
        show: this.props.show,
        buttons: message.actions
      }, void 0, message.content);
    }
  }]);

  return NotificationModal;
}(_react2.default.Component);

exports.default = NotificationModal;


var messageShape = {
  title: _react.PropTypes.string,
  content: _react.PropTypes.string
};

NotificationModal.propTypes = {
  message: _react.PropTypes.shape(messageShape),
  infoGeneratorsMap: _react.PropTypes.instanceOf(_MessageGeneratorsMap2.default).isRequired,
  errorGeneratorsMap: _react.PropTypes.instanceOf(_MessageGeneratorsMap2.default).isRequired
};