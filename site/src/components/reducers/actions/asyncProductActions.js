import ProductService from '../../utils/Services/productService';
import { setLoading, setProduct, makeProduct, deleteProduct } from './actions';
export const createProduct = (title, file, cost, categoryId) => {
  return async (dispatch) => {
    dispatch(setLoading(true));
    try {
      const productData = await ProductService.createProduct(title, file, cost, categoryId);
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
    try {
      const productData = await ProductService.getCurrentProduct(categoryId);
      dispatch(setProduct(productData.data));
    } catch (error) {
    } finally {
      dispatch(setLoading(false));
    }
  };
};

export const deleteCurrentProduct = (id) => {
  return async (dispatch) => {
    dispatch(setLoading(true));
    try {
      await ProductService.deleteProduct(id);
      dispatch(deleteProduct(id));
    } catch (e) {
    } finally {
      dispatch(setLoading(false));
    }
  };
};

export const patchCurrentProduct = (id) => {
  return async (dispatch) => {
    dispatch(setLoading(true));
    try {
      const productData = await patchCurrentProduct.patchProduct(id);
    } catch (error) {
      alert(error.response.data.message);
    } finally {
      dispatch(setLoading(false));
    }
  };
};
