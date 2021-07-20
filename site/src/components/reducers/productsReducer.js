import { MENU, INPUT_CATEGORIES, INPUT_ASSORTMENT } from './constants/constants';

const initialState = {
  openMenu: null,
  inputCategories: '',
  inputAssortment: '',
};

export const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case MENU:
      return { ...state, openMenu: action.payload };
    case INPUT_CATEGORIES:
      return { ...state, inputCategories: action.payload };
    case INPUT_ASSORTMENT:
      return { ...state, inputAssortment: action.payload };
    default:
      return state;
  }
};
