import * as types from './actionTypes';

export function addError(action, response) {
  return {
    type: types.ADD_ERROR,
    payload: { action: action, response: response }
  }
}

export function closeModal() {
  return {
    type: types.CLOSE_MODAL
  }
}

export function displayModal(message) {
  return {
    type: types.ADD_MESSAGE,
    payload: message
  }
}
