/*=============================================================================
 * Copyright (C) 2015 Stephen F. Norledge and Alces Software Ltd.
 *
 * This file is part of Alces FlightDeck.
 *
 * All rights reserved, see LICENSE.txt.
 *===========================================================================*/
import * as types from './actionTypes';
import MessageGeneratorsMap from './MessageGeneratorsMap';

let messageId = 0;
function nextMessageId() {
  messageId = messageId + 1;
  return messageId;
}

const initialState = {
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
  errorGeneratorsMap: new MessageGeneratorsMap(),
  infoGeneratorsMap: new MessageGeneratorsMap()
}

function addModalMessage(messageType) {
  return (state, action) => {
    const newMessage = {
      messagePayload: action.payload,
      messageType: messageType,
      messageId: nextMessageId()
    };

    let currentModal = state.currentModal;
    if (currentModal === undefined) {
      currentModal = newMessage;
    }

    return {
      ...state,
      modalMessages: [ ...state.modalMessages, newMessage ],
      currentModal: currentModal,
      showingCurrentModal: true
    };
  }
}

const addError = addModalMessage("error");
const addInformational = addModalMessage("info");

function closeModal(state) {
  const newMessages = [...state.modalMessages];
  newMessages.shift();

  const exitingModal = state.currentModal;
  const currentModal = newMessages[0];

  return {
    ...state,
    modalMessages: newMessages,
    currentModal: currentModal,
    exitingModal: exitingModal,
    showingCurrentModal: newMessages.length > 0
  }
}

export default function reducer(state=initialState, action) {
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
