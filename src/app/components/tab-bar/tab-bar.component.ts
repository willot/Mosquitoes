import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { TabService } from 'src/app/service/tab.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-tab-bar',
  templateUrl: './tab-bar.component.html',
  styleUrls: ['./tab-bar.component.scss']
})
export class TabBarComponent implements OnInit {

  tabName = 'home';
  clickedOnFacts = false;
  clickedOnHabitat = false;
  clickedOnLinks = false;
  clickedOnHome = false;
  tabSubscription: Subscription;

  constructor(private tabService: TabService) { 
    this.tabSubscription = tabService.tabSubject.subscribe(tabName =>{
      this.tabName = tabName;
    })
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.tabSubscription.unsubscribe();
  }

  onTabClicked(tab: string) {
    this.determineTabClicked(tab, true);
    this.tabService.tabClicked(tab);
    this.tabName = tab;
    setTimeout(() => {
      this.determineTabClicked(tab, false);
    }, 4000);
  }

  determineTabClicked( name: string, state: boolean) {
    if (name === 'facts') {
      this.clickedOnFacts = state;
    } else if (name === 'habitat') {
      this.clickedOnHabitat = state;
    } else if (name === 'links') {
      this.clickedOnLinks = state;
    } else if (name === 'home') {
      this.clickedOnHome = state;
    }
  }
}
