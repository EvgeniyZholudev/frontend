import { Component, OnInit } from '@angular/core';
import {UserService} from '../service/userService/user.service';
import {User} from '../model/user';
import {Ng4LoadingSpinnerService} from 'ng4-loading-spinner';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  users: User[];
  constructor(private userService: UserService, private loadingService: Ng4LoadingSpinnerService) {}

  ngOnInit() {
    this.loadUsers();
  }
  private loadUsers(): void {
    this.loadingService.show();
    this.userService.getUsers().subscribe(data => this.users = data);
    this.loadingService.hide();
  }

}
