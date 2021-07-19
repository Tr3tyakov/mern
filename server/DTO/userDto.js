module.exports = class UserDto {
  email;
  isActiveEmail;

  constructor(model) {
    (this.email = model.email), (this.isActiveEmail = model.isActiveEmail);
  }
};
