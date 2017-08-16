import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-advert-sidebar',
  templateUrl: './advert-sidebar.component.html',
  styleUrls: ['./advert-sidebar.component.css']
})
export class AdvertSidebarComponent implements OnInit {
  selectedTab: string = "all";
  constructor() { }

  ngOnInit() {
  }

}
