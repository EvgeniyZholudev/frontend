import {Component, OnInit} from '@angular/core';
import {ModalService} from "../service/modalService/modal.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private modalService: ModalService) {
  }


  ngOnInit() {
  }

}
