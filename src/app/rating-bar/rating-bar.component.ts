import {Component, Input, OnInit} from '@angular/core';
import {IRatingUnit} from '../irating-unit';

@Component({
  selector: 'app-rating-bar',
  templateUrl: './rating-bar.component.html',
  styleUrls: ['./rating-bar.component.css']
})
export class RatingBarComponent implements OnInit {
  @Input()
  ratingUnits: IRatingUnit[];
  currentRatingUnit = 0;

  changeCurrentRatingUnit(value: number) {
    this.currentRatingUnit = value;
    this.resetColor();
    this.changeColorRatingUnits();
  }

  changeColorRatingUnits() {
    for (let i = 0; i < this.currentRatingUnit; i++) {
      this.ratingUnits[i].color = '#FF1493';
    }
  }

  resetColor() {
    for (const unit of this.ratingUnits) {
      unit.color = '#9E9E9E';
    }
  }

  constructor() {
  }

  ngOnInit() {
  }

}
