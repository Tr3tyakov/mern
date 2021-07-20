import { MODAL, MENU } from './constants/constants';

const initialState = {
  openModal: false,
  openMenu: null,
};

export const AuthModal = (state = initialState, action) => {
  switch (action.type) {
    case MODAL:
      return { ...state, openModal: action.payload };
    case MENU:
      return { ...state, openMenu: action.payload };
    default:
      return state;
  }
};
