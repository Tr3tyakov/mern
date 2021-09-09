import { api } from '../http/axios';

export default class CategoryService {
  static async createCategory(title, file) {
    const formData = new FormData();
    formData.append('title', title);
    formData.append('file', file);
    return await api.post(`/category`, formData, {
      headers: {
        'Content-type': 'multipart/form-data',
      },
    });
  }

  static async getCategory() {
    return await api.get('/category');
  }
  static async deleteCategory(id) {
    return await api.delete(`/category/${id}`);
  }
}
