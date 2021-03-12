import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { HabitatModalComponent } from './habitat-modal.component';
import { HabitatService } from 'src/app/service/habitat.service';
import { getEmptyHabitat } from 'src/app/models/HabitatModel';

describe('HabitatModalComponent', () => {
  let component: HabitatModalComponent;
  let fixture: ComponentFixture<HabitatModalComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ HabitatModalComponent ],
      providers: [ HabitatService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HabitatModalComponent);
    component = fixture.componentInstance;
    component.info = getEmptyHabitat();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
