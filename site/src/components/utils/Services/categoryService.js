import { api } from '../http/axios';

export default class CategoryService {
  static async createCategory(title) {
    return await api.post(`/category`, { title });
  }
}
