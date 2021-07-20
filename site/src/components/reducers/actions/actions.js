import { EMAIL, PASSWORD, AUTH, LOADING, MODAL, MENU } from '../constants/constants';

export const setEmail = (value) => ({ type: EMAIL, payload: value });
export const setPassword = (value) => ({ type: PASSWORD, payload: value });

export const setAuth = (bool) => ({ type: AUTH, payload: bool });
export const setLoading = (bool) => ({ type: LOADING, payload: bool });

//authModal
export const setModal = (bool) => ({ type: MODAL, payload: bool });
export const setMenu = (value) => ({ type: MENU, payload: value });
