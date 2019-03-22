import {Component, Input, OnInit, TemplateRef} from '@angular/core';
import {UserService} from '../service/userService/user.service';
import {BillingAccount} from '../model/billing-account';
import {BsModalRef, BsModalService} from 'ngx-bootstrap';
import {AuthorizationService} from "../service/authorizationService/authorization.service";

@Component({
  selector: 'app-authorized-user',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  public selectedBillingAccount: BillingAccount = new BillingAccount();

  public modalRef: BsModalRef;

  constructor(private userService: UserService, private modalService: BsModalService, public authService: AuthorizationService) {
  }

  public _openModal(template: TemplateRef<any>): void {
    this.modalRef = this.modalService.show(template);
  }

  ngOnInit() {

  }




}
