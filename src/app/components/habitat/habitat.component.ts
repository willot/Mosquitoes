import {Component, OnInit, ViewChild, TemplateRef, ViewContainerRef, AfterViewInit, AfterViewChecked} from '@angular/core';
import { HabitatService } from 'src/app/service/habitat.service';
import { HabitatModel } from 'src/app/models/HabitatModel';

@Component({
  selector: 'app-habitat',
  templateUrl: './habitat.component.html',
  styleUrls: ['./habitat.component.scss']
})
export class HabitatComponent implements OnInit, AfterViewInit, AfterViewChecked {

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

  ngAfterViewInit() {
    // this.currentHabitat = this.calculatePointsLocation(this.habitatInfos);
    console.log('Afterviewinit');
    console.log('width ' + window.innerWidth);
    console.log('height ' + window.innerWidth / 1.404);
  }

  ngAfterViewChecked() {
    console.log('AfterViewChecked');
    console.log('width ' + window.innerWidth);
    console.log('height ' + window.innerWidth / 1.404);
  }

  onResize() {
    // @ts-ignore
    declare var $: any;
    const width = $(window).width();
    console.log('JQUERY ' + width);

    console.log('width ' + window.innerWidth);
    console.log('height ' + window.innerWidth / 1.404);
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
    // @ts-ignore
    declare var $: any;
    const width = $(window).width();

    // let width1 = screen.width;

    return this.calculateHeightOfPicture(width) * ratio;
  }

  private determineHorizontalPosition(ratio: number): number {
    // @ts-ignore
    declare var $: any;
    const width = $(window).width();
    return width * ratio;
  }

  private calculateHeightOfPicture(width: number): number {
    return width / 1.404;
  }
}
