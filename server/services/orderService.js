const TokenService = require('../TokenService/userToken');
const Order = require('../models/order/order');

class OrderSerivce {
  async createOrder(RefreshToken, order, fullPrice) {
    const data = await TokenService.findToken(RefreshToken);
    const lastOrder = await Order.findOne({ user: data.user }).sort({ data: -1 });
    const maxOrder = lastOrder ? lastOrder.order : 0;
    console.log(lastOrder, 'lastOrder');
    console.log(maxOrder, 'MAX');
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
      size = 1;
    }
    const limit = parseInt(size);
    const orderData = await Order.find().limit(limit);
    console.log(orderData, '4324');
    return orderData;
  }
}

module.exports = new OrderSerivce();
