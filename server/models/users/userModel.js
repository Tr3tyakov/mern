const { Schema, model } = require('mongoose');

const User = new Schema({
  email: { type: String, require: true, unique: true },
  password: { type: String, require: true },
  isActiveEmail: { type: Boolean, require: true },
  ActivationLink: { type: String },
});

module.exports = model('User', User);
