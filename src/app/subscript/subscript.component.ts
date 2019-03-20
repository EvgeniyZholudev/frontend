import {Component, OnInit} from '@angular/core';
import {Subscript} from '../model/subscript';
import {SubscriptService} from '../service/subscriptService/subscript.service';
import {Ng4LoadingSpinnerService} from 'ng4-loading-spinner';

@Component({
  selector: 'app-subscript',
  templateUrl: './subscript.component.html',
  styleUrls: ['./subscript.component.css']
})
export class SubscriptComponent implements OnInit {
  public subscripts: Subscript[];

  constructor(private subscriptService: SubscriptService, private loadingService: Ng4LoadingSpinnerService) {
  }

  ngOnInit() {
    this.loadSubscripts();
  }

  private loadSubscripts(): void {
    this.loadingService.show();
    this.subscriptService.getSubscripts().subscribe(data => {
      this.subscripts = data;
    });
    this.loadingService.hide();
  }

}
