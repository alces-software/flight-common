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

var _PageHeader = require('../PageHeader');

var _PageHeader2 = _interopRequireDefault(_PageHeader);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var propTypes = {
  copy: _react.PropTypes.string.isRequired
};

var _ref2 = _jsx(_reactHelmet2.default, {
  title: 'Security'
});

var _ref3 = _jsx(_PageHeader2.default, {
  header: 'Security Response'
}, void 0, 'Keeping customer data safe and secure is a huge responsibility and our top priority.  We always welcome all your input and feedback on security issues.');

var _ref4 = _jsx(_reactBootstrap.Row, {}, void 0, _jsx(_reactBootstrap.Well, {}, void 0, _jsx('p', {}, void 0, 'We really appreciate your concern, and would like to assure you that we treat all security issues with the highest priority and utmost seriousness.'), _jsx('p', {}, void 0, 'We ask for your patience while we make sure that your issue has been properly rectified.  Should there be a need, we will also notify upstream projects of flaws that may affect other users of their projects.')));

var SecurityPage = function SecurityPage(_ref) {
  var copy = _ref.copy;
  return _jsx('div', {}, void 0, _ref2, _ref3, _jsx('div', {
    className: 'flight-wideBody'
  }, void 0, _jsx(_reactBootstrap.Grid, {
    fluid: true
  }, void 0, _ref4, _jsx(_reactBootstrap.Row, {}, void 0, _jsx(_reactBootstrap.Col, {
    md: 10,
    mdOffset: 1
  }, void 0, _jsx('div', {
    dangerouslySetInnerHTML: { __html: copy }
  }))))));
};

SecurityPage.propTypes = propTypes;

exports.default = SecurityPage;