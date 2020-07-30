import { Injectable } from '@angular/core';
import { HabitatModel, getEmptyHabitat } from '../models/HabitatModel';

@Injectable({
  providedIn: 'root'
})
export class HabitatService {

  habitatInfos = new Array<HabitatModel>();

  constructor() {
    this.generateHabitatInfos();
  }

  getHabitats(): HabitatModel[] {
    return this.habitatInfos;
  }

  generateHabitatInfos() {
    const boatHabitat = getEmptyHabitat();
    boatHabitat.topPositionRatio = 0.463;
    boatHabitat.leftPositionRatio = 0.19;
    boatHabitat.heightRatio = 0.125;
    boatHabitat.widthRatio = 0.145;
    boatHabitat.image = '../assets/images/boat.jpg';
    boatHabitat.title = 'Unmaintained/uncover boats are perfect mosquitoes breeding ground.';
    boatHabitat.description = 'Boats are like bathtub, water accumalte in them but doesn\'t '
    + 'drain. Puddle inside boats are perfect place for mosquitoes to breed.';
    boatHabitat.recommendations = 'Old boats should be discarded or donated. Boat covers need '
     + 'to be replaced when holes appears. Boats should be regularly checked for standing water.';
    this.habitatInfos.push(boatHabitat);

    const gutterHabitat = getEmptyHabitat();
    gutterHabitat.topPositionRatio = 0.73;
    gutterHabitat.leftPositionRatio = 0.0;
    gutterHabitat.heightRatio = 0.211;
    gutterHabitat.widthRatio = 0.125;
    gutterHabitat.image = '../assets/images/gutter.jpg';
    gutterHabitat.title = 'Clogged gutter boats are potential mosquitoes breeding ground.';
    gutterHabitat.description = 'If your gutter don\'t drain correctly water can stay '
    +  'stagnate for days and become a breeding ground.';
    gutterHabitat.recommendations = 'Gutter should be regularly inspected for potential clogged. '
    + 'Installing or fixing gutter cover reduce the chance of the gutter becoming a problem.';
    this.habitatInfos.push(gutterHabitat);

    const tireHabitat = getEmptyHabitat();
    tireHabitat.topPositionRatio = 0.487;
    tireHabitat.leftPositionRatio = 0.851;
    tireHabitat.heightRatio = 0.1;
    tireHabitat.widthRatio = 0.074;
    tireHabitat.image = '../assets/images/tire.jpg';
    tireHabitat.title = 'Tires store outside are a perfect place for rain water to seat for days.';
    tireHabitat.description = 'If water form puddle inside the tires mosquitoes will use you it and breed.';
    tireHabitat.recommendations = 'Tires should get discarded and not store outside. '
    + 'If they are part of the landscape make holes inside them so they can drain.';
    this.habitatInfos.push(tireHabitat);

    const leakHabitat = getEmptyHabitat();
    leakHabitat.topPositionRatio = 0.555;
    leakHabitat.leftPositionRatio = 0.708;
    leakHabitat.heightRatio = 0.089;
    leakHabitat.widthRatio = 0.075;
    leakHabitat.image = '../assets/images/hose.jpg';
    leakHabitat.title = 'Leaky faucet create puddle perfect for mosquitoes.';
    leakHabitat.description = 'Leaky faucet create permanent small puddle that mosquitoes use to lay their eggs.';
    leakHabitat.recommendations = 'Fixing a leaky faucet will remove potential breeding ground '
    + 'and also save water!';
    this.habitatInfos.push(leakHabitat);

    const bowlHabitat = getEmptyHabitat();
    bowlHabitat.topPositionRatio = 0.87;
    bowlHabitat.leftPositionRatio = 0.445;
    bowlHabitat.heightRatio = 0.089;
    bowlHabitat.widthRatio = 0.125;
    bowlHabitat.image = '../assets/images/pet-bowl.jpg';
    bowlHabitat.title = 'outside water bowl for pets are also a potential breeding ground.';
    bowlHabitat.description = 'Water bowl for pets can stay outside for days and get refill by rain.';
    bowlHabitat.recommendations = 'Flip bowl upside-down when they are not in use and store them inside.'
    this.habitatInfos.push(bowlHabitat);

    const birdBathHabitat = getEmptyHabitat();
    birdBathHabitat.topPositionRatio = 0.626;
    birdBathHabitat.leftPositionRatio = 0.296;
    birdBathHabitat.heightRatio = 0.194;
    birdBathHabitat.widthRatio = 0.139;
    birdBathHabitat.image = '../assets/images/bird-bath.jpg';
    birdBathHabitat.title = 'Bird baths and pot saucer are perfect ground for mosquitoes to breed.';
    birdBathHabitat.description = 'Water in bird bath can stay standing for multiple days. It is the same for pot saucer '
    + 'that harbor standing water for days. These are a perfect environment for mosquitoes.';
    birdBathHabitat.recommendations = 'Empty the bird bath every 2-3 days and replace the water with fresh one.' 
    + 'Remove excess water from pot saucer or remove saucer and let the water drain.'
    this.habitatInfos.push(birdBathHabitat);

    const pondHabitat = getEmptyHabitat();
    pondHabitat.topPositionRatio = 0.641;
    pondHabitat.leftPositionRatio = 0.838;
    pondHabitat.heightRatio = 0.125;
    pondHabitat.widthRatio = 0.143;
    pondHabitat.image = '../assets/images/pond-2.jpg';
    pondHabitat.title = 'Ponds are not always a mosquitoe breeding ground.';
    pondHabitat.description = 'Ponds are usually a problem if they do not contain fish or other animal that eat insect larvaes. ' 
    +'Bigger ponds that contain multiple animals usually regulate the insect larvae by themself.' ;
    pondHabitat.recommendations = 'If the pond doesn\'t have fishes you can buy larvacide and treat your pond regularly.'
    this.habitatInfos.push(pondHabitat);

    const dirtyPoolHabitat = getEmptyHabitat();
    dirtyPoolHabitat.topPositionRatio = 0.91;
    dirtyPoolHabitat.leftPositionRatio = 0.79;
    dirtyPoolHabitat.heightRatio = 0.085;
    dirtyPoolHabitat.widthRatio = 0.19;
    dirtyPoolHabitat.image = '../assets/images/pool-dirty.jpg';
    dirtyPoolHabitat.title = 'Unmaintained pool can be a major mosquitoe reservoir.';
    dirtyPoolHabitat.description = 'Dirty/unmaintained pool can become a massive breeding ground for mosquitoes producing thousand of them.';
    dirtyPoolHabitat.recommendations = 'Unused pool should be drain and cover to avoid water from rain to accumulate.'
    this.habitatInfos.push(dirtyPoolHabitat);

    const trashHabitat = getEmptyHabitat();
    trashHabitat.topPositionRatio = 0.48;
    trashHabitat.leftPositionRatio = 0.053;
    trashHabitat.heightRatio = 0.12;
    trashHabitat.widthRatio = 0.11;
    trashHabitat.image = '../assets/images/trash.jpg';
    trashHabitat.title = 'Trash that are left open can become a problem.';
    trashHabitat.description = 'Trashes are usually dirty and attract flies and other insects. If they are left open they can also become a breeding ground for mosquitoes.';
    trashHabitat.recommendations = 'Make sure to keep your trash close and replace them if they are brocken.'
    this.habitatInfos.push(trashHabitat);

    const toysHabitat = getEmptyHabitat();
    toysHabitat.topPositionRatio = 0.813;
    toysHabitat.leftPositionRatio = 0.708;
    toysHabitat.heightRatio = 0.085;
    toysHabitat.widthRatio = 0.12;
    toysHabitat.image = '../assets/images/toys.jpg';
    toysHabitat.title = 'Toys left outside can accumulate water.';
    toysHabitat.description = 'Toys can stay outside for long period and can be used as a breedign ground for mosquitoes when they accumulate water from rains.';
    toysHabitat.recommendations = 'Put away the toys that can accumulate water or empty them regularly.'
    this.habitatInfos.push(toysHabitat);

    const watercanHabitat = getEmptyHabitat();
    watercanHabitat.topPositionRatio = 0.564;
    watercanHabitat.leftPositionRatio = 0.571;
    watercanHabitat.heightRatio = 0.06;
    watercanHabitat.widthRatio = 0.044;
    watercanHabitat.image = '../assets/images/watercan.jpg';
    watercanHabitat.title = 'Watercans and other pots can easily become unnoticed breeding ground.';
    watercanHabitat.description = 'Watercans are made to stay outside and therefore can easily be unnoticed and accumulate rain water.';
    watercanHabitat.recommendations = 'Check if there is water inside regularly and empty them. Try to find a cover place to store them.'
    this.habitatInfos.push(watercanHabitat);
  }
}
