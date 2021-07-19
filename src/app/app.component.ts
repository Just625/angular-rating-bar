import {Component} from '@angular/core';
import {IRatingUnit} from './irating-unit';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-rating-bar';
  ratingUnits: IRatingUnit[] = [
    {
      value: 1,
      color: '#9E9E9E'
    },
    {
      value: 2,
      color: '#9E9E9E'
    },
    {
      value: 3,
      color: '#9E9E9E'
    }, {
      value: 4,
      color: '#9E9E9E'
    }, {
      value: 5,
      color: '#9E9E9E'
    }, {
      value: 6,
      color: '#9E9E9E'
    }, {
      value: 7,
      color: '#9E9E9E'
    }, {
      value: 8,
      color: '#9E9E9E'
    }, {
      value: 9,
      color: '#9E9E9E'
    }, {
      value: 10,
      color: '#9E9E9E'
    },
  ];
}
