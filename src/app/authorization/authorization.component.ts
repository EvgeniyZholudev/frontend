import {Component, OnInit} from '@angular/core';
import {User} from '../model/user';
import {ModalService} from "../service/modalService/modal.service";

@Component({
  selector: 'app-authorization',
  templateUrl: './authorization.component.html',
  styleUrls: ['./authorization.component.css']
})
export class AuthorizationComponent implements OnInit {

  public inputLogin : string;
  public inputPassword : string;

  constructor(public modalService: ModalService) {
  }

  ngOnInit() {
  }

}
