import {Component, OnInit, TemplateRef} from '@angular/core';
import {Subscript} from '../models/subscript';
import {SubscriptService} from '../../services/subscriptService/subscript.service';
import {ModalService} from "../../services/modalService/modal.service";
import {AuthorizationService} from "../../services/authorizationService/authorization.service";
import {BillingAccountService} from "../../services/billingAccountService/billingAccount.service";

@Component({
  selector: 'app-subscript',
  templateUrl: './subscript.component.html',
  styleUrls: ['./subscript.component.css']
})
export class SubscriptComponent implements OnInit {
  public subscripts: Subscript[];

  constructor(private subscriptService: SubscriptService, public modalService: ModalService,
              public authService: AuthorizationService, public billingAccountService: BillingAccountService) {
  }

  ngOnInit() {
    this.loadSubscripts();
  }

  private loadSubscripts(): void {
    this.subscriptService.getSubscripts().subscribe(data => {
      this.subscripts = data;
    });
  }

  public openModalSubscript(template: TemplateRef<any>, subscript: Subscript): void {
    this.modalService.openModal(template);
    this.subscriptService.selectedSubscript = Subscript.cloneSubscript(subscript);
  }

  public closeModal(): void {
    this.modalService.closeModal();
    this.billingAccountService.clearSelectedBillingAccount();
    this.subscriptService.clearSelectedSubscript();
  }

}
