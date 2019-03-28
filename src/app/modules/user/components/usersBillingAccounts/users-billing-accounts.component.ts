import {Component, OnInit} from '@angular/core';
import {ModalService} from "../../../../services/modalService/modal.service";
import {BillingAccountService} from "../../../../services/billingAccountService/billingAccount.service";
import {UserService} from "../../../../services/userService/user.service";


@Component({
  selector: 'app-users-billing-accounts',
  templateUrl: './users-billing-accounts.component.html',
})
export class UsersBillingAccountsComponent implements OnInit {


  constructor(private modalService: ModalService, private billingAccountService: BillingAccountService,
              private userService: UserService) {
  }

  ngOnInit() {

  }

  closeModal(): void {
    this.modalService.closeModal();
    this.billingAccountService.clearSelectedBillingAccount();
    this.userService.clearSelectedUser();
  }
}
