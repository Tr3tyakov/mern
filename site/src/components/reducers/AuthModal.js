import { MODAL } from '../actions/actions';

const initialState = {
  openModal: false,
};

export const AuthModal = (state = initialState, action) => {
  switch (action.type) {
    case MODAL:
      return { ...state, openModal: action.payload };
    default:
      return state;
  }
};
