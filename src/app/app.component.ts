import { ConfigService } from './services/config.service';
import { constructDependencies } from '@angular/core/src/di/reflective_provider';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(public config: ConfigService) {
   let isAdmin = !!this.config.admin
   let isAdvert =!!this.config.advert;
    if(isAdmin || isAdvert){
      if(isAdmin){this.config.router.navigateByUrl('/admin')}
      if(isAdvert){this.config.router.navigateByUrl('/advert')}
    }else{
      this.config.router.navigateByUrl('/login')
    }

  }
  
  

}
