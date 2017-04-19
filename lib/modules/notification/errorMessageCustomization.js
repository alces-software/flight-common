'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.unexpectedErrorMessageGenerator = undefined;

var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }(); /*=============================================================================
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          * Copyright (C) 2015 Stephen F. Norledge and Alces Software Ltd.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          * This file is part of Alces FlightDeck.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          * All rights reserved, see LICENSE.txt.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          *===========================================================================*/


exports.setupDefaultErrorMessageGenerators = setupDefaultErrorMessageGenerators;
exports.correctErrorsText = correctErrorsText;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _CustomerSupport = require('../../components/CustomerSupport');

var _MessageGenerator = require('./MessageGenerator');

var _MessageGenerator2 = _interopRequireDefault(_MessageGenerator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var unexpectedErrorMessageGenerator = exports.unexpectedErrorMessageGenerator = new _MessageGenerator2.default('Unexpected error', _jsx('div', {}, void 0, 'An unexpected error occurred while attempting to complete your request. ', _jsx(_CustomerSupport.ContactCustomerSupport, {})));

//
// Add default error message generators to the generators map.
//

var _ref = _jsx(_CustomerSupport.ContactCustomerSupport, {});

var _ref2 = _jsx(_CustomerSupport.ContactCustomerSupport, {});

function setupDefaultErrorMessageGenerators(generatorsMap, productName) {
  var serverUnavailableErrorMessageGenerator = new _MessageGenerator2.default('Unable to communicate with server', _jsx('div', {}, void 0, productName, ' was unable to complete your action as it was unable to communicate with the web server; please check your internet connection and try again. ', _ref));

  var unauthorizedErrorMessageGenerator = new _MessageGenerator2.default('Unauthorized', 'You are not authorized to perform this action.');

  var unprocessableEntityErrorMessageGenerator = new _MessageGenerator2.default('Action failed', 'It was not possible to complete the action. ' + correctErrorsText());

  var serverErrorMessageGenerator = new _MessageGenerator2.default('Unexpected error', _jsx('div', {}, void 0, 'The ', productName, ' web server errored while attempting to complete your request. ', _ref2));

  generatorsMap.addGeneratorForCode(0, serverUnavailableErrorMessageGenerator).addGeneratorForCode(401, unauthorizedErrorMessageGenerator).addGeneratorForCode(422, unprocessableEntityErrorMessageGenerator).addGeneratorForCode(500, serverErrorMessageGenerator).

  // If these status codes (bad gateway and gateway timeout) occur and we
  // have not planned for them, they are unexpected errors, so display the
  // standard message.
  // TODO: this is needed in order to override the message for these status
  // codes for particular actions in AAM (and potentially other apps) - maybe
  // it would be better if we were able to customize error messages without
  // needing to specify a default, and have the unexpected error message as
  // the default default?
  addGeneratorForCode(502, unexpectedErrorMessageGenerator).addGeneratorForCode(504, unexpectedErrorMessageGenerator).addUnexpectedGenerator(unexpectedErrorMessageGenerator);
}

function correctErrorsText() {
  return 'Please correct the errors and try again.';
}