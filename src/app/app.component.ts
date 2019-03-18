import {Component, OnInit, TemplateRef} from '@angular/core';
import {BsModalRef, BsModalService} from 'ngx-bootstrap';
import {User} from './model/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  authorizedUser: User = new User();
  public modalRef: BsModalRef;
  public addableUser: User = new User();
  constructor(private modalService: BsModalService) {}
  public _openModal(template: TemplateRef<any>): void {
    this.modalRef = this.modalService.show(template);
  }
  public _closeModal(): void {
    this.modalRef.hide();
  }
  ngOnInit() {
  }
  public authorization(login: string, password: string): void {
    // send data to server
    this.authorizedUser.login = login;
    this.authorizedUser.password = password;
    this.authorizedUser.role = 'admin';
    this.authorizedUser.balance = 100;
  }
  public exit(): void {
    this.authorizedUser = new User();
  }
}
