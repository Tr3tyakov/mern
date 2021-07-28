const { Schema, model } = require('mongoose');

const Order = new Schema({
  user: { type: Schema.Types.ObjectId, ref: 'User' },
  products: [
    {
      name: { type: String, require: true },
      count: { type: Number, require: true },
      cost: { type: Number, require: true },
    },
  ],
  data: { type: Date, default: Date.now },
  order: { type: Number, require: true },
  fullPrice: { type: Number, require: true },
});

module.exports = model('Order', Order);
