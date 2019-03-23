import {Component, OnInit} from '@angular/core';
import {UserService} from '../service/userService/user.service';
import {BillingAccount} from '../model/billing-account';
import {AuthorizationService} from "../service/authorizationService/authorization.service";
import {BillingAccountService} from "../service/billingAccountService/billingAccount.service";
import {ModalService} from "../service/modalService/modal.service";

@Component({
  selector: 'app-authorized-user',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  public newLogin: string;
  public newEmail: string;
  public oldPassword: string;
  public newPassword: string;

  constructor(public authService: AuthorizationService, public modalService: ModalService) {
  }


  ngOnInit() {
  }


}
