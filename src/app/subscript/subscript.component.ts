import {Component, OnInit} from '@angular/core';
import {Subscript} from '../model/subscript';

@Component({
  selector: 'app-subscript-table',
  templateUrl: './subscript.component.html'
})
export class SubscriptComponent implements OnInit {
  subscripts: Subscript[] =
    [
      {id: 1, name: 'Rweghjng', discription: 'tyuiokjmnbsef', price: 20, time: 7},
      {id: 2, name: 'ljkmhgnf', discription: 'fgdtyjghngb', price: 50, time: 2},
      {id: 3, name: ',mnbvfdfsrtyuj', discription: '[poiuytresdxcvbnm,l;oiuyhtgfd', price: 4, time: 10},
      {id: 4, name: '[poiuytrewasdfghjkl,mnb', discription: '[poiuytrewsdfghjkl;.,mnbvcsertyuiolkmnbvdertyuikjhg', price: 100, time: 30}
    ];
  ngOnInit(): void {
  }
}
