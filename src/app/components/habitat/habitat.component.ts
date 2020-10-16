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
  currentHabitat: HabitatModel[];
  modalInfo: HabitatModel;
  opened = false;

  constructor(private habitatService: HabitatService) {
  }

  ngOnInit(): void {
    this.habitatInfos = this.habitatService.getHabitats();
    this.currentHabitat = this.calculatePointsLocation(this.habitatInfos);
  }

  onResize() {
    this.currentHabitat = this.calculatePointsLocation(this.habitatInfos);
    console.log('BBBBBBBBBBB');
  }

  onOpenModal(index: number) {
    this.modalInfo = this.habitatInfos[index];
    this.opened = true;
  }

  onCloseModal() {
    this.opened = false;
  }

  private calculatePointsLocation(habitats: HabitatModel[] ): HabitatModel[] {
    const currentHabitat = [];
    for (let i = 0; i < habitats.length; i++) {
      const newHabitat = JSON.parse(JSON.stringify(habitats[i]));
      newHabitat.widthRatio = this.determineHorizontalPosition(newHabitat.widthRatio);
      newHabitat.heightRatio = this.determineVerticalPosition(newHabitat.heightRatio);
      newHabitat.leftPositionRatio = this.determineHorizontalPosition(newHabitat.leftPositionRatio);
      newHabitat.topPositionRatio = this.determineVerticalPosition(newHabitat.topPositionRatio);

      currentHabitat.push(newHabitat);
    }
    return currentHabitat;
  }

  private determineVerticalPosition(ratio: number): number {
    return this.calculateHeightOfPicture(window.innerWidth) * ratio;
  }

  private determineHorizontalPosition(ratio: number): number {
    return window.innerWidth * ratio;
  }

  private calculateHeightOfPicture(width: number): number {
    return width / 1.404;
  }
}
