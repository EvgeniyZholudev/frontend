import { Component, OnInit } from '@angular/core';
import {Subscript} from "../../models/subscript";
import {ModalService} from "../../../services/modalService/modal.service";
import {SubscriptService} from "../../../services/subscriptService/subscript.service";

@Component({
  selector: 'app-add-subscript',
  templateUrl: './add-subscript.component.html',
  styleUrls: ['./add-subscript.component.css']
})
export class AddSubscriptComponent implements OnInit {

  constructor(public modalService: ModalService, public subscriptService: SubscriptService) { }

  ngOnInit() {
  }

  public closeModal(){
    this.modalService.closeModal();
    this.subscriptService.clearSelectedSubscript();
  }

}
