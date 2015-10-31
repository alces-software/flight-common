import * as types from './actionTypes';

const initialState = {
  // A possible error message to show in a modal.
  error: undefined,
  // A possible informational message to show in a modal.
  message: undefined,
  showingModal: false
}

export default function reducer(state=initialState, action) {
  switch (action.type) {
    case types.ADD_ERROR:
      return { ...state, error: action.payload, showingModal: true };
    case types.ADD_MESSAGE:
      return { ...state, message: action.payload, showingModal: true };
    case types.CLOSE_MODAL:
      return { ...state, showingModal: false }
    default:
      return state;
  }
}
