import {Injectable} from "@angular/core";
import {BillingAccount} from "../../modules/models/billing-account";

@Injectable({
  providedIn: 'root'
})
export class BillingAccountService {
  private _selectedBillingAccount: BillingAccount = new BillingAccount();

  get selectedBillingAccount(): BillingAccount {
    return this._selectedBillingAccount;
  }

  set selectedBillingAccount(value: BillingAccount) {
    this._selectedBillingAccount = value;
  }

  public countPricePerDay(billingAccount: BillingAccount): string {
    let result = 0;
    if (typeof this.selectedBillingAccount.subscripts === 'undefined') {
      return "";
    } else {
      for (const subscript of billingAccount.subscripts) {
        result += subscript.pricePerDay;
      }
      return result.toString();
    }

  }

  public clearSelectedBillingAccount(): void {
    this.selectedBillingAccount = new BillingAccount();
  }

  public isSelectedBAIdUndefined(): boolean {
    return typeof this.selectedBillingAccount.id === 'undefined';
  }

  public getSelectedBASubscriptsLength(): string {
    if (typeof this.selectedBillingAccount.subscripts === 'undefined') {
      return "";
    } else {
      return this.selectedBillingAccount.subscripts.length.toString();
    }
  }

  public getSelectedBAStatus(): string {
    return this.selectedBillingAccount.active ? "Активно" : "Заблокировано"
  }
}
