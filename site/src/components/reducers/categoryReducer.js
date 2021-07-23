import {
  MENU,
  INPUT_CATEGORIES,
  INPUT_ASSORTMENT,
  FETCH_CATEGORY,
  DELETE_CATEGORY,
  MAKE_CATEGORY,
} from './constants/constants';

const initialState = {
  category: [],
  openMenu: null,
  inputCategories: '',
  inputAssortment: '',
};

export const categoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CATEGORY:
      return { ...state, category: action.payload };
    case MAKE_CATEGORY:
      return {
        ...state,
        category: [...state.category, action.payload],
      };
    case DELETE_CATEGORY:
      return {
        ...state,
        category: state.category.filter((element) => element._id !== action.payload),
      };
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
