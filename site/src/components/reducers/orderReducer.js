const { SET_ORDER, CLEAR_ORDER } = require('./constants/constants');

const initialState = {
  orders: [],
};
export const orderReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ORDER:
      return { ...state, orders: [...action.payload] };
    case CLEAR_ORDER:
      return { ...state, orders: [] };
    default:
      return state;
  }
};
