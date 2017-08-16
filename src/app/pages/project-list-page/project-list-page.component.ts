import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../../services/config.service';
@Component({
  selector: 'app-project-list-page',
  templateUrl: './project-list-page.component.html',
  styleUrls: ['./project-list-page.component.css']
})
export class ProjectListPageComponent implements OnInit {
  projects = [];
  tasks = [];
  pageSize = 0;
  count = 0;
  constructor(public config: ConfigService) { }
  currentPage = 0;

  ngOnInit() {
  }


  async getProjectList() {
    this.projects = await this.config.GetServer('/admin.project.go');

  }

  lessPage() { }
  morePage() { }

}
