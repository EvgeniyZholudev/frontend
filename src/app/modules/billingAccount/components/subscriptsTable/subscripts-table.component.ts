import {Component, OnInit} from '@angular/core';
import {BillingAccountService} from "../../../../services/billingAccountService/billingAccount.service";
import {ModalService} from "../../../../services/modalService/modal.service";


@Component({
  selector: 'app-subscripts-table',
  templateUrl: './subscripts-table.component.html',
})
export class SubscriptsTableComponent implements OnInit {

  constructor(private billingAccountService: BillingAccountService, private modalService: ModalService) {
  }

  ngOnInit() {
  }

  closeModal(){
    this.modalService.closeModal();
    this.billingAccountService.clearSelectedBillingAccount();
  }
}
