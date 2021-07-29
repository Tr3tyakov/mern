const { SET_ORDER } = require('./constants/constants');

const initialState = {
  orders: [],
};
export const orderReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ORDER:
      return { ...state, orders: [...action.payload] };
    default:
      return state;
  }
};
