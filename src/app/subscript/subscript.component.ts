import {Component, OnInit, TemplateRef} from '@angular/core';
import {Subscript} from '../model/subscript';
import {SubscriptService} from '../service/subscriptService/subscript.service';
import {ModalService} from "../service/modalService/modal.service";
import {AuthorizationService} from "../service/authorizationService/authorization.service";
import {BillingAccountService} from "../service/billingAccountService/billingAccount.service";

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

  public openModaltoSubscript(template: TemplateRef<any>, subscript: Subscript): void {
    this.modalService.openModal(template);
    this.subscriptService.selectedSubscript = Subscript.cloneSubscript(subscript);
  }

  public openModalAddSubscript(template: TemplateRef<any>): void {
    this.modalService.openModal(template);
  }

}
