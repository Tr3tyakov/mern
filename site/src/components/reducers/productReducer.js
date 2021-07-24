import {
  PUT_PRODUCT,
  DELETE_PRODUCT,
  CREATE_PRODUCT,
  DELETE_PRODUCT_ALL,
} from './constants/constants';

const initialState = { product: [] };

export const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case PUT_PRODUCT:
      return { ...state, product: action.payload };
    case DELETE_PRODUCT:
      return {
        ...state,
        product: state.product.filter((element) => {
          return element._id !== action.payload;
        }),
      };
    case DELETE_PRODUCT_ALL:
      return {
        ...state,
        product: [],
      };
    case CREATE_PRODUCT:
      return {
        ...state,
        product: [...state.product, action.payload],
      };
    default:
      return state;
  }
};
