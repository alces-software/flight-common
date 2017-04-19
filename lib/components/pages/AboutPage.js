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

var _Icon = require('../Icon');

var _Icon2 = _interopRequireDefault(_Icon);

var _LicensableTable = require('../LicensableTable');

var _LicensableTable2 = _interopRequireDefault(_LicensableTable);

var _PageHeader = require('../PageHeader');

var _PageHeader2 = _interopRequireDefault(_PageHeader);

var _CustomerSupport = require('../CustomerSupport');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var propTypes = {
  licensables: _react.PropTypes.arrayOf(_react.PropTypes.object).isRequired,
  pageHeaderText: _react.PropTypes.node.isRequired,
  productName: _react.PropTypes.string.isRequired
};

var _ref2 = _jsx(_reactHelmet2.default, {
  title: 'About'
});

var _ref3 = _jsx('h3', {}, void 0, 'Tell us what you want to see');

var _ref4 = _jsx('p', {}, void 0, 'You can let us know what you would like to see by contacting', ' ', _jsx(_CustomerSupport.CustomerSupportLink, {}), '.');

var _ref5 = _jsx('h3', {}, void 0, 'Security');

var _ref6 = _jsx('p', {}, void 0, 'Our software infrastructure is updated regularly with the latest security patches.  While perfect security is a moving target, we work with security researchers to keep up with the state-of-the-art in web security.');

var _ref7 = _jsx('p', {}, void 0, 'If you would like to report a potential security problem or have noticed abuse, misuse or any kind of incident with your account, please visit our', ' ', _jsx(_reactRouterDom.Link, {
  to: '/security'
}, void 0, 'security response'), ' ', 'page for details on how to securely submit a report.');

var _ref8 = _jsx('h3', {}, void 0, 'Always the latest and greatest');

var _ref9 = _jsx('h3', {}, void 0, 'Talk to us');

var _ref10 = _jsx(_CustomerSupport.CustomerSupportLink, {});

var _ref11 = _jsx('p', {}, void 0, 'Our development team will endeavour to reproduce and fix problems encountered promptly, and may ask for your assistance in replicating your problem.  Please note that, although we aim to provide updates as soon as possible, we cannot guarantee that a fix to a specific version of the product will be made available for all reported issues.');

var _ref12 = _jsx(_CustomerSupport.CustomerSupportLink, {});

var _ref13 = _jsx(_reactBootstrap.Row, {}, void 0, _jsx(_reactBootstrap.Col, {
  md: 2,
  mdOffset: 5
}, void 0, _jsx('div', {
  className: 'flight-asteriskBreaker'
}, void 0, _jsx(_Icon2.default, {
  name: 'asterisk'
}), _jsx(_Icon2.default, {
  name: 'asterisk'
}), _jsx(_Icon2.default, {
  name: 'asterisk'
}))));

var _ref14 = _jsx('h2', {}, void 0, 'Licensing');

var _ref15 = _jsx('a', {
  className: 'flight-link--external',
  href: 'http://en.wikipedia.org/wiki/Free_and_open_source_software',
  rel: 'noopener noreferrer',
  target: '_blank'
}, void 0, 'FLOSS');

var _ref16 = _jsx(_CustomerSupport.CustomerSupportLink, {});

var _ref17 = _jsx(_CustomerSupport.CustomerSupportLink, {});

var AboutPage = function AboutPage(_ref) {
  var licensables = _ref.licensables,
      pageHeaderText = _ref.pageHeaderText,
      productName = _ref.productName;
  return _jsx('div', {}, void 0, _ref2, _jsx(_PageHeader2.default, {
    header: 'About ' + productName
  }, void 0, pageHeaderText), _jsx('div', {
    className: 'flight-wideBody'
  }, void 0, _jsx(_reactBootstrap.Grid, {
    fluid: true
  }, void 0, _jsx(_reactBootstrap.Row, {}, void 0, _jsx(_reactBootstrap.Well, {}, void 0, _jsx('p', {}, void 0, 'Alces Flight is committed to continually evolving', ' ', _jsx('em', {}, void 0, productName), ', to provide the latest features helping our customers achieve their goals, in a secure and trusted environment. We manage this through promoting easy customer feedback and leveraging high quality open source software for quick turn-around on desired features.'))), _jsx(_reactBootstrap.Row, {}, void 0, _jsx(_reactBootstrap.Col, {
    md: 5,
    mdOffset: 1
  }, void 0, _ref3, _jsx('p', {}, void 0, _jsx('em', {}, void 0, productName), ' is continually under development and we are always happy to receive feedback from all existing and potential users of the service to help shape its future capabilities and feature set.'), _ref4, _ref5, _ref6, _ref7), _jsx(_reactBootstrap.Col, {
    md: 5
  }, void 0, _ref8, _jsx('p', {}, void 0, 'Features are added to the ', _jsx('em', {}, void 0, productName), ' service via our policy of continuous delivery.  This means that you get access to the latest features as soon as they become available.'), _ref9, _jsx('p', {}, void 0, 'If you encounter any problems during your use of', ' ', _jsx('em', {}, void 0, productName), ', please let us know by opening a support request.  You can do this by contacting ', _ref10, '.'), _ref11, _jsx('p', {}, void 0, 'For any other enquiries and communication regarding', ' ', _jsx('em', {}, void 0, productName), ' please use the standard Alces Customer Support email address: ', _ref12, '.'))), _ref13, _jsx(_reactBootstrap.Row, {}, void 0, _jsx(_reactBootstrap.Col, {
    md: 10,
    mdOffset: 1
  }, void 0, _ref14, _jsx('p', {}, void 0, 'Alces Flight is a supporter of the open source software community.  Many of the components from which', ' ', _jsx('em', {}, void 0, productName), ' is built are licensed under', ' ', _ref15, ' ', 'licenses.  For further information about licensing please contact the ', _ref16, ' team.'), _jsx('p', {}, void 0, 'The open source libraries, frameworks and other components used to build and operate the ', _jsx('em', {}, void 0, productName), ' application are detailed below.  If you should notice any irregularlities, please contact ', _ref17, '.  All logos are owned by their respective copyright holders.'), _jsx(_LicensableTable2.default, {
    licensables: licensables
  }))))));
};

AboutPage.propTypes = propTypes;

exports.default = AboutPage;