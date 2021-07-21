import { setCategory, setLoading, deleteCategory, makeCategory } from './actions';
import categoryService from '../../utils/Services/categoryService';

export const createCategory = (title) => {
  return async (dispatch) => {
    dispatch(setLoading(true));
    const categoryData = await categoryService.createCategory(title);
    dispatch(makeCategory(categoryData.data));
    dispatch(setLoading(false));
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
    const categoryData = await categoryService.deleteCategory(id);
    console.log(categoryData);
    dispatch(deleteCategory(id));
    dispatch(setLoading(false));
  };
};
