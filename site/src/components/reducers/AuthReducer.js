import { EMAIL, PASSWORD, AUTH, LOADING } from './constants/constants';

const initialState = {
  email: '',
  password: '',
  isAuth: '',
  isLoading: '',
};

export const AuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case EMAIL:
      return { ...state, email: action.payload };
    case PASSWORD:
      return { ...state, password: action.payload };
    case AUTH:
      return { ...state, isAuth: action.payload };
    case LOADING:
      return { ...state, isLoading: action.payload };
    default:
      return state;
  }
};
