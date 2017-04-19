'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cookieShape = undefined;

var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }(); /*=============================================================================
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          * Copyright (C) 2016 Stephen F. Norledge and Alces Flight Ltd.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          * This file is part of Alces Prime.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          * All rights reserved, see LICENSE.txt.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          *===========================================================================*/


var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactBootstrap = require('react-bootstrap');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var cookies = [{
  name: 'accepts-cookies',
  purpose: 'Application',
  description: "Records whether you've accepted our use of cookies.",
  expiration: '1 year'
}, {
  name: '_ga',
  purpose: 'Google Analytics',
  description: 'Used to distinguish users.',
  expiration: '2 years from latest visit'
}, {
  name: '_gat',
  purpose: 'Google Analytics',
  description: 'Used to throttle request rate.',
  expiration: '10 minutes'
}];

var CookieRow = function CookieRow(_ref) {
  var description = _ref.description,
      expiration = _ref.expiration,
      name = _ref.name,
      purpose = _ref.purpose;
  return _jsx('tr', {}, name, _jsx('td', {}, void 0, _jsx('code', {}, void 0, name)), _jsx('td', {}, void 0, purpose), _jsx('td', {}, void 0, description), _jsx('td', {}, void 0, expiration));
};

var cookieShape = exports.cookieShape = {
  description: _react.PropTypes.string.isRequired,
  expiration: _react.PropTypes.string.isRequired,
  name: _react.PropTypes.string.isRequired,
  purpose: _react.PropTypes.string.isRequired
};

CookieRow.propTypes = cookieShape;

var _ref3 = _jsx('thead', {}, void 0, _jsx('tr', {}, void 0, _jsx('th', {}, void 0, 'Cookie'), _jsx('th', {}, void 0, 'Purpose'), _jsx('th', {}, void 0, 'Description'), _jsx('th', {}, void 0, 'Expiration')));

var CookieTable = function CookieTable(_ref2) {
  var cookies = _ref2.cookies;
  return _jsx('div', {
    className: 'table-responsive'
  }, void 0, _jsx(_reactBootstrap.Table, {
    responsive: true,
    condensed: true,
    hover: true
  }, void 0, _ref3, _jsx('tbody', {}, void 0, cookies.map(function (cookie) {
    return _jsx(CookieRow, {
      description: cookie.description,
      expiration: cookie.expiration,
      name: cookie.name,
      purpose: cookie.purpose
    }, cookie.name);
  }))));
};

CookieTable.propTypes = {
  cookies: _react.PropTypes.arrayOf(_react.PropTypes.shape(cookieShape)).isRequired
};

CookieTable.defaultProps = {
  cookies: cookies
};

var PrivacyPolicy = function PrivacyPolicy(_ref4) {
  var cookies = _ref4.cookies,
      preCookieTableCopy = _ref4.preCookieTableCopy,
      postCookieTableCopy = _ref4.postCookieTableCopy;
  return _jsx('div', {}, void 0, _jsx('div', {
    dangerouslySetInnerHTML: { __html: preCookieTableCopy }
  }), _jsx(CookieTable, {
    cookies: cookies
  }), _jsx('div', {
    dangerouslySetInnerHTML: { __html: postCookieTableCopy }
  }));
};

PrivacyPolicy.propTypes = {
  cookies: _react.PropTypes.arrayOf(_react.PropTypes.shape(cookieShape)),
  preCookieTableCopy: _react.PropTypes.string.isRequired,
  postCookieTableCopy: _react.PropTypes.string.isRequired
};

exports.default = PrivacyPolicy;