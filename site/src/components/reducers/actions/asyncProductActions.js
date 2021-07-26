import ProductService from '../../utils/Services/productService';
import { setLoading, setProduct, makeProduct, deleteProduct } from './actions';
export const createProduct = (title, img, cost, categoryId) => {
  return async (dispatch) => {
    dispatch(setLoading(true));
    try {
      const productData = await ProductService.createProduct(title, img, cost, categoryId);
      dispatch(makeProduct(productData.data));
    } catch (e) {
      alert(e.response?.data?.message);
    } finally {
      dispatch(setLoading(false));
    }
  };
};
export const getCurrentProducts = (categoryId) => {
  return async (dispatch) => {
    dispatch(setLoading(true));
    const productData = await ProductService.getCurrentProduct(categoryId);
    dispatch(setProduct(productData.data));
    dispatch(setLoading(false));
  };
};

export const deleteCurrentProduct = (id) => {
  return async (dispatch) => {
    dispatch(setLoading(true));
    await ProductService.deleteProduct(id);
    dispatch(deleteProduct(id));
    dispatch(setLoading(true));
  };
};
