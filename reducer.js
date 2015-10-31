import * as types from './actionTypes';

const initialState = {
  // A FIFO of messages to show in a modal dialog.
  modalMessages: [],
  showingModal: false
}

function addModalMessage(messageType) {
  return (state, action) => {
    const newMessage = {
      ...action.payload,
      messageType: messageType,
    };
    return {
      ...state,
      modalMessages: [ ...state.modalMessages, newMessage ],
      showingModal: true
    };
  }
}

const addError = addModalMessage("error");
const addInformational = addModalMessage("info");

function closeModal(state) {
  const newMessages = [...state.modalMessages];
  newMessages.shift();

  return {
    ...state,
    modalMessages: newMessages,
    showingModal: newMessages.length > 0
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
