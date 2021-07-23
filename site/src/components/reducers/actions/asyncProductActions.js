import ProductService from '../../utils/Services/productService';
import { setLoading, setProduct, makeProduct } from './actions';

export const createProduct = (title, img, cost, categoryId) => {
  return async (dispatch) => {
    dispatch(setLoading(true));
    const productData = await ProductService.createProduct(title, img, cost, categoryId);
    dispatch(makeProduct(productData));
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

export const getProduct = () => {
  return async (dispatch) => {
    dispatch(setLoading(true));
    const productData = await ProductService.getProduct();
    dispatch(setProduct(productData));
    dispatch(setLoading(false));
  };
};
