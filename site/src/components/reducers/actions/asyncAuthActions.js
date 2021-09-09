import AuthService from '../../utils/Services/authService';
import { setAuth, setLoading, setModal, setUser } from './actions';

export const registration = (email, password) => {
  return async (dispatch) => {
    dispatch(setLoading(true));
    try {
      await AuthService.registration(email, password);
    } catch (e) {
      alert(e.response?.data?.message);
    } finally {
      dispatch(setLoading(false));
    }
  };
};

export const login = (email, password) => {
  return async (dispatch) => {
    dispatch(setLoading(true));
    try {
      const userData = await AuthService.login(email, password);
      dispatch(setUser(userData?.data));
      localStorage.setItem('Token', userData.data.accessToken);
      dispatch(setModal(false));
    } catch (e) {
      alert(e.response?.data?.message);
    } finally {
      dispatch(setLoading(false));
    }
  };
};

export const logout = () => {
  return async (dispatch) => {
    dispatch(setLoading(false));
    try {
      await AuthService.logout();
      dispatch(setAuth(false));
      localStorage.clear('Token');
    } catch (e) {
      alert(e.response?.data?.message);
    } finally {
      dispatch(setLoading(false));
    }
  };
};

export const checkAuth = () => {
  return async (dispatch) => {
    dispatch(setLoading(true));
    try {
      const userData = await AuthService.checkAuth();
      localStorage.setItem('Token', userData.data.accessToken);
      dispatch(setUser(userData?.data));
    } catch (e) {
      alert(e.response.data.message);
    } finally {
      dispatch(setLoading(false));
    }
  };
};

export const changeInfo = (name, age, file) => {
  return async (dispatch) => {
    dispatch(setLoading(true));
    try {
      const userData = await AuthService.changeInfo(name, age, file);
      dispatch(setUser(userData?.data));
    } catch (e) {
      alert(e.response.data.message);
    } finally {
      dispatch(setLoading(false));
    }
  };
};
