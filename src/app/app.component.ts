import {Component, Input, OnInit} from '@angular/core';
import {User} from './model/user';
import {AuthorizationService} from './service/authorizationService/authorization.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {


  constructor() {
  }

  ngOnInit() {
  }


}
