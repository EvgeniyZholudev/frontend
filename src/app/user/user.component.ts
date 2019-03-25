import {Component, OnInit, TemplateRef} from '@angular/core';
import {UserService} from '../service/userService/user.service';
import {User} from '../model/user';
import {ModalService} from "../service/modalService/modal.service";
import {BillingAccountService} from "../service/billingAccountService/billingAccount.service";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {


  public users: User[];

  constructor(private userService: UserService, public modalService: ModalService,
              public billingAccountService: BillingAccountService) {
  }

  ngOnInit() {
    this.loadUsers();
  }

  private loadUsers(): void {
    this.userService.getUsers().subscribe(data => this.users = data);
  }

  public openModal(template: TemplateRef<any>, user: User): void {
    this.modalService.openModal(template);
    this.userService.selectedUser = User.cloneUser(user);
  }

  public closeModal() {
    this.modalService.closeModal();
    this.userService.clearSelectedUser();
    this.billingAccountService.clearSelectedBillingAccount();
  }

}
