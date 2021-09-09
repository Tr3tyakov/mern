const { Schema, model } = require('mongoose');

const User = new Schema({
  email: { type: String, require: true, unique: true },
  password: { type: String, require: true },
  isActiveEmail: { type: Boolean, require: true },
  ActivationLink: { type: String },
  avatar: { type: String },
  name: { type: String },
  age: { type: Date },
});

module.exports = model('User', User);
