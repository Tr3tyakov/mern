export const PASSWORD = 'PASSWORD';
export const EMAIL = 'EMAIL';
export const AUTH = 'AUTH';
export const LOADING = 'LOADING';

export const MODAL = 'MODAL';
export const MENU = 'MENU';

export const setEmail = (value) => ({ type: EMAIL, payload: value });
export const setPassword = (value) => ({ type: PASSWORD, payload: value });
export const setAuth = (bool) => ({ type: AUTH, payload: bool });
export const setLoading = (bool) => ({ type: LOADING, payload: bool });
export const setMenu = (value) => ({ type: MENU, payload: value });

//authModal
export const setModal = (bool) => ({ type: MODAL, payload: bool });
