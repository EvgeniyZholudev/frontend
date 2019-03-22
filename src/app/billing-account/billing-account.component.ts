import { Component, OnInit } from '@angular/core';
import {AuthorizationService} from "../service/authorizationService/authorization.service";

@Component({
  selector: 'app-billing-account',
  templateUrl: './billing-account.component.html',
  styleUrls: ['./billing-account.component.css']
})
export class BillingAccountComponent implements OnInit {

  constructor(public authService: AuthorizationService) { }

  ngOnInit() {
  }

}
