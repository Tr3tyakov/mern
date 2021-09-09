import axios from 'axios';

export const URL = 'http://localhost:5000/api';
export const serverURL = 'http://localhost:5000';
export const api = axios.create({
  baseURL: URL,
  withCredentials: true,
});

api.interceptors.request.use((config) => {
  config.headers.Authoration = `Bearer ${localStorage.getItem('Token')}`;
  return config;
});
api.interceptors.request.use(
  (config) => {
    return config;
  },
  async (error) => {
    const originalRequest = error.config;
    if (error.response.status == 401) {
      try {
        const response = await axios.get(`${URL}/refresh`, { withCredentials: true });
        localStorage.setItem('Token', response.data.accessToken);
        return api.request(originalRequest);
      } catch (e) {
        console.log(e);
      }
    }
  },
);
