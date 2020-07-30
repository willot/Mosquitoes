import { Injectable } from '@angular/core';
import { CardFactModel, getEmptyCardFact } from '../models/CardFactModel';
import { generate } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CardFactService {

  cardFacts: Array<CardFactModel> = [];
  constructor() {
    this.generateCardFacts();
   }

   generateCardFacts() {
    const firstCard = getEmptyCardFact();
    firstCard.title = 'Only female mosquitoes bite';
    firstCard.image = '../assets/images/Mosquito_gender_en.svg';
    firstCard.imageAltText = 'male vs female mosquitoes';
    firstCard.text1 = 'Only the female mosquitoes bite, they use the blood as their energy source to produce eggs.';
    firstCard.text2 = 'You can differenciate males from female by looking at their antennas. Female have bare one. ' +
    'and males have more bushier antennas';
    firstCard.text3 = 'See image to see the different type of antennas.';
    this.cardFacts.push(firstCard);


    const secondCard = getEmptyCardFact();
    secondCard.title = 'Most mosquitoes don\'t travel far';
    secondCard.image = '../assets/images/tiger-mosquito.jpg';
    secondCard.imageAltText = '';
    secondCard.text1 = 'Most mosquitoes travel between 1-3 miles but numerous species travel less than 300 yards.';
    secondCard.text2 = 'Tiger mosquitoes are not good fliers and stay around their breeding ground.';
    secondCard.text3 = 'Therefore limiting habitat around your house can have sugnificant effect on the number of ' +
     'mosquitoes around your house.';
    this.cardFacts.push(secondCard);

    const thirdCard = getEmptyCardFact();
    thirdCard.title = 'Different mosquitoes carry different disease';
    thirdCard.image = '../assets/images/virus.jpg';
    thirdCard.imageAltText = 'West Nile Virus';
    thirdCard.text1 = 'Not every mosquitoes is a potential carriers for disease. 43 species of mosquitoes are known ' +
    'potential transmitter of the West Nile Virus.' ;
    thirdCard.text2 = 'But there are only 2 species of insect in the US that can transmit Zika virus (Ae. aegypti ' +
    'and Ae. albopictus).';
    thirdCard.text3 = 'Other example of disease transmitted by mosquitoes in the US include: Eastern equine encephalitis ' +
    'and California group of encephalitis.';
    this.cardFacts.push(thirdCard);

    const fourthCard = getEmptyCardFact();
    fourthCard.title = 'Not every mosquitoes species bite human';
    fourthCard.image = '../assets/images/bird.jpg';
    fourthCard.imageAltText = 'bird';
    fourthCard.text1 = 'Some species of insect feed exclusively on birds or on specific type of mammals.' ;
    fourthCard.text2 = 'Other species are more generalist and feed on a wider variety of hosts.';
    fourthCard.text3 = 'Strain ressource can affect which host mosquitoes use.';
    this.cardFacts.push(fourthCard);
   }

   getCardFactsData(): Array<CardFactModel> {
     return this.cardFacts;
   }
}
