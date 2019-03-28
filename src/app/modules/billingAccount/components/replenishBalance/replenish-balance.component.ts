import {Component, OnInit} from '@angular/core';
import {BillingAccountService} from "../../../../services/billingAccountService/billingAccount.service";
import {ModalService} from "../../../../services/modalService/modal.service";


@Component({
  selector: 'app-replenish-balance',
  templateUrl: './replenish-balance.component.html',
})
export class ReplenishBalanceComponent implements OnInit {

  public inputSum: number;

  constructor(private billingAccountService: BillingAccountService, private modalService: ModalService) {
  }

  ngOnInit() {
  }

  public closeModal() {
    this.modalService.closeModal();
    this.billingAccountService.clearSelectedBillingAccount();
    this.inputSum = 0;
  }
}
