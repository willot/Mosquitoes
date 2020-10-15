import { TestBed } from '@angular/core/testing';

import { CardFactService } from './card-fact.service';

describe('CardFactService', () => {
  let service: CardFactService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CardFactService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
