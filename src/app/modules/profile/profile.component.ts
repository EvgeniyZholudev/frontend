import {Component, OnInit} from '@angular/core';
import {AuthorizationService} from "../../services/authorizationService/authorization.service";

import {ModalService} from "../../services/modalService/modal.service";

@Component({
  selector: 'app-profile',
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
