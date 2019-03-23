import {Subscript} from './subscript';

export class BillingAccount {
  id: number;
  name: string;
  balance: number;
  subscripts: Subscript[];
  status: boolean;

  static cloneBillingAccount(billingAccount: BillingAccount) : BillingAccount {
    const clonedBillingAccount: BillingAccount = new BillingAccount();
    clonedBillingAccount.id = billingAccount.id;
    clonedBillingAccount.name = billingAccount.name;
    clonedBillingAccount.balance = billingAccount.balance;
    clonedBillingAccount.subscripts = billingAccount.subscripts;
    clonedBillingAccount.status = billingAccount.status;
    return clonedBillingAccount;
  }
}
