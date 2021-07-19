module.exports = class UserDto {
  id;
  email;
  isActiveEmail;

  constructor(model) {
    (this.id = model._id), (this.email = model.email), (this.isActiveEmail = model.isActiveEmail);
  }
};
