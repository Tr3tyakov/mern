import {
  EMAIL,
  PASSWORD,
  AUTH_MODAL,
  LOADING,
  AUTH,
  MENU,
  DRAWER,
  INPUT_ASSORTMENT,
  INPUT_CATEGORIES,
  DELETE_CATEGORY,
  MAKE_CATEGORY,
  FETCH_CATEGORY,
  PUT_PRODUCT,
  DELETE_PRODUCT_ALL,
  CREATE_PRODUCT,
  DELETE_PRODUCT,
  INCREASE_COUNTER,
  DECREASE_COUNTER,
  ORDER,
  ERROR,
} from '../constants/constants';

//authModal
export const setEmail = (value) => ({ type: EMAIL, payload: value });
export const setPassword = (value) => ({ type: PASSWORD, payload: value });
export const setAuth = (bool) => ({ type: AUTH, payload: bool });
export const setLoading = (bool) => ({ type: LOADING, payload: bool });
export const setModal = (bool) => ({ type: AUTH_MODAL, payload: bool });

//category
export const setInputAssortment = (value) => ({ type: INPUT_ASSORTMENT, payload: value });
export const setInputCategories = (value) => ({ type: INPUT_CATEGORIES, payload: value });
export const setCategory = (value) => ({ type: FETCH_CATEGORY, payload: value });
export const makeCategory = (value) => ({ type: MAKE_CATEGORY, payload: value });
export const deleteCategory = (value) => ({ type: DELETE_CATEGORY, payload: value });

//product
export const setProduct = (value) => ({ type: PUT_PRODUCT, payload: value });
export const makeProduct = (value) => ({ type: CREATE_PRODUCT, payload: value });
export const deleteProduct = (id) => ({ type: DELETE_PRODUCT, payload: id });
export const deleteProductAll = () => ({ type: DELETE_PRODUCT_ALL });

export const increaseCounter = (value) => ({ type: INCREASE_COUNTER, payload: value });
export const decreaseCounter = (value) => ({ type: DECREASE_COUNTER, payload: value });
export const setOrder = (name, count, cost) => ({ type: ORDER, payload: { name, count, cost } });

//header
export const setDrawer = (value) => ({ type: DRAWER, payload: value });
export const setMenu = (value) => ({ type: MENU, payload: value });

export const setError = (value) => ({ type: ERROR, payload: value });
