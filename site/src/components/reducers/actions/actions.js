import {
  EMAIL,
  PASSWORD,
  AUTH_MODAL,
  LOADING,
  AUTH,
  MENU,
  INPUT_ASSORTMENT,
  INPUT_CATEGORIES,
} from '../constants/constants';

export const setEmail = (value) => ({ type: EMAIL, payload: value });
export const setPassword = (value) => ({ type: PASSWORD, payload: value });

export const setAuth = (bool) => ({ type: AUTH, payload: bool });
export const setLoading = (bool) => ({ type: LOADING, payload: bool });

//authModal
export const setModal = (bool) => ({ type: AUTH_MODAL, payload: bool });
export const setMenu = (value) => ({ type: MENU, payload: value });

export const setAssortment = (value) => ({ type: INPUT_ASSORTMENT, payload: value });
export const setCategories = (value) => ({ type: INPUT_CATEGORIES, payload: value });
