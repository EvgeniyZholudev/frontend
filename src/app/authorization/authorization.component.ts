import {Component, OnInit} from '@angular/core';
import {User} from '../model/user';

@Component({
  selector: 'app-authorization',
  templateUrl: './authorization.component.html',
  styleUrls: ['./authorization.component.css']
})
export class AuthorizationComponent implements OnInit {
  authorizedUser: User = new User();

  constructor() {
  }

  ngOnInit() {
  }

  public authorization(): void {
  }

  public exit(): void {
    this.authorizedUser = new User();
  }
}
