import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FactsComponent } from './facts.component';
import { ProviderAst } from '@angular/compiler';
import { CardFactService } from 'src/app/service/card-fact.service';

describe('FactsComponent', () => {
  let component: FactsComponent;
  let fixture: ComponentFixture<FactsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FactsComponent ],
      providers: [CardFactService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FactsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
