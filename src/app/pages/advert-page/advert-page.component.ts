import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../../services/config.service';
@Component({
  selector: 'app-advert-page',
  templateUrl: './advert-page.component.html',
  styleUrls: ['./advert-page.component.css']
})
export class AdvertPageComponent implements OnInit {

  constructor(public config: ConfigService) {
    let isLogin = this.checkAdvertLogin();
    if (!isLogin) {
      this.config.router.navigateByUrl('/login');
    }
  }

  ngOnInit() {
  }

  checkAdvertLogin(): boolean {
    return !!this.config.advert;

  }

}
