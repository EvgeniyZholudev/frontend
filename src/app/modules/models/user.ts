import {BillingAccount} from './billing-account';


export class User {
  id: number;
  login: string;
  password: string;
  email: string;
  role: string;
  billingAccounts: BillingAccount[];

  static cloneUser(user: User): User {
    const clonedUser: User = new User();
    clonedUser.id = user.id;
    clonedUser.login = user.login;
    clonedUser.password = user.password;
    clonedUser.email = user.email;
    clonedUser.role = user.role;
    clonedUser.billingAccounts = user.billingAccounts;
    return clonedUser;
  }
}
