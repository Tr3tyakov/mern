import { setCategory, setLoading, deleteCategory, makeCategory, deleteProductAll } from './actions';
import categoryService from '../../utils/Services/categoryService';

export const createCategory = (title, file) => {
  return async (dispatch) => {
    try {
      dispatch(setLoading(true));
      const categoryData = await categoryService.createCategory(title, file);
      dispatch(makeCategory(categoryData.data));
    } catch (e) {
      console.log(e);
    } finally {
      dispatch(setLoading(false));
    }
  };
};

export const getCategory = () => {
  return async (dispatch) => {
    dispatch(setLoading(true));
    try {
      const categoryData = await categoryService.getCategory();
      dispatch(setCategory(categoryData.data));
    } catch (e) {
    } finally {
      dispatch(setLoading(false));
    }
  };
};

export const deleteCurrentCategory = (id) => {
  return async (dispatch) => {
    dispatch(setLoading(true));
    try {
      await categoryService.deleteCategory(id);
      dispatch(deleteCategory(id));
    } catch (e) {
    } finally {
      dispatch(setLoading(false));
    }
  };
};
