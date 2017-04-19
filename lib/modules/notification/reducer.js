'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /*=============================================================================
                                                                                                                                                                                                                                                                   * Copyright (C) 2015 Stephen F. Norledge and Alces Software Ltd.
                                                                                                                                                                                                                                                                   *
                                                                                                                                                                                                                                                                   * This file is part of Alces FlightDeck.
                                                                                                                                                                                                                                                                   *
                                                                                                                                                                                                                                                                   * All rights reserved, see LICENSE.txt.
                                                                                                                                                                                                                                                                   *===========================================================================*/


exports.default = reducer;

var _actionTypes = require('./actionTypes');

var types = _interopRequireWildcard(_actionTypes);

var _MessageGeneratorsMap = require('./MessageGeneratorsMap');

var _MessageGeneratorsMap2 = _interopRequireDefault(_MessageGeneratorsMap);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var messageId = 0;
function nextMessageId() {
  messageId = messageId + 1;
  return messageId;
}

var initialState = {
  // A FIFO of messages to show in a modal dialog.
  modalMessages: [],
  // The modal currently being shown
  currentModal: undefined,
  // The modal that is being animated out.
  exitingModal: undefined,
  showingCurrentModal: false,

  // The notification generator maps are now stored in the Redux store; this
  // prevents an issue with how they were accessed previously where depending
  // on which module they were imported from (such as the enclosing app or
  // flight-common internally) different instances of each would be
  // initialized, which then means the notifications would not be set up when
  // we attempt to display them.
  //
  // This is an improvement to the above issue (and moves this aspect of the
  // state into the store), but is not really in the spirit of Redux as we
  // still modify these directly rather than via reducers, so time travel etc.
  // won't work for these I think.
  //
  // TODO: maybe use reducers and immutable objects for modifying/storing the
  // message generators state instead?
  errorGeneratorsMap: new _MessageGeneratorsMap2.default(),
  infoGeneratorsMap: new _MessageGeneratorsMap2.default()
};

function addModalMessage(messageType) {
  return function (state, action) {
    var newMessage = {
      messagePayload: action.payload,
      messageType: messageType,
      messageId: nextMessageId()
    };

    var currentModal = state.currentModal;
    if (currentModal === undefined) {
      currentModal = newMessage;
    }

    return _extends({}, state, {
      modalMessages: [].concat(_toConsumableArray(state.modalMessages), [newMessage]),
      currentModal: currentModal,
      showingCurrentModal: true
    });
  };
}

var addError = addModalMessage("error");
var addInformational = addModalMessage("info");

function closeModal(state) {
  var newMessages = [].concat(_toConsumableArray(state.modalMessages));
  newMessages.shift();

  var exitingModal = state.currentModal;
  var currentModal = newMessages[0];

  return _extends({}, state, {
    modalMessages: newMessages,
    currentModal: currentModal,
    exitingModal: exitingModal,
    showingCurrentModal: newMessages.length > 0
  });
}

function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];

  switch (action.type) {
    case types.ADD_ERROR_MODAL:
      return addError(state, action);
    case types.ADD_INFO_MODAL:
      return addInformational(state, action);
    case types.CLOSE_MODAL:
      return closeModal(state);
    default:
      return state;
  }
}