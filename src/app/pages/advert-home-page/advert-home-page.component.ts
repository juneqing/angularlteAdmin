import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-advert-home-page',
  templateUrl: './advert-home-page.component.html',
  styleUrls: ['./advert-home-page.component.css']
})
export class AdvertHomePageComponent implements OnInit {
  now = new Date();
  step = 0;
  constructor() { }

  ngOnInit() {
  }

}
