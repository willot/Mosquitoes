import { Component, OnInit } from '@angular/core';
import { CardFactService } from 'src/app/service/card-fact.service';
import { CardFactModel } from 'src/app/models/CardFactModel';

@Component({
  selector: 'app-facts',
  templateUrl: './facts.component.html',
  styleUrls: ['./facts.component.scss']
})
export class FactsComponent implements OnInit {

  listOfFacts: Array<CardFactModel>;
  constructor( private factService: CardFactService) { }

  ngOnInit(): void {
    this.listOfFacts = this.factService.getCardFactsData();
  }

  generateId(title: string): string {
    return title.replace(new RegExp(' ', 'g'), '-');
  }
}
