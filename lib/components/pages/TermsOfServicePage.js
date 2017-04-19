'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }(); /*=============================================================================
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          * Copyright (C) 2016 Stephen F. Norledge and Alces Flight Ltd.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          * This file is part of Alces Prime.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          * All rights reserved, see LICENSE.txt.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          *===========================================================================*/


var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactHelmet = require('react-helmet');

var _reactHelmet2 = _interopRequireDefault(_reactHelmet);

var _reactBootstrap = require('react-bootstrap');

var _reactRouterDom = require('react-router-dom');

var _PageHeader = require('../PageHeader');

var _PageHeader2 = _interopRequireDefault(_PageHeader);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var propTypes = {
  copy: _react.PropTypes.string.isRequired,
  lastUpdated: _react.PropTypes.string.isRequired,
  productName: _react.PropTypes.string.isRequired
};

var _ref2 = _jsx(_reactHelmet2.default, {
  title: 'Terms of Service'
});

var _ref3 = _jsx('p', {}, void 0, 'If you continue to browse and use this website, you are agreeing to comply with and be bound by the following terms and conditions of use which, together with our', ' ', _jsx(_reactRouterDom.Link, {
  to: '/privacy'
}, void 0, 'privacy policy'), ', govern Alces Flight\u2019s relationship with you in relation to this website. If you disagree with any part of these terms and conditions, please do not use our website.');

var _ref4 = _jsx('h2', {}, void 0, 'Terms and conditions of use');

var TermsOfServicePage = function TermsOfServicePage(_ref) {
  var copy = _ref.copy,
      lastUpdated = _ref.lastUpdated,
      productName = _ref.productName;
  return _jsx('div', {}, void 0, _ref2, _jsx(_PageHeader2.default, {
    header: 'Terms of Service'
  }, void 0, 'This page (taken with the documents and pages it refers to) tells you the terms of use which you agree to when you use ', _jsx('em', {}, void 0, productName), '.'), _jsx('div', {
    className: 'flight-wideBody'
  }, void 0, _jsx(_reactBootstrap.Grid, {
    fluid: true
  }, void 0, _jsx(_reactBootstrap.Row, {}, void 0, _jsx(_reactBootstrap.Well, {}, void 0, _ref3, _jsx('p', {}, void 0, 'This page was last updated on ', lastUpdated, '.'))), _jsx(_reactBootstrap.Row, {}, void 0, _jsx(_reactBootstrap.Col, {
    md: 10,
    mdOffset: 1
  }, void 0, _ref4, _jsx('div', {
    dangerouslySetInnerHTML: { __html: copy }
  }))))));
};

TermsOfServicePage.propTypes = propTypes;

exports.default = TermsOfServicePage;