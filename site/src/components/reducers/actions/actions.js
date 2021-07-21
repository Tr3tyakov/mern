import {
  EMAIL,
  PASSWORD,
  AUTH_MODAL,
  LOADING,
  AUTH,
  MENU,
  INPUT_ASSORTMENT,
  INPUT_CATEGORIES,
  DELETE_CATEGORY,
  MAKE_CATEGORY,
  FETCH_CATEGORY,
} from '../constants/constants';

export const setEmail = (value) => ({ type: EMAIL, payload: value });
export const setPassword = (value) => ({ type: PASSWORD, payload: value });

export const setAuth = (bool) => ({ type: AUTH, payload: bool });
export const setLoading = (bool) => ({ type: LOADING, payload: bool });

//authModal
export const setModal = (bool) => ({ type: AUTH_MODAL, payload: bool });
export const setMenu = (value) => ({ type: MENU, payload: value });

export const setInputAssortment = (value) => ({ type: INPUT_ASSORTMENT, payload: value });
export const setInputCategories = (value) => ({ type: INPUT_CATEGORIES, payload: value });

export const setCategory = (value) => ({ type: FETCH_CATEGORY, payload: value });
export const makeCategory = (value) => ({ type: MAKE_CATEGORY, payload: value });

export const deleteCategory = (value) => ({ type: DELETE_CATEGORY, payload: value });
