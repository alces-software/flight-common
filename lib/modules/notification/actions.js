'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.displayErrorModal = displayErrorModal;
exports.closeModal = closeModal;
exports.displayInfoModal = displayInfoModal;

var _actionTypes = require('./actionTypes');

var types = _interopRequireWildcard(_actionTypes);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function displayErrorModal(action, response) {
  return {
    type: types.ADD_ERROR_MODAL,
    payload: { action: action, response: response }
  };
} /*=============================================================================
   * Copyright (C) 2015 Stephen F. Norledge and Alces Software Ltd.
   *
   * This file is part of Alces FlightDeck.
   *
   * All rights reserved, see LICENSE.txt.
   *===========================================================================*/
function closeModal() {
  return {
    type: types.CLOSE_MODAL
  };
}

function displayInfoModal(message) {
  return {
    type: types.ADD_INFO_MODAL,
    payload: message
  };
}