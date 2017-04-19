'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _NotificationModal = require('./NotificationModal');

var _NotificationModal2 = _interopRequireDefault(_NotificationModal);

var _actions = require('../actions');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*=============================================================================
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Copyright (C) 2015-2016 Stephen F. Norledge and Alces Software Ltd.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * This file is part of Alces FlightDeck.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * All rights reserved, see LICENSE.txt.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *===========================================================================*/


//
// Wrapper around NotificationModal to enable smooth transitions when we are
// closing one NotificationModal and there is another one to display.
//
// We have two NotificationModals, one representing the modal that is
// currently being shown and the other representing the modal that is being
// closed.
//
var NotificationModals = function (_React$Component) {
  _inherits(NotificationModals, _React$Component);

  function NotificationModals(props, context) {
    _classCallCheck(this, NotificationModals);

    var _this = _possibleConstructorReturn(this, (NotificationModals.__proto__ || Object.getPrototypeOf(NotificationModals)).call(this, props, context));

    _this.handleCloseNotification = _this.handleCloseNotification.bind(_this);
    return _this;
  }

  _createClass(NotificationModals, [{
    key: 'handleCloseNotification',
    value: function handleCloseNotification() {
      return this.props.dispatch((0, _actions.closeModal)());
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          currentModal = _props.currentModal,
          exitingModal = _props.exitingModal,
          showingModal = _props.showingModal,
          errorGeneratorsMap = _props.errorGeneratorsMap,
          infoGeneratorsMap = _props.infoGeneratorsMap;


      var currentModalId = currentModal ? currentModal.messageId : "undefinedCurrentModal";

      var exitingModalId = exitingModal ? exitingModal.messageId : "undefinedExitingModal";

      return _jsx('div', {}, void 0, _jsx(_NotificationModal2.default, {
        show: showingModal,
        onHide: this.handleCloseNotification,
        message: currentModal,
        errorGeneratorsMap: errorGeneratorsMap,
        infoGeneratorsMap: infoGeneratorsMap
      }, currentModalId), _jsx(_NotificationModal2.default, {
        show: false,
        onHide: function onHide() {},
        message: exitingModal,
        errorGeneratorsMap: errorGeneratorsMap,
        infoGeneratorsMap: infoGeneratorsMap
      }, exitingModalId));
    }
  }]);

  return NotificationModals;
}(_react2.default.Component);

// A modal message also has a payload of some variety, but that varies
// depending on the message type, so I haven't specified it here.


var modalShape = {
  messageId: _react.PropTypes.number.isRequired,
  messageType: _react.PropTypes.string.isRequired
};

NotificationModals.propTypes = {
  // Whether we are displaying a modal / animating one in.
  showingModal: _react.PropTypes.bool.isRequired,
  // The modal that is currently being displayed / is animating in.
  currentModal: _react.PropTypes.shape(modalShape),
  // The modal that is currently being hidden / is animating out.
  exitingModal: _react.PropTypes.shape(modalShape)
};

var mapStateToProps = function mapStateToProps(state) {
  var _state$notifications = state.notifications,
      errorGeneratorsMap = _state$notifications.errorGeneratorsMap,
      infoGeneratorsMap = _state$notifications.infoGeneratorsMap;

  return {
    errorGeneratorsMap: errorGeneratorsMap,
    infoGeneratorsMap: infoGeneratorsMap
  };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps)(NotificationModals);