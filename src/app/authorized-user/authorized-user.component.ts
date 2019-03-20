import {Component, OnInit} from '@angular/core';
import {User} from '../model/user';

@Component({
  selector: 'app-authorized-user',
  templateUrl: './authorized-user.component.html',
  styleUrls: ['./authorized-user.component.css']
})
export class AuthorizedUserComponent implements OnInit {

  authUser: User = new User();
  constructor() {
  }

  ngOnInit() {
  }

}
