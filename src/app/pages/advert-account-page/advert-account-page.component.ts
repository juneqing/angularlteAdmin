import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../../services/config.service';
import { Types } from '../../types/types';

@Component({
  selector: 'app-advert-account-page',
  templateUrl: './advert-account-page.component.html',
  styleUrls: ['./advert-account-page.component.css']
})
export class AdvertAccountPageComponent implements OnInit {
  step: number = 0;
  advert: Types.Advert;
  // selectedTaskTag = { name: '' }
  constructor(public config: ConfigService) {
    this.advert = this.config.advert;
  }

  ngOnInit() {
  }

}
