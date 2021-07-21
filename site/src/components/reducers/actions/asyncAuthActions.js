import AuthService from '../../utils/Services/authService';
import { setAuth, setLoading, setModal } from './actions';

export const registration = (email, password) => {
  return async (dispatch) => {
    dispatch(setLoading(true));
    const userData = await AuthService.registration(email, password);
    console.log(userData);
    dispatch(setLoading(false));
  };
};
export const login = (email, password) => {
  return async (dispatch) => {
    dispatch(setLoading(true));
    const userData = await AuthService.login(email, password);
    dispatch(setAuth(true));
    localStorage.setItem('Token', userData.data.accessToken);
    dispatch(setLoading(false));
    dispatch(setModal(false));
  };
};
export const logout = () => {
  return async (dispatch) => {
    await AuthService.logout();
    dispatch(setAuth(false));
    localStorage.clear('Token');
  };
};
