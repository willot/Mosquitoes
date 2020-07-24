import { Component, OnInit, Input } from '@angular/core';
import { CardFactModel } from 'src/app/models/CardFactModel';

@Component({
  selector: 'app-fact-card',
  templateUrl: './fact-card.component.html',
  styleUrls: ['./fact-card.component.scss']
})
export class FactCardComponent implements OnInit {

  @Input()
  card: CardFactModel;

  @Input()
  index: number;

  constructor() { }

  ngOnInit(): void {
  }

  determineBackGroundColor(): string {
    return this.index%2 == 0 ? '#E3E6DA': '#253628';
  }
  determineFontColor(): string {
    return this.index%2 == 0 ? '#253628' :'#E3E6DA';
  }
}
