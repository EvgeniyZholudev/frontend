import {Component, OnInit} from "@angular/core";
import {ModalService} from "../../../../services/modalService/modal.service";
import {SubscriptService} from "../../../../services/subscriptService/subscript.service";

@Component({
  selector: 'app-edit-subscript',
  templateUrl: 'edit-subscript.component.html'
})

export class EditSubscriptComponent implements OnInit {

  constructor(private subscriptService: SubscriptService, private modalService: ModalService) {

  }

  ngOnInit(): void {
  }

  closeModal(): void {
    this.modalService.closeModal();
    this.subscriptService.clearSelectedSubscript();
  }
}
