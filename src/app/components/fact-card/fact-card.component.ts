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

  positionLeft(): boolean {
    return this.index % 2 === 0 ? true : false;
  }
}
