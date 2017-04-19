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

var _PrivacyPolicy = require('../PrivacyPolicy');

var _PrivacyPolicy2 = _interopRequireDefault(_PrivacyPolicy);

var _PageHeader = require('../PageHeader');

var _PageHeader2 = _interopRequireDefault(_PageHeader);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var propTypes = {
  cookies: _react.PropTypes.arrayOf(_react.PropTypes.shape(_PrivacyPolicy.cookieShape)),
  lastUpdated: _react.PropTypes.string.isRequired,
  preCookieTableCopy: _react.PropTypes.string.isRequired,
  postCookieTableCopy: _react.PropTypes.string.isRequired
};

var _ref2 = _jsx(_reactHelmet2.default, {
  title: 'Privacy Policy'
});

var _ref3 = _jsx(_PageHeader2.default, {
  header: 'Privacy Policy'
}, void 0, 'This privacy policy sets out how Alces Flight uses and protects any information that you give Alces Flight when you use this website.');

var _ref4 = _jsx('p', {}, void 0, 'Alces Flight is committed to ensuring that your privacy is protected. Should we ask you to provide certain information by which you can be identified when using this website, then you can be assured that it will only be used in accordance with this privacy statement.');

var PrivacyPolicyPage = function PrivacyPolicyPage(_ref) {
  var cookies = _ref.cookies,
      lastUpdated = _ref.lastUpdated,
      postCookieTableCopy = _ref.postCookieTableCopy,
      preCookieTableCopy = _ref.preCookieTableCopy;
  return _jsx('div', {}, void 0, _ref2, _ref3, _jsx('div', {
    className: 'flight-wideBody'
  }, void 0, _jsx(_reactBootstrap.Grid, {
    fluid: true
  }, void 0, _jsx(_reactBootstrap.Row, {}, void 0, _jsx(_reactBootstrap.Well, {}, void 0, _ref4, _jsx('p', {}, void 0, 'Alces Flight may change this policy from time to time by updating this page. You should check this page from time to time to ensure that you are happy with any changes. This policy is effective from ', lastUpdated, '.'), _jsx('p', {}, void 0, 'This page was last updated on ', lastUpdated, '.')))), _jsx(_reactBootstrap.Row, {}, void 0, _jsx(_reactBootstrap.Col, {
    md: 10,
    mdOffset: 1
  }, void 0, _jsx(_PrivacyPolicy2.default, {
    cookies: cookies,
    preCookieTableCopy: preCookieTableCopy,
    postCookieTableCopy: postCookieTableCopy
  })))));
};

PrivacyPolicyPage.propTypes = propTypes;

exports.default = PrivacyPolicyPage;