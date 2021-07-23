import { EMAIL, AUTH_MODAL, PASSWORD, AUTH, LOADING } from './constants/constants';

const initialState = {
  email: '',
  password: '',
  isAuth: '',
  isLoading: false,
  openModal: false,
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case EMAIL:
      return { ...state, email: action.payload };
    case PASSWORD:
      return { ...state, password: action.payload };
    case LOADING:
      return { ...state, isLoading: action.payload };
    case AUTH:
      return { ...state, isAuth: action.payload };
    case AUTH_MODAL:
      return { ...state, openModal: action.payload };
    default:
      return state;
  }
};
