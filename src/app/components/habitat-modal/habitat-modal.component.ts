import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { HabitatModel } from 'src/app/models/HabitatModel';

@Component({
  selector: 'app-habitat-modal',
  templateUrl: './habitat-modal.component.html',
  styleUrls: ['./habitat-modal.component.scss']
})
export class HabitatModalComponent implements OnInit {

  @Input()
  info: HabitatModel;

  @Output()
  close = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  closeModal() {
    this.close.emit();
  }
}
