import {Subscript} from './subscript';

export class User {
  id: number;
  login: string;
  password: string;
  email: string;
  role: string;
  status: boolean;

  static cloneUser(user: User): User {
    const clonedUser: User = new User();
    clonedUser.id = user.id;
    clonedUser.login = user.login;
    clonedUser.password = user.password;
    clonedUser.email = user.email;
    clonedUser.role = user.role;
    clonedUser.status = user.status;
    return clonedUser;
  }
}
