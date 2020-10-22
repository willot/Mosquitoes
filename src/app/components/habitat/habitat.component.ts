import {Component, OnInit} from '@angular/core';
import {HabitatService} from 'src/app/service/habitat.service';
import {HabitatModel} from 'src/app/models/HabitatModel';

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
  }

  onOpenModal(index: number) {
    this.modalInfo = this.habitatInfos[index];
    this.opened = true;
    document.body.classList.add('no-scroll');
  }

  onCloseModal() {
    this.opened = false;
    document.body.classList.remove('no-scroll');
  }

  private calculatePointsLocation(habitats: HabitatModel[] ): HabitatModel[] {
    // @ts-ignore
    declare var $: any;
    const windowWidth = $(window).width();

    const currentHabitat = [];
    for (let i = 0; i < habitats.length; i++) {
      const newHabitat = JSON.parse(JSON.stringify(habitats[i]));
      newHabitat.widthRatio = this.determineHorizontalPosition(newHabitat.widthRatio, windowWidth);
      newHabitat.heightRatio = this.determineVerticalPosition(newHabitat.heightRatio, windowWidth);
      newHabitat.leftPositionRatio = this.determineHorizontalPosition(newHabitat.leftPositionRatio, windowWidth);
      newHabitat.topPositionRatio = this.determineVerticalPosition(newHabitat.topPositionRatio, windowWidth);

      currentHabitat.push(newHabitat);
    }
    return currentHabitat;
  }

  private determineVerticalPosition(ratio: number, windowWidth: number): number {
    return this.calculateHeightOfPicture(windowWidth) * ratio;
  }

  private determineHorizontalPosition(ratio: number, windowWidth: number): number {
    return windowWidth * ratio;
  }

  private calculateHeightOfPicture(width: number): number {
    return width / 1.404;
  }
}
