export const PASSWORD = 'PASSWORD';
export const EMAIL = 'EMAIL';
export const AUTH = 'AUTH';
export const LOADING = 'LOADING';

export const setEmail = (value) => ({ type: EMAIL, payload: value });
export const setPassword = (value) => ({ type: PASSWORD, payload: value });
export const setAuth = (value) => ({ type: AUTH, payload: value });
export const setLoading = (value) => ({ type: LOADING, payload: value });
