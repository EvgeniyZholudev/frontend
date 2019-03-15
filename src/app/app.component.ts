import { Component } from '@angular/core';

class Subscript {
  id: number;
  name: string;
  discription: string;
  price: number;
  time: number;
  constructor(id: number, name: string, discription: string, price: number, time: number) {
    this.id = id;
    this.name = name;
    this.discription = discription;
    this.price = price;
    this.time = time;
}
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  subscripts: Subscript[] =
    [
      {id: 1, name: 'Rweghjng', discription: 'tyuiokjmnbsef', price: 20, time: 7},
      {id: 2, name: 'ljkmhgnf', discription: 'fgdtyjghngb', price: 50, time: 2},
      {id: 3, name: ',mnbvfdfsrtyuj', discription: '[poiuytresdxcvbnm,l;oiuyhtgfd', price: 4, time: 10},
      {id: 4, name: '[poiuytrewasdfghjkl,mnb', discription: '[poiuytrewsdfghjkl;.,mnbvcsertyuiolkmnbvdertyuikjhg', price: 100, time: 30}
  ];
}
