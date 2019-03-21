import {Component, OnInit, TemplateRef} from '@angular/core';
import {UserService} from '../service/userService/user.service';
import {User} from '../model/user';
import {BsModalRef, BsModalService} from 'ngx-bootstrap';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  modalRef: BsModalRef;
  lookedUser: User = new User();
  public users: User[];

  constructor(private userService: UserService, private modalService: BsModalService) {
  }

  ngOnInit() {
    this.loadUsers();
  }

  private loadUsers(): void {
    this.userService.getUsers().subscribe(data => this.users = data);
  }

  public _openSubs(template: TemplateRef<any>, user: User): void {
    this.lookedUser = User.cloneUser(user);
    this.modalRef = this.modalService.show(template);
  }

  public _closeSubs(): void {
    this.lookedUser = new User();
    this.modalRef.hide();
  }

}
