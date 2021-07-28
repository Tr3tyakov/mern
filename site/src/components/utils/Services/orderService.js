import { api } from '../http/axios';

export default class orderService {
  static async createOrder(order, fullPrice) {
    return await api.post(`/order`, { order, fullPrice });
  }

  static async getOrder(size) {
    return await api.get(`/order?size=${size}`);
  }
}
