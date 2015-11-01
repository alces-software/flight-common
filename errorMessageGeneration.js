import React from 'react';

import * as authActionTypes from 'auth/actionTypes';
import * as clusterActionTypes from 'cluster/actionTypes';
import * as clusterComponentActionTypes from 'clusterComponent/actionTypes';
import * as environmentActionTypes from 'environment/actionTypes';
import * as registrationActionTypes from 'registration/actionTypes';

import Console from "utils/console";

import MessageGeneratorsMap from "./MessageGeneratorsMap";
import MessageGenerator from "./MessageGenerator";

import {ContactCustomerSupport} from 'components/CustomerSupport';

const generatorsMap = new MessageGeneratorsMap();

const unexpectedErrorMessageGenerator = new MessageGenerator(
  'Unexpected error',
  <div>
    An unexpected error occurred while attempting to complete your
    request. <ContactCustomerSupport/>
  </div>
);

//
// Add default error message generators to the generators map.
//
function setupDefaultErrorMessageGenerators() {
  const serverUnavailableErrorMessageGenerator = new MessageGenerator(
    'Unable to communicate with server',
    <div>
      Flight was unable to complete your action as it was unable to
      communicate with the Flight web server; please check your
      internet connection and try again. <ContactCustomerSupport/>
    </div>
  );

  const unauthorizedErrorMessageGenerator = new MessageGenerator(
    'Unauthorized',
    'You are not authorized to perform this action.'
  );

  const unprocessableEntityErrorMessageGenerator = new MessageGenerator(
    'Action failed',
    `It was not possible to complete the action. ${correctErrorsText()}`
  );

  const serverErrorMessageGenerator = new MessageGenerator(
    'Unexpected error',
    <div>
      The Flight web server errored while attempting to complete your
      request. <ContactCustomerSupport/>
    </div>
  );

  generatorsMap.
    addGeneratorForCode(0,   serverUnavailableErrorMessageGenerator).
    addGeneratorForCode(401, unauthorizedErrorMessageGenerator).
    addGeneratorForCode(422, unprocessableEntityErrorMessageGenerator).
    addGeneratorForCode(500, serverErrorMessageGenerator).
    addUnexpectedGenerator(unexpectedErrorMessageGenerator);
}


//
// Customize the error generators for certain action types.
//
// XXX Perhaps this should be moved from here and we allow other modules to
// customize as they see fit.
//
function addActionTypeCustomizations() {
  generatorsMap.
    customizeMessage(
      "unexpected",
      clusterActionTypes.START_FROM_TEMPLATE,
      {title: "Unable to launch cluster"}
    ).

    customizeMessage(
      "unexpected",
      authActionTypes.RETRIEVE_SESSION,
      {
        title: "Unable to retrieve your session",
        content: <div>
          An unexpected error occurred while attempting to retrieve your
          session. <ContactCustomerSupport/>
        </div>
      }
    ).

    customizeMessage(
      401,
      authActionTypes.SIGN_IN,
      {
        title: 'Authentication failure',
        content: "The provided username and/or password were incorrect. Please correct and try again."
      }
    ).

    customizeMessage(
      422,
      registrationActionTypes.REGISTER,
      {
        title: 'Registration failure',
        content: <div>
          It was not possible to create your account. {correctErrorsText()}
        </div>
      }
    ).

    customizeMessage(
      422,
      clusterComponentActionTypes.CREATE,
      {
        title: 'Cluster component creation failed',
        content: <div>
          It was not possible to create your cluster component.
          {correctErrorsText()}
        </div>
      }
    ).

    customizeMessage(
      422,
      environmentActionTypes.CREATE,
      {
        title: 'Environment creation failed',
        content: <div>
          It was not possible to create your environment. {correctErrorsText()}
        </div>
      }
    );
}

setupDefaultErrorMessageGenerators();
addActionTypeCustomizations();

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
export default function generateErrorMessage(rawError) {
  if (!rawError) {
    return undefined;
  }

  const error = parseError(rawError);

  let message;
  let messageGenerator = generatorsMap.getGeneratorForCode(error.status);
  if (messageGenerator !== undefined) {
    message = messageGenerator.generateMessage(error, error.actionType);
  }

  if (message && message.title && message.content) {
    return message;
  }
  else {
    Console.warn("No or invalid message defined for error:", rawError);
    return unexpectedErrorMessageGenerator.
      generateMessage(error, error.actionType);
  }
}

// Parses out an object with the parts we care about from a raw error, as
// created in the payload of the addError action.
function parseError(rawError) {
  return {
    status: rawError.response.status,
    actionType: rawError.action.type
  }
}

function correctErrorsText() {
  return 'Please correct the errors and try again.';
}
