import {Component, OnInit, TemplateRef} from '@angular/core';
import {AuthorizationService} from "../service/authorizationService/authorization.service";
import {BillingAccount} from "../model/billing-account";
import {BillingAccountService} from "../service/billingAccountService/billingAccount.service";
import {ModalService} from "../service/modalService/modal.service";

@Component({
  selector: 'app-billing-account',
  templateUrl: './billing-account.component.html',
  styleUrls: ['./billing-account.component.css']
})
export class BillingAccountComponent implements OnInit {

  public inputSum: number;
  constructor(public authService: AuthorizationService, public billingAccountService: BillingAccountService,
              public modalService: ModalService) { }

  ngOnInit() {
  }

  public openModal(template: TemplateRef<any>, billingAccount: BillingAccount){
    this.modalService.openModal(template);
    this.billingAccountService.selectedBillingAccount = BillingAccount.cloneBillingAccount(billingAccount);
  }

  public closeModal(){
    this.modalService.closeModal();
    this.billingAccountService.clearSelectedBillingAccount();
    this.inputSum = 0;
  }

}
