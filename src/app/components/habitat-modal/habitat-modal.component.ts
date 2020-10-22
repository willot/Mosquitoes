import {Component, OnInit, Input, Output, EventEmitter, OnDestroy} from '@angular/core';
import { HabitatModel } from 'src/app/models/HabitatModel';

@Component({
  selector: 'app-habitat-modal',
  templateUrl: './habitat-modal.component.html',
  styleUrls: ['./habitat-modal.component.scss']
})
export class HabitatModalComponent implements OnInit, OnDestroy {

  @Input()
  info: HabitatModel;

  @Output()
  close = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
    document.body.classList.add('no-scroll');
  }

  ngOnDestroy(): void {
    document.body.classList.remove('no-scroll');
  }

  closeModal() {
    this.close.emit();
  }
}
