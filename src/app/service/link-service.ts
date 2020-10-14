import { Injectable } from '@angular/core';
import { LinkModel, getEmptyLinkModel } from '../models/LinkModel';

@Injectable({
  providedIn: 'root'
})
export class LinkService {

  links = Array<LinkModel>();

  constructor() {
    this.generateLinkList();
  }

  getLinks(): Array<LinkModel> {
    return this.links;
  }

  generateLinkList() {
    const mosquitoEnv = 'Mosquito Control';
    const mosquitoBitePrev = 'Mosquito Bites prevention';
    const mosquitoDiseases = 'Mosquito transmitted diseases';

    const firstLink = getEmptyLinkModel();
    firstLink.section = mosquitoBitePrev;
    firstLink.linkName = 'Center For Disease Control';
    firstLink.linkUrl = 'https://www.cdc.gov/features/stopmosquitoes/index.html';
    firstLink.linkDescriptiom = 'Series of advices to prevent mosquitoes bites';
    this.links.push(firstLink);

    const secondLink = getEmptyLinkModel();
    secondLink.section = mosquitoEnv;
    secondLink.linkName = 'EPA';
    secondLink.linkUrl = 'https://www.epa.gov/mosquitocontrol';
    secondLink.linkDescriptiom = 'Series of articles on mosquitoes control and prevention';
    this.links.push(secondLink);

    const thirdLink = getEmptyLinkModel();
    thirdLink.section = mosquitoDiseases;
    thirdLink.linkName = 'Michigan Government';
    thirdLink.linkUrl = 'https://www.michigan.gov/emergingdiseases';
    thirdLink.linkDescriptiom = 'Series of articles on insect transmitted diseases';
    this.links.push(thirdLink);

    const fourthLink = getEmptyLinkModel();
    fourthLink.section = mosquitoDiseases;
    fourthLink.linkName = 'Michigan State University';
    fourthLink.linkUrl = 'https://www.canr.msu.edu/pestid/resources/insects-and-arthropods/';
    fourthLink.linkDescriptiom = 'Series of articles on insect identification';
    this.links.push(fourthLink);

    const fithLink = getEmptyLinkModel();
    fithLink.section = mosquitoDiseases;
    fithLink.linkName = 'Midland county';
    fithLink.linkUrl = 'https://co.midland.mi.us/MosquitoControl/MosquitoborneDiseasesinMichigan.aspx';
    fithLink.linkDescriptiom = 'Information on mosquitoes born diseases in MI';
    this.links.push(fithLink);

    const sixthLink = getEmptyLinkModel();
    sixthLink.section = mosquitoDiseases;
    sixthLink.linkName = 'Oakland county';
    sixthLink.linkUrl = 'https://www.oakgov.com/health/information/Pages/West-Nile-Virus.aspx';
    sixthLink.linkDescriptiom = 'Information on West Nile Virus in MI and Oakland county';
    this.links.push(sixthLink);

    const seventhLink = getEmptyLinkModel();
    seventhLink.section = mosquitoBitePrev;
    seventhLink.linkName = 'Cincinnati children';
    seventhLink.linkUrl = 'https://www.cincinnatichildrens.org/news/release/2014/insect-safety-tip-sheet-06-25-2014';
    seventhLink.linkDescriptiom = 'Tips to proctect children from mosquitoes and ticks';
    this.links.push(seventhLink);

    const eightLink = getEmptyLinkModel();
    eightLink.section = mosquitoBitePrev;
    eightLink.linkName = 'Consumer report';
    eightLink.linkUrl = 'https://www.consumerreports.org/insect-repellent/insect-repellent-for-kids/';
    eightLink.linkDescriptiom = 'Information about mosquito repelent for kids';
    this.links.push(eightLink);

    const ninthLink = getEmptyLinkModel();
    ninthLink.section = mosquitoBitePrev;
    ninthLink.linkName = 'Center For Disease Control';
    ninthLink.linkUrl = 'https://www.atsdr.cdc.gov/toxprofiles/tp185.pdf';
    ninthLink.linkDescriptiom = 'Toxicology report on DEET';
    this.links.push(ninthLink);

  }
}
