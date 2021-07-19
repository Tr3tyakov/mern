import AuthService from '../Services/authServices';
import { setAuth, setLoading } from './actions';
export const registration = (email, password) => {
  return async (dispatch) => {
    const userData = await AuthService.registration(email, password);
    console.log(userData);
  };
};
export const login = (email, password) => {
  return async (dispatch) => {
    dispatch(setLoading(true));
    const userData = await AuthService.login(email, password);
    console.log(userData);
    dispatch(setAuth(true));
    localStorage.setItem('Token', userData.data.accessToken);
    dispatch(setLoading(false));
  };
};
export const logout = () => {
  return async (dispatch) => {
    await AuthService.logout();
    localStorage.clear('Token');
  };
};
