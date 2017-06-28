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
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Copyright (C) 2015-2016 Stephen F. Norledge and Alces Software Ltd.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * This file is part of Alces FlightDeck.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * All rights reserved, see LICENSE.txt.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *===========================================================================*/


// Make Babel optimizations happy.  One of the optimization plugins we use for
// production builds doesn't like the use of `Navbar.Brand` in JSX elements.
// So we rename them here to `NavbarBrand` for instance.
var ModalBody = _reactBootstrap.Modal.Body,
    ModalFooter = _reactBootstrap.Modal.Footer,
    ModalHeader = _reactBootstrap.Modal.Header,
    ModalTitle = _reactBootstrap.Modal.Title;

var StandardModal = function (_React$Component) {
  _inherits(StandardModal, _React$Component);

  function StandardModal() {
    _classCallCheck(this, StandardModal);

    return _possibleConstructorReturn(this, (StandardModal.__proto__ || Object.getPrototypeOf(StandardModal)).apply(this, arguments));
  }

  _createClass(StandardModal, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          bsSize = _props.bsSize,
          title = _props.title,
          children = _props.children,
          show = _props.show,
          onHide = _props.onHide;

      var closeButtonText = this.props.closeButtonText || 'Close';

      return _jsx('div', {}, void 0, _jsx(_reactBootstrap.Modal, {
        show: show,
        onHide: onHide,
        bsSize: bsSize
      }, void 0, _jsx(ModalHeader, {
        closeButton: true
      }, void 0, _jsx(ModalTitle, {}, void 0, title)), _jsx(ModalBody, {}, void 0, children), _jsx(ModalFooter, {}, void 0, this.props.buttons, _jsx(_reactBootstrap.Button, {
        onClick: onHide
      }, void 0, closeButtonText))));
    }
  }]);

  return StandardModal;
}(_react2.default.Component);

exports.default = StandardModal;