import { FieldTypes } from '../../types';
import { ITable } from '../../types';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-page',
  templateUrl: './task-page.component.html',
  styleUrls: ['./task-page.component.css']
})
export class TaskPageComponent implements OnInit {
  taskTags = [];
  taskTable: ITable = {
    name: '',
    model: 'taskModel',
    query: { key: 'task', value: '' },
    fields: [
      { key: 'title', label: '名字', type: FieldTypes.String },
    ]
  }
  constructor() { }

  ngOnInit() {
  }

}
