import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../../services/config.service';
import { Types } from '../../types/types';

@Component({
  selector: 'app-main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.css']
})
export class MainHeaderComponent implements OnInit {

  constructor(public config: ConfigService) { }
  signOut() {
    localStorage.clear();
    this.config.router.navigateByUrl('/login');
  }
  ngOnInit() {
  }

}
