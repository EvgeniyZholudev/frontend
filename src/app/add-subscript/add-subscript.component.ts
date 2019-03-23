import { Component, OnInit } from '@angular/core';
import {Subscript} from "../model/subscript";
import {ModalService} from "../service/modalService/modal.service";

@Component({
  selector: 'app-add-subscript',
  templateUrl: './add-subscript.component.html',
  styleUrls: ['./add-subscript.component.css']
})
export class AddSubscriptComponent implements OnInit {

  public addableSubscript: Subscript = new Subscript();
  constructor(public modalService: ModalService) { }

  ngOnInit() {
  }

}
