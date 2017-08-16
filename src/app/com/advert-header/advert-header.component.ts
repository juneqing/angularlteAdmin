import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../../services/config.service';
import { Types } from '../../types/types';
@Component({
  selector: 'app-advert-header',
  templateUrl: './advert-header.component.html',
  styleUrls: ['./advert-header.component.css']
})
export class AdvertHeaderComponent implements OnInit {
  advert: Types.Advert;
  constructor(public config: ConfigService) {
    this.advert = this.config.advert;
  }

  signOut() {
    localStorage.clear();
    this.config.router.navigateByUrl('/login');
  }

  ngOnInit() {
  }

}
