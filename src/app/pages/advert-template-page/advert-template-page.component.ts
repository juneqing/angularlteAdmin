import { ConfigService } from '../../services/config.service';
import { Component, OnInit } from '@angular/core';
import { Types } from '../../types';

@Component({
  selector: 'app-advert-template-page',
  templateUrl: './advert-template-page.component.html',
  styleUrls: ['./advert-template-page.component.css']
})
export class AdvertTemplatePageComponent implements OnInit {
  step = 0;
  selectedTaskTag;
  taskTags = [];
  constructor() { }

  ngOnInit() {
  }

}
