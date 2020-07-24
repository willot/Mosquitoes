import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FactCardComponent } from './fact-card.component';
import { getEmptyCardFact } from 'src/app/models/CardFactModel';

describe('FactCardComponent', () => {
  let component: FactCardComponent;
  let fixture: ComponentFixture<FactCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FactCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FactCardComponent);
    component = fixture.componentInstance;
    component.card = getEmptyCardFact();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
