module.exports = class UserDto {
  id;
  email;
  isActiveEmail;
  name;
  age;
  avatar;
  constructor(model) {
    (this.name = model.name),
      (this.age = model.age),
      (this.avatar = model.avatar),
      (this.id = model._id),
      (this.email = model.email),
      (this.isActiveEmail = model.isActiveEmail);
  }
};
