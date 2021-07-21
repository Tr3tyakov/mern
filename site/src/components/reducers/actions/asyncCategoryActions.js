import { setLoading } from './actions';
import categoryService from '../../utils/Services/categoryService';

export const createCategory = (title) => {
  return async (dispatch) => {
    dispatch(setLoading(true));
    const data = await categoryService.createCategory(title);
    console.log(data);
  };
};
