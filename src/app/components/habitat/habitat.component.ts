import { Component, OnInit, ViewChild, TemplateRef, ViewContainerRef } from '@angular/core';
import { HabitatService } from 'src/app/service/habitat.service';
import { HabitatModel } from 'src/app/models/HabitatModel';

@Component({
  selector: 'app-habitat',
  templateUrl: './habitat.component.html',
  styleUrls: ['./habitat.component.scss']
})
export class HabitatComponent implements OnInit {

  habitatInfos: HabitatModel[];
  modalInfo: HabitatModel;
  opened = false;

  constructor(private habitatService: HabitatService) {
  }

  ngOnInit(): void {
    this.habitatInfos = this.habitatService.getHabitats();
  }

  determineVerticalPosition(ratio: number): number {
    return this.calculateHeightOfPicture(window.innerWidth) * ratio;
  }

  determineHorizontalPosition(ratio: number): number {
    return window.innerWidth * ratio;
  }

  calculateHeightOfPicture(width: number): number {
    return width / 1.404;
  }

  onOrientationChange() {
    console.log('width ' + window.innerWidth);
    console.log('height ' + window.innerWidth / 1.404);
  }

  onResize() {
    // this somehow trigger determineLeft position and top position function?
    // if it is not there is doesn't work.
    console.log('width ' + window.innerWidth);
    console.log('height ' + window.innerWidth / 1.404);
  }

  onOpenModal(index: number) {
    console.log(this.modalInfo);
    console.log(index);
    this.modalInfo = this.habitatInfos[index];
    console.log(this.modalInfo);
    this.opened = true;
  }

  onCloseModal() {
    this.opened = false;
  }
}
