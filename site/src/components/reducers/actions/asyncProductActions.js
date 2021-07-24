import ProductService from '../../utils/Services/productService';
import { setLoading, setProduct, makeProduct } from './actions';

export const createProduct = (title, img, cost, categoryId) => {
  return async (dispatch) => {
    dispatch(setLoading(true));
    const productData = await ProductService.createProduct(title, img, cost, categoryId);
    dispatch(makeProduct(productData.data));
    dispatch(setLoading(false));
  };
};

export const deleteProduct = (title) => {
  return async (dispatch) => {
    dispatch(setLoading(true));
    const productData = await ProductService.deleteProduct(title);
    dispatch(setLoading(true));
  };
};

export const getCurrentProducts = (categoryId) => {
  return async (dispatch) => {
    dispatch(setLoading(true));
    const productData = await ProductService.getCurrentProduct(categoryId);
    console.log(productData);
    dispatch(setProduct(productData.data));
    dispatch(setLoading(false));
  };
};
