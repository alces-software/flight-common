"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.generateErrorMessage = generateErrorMessage;
exports.generateInformationMessage = generateInformationMessage;

var _console = require("../../utils/console");

var _console2 = _interopRequireDefault(_console);

var _errorMessageCustomization = require("./errorMessageCustomization");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Generates an error message object from a raw error as created in the payload
// of the addError action.
//
// Error message objects must contain a title and content keys, which must have
// values of a string and either a string or JSX respectively.
//
// An error message will be generated and shown whenever an API request fails
// (returns a non-2xx HTTP status code). To add a more specific error message
// for the failure of a particular action, simply add the generation of an
// error message object for the given action to the appropriate function in
// this module (which may be a new function, if it is a message for a new
// status code).
/*=============================================================================
 * Copyright (C) 2015 Stephen F. Norledge and Alces Software Ltd.
 *
 * This file is part of Alces FlightDeck.
 *
 * All rights reserved, see LICENSE.txt.
 *===========================================================================*/
function generateErrorMessage(generatorsMap, rawError) {
  if (!rawError) {
    return undefined;
  }

  var _parseError = parseError(rawError),
      status = _parseError.status,
      actionType = _parseError.actionType,
      payload = _parseError.payload;

  var message = void 0;
  var messageGenerator = generatorsMap.getGeneratorForCode(status);
  if (messageGenerator !== undefined) {
    message = messageGenerator.generateMessage(payload, actionType);
  }

  if (message && message.title && message.content) {
    return message;
  } else {
    _console2.default.warn("No or invalid message defined for error:", rawError);
    return _errorMessageCustomization.unexpectedErrorMessageGenerator.generateMessage(payload, actionType);
  }
}

// Parses out an object with the parts we care about from a raw error, as
// created in the payload of the addError action.
function parseError(rawError) {
  var status = rawError.messagePayload.response ? rawError.messagePayload.response.status : undefined;
  var actionType = void 0;
  if (rawError.messagePayload.action != null) {
    actionType = rawError.messagePayload.action.type;
  }

  return {
    status: status,
    actionType: actionType,
    payload: rawError.messagePayload
  };
}

function generateInformationMessage(generatorsMap, message) {
  var messageCode = message.messagePayload;
  var generatedMessage = void 0;
  var messageGenerator = generatorsMap.getGeneratorForCode(messageCode);
  if (messageGenerator !== undefined) {
    generatedMessage = messageGenerator.generateMessage();
  }

  if (generatedMessage && generatedMessage.title && generatedMessage.content) {
    return generatedMessage;
  } else {
    _console2.default.warn("No or invalid message defined for:", message);
    return { title: undefined, message: undefined };
  }
}