import { api } from '../http/axios';

export default class CategoryService {
  static async createCategory(title) {
    return await api.post(`/category`, { title });
  }

  static async getCategory() {
    return await api.get('/category');
  }
  static async deleteCategory(id) {
    return await api.delete(`/category/${id}`);
  }
}
