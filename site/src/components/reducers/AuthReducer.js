import { EMAIL, AUTH_MODAL, PASSWORD, AUTH, LOADING, USER } from './constants/constants';

const initialState = {
  user: {},
  email: '',
  password: '',
  isAuth: false,
  isLoading: false,
  openModal: false,
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER:
      return { ...state, user: action.payload, isAuth: true };
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
