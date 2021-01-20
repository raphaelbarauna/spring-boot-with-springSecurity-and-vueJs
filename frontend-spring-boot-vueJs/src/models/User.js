export default class User {
    constructor(token, userName, email, password, roles) {
      this.token = token;
      this.userName = userName;
      this.email = email;
      this.password = password;
      this.roles = roles;
    }
  }
  