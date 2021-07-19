import { EMAIL, PASSWORD } from '../actions/action';

const initialState = {
  email: '',
  password: '',
  isAuth: '',
  isLoading: '',
};

export const AuthReducer = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case EMAIL:
      return { ...state, email: action.payload };
    case PASSWORD:
      return { ...state, password: action.payload };
    default:
      return state;
  }
};
