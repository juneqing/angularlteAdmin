import { ConfigService } from '../../services/config.service';
import { Component, OnInit } from '@angular/core';
import { Types } from '../../types';

@Component({
  selector: 'app-task-record-list-page',
  templateUrl: './task-record-list-page.component.html',
  styleUrls: ['./task-record-list-page.component.css']
})
export class TaskRecordListPageComponent implements OnInit {
  taskRecords = [];
  currentPage = 0;
  maxPage = 100;
  pages = [''];
  constructor(public config: ConfigService) { this.getTaskRecordList() }

  ngOnInit() {
  }

  async getTaskRecordList() {
    let result = await this.config.GetServer(`/admin.taskRecord.go?page=${this.currentPage}&pageSize=30`);
    this.taskRecords = result.rows;
    this.maxPage = Math.ceil(result.count / 30);
    this.pages = new Array(this.maxPage);
  }
  lessPage() {
    this.currentPage <= 0 ? this.currentPage = 0 : this.currentPage--;
    this.getTaskRecordList();
  }
  morePage() {
    this.currentPage < this.maxPage ? this.currentPage++ : this.currentPage = this.maxPage;
    this.getTaskRecordList();
  }
}
