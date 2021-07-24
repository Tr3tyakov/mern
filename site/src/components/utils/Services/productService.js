import { api } from '../http/axios';

export default class ProductSevice {
  static async createProduct(name, img, cost, categoryId) {
    return await api.post(`/product`, { name, img, cost, categoryId });
  }
  static async deleteProduct(title) {
    return await api.delete(`/product/${title}`);
  }
  static async getCurrentProduct(categoryId) {
    return await api.get(`/product/${categoryId}`);
  }
}
