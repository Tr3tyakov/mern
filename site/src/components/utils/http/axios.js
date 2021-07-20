import axios from 'axios';

export const URL = 'http://localhost:5000/api';

export const api = axios.create({
  baseURL: URL,
  withCredentials: true,
});

api.interceptors.request.use((config) => {
  config.headers.Authoration = `Bearer ${localStorage.getItem('Token')}`;
  return config;
});
