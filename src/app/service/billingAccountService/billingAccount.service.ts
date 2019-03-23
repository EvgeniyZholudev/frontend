import {Injectable} from "@angular/core";
import {BillingAccount} from "../../model/billing-account";

@Injectable({
  providedIn:'root'
})
export class BillingAccountService{
  private _selectedBillingAccount: BillingAccount = new BillingAccount();

  get selectedBillingAccount(): BillingAccount {
    return this._selectedBillingAccount;
  }

  set selectedBillingAccount(value: BillingAccount) {
    this._selectedBillingAccount = value;
  }

  public countPricePerDay(billingAccount: BillingAccount): number {
    let result = 0;
    for (const subscript of billingAccount.subscripts) {
      result += subscript.pricePerDay;
    }
    return result;
  }

  public clearSelectedBillingAccount(): void {
    this.selectedBillingAccount = new BillingAccount();
}

}
