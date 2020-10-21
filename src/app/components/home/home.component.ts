import {Component, OnInit} from '@angular/core';
import {TabService} from 'src/app/service/tab.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private tabService: TabService) {
  }

  ngOnInit(): void {
  }
  onActionCallClicked() {
    this.tabService.tabClicked('habitat');
  }
}
