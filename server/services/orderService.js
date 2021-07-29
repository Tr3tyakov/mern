const TokenService = require('../TokenService/userToken');
const Order = require('../models/order/order');

class OrderSerivce {
  async createOrder(RefreshToken, order, fullPrice) {
    const data = await TokenService.findToken(RefreshToken);
    const lastOrder = await Order.findOne({ user: data.user }).sort({ data: -1 });
    const maxOrder = lastOrder ? lastOrder.order : 0;
    const orderData = await Order.create({
      user: data.user,
      products: order,
      order: maxOrder + 1,
      fullPrice,
    });
    return orderData;
  }
  async getOrder(size) {
    if (!size) {
      size = 4;
    }
    const limit = parseInt(size);
    console.log(limit);
    const orderData = await Order.find().limit(limit);
    return orderData;
  }
}

module.exports = new OrderSerivce();
