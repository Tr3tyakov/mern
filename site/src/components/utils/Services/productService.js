import { api } from '../http/axios';

export default class ProductSevice {
  static async createProduct(name, img, cost, categoryId) {
    return await api.post(`/product`, { name, img, cost, categoryId });
  }
  static async deleteProduct(id) {
    return await api.delete(`/product/${id}`);
  }
  static async getCurrentProduct(categoryId) {
    return await api.get(`/product/${categoryId}`);
  }
}
