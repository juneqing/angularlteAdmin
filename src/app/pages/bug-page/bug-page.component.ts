import { Component, OnInit } from '@angular/core';
import { FormField, FieldTypes } from '../../types';
@Component({
  selector: 'app-bug-page',
  templateUrl: './bug-page.component.html',
  styleUrls: ['./bug-page.component.css']
})
export class BugPageComponent implements OnInit {
  bug = {
    model: 'taskModel',
    tableName: 'Bug管理',
  }
  bugFields: FormField[] = [
    { key: 'title', label: '任务题目', type: FieldTypes.String },
    { key: 'createDt', label: '发布时间', type: FieldTypes.Date, editable: false, createable: false, sortable: true, desc: true },
    { key: 'fee', label: '发布金额', type: FieldTypes.Money },
    { key: 'totalMoney', label: '余额', type: FieldTypes.Money },
    { key: 'shareMoney', label: '分享金额', type: FieldTypes.Money },
    { key: 'websiteUrl', label: '网址', type: FieldTypes.Url },
    { key: 'imageUrl', label: '预览', type: FieldTypes.Image }
  ];

  checkOne(eventObj: { name: string, item: any }) {
    console.log(eventObj);

  }


  constructor() { }

  ngOnInit() {
  }

}
