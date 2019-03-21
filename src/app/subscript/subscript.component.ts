import {Component, OnInit, TemplateRef} from '@angular/core';
import {Subscript} from '../model/subscript';
import {SubscriptService} from '../service/subscriptService/subscript.service';
import {BsModalRef, BsModalService} from 'ngx-bootstrap';

@Component({
  selector: 'app-subscript',
  templateUrl: './subscript.component.html',
  styleUrls: ['./subscript.component.css']
})
export class SubscriptComponent implements OnInit {
  addableSubscript: Subscript;
  public subscripts: Subscript[];
  private modalRef: BsModalRef;


  constructor(private subscriptService: SubscriptService, private modalService: BsModalService) {
  }

  ngOnInit() {
    this.loadSubscripts();
  }

  private loadSubscripts(): void {
    this.subscriptService.getSubscripts().subscribe(data => {
      this.subscripts = data;
    });
  }
  public _openModaltoSubscript(template: TemplateRef<any>, subscript: Subscript): void {
    this.modalRef = this.modalService.show(template);
    this.addableSubscript = subscript;
  }
  public _openModalAddSubscript(template: TemplateRef<any>): void {
    this.modalRef = this.modalService.show(template);
  }

}
