import { Component, OnInit } from '@angular/core';
import { LinkService } from 'src/app/service/link-service';
import { LinkModel } from 'src/app/models/LinkModel';
import { element } from 'protractor';

@Component({
  selector: 'app-links',
  templateUrl: './links.component.html',
  styleUrls: ['./links.component.scss']
})
export class LinksComponent implements OnInit {

  links: LinkModel[];
  constructor(private linkService: LinkService) { }

  ngOnInit(): void {
    this.links = this.linkService.getLinks();
  }

  getSections(): Set<string> {
    const sections = new Set<string>();
    this.links.forEach( link => {
      sections.add(link.section);
    });
    return sections;
  }
}
