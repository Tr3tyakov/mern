const { Schema, model } = require('mongoose');

const Product = new Schema({
  user: { type: Schema.Types.ObjectId, ref: 'User' },
  category: { type: Schema.Types.ObjectId, ref: 'Category' },
  name: { type: String, require: true, unique: true },
  image: { type: String, require: true },
  cost: { type: Number, require: true },
  data: { type: Date, default: Date.now },
});

module.exports = model('Product', Product);
