import orderService from '../../utils/Services/orderService';
import { setOrders, setLoading } from './actions';

export const createOrder = (order, fullPrice) => {
  return async (dispatch) => {
    dispatch(setLoading(true));
    try {
      const orderData = await orderService.createOrder(order, fullPrice);
      dispatch(setOrders(orderData.data));
      dispatch(setLoading(false));
    } catch (e) {
    } finally {
      dispatch(setLoading(false));
    }
  };
};

export const getOrder = (size) => {
  return async (dispatch) => {
    dispatch(setLoading(true));
    try {
      const orderData = await orderService.getOrder(size);
      dispatch(setOrders(orderData.data));
      dispatch(setLoading(false));
    } catch (e) {
    } finally {
      dispatch(setLoading(false));
    }
  };
};
