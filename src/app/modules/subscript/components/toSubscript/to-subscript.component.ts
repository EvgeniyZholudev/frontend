import {Component, OnInit} from "@angular/core";
import {BillingAccountService} from "../../../../services/billingAccountService/billingAccount.service";
import {AuthorizationService} from "../../../../services/authorizationService/authorization.service";
import {ModalService} from "../../../../services/modalService/modal.service";

@Component({
  selector: 'app-to-subscript',
  templateUrl: 'to-subscript.component.html'
})

export class ToSubscriptComponent implements OnInit {

  constructor(private billingAccountService: BillingAccountService, private authService: AuthorizationService,
              private modalService: ModalService){

  }

  ngOnInit(): void {
  }

  closeModal(): void {
    this.modalService.closeModal();
    this.billingAccountService.clearSelectedBillingAccount();
  }
}
