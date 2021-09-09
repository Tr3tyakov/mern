const { Schema, model } = require('mongoose');

const Category = new Schema({
  user: { type: Schema.Types.ObjectId, ref: 'User' },
  products: { type: Schema.Types.ObjectId, ref: 'Product' },
  title: { type: String, require: true, unique: true },
  file: { type: String, require: true },
});

module.exports = model('Category', Category);
