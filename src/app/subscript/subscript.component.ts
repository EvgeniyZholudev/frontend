import {Component, OnInit} from '@angular/core';
import {Subscript} from '../model/subscript';
import {SubscriptService} from '../service/subscriptService/subscript.service';
import {Subscription} from 'rxjs/internal/Subscription';
import {Ng4LoadingSpinnerService} from 'ng4-loading-spinner';

@Component({
  selector: 'app-subscript-table',
  templateUrl: './subscript.component.html'
})
export class SubscriptComponent implements OnInit {
  subscripts: Subscript[] = [
    {id:  1, name: 'qwe', discription: 'ygdskj', price: 20, time: 7 }
  ];
  subscriptions: Subscription[] = [];
  constructor(private subscriptService: SubscriptService,
              private loadingService: Ng4LoadingSpinnerService) {}
  ngOnInit(): void {
    this.loadSubscripts();
  }
  private loadSubscripts(): void {
    this.loadingService.show();
    this.subscriptions.push(this.subscriptService.getSubscripts().subscribe(subscripts => {
      // Parse json response into local array
      this.subscripts = subscripts as Subscript[];
      this.loadingService.hide();
    }));
  }

}
