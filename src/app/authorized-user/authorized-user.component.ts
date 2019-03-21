import {Component, Input, OnInit, TemplateRef} from '@angular/core';
import {User} from '../model/user';
import {UserService} from '../service/userService/user.service';
import {BillingAccount} from '../model/billing-account';
import {BsModalRef, BsModalService} from 'ngx-bootstrap';

@Component({
  selector: 'app-authorized-user',
  templateUrl: './authorized-user.component.html',
  styleUrls: ['./authorized-user.component.css']
})
export class AuthorizedUserComponent implements OnInit {

  private users: User[];
  public authUser: User = new User();
  public selectedBillingAccount: BillingAccount = new BillingAccount();

  public modalRef: BsModalRef;

  constructor(private userService: UserService, private modalService: BsModalService) {
  }

  public _openModal(template: TemplateRef<any>): void {
    this.modalRef = this.modalService.show(template);
  }

  ngOnInit() {
    this.userService.getUsers().subscribe(data => {
      this.users = data;
      this.authUser = this.users[0];
    });
  }

  public countPricePerDay(): number {
    let result = 0;
    for (const subscript of this.selectedBillingAccount.subscripts) {
      result += subscript.pricePerDay;
    }
    return result;

  }


}
