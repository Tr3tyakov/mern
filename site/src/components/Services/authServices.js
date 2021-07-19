import { api, URL } from '../http/axios';
import axios from 'axios';

export default class AuthServices {
  static async registration(email, password) {
    return api.post('/registration', { email, password });
  }
  static async login(email, password) {
    return api.post('/login', { email, password });
  }
  static async logout(email, password) {
    return axios.post(`${URL}/logout`, { email, password });
  }
}
