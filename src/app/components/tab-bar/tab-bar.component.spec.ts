import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TabBarComponent } from './tab-bar.component';
import { TabService } from 'src/app/service/tab.service';

describe('TabBarComponent', () => {
  let component: TabBarComponent;
  let fixture: ComponentFixture<TabBarComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TabBarComponent ],
      providers: [ TabService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
