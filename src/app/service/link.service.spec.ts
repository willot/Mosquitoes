import { TestBed } from '@angular/core/testing';
import { LinkService } from './link-service';

describe('LinkServiceService', () => {
  let service: LinkService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LinkService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
