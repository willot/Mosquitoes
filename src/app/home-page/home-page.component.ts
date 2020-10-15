import { Component, OnInit } from '@angular/core';
import { TabService } from '../service/tab.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  tabStringName = 'home';
  scrolled = false;
  tabSubscription: Subscription;

  constructor(tabService: TabService) { 
    tabService.tabSubject.subscribe( tab => {
      this.tabStringName = tab;
    })

  }

  ngOnInit(): void {
  }

  ngOnDestroy() {
    this.tabSubscription.unsubscribe();
  }

  tabName(event: string) {
    this.tabStringName = event;
  }

  isCorrectTab(name: string) {
    return name === this.tabStringName;
  }

  callToAction() {
    this.tabStringName = 'habitat';
  }
}
