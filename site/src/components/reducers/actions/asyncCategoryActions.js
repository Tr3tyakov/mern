import { setCategory, setLoading, deleteCategory, makeCategory, deleteProductAll } from './actions';
import categoryService from '../../utils/Services/categoryService';

export const createCategory = (title) => {
  return async (dispatch) => {
    try {
      dispatch(setLoading(true));
      const categoryData = await categoryService.createCategory(title);
      console.log(categoryData);
      dispatch(makeCategory(categoryData.data));
      dispatch(setLoading(false));
    } catch (e) {
      console.log(e);
    }
  };
};

export const getCategory = () => {
  return async (dispatch) => {
    dispatch(setLoading(true));
    const categoryData = await categoryService.getCategory();
    dispatch(setCategory(categoryData.data));
    dispatch(setLoading(false));
  };
};

export const deleteCurrentCategory = (id) => {
  return async (dispatch) => {
    dispatch(setLoading(true));
    await categoryService.deleteCategory(id);
    dispatch(deleteCategory(id));
    dispatch(deleteProductAll());
    dispatch(setLoading(false));
  };
};
