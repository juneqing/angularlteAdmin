import { FieldTypes } from '../../types';
import { ITable } from '../../types';
import { FormField } from '../../types';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css']
})
export class UserPageComponent implements OnInit {
  name: string = '用户管理';
  model: string = 'userModel';
  fields: FormField[] = [
    { key: '_id', label: '_id', type: FieldTypes.String },
    { key: 'nickname', label: '昵称', type: FieldTypes.String },
    { key: 'createDt', label: '注册时间', type: FieldTypes.Date, sortable: true },
    { key: 'sex', label: '性别', type: FieldTypes.String },
    { key: 'todayStudent', label: '今日收徒', type: FieldTypes.Number },
    { key: 'todayMoney', label: '今日收益', type: FieldTypes.Money },
    { key: 'historyMoney', label: '历史收益', type: FieldTypes.Money },
    { key: 'totalMoney', label: '当前余额', type: FieldTypes.Money }
  ];
  oneActions = [
    // { name: '选中', callback: (item) => console.log(item) }
  ]
  delable: boolean = false;

  constructor() { }

  ngOnInit() {
  }

}
