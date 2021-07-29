import { api, URL } from '../http/axios';
import axios from 'axios';
export default class ProductSevice {
  static async createProduct(name, file, cost, categoryId) {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('name', name);
    formData.append('cost', cost);
    formData.append('categoryId', categoryId);
    return await axios.post(`${URL}/product`, formData, {
      headers: {
        'Content-type': 'multipart/form-data',
      },
      withCredentials: true,
    });
  }
  static async deleteProduct(id) {
    return await api.delete(`/product/${id}`);
  }
  static async patchProduct(id) {
    return await api.patch(`/product/${id}`);
  }
  static async getCurrentProduct(categoryId) {
    return await api.get(`/product/${categoryId}`);
  }
}
