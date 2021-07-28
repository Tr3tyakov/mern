const orderService = require('../services/orderService');

class OrderController {
  async createOrder(req, res, next) {
    try {
      const { order, fullPrice } = req.body;
      const { RefreshToken } = req.cookies;
      const orderData = await orderService.createOrder(RefreshToken, order, fullPrice);
      res.json(orderData);
    } catch (e) {
      next(e);
    }
  }
  async getOrder(req, res, next) {
    let { size } = req.query;

    try {
      const orderData = await orderService.getOrder(size);
      res.json(orderData);
    } catch (e) {
      next(e);
    }
  }
}

module.exports = new OrderController();
