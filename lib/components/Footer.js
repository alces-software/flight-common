'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }(); /*=============================================================================
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          * Copyright (C) 2015 Stephen F. Norledge and Alces Software Ltd.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          * This file is part of Alces FlightDeck.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          * All rights reserved, see LICENSE.txt.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          *===========================================================================*/


var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

var _reactRouterDom = require('react-router-dom');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FooterLink = function FooterLink(_ref) {
  var to = _ref.to,
      text = _ref.text;
  return _jsx(_reactRouterDom.Link, {
    to: to,
    className: 'flightFooter-link'
  }, void 0, text);
};

var _ref2 = _jsx('span', {
  className: 'flightFooter-bar'
});

var SeparatorBar = function SeparatorBar() {
  return _ref2;
};

var _ref3 = _jsx('span', {
  className: 'flightFooter-copyright'
}, void 0, '\xA9');

var _ref4 = _jsx('a', {
  className: 'flightFooter-us',
  href: 'http://www.alces-flight.com'
}, void 0, 'Alces\xA0Flight\xA0Ltd');

var _ref5 = _jsx(SeparatorBar, {});

var Footer = function (_React$Component) {
  _inherits(Footer, _React$Component);

  function Footer() {
    _classCallCheck(this, Footer);

    return _possibleConstructorReturn(this, (Footer.__proto__ || Object.getPrototypeOf(Footer)).apply(this, arguments));
  }

  _createClass(Footer, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          productName = _props.productName,
          firstCopyrightYear = _props.firstCopyrightYear,
          links = _props.links;

      var currentYear = (0, _moment2.default)().format("YYYY");

      var copyrightYears = void 0;
      if (firstCopyrightYear != null && firstCopyrightYear !== currentYear) {
        copyrightYears = _jsx('span', {}, void 0, firstCopyrightYear, '\u2013', currentYear);
      } else {
        copyrightYears = currentYear;
      }

      return _jsx('footer', {}, void 0, productName, ' ', _ref3, ' ', copyrightYears, ' ', _ref4, links.map(function (link) {
        return _jsx('span', {}, link.to, _ref5, _jsx(FooterLink, {
          to: link.to,
          text: link.text
        }));
      }));
    }
  }]);

  return Footer;
}(_react2.default.Component);

Footer.propTypes = {
  productName: _react.PropTypes.string.isRequired,

  firstCopyrightYear: _react.PropTypes.string,

  // Additional links to add to the footer.
  links: _react.PropTypes.arrayOf(_react.PropTypes.shape({
    to: _react.PropTypes.string.isRequired,
    text: _react.PropTypes.node.isRequired
  }))
};

Footer.defaultProps = {
  firstCopyrightYear: "2015",
  links: []
};

exports.default = Footer;